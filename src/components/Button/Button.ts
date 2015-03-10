/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import constants = require('../../constants');
import ItemView = require('../../views/ItemView');

export class BUTTON_EVENTS extends constants.StringConstant {
  static navigate = new BUTTON_EVENTS('navigate');
}

export class BUTTON_THEME extends constants.StringConstant {
  static default = new BUTTON_THEME('default');
  static inverse = new BUTTON_THEME('inverse');
  static action = new BUTTON_THEME('action');
}

export class ButtonModel extends Backbone.Model {
  defaults() {
    return {
      name: '',
      icon: '',
      text: '',
      theme: BUTTON_THEME.default
    }
  }

  get name():string { return this.get('name'); }
  set name(value:string) { this.set('name', value); }

  get icon():string { return this.get('icon'); }
  set icon(value:string) { this.set('icon', value); }

  get text():string { return this.get('text'); }
  set text(value:string) { this.set('text', value); }

  get theme():BUTTON_THEME { return this.get('theme'); }
  set theme(value:BUTTON_THEME) { this.set('theme', value); }

}

export interface IButtonOptions extends Backbone.ViewOptions<ButtonModel> {
  name:string;
  icon:string;
  text:string;
  theme?:BUTTON_THEME;
}

export class Button extends ItemView.ItemView<ButtonModel> {

  constructor(options?:IButtonOptions) {
    this.model = options.model || new ButtonModel(this.defaults());
    this.name = options.name || this.model.name || 'base-button';
    if (options) this.setOptions(options);
    this.template = require('hbs!./Button');
    this.tagName = 'a';
    this.triggers = {
      'click': 'click'
    };
    this.on('click', this.navigate);
    super(options);
    this.$el.addClass('Button--' + this.model.theme.toString());
  }

  get className():string {
    return 'Button btn btn-block Button--' + this.name + 'Button';
  }

  navigate():void {
    this.trigger(BUTTON_EVENTS.navigate.val, this.name);
  }

  setOptions(options:IButtonOptions) {
    if (options.icon) this.model.icon = options.icon;
    if (options.text) this.model.text = options.text;
    if (options.theme) this.model.theme = options.theme;
  }

}


