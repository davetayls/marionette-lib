'use strict'

_ = require 'underscore'
BaseController = require './Base'
app = require 'app'

class module.exports extends BaseController
  constructor: (options = {}) ->
    @region = options.region or app.request "default:region"
    @_instance_id = _.uniqueId("controller")
    app.execute "register:instance", @, @_instance_id
    if @background then app.execute 'blur:background'
    super

  close: ->
    console.log 'closing', @
    app.execute "unregister:instance", @, @_instance_id
    super

  show: (view, options = {}) ->
    _.defaults options,
      loading: false
      immediate: false
      region: @region

    ## allow us to pass in a controller instance instead of a view
    ## if controller instance, set view to the mainView of the controller
    view = if view.getMainView then view.getMainView() else view
    if not view
      throw new Error("getMainView() did not return a view instance or #{view?.constructor?.name} is not a view instance")

    @_setMainView view
    @_manageView view, options

  _setMainView: (view) ->
    ## the first view we show is always going to become the mainView of our
    ## controller (whether its a layout or another view type).  So if this
    ## *is* a layout, when we show other regions inside of that layout, we
    ## check for the existance of a mainView first, so our controller is only
    ## closed down when the original mainView is closed.

    return if @_mainView
    @_mainView = view
    if view
      @listenTo view, "close", @close

  _manageView: (view, options) ->
    if options.loading or options.fetch
      if _.isBoolean(options.loading) then options.loading = {}
      _.defaults options.loading,
        loadingHeader: _.result @, 'loadingHeader'
        loadingBody: _.result @, 'loadingBody'
      ## show the loading view
      app.execute "show:loading", view, options
    else
      options.region.show view, options.immediate


