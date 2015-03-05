define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Backbone = require('backbone');
require('backbone.dualstorage');
window.Store.prototype.sep = '__';
var Entity = (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        _super.apply(this, arguments);
    }
    return Entity;
})(Backbone.Model);
exports.Entity = Entity;
var EntityCollection = (function (_super) {
    __extends(EntityCollection, _super);
    function EntityCollection() {
        _super.apply(this, arguments);
    }
    return EntityCollection;
})(Backbone.Collection);
exports.EntityCollection = EntityCollection;
//# sourceMappingURL=Base.js.map
});
