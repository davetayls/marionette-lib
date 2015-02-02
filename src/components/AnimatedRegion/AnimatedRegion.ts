/// <reference path="../../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export class AnimatedRegion extends Marionette.Region {
  currentView:Backbone.View<Backbone.Model>;
  _nextView:Backbone.View<Backbone.Model>;
}
