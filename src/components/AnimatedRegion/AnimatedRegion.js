/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var AnimatedRegion = (function (_super) {
    __extends(AnimatedRegion, _super);
    function AnimatedRegion() {
        _super.apply(this, arguments);
    }
    AnimatedRegion.prototype.animateOut = function (cb) {
        if (this.currentView && this.currentView.animateOut) {
            console.log('animating out', this.currentView, this.el);
            this.currentView.animateOut(cb);
        }
        else if (_.isFunction(cb)) {
            cb();
        }
    };
    AnimatedRegion.prototype.animateEmpty = function (cb) {
        var _this = this;
        this.animateOut(function () {
            _this.empty();
            if (_.isFunction(cb)) {
                cb();
            }
        });
    };
    return AnimatedRegion;
})(Marionette.Region);
exports.AnimatedRegion = AnimatedRegion;
//# sourceMappingURL=AnimatedRegion.js.map