define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var ItemView = (function (_super) {
    __extends(ItemView, _super);
    function ItemView() {
        _super.apply(this, arguments);
    }
    ItemView.prototype.defaults = function () {
    };
    ItemView.prototype.className = function () {
        return this.name;
    };
    ItemView.prototype.behaviors = function () {
        return {
            Modifiers: {}
        };
    };
    return ItemView;
})(Marionette.ItemView);
exports.ItemView = ItemView;
//# sourceMappingURL=ItemView.js.map
});
