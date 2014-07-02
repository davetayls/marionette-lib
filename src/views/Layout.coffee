
'use strict'

Marionette = require 'backbone.marionette'

class Layout extends Marionette.LayoutView
  className: -> @name

module.exports = Layout
