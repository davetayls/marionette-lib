'use strict'

ItemView = require '../../views/ItemView'

class Button extends ItemView
  initialize: ->
    super
    @on 'click', @navigate

  name: 'base-button'
  #template: require 'hbs!./button'
  tagName: 'a'
  defaults:
    icon: ''
    text: ''
  triggers:
    'click': 'click'

  className: -> 'btn btn-block btn--' + @name
  navigate: -> null

class HomeButton extends Button
  name: 'home'
  defaults:
    icon: 'img/start.svg'
    text: 'Home'

  navigate: -> app.execute 'show:home'


module.exports = Button
Button.Home = HomeButton
