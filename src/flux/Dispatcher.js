/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var flux = require('flux');
var constants = require('../constants');
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        _super.apply(this, arguments);
    }
    Dispatcher.prototype.handleServerAction = function (action) {
        var _this = this;
        var payload = {
            source: constants.ACTION_SOURCES.ServerAction,
            action: action
        };
        if (action.async) {
            setTimeout(function () {
                _this.dispatch(payload);
            }, 0);
        }
        else {
            this.dispatch(payload);
        }
    };
    Dispatcher.prototype.handleDeviceAction = function (action) {
        var _this = this;
        var payload = {
            source: constants.ACTION_SOURCES.DeviceAction,
            action: action
        };
        if (action.async) {
            setTimeout(function () {
                _this.dispatch(payload);
            }, 0);
        }
        else {
            this.dispatch(payload);
        }
    };
    Dispatcher.prototype.handleViewAction = function (action) {
        var _this = this;
        var payload = {
            source: constants.ACTION_SOURCES.ViewAction,
            action: action
        };
        if (action.async) {
            setTimeout(function () {
                _this.dispatch(payload);
            }, 0);
        }
        else {
            this.dispatch(payload);
        }
    };
    return Dispatcher;
})(flux.Dispatcher);
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=Dispatcher.js.map