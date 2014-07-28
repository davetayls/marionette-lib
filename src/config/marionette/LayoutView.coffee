'use strict'

_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
LayoutView = Marionette.LayoutView

###
  _buildRegions
  -------------
  We need to ensure that there is an element on the
  LayoutView so that getEl relative to the parentEl
  works properly
###

_buildRegions = LayoutView::_buildRegions
LayoutView::_buildRegions = (regions) ->
  @_ensureElement()
  _buildRegions.apply(@, arguments)
