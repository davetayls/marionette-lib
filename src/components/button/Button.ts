/// <reference path="../../../typings/tsd.d.ts" />

import ItemView = require('../../views/ItemView');

export class Button extends ItemView.ItemView<Backbone.Model> {

  initialize() {
    super.initialize();
    this.on('click', this.navigate);
  }

  name = 'base-button';
  tagName = 'a';

  defaults() {
    return {
      icon: '',
      text: ''
    }
  }

  triggers = {
    'click': 'click'
  }

  // TODO: implement className
  //className() {
  //  return 'btn btn-block btn--' + this.name;
  //}

  navigate() {
    return null;
  }

}

