/// <reference path="../../../typings/tsd.d.ts" />

import _ = require('underscore');
import Marionette = require('backbone.marionette');

export interface IAnimatableView extends Backbone.View<Backbone.Model> {
  animateOut(cb:()=>void):void;
}

export class AnimatedRegion extends Marionette.Region {
  currentView:IAnimatableView;
  _nextView:IAnimatableView;

  animateOut(cb:()=>void) {
    if (this.currentView && this.currentView.animateOut) {
      console.log('animating out', this.currentView, this.el);
      this.currentView.animateOut(cb);
    } else if (_.isFunction(cb)) {
      cb();
    }
  }

  animateEmpty(cb:()=>void) {
    this.animateOut(() => {
      this.empty();
      if (_.isFunction(cb)) {
        cb();
      }
    });
  }

}
