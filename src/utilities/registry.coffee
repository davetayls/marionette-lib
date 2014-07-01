
_ = require 'underscore'
app = require 'app'

API =

  register: (instance, id) ->
    app._registry ?= {}
    app._registry[id] = instance

  unregister: (instance, id) ->
    delete app._registry[id]

  resetRegistry: ->
    oldCount = @getRegistrySize()
    for key, controller of app._registry
      controller.region.close()

    ret =
      count: @getRegistrySize()
      previous: oldCount
      msg: "There were #{oldCount} controllers in the registry, there are now #{@getRegistrySize()}"

    console.info ret
    ret

  getRegistrySize: ->
    _.size(app._registry)

app.commands.setHandler "register:instance", (instance, id) ->
  API.register instance, id if app.environment is "development"

app.commands.setHandler "unregister:instance", (instance, id) ->
  API.unregister instance, id if app.environment is "development"

app.reqres.setHandler "reset:registry", ->
  API.resetRegistry()

module.exports = API
