/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class Layout<T extends Backbone.Model> extends Marionette.LayoutView<T> {

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

