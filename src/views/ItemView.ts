/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class ItemView<T extends Backbone.Model> extends Marionette.ItemView<T> {

  //initialize(options?: Backbone.ViewOptions<T>): void {
  //  if (this.defaults && !Marionette.getOption(this, 'model')) {
  //    this.model = new Backbone.Model(this.defaults);
  //  }
  //  super.initialize(options);
  //}

  name:string;
  defaults():any {}
  options:any;
  ui:any;
  template:any;

  className() {
    return this.name;
  }

  behaviors() {
    return {
      Modifiers: {}
    };
  }

}

