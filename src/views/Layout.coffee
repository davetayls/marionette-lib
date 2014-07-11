
'use strict'

Marionette = require 'backbone.marionette'

class Layout extends Marionette.LayoutView
  className: -> @name
  behaviors: ->
    Modifiers: {}

module.exports = Layout
