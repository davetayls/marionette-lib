
'use strict'

Marionette = require 'marionette'

module.exports = class ItemView extends Marionette.ItemView
  className: -> @name
