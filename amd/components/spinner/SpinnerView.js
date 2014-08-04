define(function (require, exports, module) {'use strict';
var Spin, SpinnerView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../../views/View');

Spin = require('spin');

SpinnerView = (function(_super) {
  __extends(SpinnerView, _super);

  function SpinnerView() {
    return SpinnerView.__super__.constructor.apply(this, arguments);
  }

  SpinnerView.prototype.name = 'loading';

  SpinnerView.prototype.className = 'loading';

  SpinnerView.prototype.loadingDelay = 1000;

  SpinnerView.prototype.loadingClass = 'loading--spinning';

  SpinnerView.prototype.spinOptions = {
    lines: 13,
    length: 4,
    width: 2,
    radius: 5,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: "#fff",
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: true,
    className: "spinner spinner--itemview animated bounceIn",
    zIndex: 2e9,
    top: "30px",
    left: "auto"
  };

  SpinnerView.prototype.start = function() {
    this.stop();
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    return this.loadingTimeout = setTimeout((function(_this) {
      return function() {
        _this.$el.addClass(_this.loadingClass);
        _this.loadingSpinner = new Spin(_this.spinOptions);
        return _this.loadingSpinner.spin(_this.$el[0]);
      };
    })(this), this.getOption('loadingDelay'));
  };

  SpinnerView.prototype.stop = function() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    if (this.loadingSpinner) {
      this.loadingSpinner.stop();
      return this.$el.removeClass(this.loadingClass);
    }
  };

  return SpinnerView;

})(View);

module.exports = SpinnerView;

});
