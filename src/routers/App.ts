/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');
import constants = require('../constants');

export interface AppRouterOptions extends Marionette.AppRouterOptions {
  name:string;
}

export class APP_ROUTER_EVENTS extends constants.StringConstant {
    static firstRoute = new APP_ROUTER_EVENTS('firstRoute');
}

export class AppRouter extends Marionette.AppRouter {

  constructor(options?: AppRouterOptions) {
    super(options);
    console.log('AppRouter ' + options.name + ' created', options.appRoutes);
  }

  static _firstRouteTriggered:boolean;

  onRoute(routeName:string, routePath:string, routeArgs:any) {
    if (AppRouter._firstRouteTriggered) {
      this.trigger(APP_ROUTER_EVENTS.firstRoute.val);
    } else {
      AppRouter._firstRouteTriggered = true;
    }
  }

}

