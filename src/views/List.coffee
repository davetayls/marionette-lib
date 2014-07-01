
'use strict'

Marionette = require 'marionette'

class List extends Marionette.CompositeView
  className: -> @name
  animateOut: (cb) -> cb()

module.exports = List
