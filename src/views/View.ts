/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export class View<T extends Backbone.Model> extends Marionette.View<T> {

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

  getUi(key:string):JQuery {
    return this.ui[key];
  }

}

