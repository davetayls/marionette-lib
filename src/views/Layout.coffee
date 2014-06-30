
'use strict'

Marionette = require 'marionette'

module.exports = class Layout extends Marionette.Layout
  className: -> @name
