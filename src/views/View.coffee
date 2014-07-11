'use strict'

Marionette = require 'backbone.marionette'

class View extends Marionette.View
  className: -> @name
  behaviours: ->
    Modifiers: {}

module.exports = View
