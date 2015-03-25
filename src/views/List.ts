/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class List<T extends Backbone.Model> extends Marionette.CompositeView<T> {

  constructor(options?: Backbone.ViewOptions<T>) {
    this.behaviors = this.behaviors || {};
    this.behaviors['Modifiers'] = {};
    super(options);
  }

  name:string;
  template:(data:any) => string;

  get className() {
    return this.name;
  }

  animateOut(cb:()=>void) {
    return cb.call(this);
  }

}

