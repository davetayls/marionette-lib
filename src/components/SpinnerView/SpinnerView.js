/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var View = require('../../views/View');
var Spin = require('spin.js');
var SpinnerView = (function (_super) {
    __extends(SpinnerView, _super);
    function SpinnerView(options) {
        this.name = 'SpinnerView';
        this.loadingDelay = 1000;
        this.loadingClass = 'SpinnerView--spinning';
        _super.call(this, options);
    }
    SpinnerView.prototype.onDestroy = function () {
        this.stop();
    };
    SpinnerView.prototype.start = function () {
        var _this = this;
        this.stop();
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        this.loadingTimeout = setTimeout(function () {
            _this.$el.addClass(_this.loadingClass);
            _this.loadingSpinner = new Spin(SpinnerView.spinOptions);
            _this.loadingSpinner.spin(_this.$el[0]);
        }, this.loadingDelay);
    };
    SpinnerView.prototype.stop = function () {
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        if (this.loadingSpinner) {
            this.loadingSpinner.stop();
            return this.$el.removeClass(this.loadingClass);
        }
    };
    SpinnerView.spinOptions = {
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
        className: "SpinnerView__spinner animated bounceIn",
        zIndex: 2e9,
        top: "30px",
        left: "auto"
    };
    return SpinnerView;
})(View.View);
exports.SpinnerView = SpinnerView;
//# sourceMappingURL=SpinnerView.js.map