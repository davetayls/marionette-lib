/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import ItemView = require('../../views/ItemView');

export class AlertComponent extends ItemView.ItemView<Backbone.Model> {

  name = 'alert';
  template = require('hbs!./alert');
  templateHelpers() {
    return {
      message: this.options.message
    };
  }

  onShow() {
    this.$el.addClass('alert-' + (this.options.alertType || 'info'));
  }

}

