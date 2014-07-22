
app = require 'app'
i18n = require 'i18n'
ComponentController = require '../../controllers/Component'
NoticeView = require '../notice/NoticeView'

whenFetched = require '../../utilities/whenFetched'


class LoadingController extends ComponentController
  initialize: (options) ->
    { view, config } = options

    config = if _.isBoolean(config) then {} else config

    _.defaults config,
      loadingType: "spinner"
      loadingHeader: i18n.t('default_loading_header')
      loadingBody: i18n.t('default_loading_body')
      entities: @getEntities(view)
      debug: false

    switch config.loadingType
      when "opacity"
        @region.currentView.$el.css "opacity", 0.5
      when "spinner"
        loadingView = @getLoadingView()
        loadingView.set
          header: config.loadingHeader
          body: config.loadingBody
          canDismiss: true
          buttons: []
          loading: true
        @show loadingView
      else
        throw new Error("Invalid loadingType")

    @monitorReadyState view, loadingView, config

  monitorReadyState: (realView, loadingView, config) ->
    whenFetched config.entities, (errors) =>
      ## ...after the entities are fetched, execute this callback
      if errors.length
        @showError(realView, loadingView, config)
      else
        @showRealView realView, loadingView, config

  showError: (realView, loadingView, config) ->
    realView.close()
    def =
      header: i18n.t('no_server_header')
      body: i18n.t('no_server_header')
      buttons: [new Buttons.StartAgain()]
      canDismiss: true
      loading: false
    loadingView.set def

  showRealView: (realView, loadingView, config) ->
      ## ================================================================ ##
      ## If the region we are trying to insert is not the loadingView then
      ## we know the user has navigated to a different page while the loading
      ## view was still open. In that case, we know to manually close the original
      ## view so its controller is also closed.  We also prevent showing the real
      ## view (which would snap the user back to the old view unexpectedly)
      ## ================================================================ ##
      switch config.loadingType
        when "opacity"
          @region.currentView.$el.removeAttr "style"
        when "spinner"
          if @region.currentView isnt loadingView and @region._nextView isnt loadingView
            return realView.close()

      ## show the real view unless we've set debug in the loading options
      @show realView unless config.debug

  getEntities: (view) ->
    ## return the entities manually set during configuration, or just pull
    ## off the model and collection from the view (if they exist)
    _.chain(view).pick("model", "collection").toArray().compact().value()

  getLoadingView: -> new NoticeView()


app.commands.setHandler "show:loading", (view, options) ->
  new LoadingController
    view: view
    region: options.region
    config: options.loading
