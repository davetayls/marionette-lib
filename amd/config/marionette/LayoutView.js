define(function (require, exports, module) {var Marionette = require('backbone.marionette');
var LayoutView = Marionette.LayoutView;
/*
  _buildRegions
  -------------
  We need to ensure that there is an element on the
  LayoutView so that getEl relative to the parentEl
  works properly
 */
var _buildRegions = LayoutView.prototype._buildRegions;
LayoutView.prototype._buildRegions = function (regions) {
    this._ensureElement();
    return _buildRegions.apply(this, arguments);
};

});
