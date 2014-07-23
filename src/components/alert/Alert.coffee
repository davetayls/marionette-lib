'use strict'

ItemView = require '../../views/ItemView'

class AlertComponent extends ItemView
  name: 'alert'
  template: require 'hbs!./alert'
  templateHelpers: ->
    message: @options.message

  onShow: ->
    @$el.addClass 'alert-' + (@options.alertType or 'info')

module.exports = AlertComponent
