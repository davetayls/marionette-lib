/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class Layout<T extends Backbone.Model> extends Marionette.LayoutView<T> {

  constructor(options?: Backbone.ViewOptions<T>) {
    this.behaviors = this.behaviors || {};
    this.behaviors['Modifiers'] = {};
    super(options);
  }

  name:string;
  template:(data:any) => string;
  regions:{[key:string]:any};

  get className():string {
    return this.name;
  }

}

