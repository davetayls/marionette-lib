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
    function ItemView(options) {
        this.behaviors = this.behaviors || {};
        this.behaviors['Modifiers'] = {};
        _super.call(this, options);
    }
    ItemView.prototype.defaults = function () {
    };
    Object.defineProperty(ItemView.prototype, "className", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return ItemView;
})(Marionette.ItemView);
exports.ItemView = ItemView;
//# sourceMappingURL=ItemView.js.map
});
