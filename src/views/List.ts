/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class List<T extends Backbone.Model> extends Marionette.CompositeView<T> {

  name:string;

  // TODO: implement className
  //className() {
  //  return this.name;
  //}

  behaviors():any {
    return {
      Modifiers: {}
    };
  }

  animateOut(cb) {
    return cb();
  }

}

