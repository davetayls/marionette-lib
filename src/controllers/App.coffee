'use strict'

_ = require 'underscore'
BaseController = require './Base'
app = require 'app'

class AppController extends BaseController
  constructor: (options = {}) ->
    @_managedRegions = []
    @region = @region or options.region or app.request "default:region"
    super

  show: (view, options = {}) ->
    _.defaults options,
      loading: false   # do not show loading by default
      immediate: false # disable transition between views
      region: @region

    ## allow us to pass in a controller instance instead of a view
    ## if controller instance, set view to the mainView of the controller
    if view.getMainView
      options.controller = view
      options.monitorReadyState = view.getOption('monitorReadyState')
      view = view.getMainView()

    if not view
      throw new Error("getMainView() did not return a view instance or #{view?.constructor?.name} is not a view instance")

    @setMainView view
    @_manageView view, options

    view: view
    options: options

  getMainView: -> @_mainView

  setMainView: (view) ->
    ## the first view we show is always going to become the mainView of our
    ## controller (whether its a layout or another view type).  So if this
    ## *is* a layout, when we show other regions inside of that layout, we
    ## check for the existance of a mainView first, so our controller is only
    ## closed down when the original mainView is closed.

    return if @_mainView
    @_mainView = view
    if view
      @listenTo view, "destroy", @destroy

  _manageRegion: (region) ->
    # Cleanup other regions when this controller is destroyed
    @_managedRegions.push region

  _manageView: (view, options) ->
    if options.loading
      if _.isBoolean(options.loading) then options.loading = {}
      _.defaults options.loading,
        loadingHeader: _.result @, 'loadingHeader'
        loadingBody: _.result @, 'loadingBody'
        monitorReadyState: options.monitorReadyState
      ## show the loading view
      app.execute "show:loading", view, options
    else
      options.region.show view, options.immediate

  destroy: ->
    _.invoke @_managedRegions, 'animateEmpty'
    @_managedRegions = null
    super

module.exports = AppController

