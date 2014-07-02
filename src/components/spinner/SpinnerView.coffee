
'use strict'

View = require '../../views/View'
Spin = require 'spin'

class SpinnerView extends View
  name: 'loading'
  className: 'loading'
  loadingDelay: 1000 # delay showing the spinner when requested
  loadingClass: 'loading--spinning'

  # http://fgnass.github.io/spin.js/#?lines=9&length=1&width=2&radius=13&corners=1.0&rotate=0&trail=60&speed=1.0&direction=1
  spinOptions:
    lines: 13 # The number of lines to draw
    length: 4 # The length of each line
    width: 2 # The line thickness
    radius: 5 # The radius of the inner circle
    corners: 1 # Corner roundness (0..1)
    rotate: 0 # The rotation offset
    direction: 1 # 1: clockwise, -1: counterclockwise
    color: "#fff" # #rgb or #rrggbb or array of colors
    speed: 1 # Rounds per second
    trail: 60 # Afterglow percentage
    shadow: false # Whether to render a shadow
    hwaccel: true # Whether to use hardware acceleration
    className: "spinner spinner--itemview animated bounceIn" # The CSS class to assign to the spinner
    zIndex: 2e9 # The z-index (defaults to 2000000000)
    top: "30px" # Top position relative to parent in px
    left: "auto" # Left position relative to parent in px

  start: ->
    @stop()
    clearTimeout(@loadingTimeout) if @loadingTimeout
    @loadingTimeout = setTimeout =>
      @$el.addClass(@loadingClass)
      @loadingSpinner = new Spin(@spinOptions)
      @loadingSpinner.spin(@$el[0])

    , @loadingDelay

  stop: ->
    clearTimeout(@loadingTimeout) if @loadingTimeout
    if @loadingSpinner
      @loadingSpinner.stop()
      @$el.removeClass(@loadingClass)


module.exports = SpinnerView
