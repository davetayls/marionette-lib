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
    function List() {
        _super.apply(this, arguments);
    }
    // TODO: implement className
    //className() {
    //  return this.name;
    //}
    List.prototype.behaviors = function () {
        return {
            Modifiers: {}
        };
    };
    List.prototype.animateOut = function (cb) {
        return cb();
    };
    return List;
})(Marionette.CompositeView);
exports.List = List;
//# sourceMappingURL=List.js.map
});
