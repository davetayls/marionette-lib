/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var flux = require('flux');
var constants = require('../constants');
var log = console.log.bind(console);
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        this.stores = [];
        this.payloadQueue = [];
        _super.call(this);
    }
    Dispatcher.prototype.registerStore = function (store) {
        this.stores.push(store);
        return this.register(store.dispatch.bind(store));
    };
    Dispatcher.prototype.dispatchPayload = function () {
        var payload = this.payloadQueue.shift();
        if (payload) {
            this.dispatching = true;
            log('Dispatching:', payload);
            this.dispatch(payload);
            this.notifyStoreListeners();
            this.dispatching = false;
            this.dispatchPayload();
        }
    };
    Dispatcher.prototype.notifyStoreListeners = function () {
        this.stores.forEach(function (store) {
            store.notifyIfStateChanged();
        });
    };
    Dispatcher.prototype.handlePayload = function (payload) {
        this.payloadQueue.push(payload);
        if (!this.dispatching)
            this.dispatchPayload();
    };
    Dispatcher.prototype.handleServerAction = function (action) {
        var payload = {
            source: constants.ACTION_SOURCES.ServerAction,
            action: action
        };
        log('Dispatcher: handle', payload, arguments.callee.caller);
        this.handlePayload(payload);
    };
    Dispatcher.prototype.handleDeviceAction = function (action) {
        var payload = {
            source: constants.ACTION_SOURCES.DeviceAction,
            action: action
        };
        log('Dispatcher: handle', payload, arguments.callee.caller);
        this.handlePayload(payload);
    };
    Dispatcher.prototype.handleViewAction = function (action) {
        var payload = {
            source: constants.ACTION_SOURCES.ViewAction,
            action: action
        };
        log('Dispatcher: handle', payload, arguments.callee.caller);
        this.handlePayload(payload);
    };
    return Dispatcher;
})(flux.Dispatcher);
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=Dispatcher.js.map