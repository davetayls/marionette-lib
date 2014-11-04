
_ = require 'underscore'
Marionette = require 'backbone.marionette'

_.extend Marionette.View::,
  tagName: 'section'
  className: -> @name

  templateHelpers: ->
    modelName: if @model then @model.name else ''

