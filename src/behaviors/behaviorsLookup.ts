
/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');
export import behaviors = require('./index');

Marionette.Behaviors.behaviorsLookup = function() {
  return behaviors;
};
