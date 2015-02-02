/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
(function (APP_ROUTER_EVENTS) {
    APP_ROUTER_EVENTS[APP_ROUTER_EVENTS['firstRoute'] = 0] = 'firstRoute';
})(exports.APP_ROUTER_EVENTS || (exports.APP_ROUTER_EVENTS = {}));
var APP_ROUTER_EVENTS = exports.APP_ROUTER_EVENTS;
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        _super.apply(this, arguments);
    }
    AppRouter.prototype.onRoute = function (routeName, routePath, routeArgs) {
        if (AppRouter._firstRouteTriggered) {
            this.trigger(APP_ROUTER_EVENTS[APP_ROUTER_EVENTS['first:route']]);
        }
        else {
            AppRouter._firstRouteTriggered = true;
        }
    };
    return AppRouter;
})(Marionette.AppRouter);
exports.AppRouter = AppRouter;
//# sourceMappingURL=App.js.map