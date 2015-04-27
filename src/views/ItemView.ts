/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');

export class ItemView<T extends Backbone.Model> extends Marionette.ItemView<T> {

  constructor(options?: Backbone.ViewOptions<T>) {
    this.behaviors = this.behaviors || {};
    this.behaviors['Modifiers'] = {};
    super(options);
  }

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
  private isHidden:boolean;

  get className():string {
    return this.name;
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

