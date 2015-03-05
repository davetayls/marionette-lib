define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var List = (function (_super) {
    __extends(List, _super);
    function List(options) {
        this.behaviors = this.behaviors || {};
        this.behaviors['Modifiers'] = {};
        _super.call(this, options);
    }
    Object.defineProperty(List.prototype, "className", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype.animateOut = function (cb) {
        return cb.call(this);
    };
    return List;
})(Marionette.CompositeView);
exports.List = List;
//# sourceMappingURL=List.js.map
});
