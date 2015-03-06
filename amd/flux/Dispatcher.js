define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
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
        this.dispatch({
            type: constants.ACTION_SOURCES.ServerAction,
            action: action
        });
    };
    Dispatcher.prototype.handleViewAction = function (action) {
        this.dispatch({
            type: constants.ACTION_SOURCES.ViewAction,
            action: action
        });
    };
    return Dispatcher;
})(flux.Dispatcher);
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=Dispatcher.js.map
});
