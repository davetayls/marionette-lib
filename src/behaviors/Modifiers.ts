/// <reference path="../../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export interface IModifiedOptions {
  remove?:boolean;
  toggle?:boolean;
}

export class ModifiersBehavior extends Marionette.Behavior {

  addModifier(modifier:string):boolean {
    this.$el.addClass("" + this.view.name + "--" + modifier);
    return true;
  }

  removeModifier(modifier:string):boolean {
    this.$el.removeClass("" + this.view.name + "--" + modifier);
    return false;
  }

  toggleModifier(modifier:string):boolean {
    if (this.$el.hasClass("" + this.view.name + "--" + modifier)) {
      return this.removeModifier(modifier);
    } else {
      return this.addModifier(modifier);
    }
  }

  onModified(modifier:string, options:IModifiedOptions = {}):void {
    var state:boolean;
    if (!this.view.name) {
      throw new Error('A name is required on this View');
    }
    if (options.remove) {
      state = this.removeModifier(modifier);
    } else if (options.toggle) {
      state = this.toggleModifier(modifier);
    } else {
      state = this.addModifier(modifier);
    }
    this.view.triggerMethod("modified:" + modifier, {
      on: state
    });
  }

}

