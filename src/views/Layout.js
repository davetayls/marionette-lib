/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout(options) {
        this.behaviors = this.behaviors || {};
        this.behaviors['Modifiers'] = {};
        _super.call(this, options);
    }
    Object.defineProperty(Layout.prototype, "className", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Layout.prototype.hideView = function () {
        if (this.isHidden)
            return;
        this.$el.hide();
        this.isHidden = true;
    };
    Layout.prototype.showView = function (show) {
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
    return Layout;
})(Marionette.LayoutView);
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map