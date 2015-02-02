/// <reference path="../../../typings/tsd.d.ts" />

import ItemView = require('../../views/ItemView');

export class Button extends ItemView.ItemView<Backbone.Model> {

  constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
    this.name = this.name || 'base-button';
    this.tagName = 'a';
    this.triggers = {
      'click': 'click'
    };
    super(options);
  }

  initialize() {
    super.initialize();
    this.on('click', this.navigate);
  }

  defaults() {
    return {
      icon: '',
      text: ''
    }
  }

  get className() {
    return 'btn btn-block btn--' + this.name;
  }

  navigate() {
    return null;
  }

}

