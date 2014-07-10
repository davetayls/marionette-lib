define(function (require, exports, module) {'use strict';
var Marionette, _close, _show;

Marionette = require('backbone.marionette');

Marionette.Region.prototype.animateOut = function(cb) {
  if (this.currentView && this.currentView.animateOut) {
    console.log('animating out', this.currentView);
    return this.currentView.animateOut(cb);
  } else if (_.isFunction(cb)) {
    return cb.call(this);
  }
};

_show = Marionette.Region.prototype.show;

Marionette.Region.prototype.show = function(view, immediate) {
  if (immediate == null) {
    immediate = false;
  }
  this._nextView = view;
  if (immediate) {
    if (this.$el && this.$el[0]) {
      this.$el[0].scrollTop = 0;
      this.$el[0].scrollLeft = 0;
    }
    this._nextView = null;
    _show.call(this, view);
    return console.log('showing', view);
  } else {
    return this.animateOut((function(_this) {
      return function() {
        if (_this.$el && _this.$el[0]) {
          _this.$el[0].scrollTop = 0;
          _this.$el[0].scrollLeft = 0;
        }
        _this._nextView = null;
        _show.call(_this, view);
        return console.log('showing', view);
      };
    })(this));
  }
};

_close = Marionette.Region.prototype.close;

Marionette.Region.prototype.close = function() {
  if (this.currentView) {
    console.log('closing', this.currentView);
  }
  return _close.apply(this, arguments);
};

});
