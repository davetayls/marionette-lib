
_ = require 'underscore'

API =
  _registry: {}

  register: (instance, id) ->
    API._registry ?= {}
    API._registry[id] = instance

  unregister: (instance, id) ->
    delete API._registry[id]

  resetRegistry: ->
    oldCount = @getRegistrySize()
    for key, controller of API._registry
      controller.region.close()

    ret =
      count: @getRegistrySize()
      previous: oldCount
      msg: "There were #{oldCount} controllers in the registry, there are now #{@getRegistrySize()}"

    console.info ret
    ret

  getRegistrySize: ->
    _.size(API._registry)

#app.commands.setHandler "register:instance", (instance, id) ->
#  API.register instance, id if app.environment is "development"
#
#app.commands.setHandler "unregister:instance", (instance, id) ->
#  API.unregister instance, id if app.environment is "development"
#
#app.reqres.setHandler "reset:registry", ->
#  API.resetRegistry()

module.exports = API
