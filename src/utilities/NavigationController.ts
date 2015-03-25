/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class NavigationController extends Marionette.Controller {
  constructor() {
    super();
    this.historyIsStarted = false;
  }

  historyIsStarted:boolean;

  to(route:string, options:any = {}) {
    Backbone.history.navigate(route, options);
    this.trigger('navigated', route);
  }

  getCurrentRoute():string {
    var frag = Backbone.history.getFragment();
    if (_.isEmpty(frag)) {
      return null;
    } else {
      return frag;
    }
  }

  startHistory(options?:Backbone.HistoryOptions):void {
    if (Backbone.history) {
      Backbone.history.start(options);
      this.historyIsStarted = true;
    }
  }

}

