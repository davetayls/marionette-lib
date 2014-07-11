
'use strict'

Marionette = require 'backbone.marionette'

class List extends Marionette.CompositeView
  className: -> @name
  behaviors: ->
    Modifiers: {}
  animateOut: (cb) -> cb()

module.exports = List
