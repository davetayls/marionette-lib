'use strict'

Marionette = require 'backbone.marionette'

class View extends Marionette.View
  className: -> @name
  behaviors: ->
    Modifiers: {}

module.exports = View
