
$ = require 'jquery'
Backbone = require 'backbone'
_ = require 'underscore'

_sync = Backbone.sync

module.exports = (app) ->
  Backbone.sync = (method, entity, options = {}) ->
    _.defaults options,
      beforeSend: _.bind(beforeSend, entity)
      complete:    _.bind(complete, entity)

    if !entity._fetch and method is "read"
      addFetchPromise(entity, options)

    _sync(method, entity, options)

  beforeSend = ->
    @trigger "sync:start", @

  complete = ->
    @trigger "sync:stop", @

  addFetchPromise = (entity, options) ->
    d = $.Deferred()
    entity._fetch = d.promise()
    _success = options.success
    _error = options.error

    options.success = (resp, status, xhr) ->
      _success.apply @, arguments
      d.resolve
        response: resp
        options: options
        status: if xhr then xhr.status else 0
        failed: false

    options.error = (resp, status) ->
      if resp.status is 0
        entity.trigger 'error:offline'
        app.vent.trigger 'fetch:offline', entity
      else if _.contains [401, 403], resp.status
        entity.trigger 'unauthorised'
        app.vent.trigger 'fetch:unauthorised', entity
      else if Math.floor(resp.status/100) is 5
        entity.trigger 'error:server'
        app.vent.trigger 'fetch:error:server'

      _error.apply @, arguments
      d.resolve
        response: resp
        options: options
        status: resp.status
        failed: true



