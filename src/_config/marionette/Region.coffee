
'use strict'

Marionette = require 'backbone.marionette'

Marionette.Region.prototype.animateOut = (cb) ->
  if @currentView and @currentView.animateOut
    console.log 'animating out', @currentView
    @currentView.animateOut(cb)
  else if _.isFunction cb then cb.call(@)

_show = Marionette.Region.prototype.show
Marionette.Region.prototype.show = (view, immediate = false) ->
  @_nextView = view
  if immediate
    @_nextView = null
    _show.call(@, view)
    console.log 'showing', view
  else
    @animateOut =>
      @_nextView = null
      _show.call(@, view)
      console.log 'showing', view

_close = Marionette.Region.prototype.close
Marionette.Region.prototype.close = ->
  console.log 'closing', @currentView if @currentView
  _close.apply(@, arguments)


