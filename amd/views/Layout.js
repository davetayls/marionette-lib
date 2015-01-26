define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        _super.apply(this, arguments);
    }
    //TODO: implement className
    //className() {
    //  return this.name;
    //}
    Layout.prototype.behaviors = function () {
        return {
            Modifiers: {}
        };
    };
    return Layout;
})(Marionette.LayoutView);
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map
});
