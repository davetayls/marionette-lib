/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var View = (function (_super) {
    __extends(View, _super);
    function View(options) {
        this.behaviors = this.behaviors || {};
        this.behaviors['Modifiers'] = {};
        _super.call(this, options);
    }
    Object.defineProperty(View.prototype, "className", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.getUi = function (key) {
        return this.ui[key];
    };
    View.prototype.hideView = function () {
        if (this.isHidden)
            return;
        this.$el.hide();
        this.isHidden = true;
    };
    View.prototype.showView = function (show) {
        if (show === void 0) { show = true; }
        if (show === false) {
            this.hideView();
        }
        else {
            if (!this.isHidden)
                return;
            this.$el.show();
            this.isHidden = false;
        }
    };
    return View;
})(Marionette.View);
exports.View = View;
//# sourceMappingURL=View.js.map