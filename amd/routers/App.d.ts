/// <reference path="../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
import constants = require('../constants');
export interface AppRouterOptions extends Marionette.AppRouterOptions {
    name: string;
}
export declare class APP_ROUTER_EVENTS extends constants.StringConstant {
    static firstRoute: APP_ROUTER_EVENTS;
}
export declare class AppRouter extends Marionette.AppRouter {
    constructor(options: AppRouterOptions);
    static _firstRouteTriggered: boolean;
    onRoute(routeName: string, routePath: string, routeArgs: any): void;
}
