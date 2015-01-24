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
    function View() {
        _super.apply(this, arguments);
    }
    View.prototype.className = function () {
        return this.name;
    };
    View.prototype.behaviors = function () {
        return {
            Modifiers: {}
        };
    };
    View.prototype.getUi = function (key) {
        return this.ui[key];
    };
    return View;
})(Marionette.View);
exports.View = View;
//# sourceMappingURL=View.js.map