
registry = require '../utilities/registry'
Marionette = require 'backbone.marionette'

class BaseController extends Marionette.Controller
  constructor: ->
    @_instance_id = _.uniqueId('controller')
    registry.register(@, @_instance_id)
    super

  destroy: ->
    console.log "destroying", @
    registry.unregister(@, @_instance_id)
    super

  proxyEvents: (instance, prefix) ->
    # Forward all child view events through the parent,
    # prepending "childview:" to the event name
    @listenTo instance, "all", =>
      args = Array::slice.call(arguments)
      rootEvent = args[0]
      if prefix
        args[0] = prefix + ":" + rootEvent
      args.push instance
      @triggerMethod.apply @, args
      return

module.exports = BaseController
