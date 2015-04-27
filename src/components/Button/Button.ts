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
  static link = new BUTTON_THEME('link');
  static primary = new BUTTON_THEME('primary');
  static secondary = new BUTTON_THEME('secondary');
}

export class BUTTON_SIZE extends constants.StringConstant {
  static default = new BUTTON_SIZE('default');
  static small = new BUTTON_SIZE('small');
  static large = new BUTTON_SIZE('large');
}

export class ButtonModel extends Backbone.Model {
  defaults() {
    return {
      name: '',
      icon: '',
      text: '',
      block: true,
      theme: BUTTON_THEME.default,
      size: BUTTON_SIZE.default
    }
  }

  get name():string { return this.get('name'); }
  set name(value:string) { this.set('name', value); }

  get icon():string { return this.get('icon'); }
  set icon(value:string) { this.set('icon', value); }

  get text():string { return this.get('text'); }
  set text(value:string) { this.set('text', value); }

  get block():boolean { return this.get('block'); }
  set block(value:boolean) { this.set('block', value); }

  get theme():BUTTON_THEME { return this.get('theme'); }
  set theme(value:BUTTON_THEME) { this.set('theme', value); }

  get size():BUTTON_SIZE { return this.get('size'); }
  set size(value:BUTTON_SIZE) { this.set('size', value); }


}

export interface IButtonOptions extends Backbone.ViewOptions<ButtonModel> {
  name:string;
  icon?:string;
  text?:string;
  block?:boolean;
  submit?:boolean;
  theme?:BUTTON_THEME;
  size?:BUTTON_SIZE;
}

export class Button extends ItemView.ItemView<ButtonModel> {

  constructor(options?:IButtonOptions) {
    this.model = options.model || new ButtonModel(this.defaults());
    this.name = options.name || this.model.name || 'base-button';
    this.template = require('./Button.hbs');
    if (options.submit) {
      this.tagName = 'button';
    } else {
      this.tagName = 'a';
    }
    this.triggers = {
      'click': 'click'
    };
    this.on('click', this.navigate);
    super(options);
    if (options) this.setProperties(options);
    this.setClassNames();
  }

  get className():string {
    return 'Button btn Button--' + this.name + 'Button';
  }

  getIconClass(iconName:string):string {
    return 'Icon Icon--' + iconName;
  }

  get text():string { return this.model.text; }
  set text(value:string) { this.model.text = value; }

  serializeData():any {
    var data:any = this.model.toJSON();
    data.iconClass =this.getIconClass(this.model.icon);
    return data;
  }

  navigate():void {
    this.trigger(BUTTON_EVENTS.navigate.val, this.name);
  }

  setProperties(options:IButtonOptions) {
    this.unsetClassNames();
    if (options.icon) this.model.icon = options.icon;
    if (options.text) this.model.text = options.text;
    if (_.isBoolean(options.block)) this.model.block = options.block;
    if (options.theme) this.model.theme = options.theme;
    if (options.size) this.model.size = options.size;
    if (options.submit) this.$el.attr('type', 'submit');
  }

  unsetClassNames():void {
    if (!this.$el) return;
    this.$el
      .removeClass('btn-link')
      .removeClass('Button--' + this.model.theme)
      .removeClass('Button--' + this.model.size)
    ;
    this.$el.removeClass('btn-block');
  }

  setClassNames():void {
    this.$el
      .addClass('Button--' + this.model.theme)
      .addClass('Button--' + this.model.size + 'Size')
    ;
    if (this.model.theme === BUTTON_THEME.link) {
      this.$el.addClass('btn-link');
    }
    if (this.model.block) {
      this.$el.addClass('btn-block');
    }
  }

}


