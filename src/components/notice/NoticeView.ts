/// <reference path="../../../typings/tsd.d.ts" />

import ItemView = require('../../views/ItemView');
import SpinnerView = require('../spinner/SpinnerView');

export class NoticeView extends ItemView.ItemView<Backbone.Model> {

  _loadingView:SpinnerView.SpinnerView;

  constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
    this.template = require('hbs!./notice');
    this.tagName = 'section';
    this.name = 'notice';
    this.ui = {
      buttons: '.notice__btns'
    };
    super(options);
  }

  defaults() {
    return {
      header: '',
      body: '',
      buttons: [],
      canDismiss: true
    }
  }

  initialize(options) {
    super.initialize(options);
    if (options) {
      if (options.header) {
        this.model.set('header', options.header);
      }
      if (options.body) {
        this.model.set('body', options.body);
      }
      if (options.buttons) {
        this.model.set('buttons', options.buttons);
      }
    }
    this.listenTo(this.model, 'change', this.render);
  }

  onRender() {
    if (!this._loadingView) {
      this._loadingView = new SpinnerView.SpinnerView();
    }
    this.$el.append(this._loadingView.el);
    if (this.model.get('loading')) {
      this._loadingView.start();
    } else {
      this._loadingView.stop();
    }
    this.ui.buttons.empty();
    this.model.get('buttons').forEach((btn) => {
        btn.render();
        this.listenTo(btn, 'click', this.onButtonClicked);
        this.ui.buttons.append(btn.el);
    });
  }

  canDismiss() {
    return this.model.get('canDismiss');
  }

  hide() {
    this.$el.hide();
    if (this._loadingView) {
      return this._loadingView.stop();
    }
  }

  show() {
    return this.$el.show();
  }

  set(properties:any) {
    this.model.set(properties);
    return this.show();
  }

  closeButtons() {
    return this.model.get('buttons').forEach(function(btn) {
      return btn.close();
    });
  }

  onButtonClicked() {
    return this.trigger('button:clicked');
  }

}

