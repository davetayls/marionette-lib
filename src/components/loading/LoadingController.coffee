
app = require 'app'
AppController = require '../../controllers/App'
SpinnerView = require '../spinner/SpinnerView'
whenFetched = require '../../utilities/whenFetched'


class LoadingController extends AppController
  initialize: ({ view } = {}) ->
    _.defaults @options,
      loadingType: "spinner"
      debug: false
    @entities = @getOption('entities') or @getEntities(view)
    @loadingView = @getLoadingView()
    @show @loadingView if @loadingView
    unless @options.debug
      @monitorReadyState view, @loadingView

  getLoadingView: ->
    switch @options.loadingType
      when "opacity"
        @region.currentView.$el.css "opacity", 0.5

      when 'spinner'
        loadingView = new SpinnerView()
        loadingView.start()

      else
        throw new Error("Invalid loadingType")

    loadingView

  monitorReadyState: (realView, loadingView) ->
    _viewReady = (errors) =>
      ## ...after the entities are fetched, execute this callback
      if errors and errors.length
        @showError realView, loadingView
      else
        @showRealView realView, loadingView

    if @options.monitorReadyState
      @options.monitorReadyState.call(@, realView, loadingView, _viewReady)
    else
      whenFetched @entities, _viewReady

  showError: (realView, loadingView) ->
    realView.destroy() if realView
    switch @options.loadingType
      when 'spinner'
        loadingView.stop()
      else
        throw new Error('No error handline on loading type')

  showRealView: (realView, loadingView) ->
      # If the region we are trying to insert is not the loadingView then
      # we know the user has navigated to a different page while the loading
      # view was still open. In that case, we know to manually close the original
      # view so its controller is also closed.  We also prevent showing the real
      # view (which would snap the user back to the old view unexpectedly)
      switch @options.loadingType
        when "opacity"
          @region.currentView.$el.removeAttr "style"

        when 'spinner'
          if @region.currentView isnt loadingView and @region._nextView isnt loadingView
            return realView.destroy()

      ## show the real view unless we've set debug in the loading options
      @show realView unless !realView or @options.debug

  getEntities: (view) ->
    ## return the entities manually set during configuration, or just pull
    ## off the model and collection from the view (if they exist)
    _.chain(view).pick("model", "collection").toArray().compact().value()

module.exports = LoadingController
