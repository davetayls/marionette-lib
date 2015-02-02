/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export enum APP_ROUTER_EVENTS { 'firstRoute' }

export class AppRouter extends Marionette.AppRouter {

  static _firstRouteTriggered:boolean;

  onRoute(routeName:string, routePath:string, routeArgs:any) {
    if (AppRouter._firstRouteTriggered) {
      this.trigger(APP_ROUTER_EVENTS[APP_ROUTER_EVENTS['first:route']]);
    } else {
      AppRouter._firstRouteTriggered = true;
    }
  }

}

