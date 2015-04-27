/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import ItemView = require('../../views/ItemView');

export interface IAlertOptions extends Backbone.ViewOptions<Backbone.Model> {
  message:string;
  alertType:string;
}

export class AlertComponent extends ItemView.ItemView<Backbone.Model> {

  constructor(options:IAlertOptions) {
    this.name = 'alert';
    this.template = require('./alert.hbs');
    super(options);
  }

  templateHelpers() {
    return {
      message: this.options.message
    };
  }

  onShow() {
    this.$el.addClass('alert-' + (this.options.alertType || 'info'));
  }

}

