/// <reference path="../../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');
import View = require('../../views/View');
import Spin = require('spin');

export class SpinnerView extends View.View<Backbone.Model> {

  name = 'loading';
  loadingDelay = 1000;
  loadingClass = 'loading--spinning';
  loadingTimeout:number;
  loadingSpinner:Spin;

  spinOptions = {
    lines: 13,
    length: 4,
    width: 2,
    radius: 5,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: "#fff",
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: true,
    className: "spinner spinner--itemview animated bounceIn",
    zIndex: 2e9,
    top: "30px",
    left: "auto"
  };

  start() {
    this.stop();
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    this.loadingTimeout = setTimeout(() => {
        this.$el.addClass(this.loadingClass);
        this.loadingSpinner = new Spin(this.spinOptions);
        this.loadingSpinner.spin(this.$el[0]);
    }, this.loadingDelay);
  }

  stop() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    if (this.loadingSpinner) {
      this.loadingSpinner.stop();
      return this.$el.removeClass(this.loadingClass);
    }
  }

}

