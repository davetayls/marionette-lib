
'use strict'

ItemView = require '../../views/ItemView'
SpinnerView = require '../spinner/SpinnerView'

class NoticeView extends ItemView
  template: require('hbs!./notice')
  tagName: 'section'
  className: 'notice'
  defaults:
    header: ''
    body: ''
    buttons: []
    canDismiss: true

  ui:
    buttons: '.notice__btns'

#    templateHelpers: ->
#      header: @options.header or @model.get('header')
#      body: @options.body or @model.get('body')

  initialize: (options) ->
    super
    if options
      if options.header then @model.set('header', options.header)
      if options.body then @model.set('body', options.body)
      if options.buttons then @model.set('buttons', options.buttons)
    @buttons = []
    @listenTo @model, 'change', @render

  onRender: ->
    unless @_loadingView
      @_loadingView = new SpinnerView()

    @$el.append @_loadingView.el

    if @model.get('loading')
      @_loadingView.start()
    else
      @_loadingView.stop()

    @ui.buttons.empty()
    @model.get('buttons').forEach (btn) =>
      btn.render()
      @listenTo btn, 'click', @onButtonClicked
      @ui.buttons.append btn.el

  canDismiss: -> @model.get('canDismiss')

  hide: ->
    @$el.hide()
    @_loadingView.stop() if @_loadingView

  show: -> @$el.show()

  set: ->
    @model.set.apply(@model, arguments)
    @show()

  closeButtons: ->
    @model.get('buttons').forEach (btn) ->
      btn.close()

  onButtonClicked: -> @trigger 'button:clicked'


module.exports = NoticeView
