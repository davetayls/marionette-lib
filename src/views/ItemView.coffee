
'use strict'

Marionette = require 'backbone.marionette'

class ItemView extends Marionette.ItemView
  className: -> @name
  behaviors: ->
    Modifiers: {}

module.exports = ItemView
