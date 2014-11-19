'use strict';
var Backbone, LayoutView, Marionette, _, _buildRegions;

_ = require('underscore');

Backbone = require('backbone');

Marionette = require('backbone.marionette');

LayoutView = Marionette.LayoutView;


/*
  _buildRegions
  -------------
  We need to ensure that there is an element on the
  LayoutView so that getEl relative to the parentEl
  works properly
 */

_buildRegions = LayoutView.prototype._buildRegions;

LayoutView.prototype._buildRegions = function(regions) {
  this._ensureElement();
  return _buildRegions.apply(this, arguments);
};
