
'use strict'

Marionette = require 'backbone.marionette'

module.exports = class ItemView extends Marionette.ItemView
  className: -> @name
