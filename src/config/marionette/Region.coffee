'use strict'

_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

###
  Animate Out
  -----------
  Animate out the old view before being ready to show
  the next
###
Marionette.Region.prototype.animateOut = (cb) ->
  if @currentView and @currentView.animateOut
    console.log 'animating out', @currentView, @el
    @triggerMethod 'before:animating:out'
    @currentView.animateOut(cb)
  else if _.isFunction cb then cb.call(@)

###
  Animated Empty
  -----
  Use animation when emptying the region if it
  is available
###
Marionette.Region::animateEmpty = (options, cb) ->
    @animateOut =>
      @empty()
      cb.call(@) if _.isFunction(cb)

###
  getEl
  -----
  Update the default functionality to check for
  parentEl on the options and find the selector
  based on it's children
###
_getEl = Marionette.Region::getEl
Marionette.Region::getEl = (el) ->
  if _.isString el
    parentEl = _.result(@options, 'parentEl')
    if parentEl
      $el = Backbone.$(parentEl).find(el)
      if $el.length then $el else return
    else _getEl.apply(@, arguments)
  else _getEl.apply(@, arguments)


###
  Show new View
  -------------
  Handle transitions between old view and new one
  with the option to disable animations
###
_show = Marionette.Region.prototype.show
_getName = (view) ->
  if view
    if view.name then view.name
    else
      view.constructor.name
  else
    'no view'
Marionette.Region.prototype.show = (view, immediate = false) ->
  @_nextView = view
  if immediate
    if @$el and @$el[0]
      @$el[0].scrollTop = 0
      @$el[0].scrollLeft = 0
    @_nextView = null
    _show.call(@, view)
    console.log 'showing', _getName(view), view, @el
  else
    @animateOut =>
      if @$el and @$el[0]
        @$el[0].scrollTop = 0
        @$el[0].scrollLeft = 0
      @_nextView = null
      _show.call(@, view)
      console.log 'showing', _getName(view), view, @el

###
  This will show the view immediately if #getEl returns an element
  otherwise it will wait for the show event to fire on waitForView
  before showing the view
###
Marionette.Region.prototype.showWithView = (waitForView, viewToShow, options = {}) ->
  _.defaults(options, {
    immediate: false
    waitForEvent: 'show'
  })
  if _.isString(this.el)
    $el = @getEl(this.el)
  else
    $el = @$el

  if $el.length
    @show(viewToShow, options.immediate)
  else
    @listenToOnce waitForView, options.waitForEvent, =>
      @show(viewToShow, options.immediate)
  return

###
  Close
  -----
  Update to include logging when a view is closed
###
_close = Marionette.Region.prototype.close
Marionette.Region.prototype.close = ->
  console.log 'closing', (@currentView if @currentView), @el
  _close.apply(@, arguments)


