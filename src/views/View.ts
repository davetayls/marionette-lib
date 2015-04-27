/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export class View<T extends Backbone.Model> extends Marionette.View<T> {

  constructor(options?:Backbone.ViewOptions<T>) {
    this.behaviors = this.behaviors || {};
    this.behaviors['Modifiers'] = {};
    super(options);
  }

  name:string;
  private isHidden:boolean;

  get className() {
    return this.name;
  }

  getUi(key:string):JQuery {
    return this.ui[key];
  }

  hideView():void {
    if (this.isHidden) return;
    this.$el.hide();
    this.isHidden = true;
  }

  showView(show = true):void {
    if (show === false) {
      this.hideView();
    } else {
      if (!this.isHidden) return;
      this.$el.show();
      this.isHidden = false;
    }
  }

}

