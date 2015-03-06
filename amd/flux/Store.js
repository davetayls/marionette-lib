define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var constants = require('../constants');
var EventedClass = require('../utilities/EventedClass');
var Store = (function (_super) {
    __extends(Store, _super);
    function Store(dispatcher) {
        _super.call(this);
        this.dispatchToken = dispatcher.register(this.dispatch.bind(this));
    }
    Store.prototype.dispatch = function (payload) {
    };
    Store.prototype.emitChange = function () {
        this.trigger(constants.EVENT_TYPES.Change.val);
    };
    Store.prototype.addChangeListener = function (callback) {
        this.on(constants.EVENT_TYPES.Change.val, callback);
    };
    Store.prototype.removeChangeListener = function (callback) {
        this.off(constants.EVENT_TYPES.Change.val, callback);
    };
    return Store;
})(EventedClass.EventedClass);
exports.Store = Store;
//# sourceMappingURL=Store.js.map
});
