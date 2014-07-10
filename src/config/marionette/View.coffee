
_ = require 'underscore'
Marionette = require 'backbone.marionette'

_.extend Marionette.View::,
  className: -> @name
