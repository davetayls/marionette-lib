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
  private isHidden:boolean;

  get className() {
    return this.name;
  }

  animateOut(cb:()=>void) {
    return cb.call(this);
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

