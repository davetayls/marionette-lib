
_ = require 'underscore'
Backbone = require 'backbone'

API =
  historyIsStarted: false

  to: (route, options = {}) ->
    Backbone.history.navigate route, options

  getCurrentRoute: ->
    frag = Backbone.history.fragment
    if _.isEmpty(frag) then null else frag

  startHistory: (options) ->
    if Backbone.history
      Backbone.history.start(options)
      API.historyIsStarted = true

module.exports = API
