/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import Backbone = require('backbone');

export var historyIsStarted = false;

export function to(route, options:any = {}) {
  return Backbone.history.navigate(route, options);
}

export function getCurrentRoute():string {
  var frag = Backbone.history.getFragment();
  if (_.isEmpty(frag)) {
    return null;
  } else {
    return frag;
  }
}

export function startHistory(options?:Backbone.HistoryOptions):void {
  if (Backbone.history) {
    Backbone.history.start(options);
    historyIsStarted = true;
  }
}


