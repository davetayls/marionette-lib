/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var constants = require('../constants');
var APP_ROUTER_EVENTS = (function (_super) {
    __extends(APP_ROUTER_EVENTS, _super);
    function APP_ROUTER_EVENTS() {
        _super.apply(this, arguments);
    }
    APP_ROUTER_EVENTS.firstRoute = new APP_ROUTER_EVENTS('firstRoute');
    return APP_ROUTER_EVENTS;
})(constants.StringConstant);
exports.APP_ROUTER_EVENTS = APP_ROUTER_EVENTS;
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter(options) {
        _super.call(this, options);
        console.log('AppRouter ' + options.name + ' created', options.appRoutes);
    }
    AppRouter.prototype.onRoute = function (routeName, routePath, routeArgs) {
        if (AppRouter._firstRouteTriggered) {
            this.trigger(APP_ROUTER_EVENTS.firstRoute.val);
        }
        else {
            AppRouter._firstRouteTriggered = true;
        }
    };
    return AppRouter;
})(Marionette.AppRouter);
exports.AppRouter = AppRouter;
//# sourceMappingURL=App.js.map