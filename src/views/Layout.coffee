
'use strict'

Marionette = require 'marionette'

class Layout extends Marionette.Layout
  className: -> @name

module.exports = Layout
