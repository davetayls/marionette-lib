/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export class View<T extends Backbone.Model> extends Marionette.View<T> {

  constructor(options?: Backbone.ViewOptions<T>) {
    this.behaviors = this.behaviors || {};
    this.behaviors['Modifiers'] = {};
    super(options);
  }

  name:string;

  get className() {
    return this.name;
  }

  getUi(key:string):JQuery {
    return this.ui[key];
  }

}

