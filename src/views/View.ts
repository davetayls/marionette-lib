/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export class View<T extends Backbone.Model> extends Marionette.View<T> {

  name:string;

  className() {
    return this.name;
  }

  behaviors() {
    return {
      Modifiers: {}
    };
  }

}

