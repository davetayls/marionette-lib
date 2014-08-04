
'use strict'

Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

class ItemView extends Marionette.ItemView
  initialize: ->
    if @defaults and !@getOption('model')
      @model = new Backbone.Model @defaults
    super
  className: -> @name
  behaviors: ->
    Modifiers: {}

module.exports = ItemView
