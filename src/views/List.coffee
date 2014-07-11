
'use strict'

Marionette = require 'backbone.marionette'

class List extends Marionette.CompositeView
  className: -> @name
  behaviours: ->
    Modifiers: {}
  animateOut: (cb) -> cb()

module.exports = List
