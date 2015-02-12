/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import ItemView = require('../../views/ItemView');
import SpinnerView = require('../SpinnerView/SpinnerView');

export interface INoticeViewOptions extends Backbone.ViewOptions<NoticeViewModel> {
  header?:string;
  body?:string;
  buttons?:Backbone.View<Backbone.Model>[];
}

export class NoticeViewModel extends Backbone.Model {

  defaults() {
    return {
      header: '',
      body: '',
      buttons: [],
      canDismiss: true
    }
  }

  get header():string { return this.get('header'); }
  set header(value:string) { this.set('header', value); }

  get body():string { return this.get('body'); }
  set body(value:string) { this.set('body', value); }

  get buttons():Backbone.View<Backbone.Model>[] { return this.get('buttons'); }
  set buttons(value:Backbone.View<Backbone.Model>[]) { this.set('buttons', value); }

  get canDismiss():boolean { return this.get('canDismiss'); }
  set canDismiss(value:boolean) { this.set('canDismiss', value); }

}

export class NoticeView extends ItemView.ItemView<NoticeViewModel> {

  constructor(options:INoticeViewOptions = {}) {
    this.name = 'NoticeView';
    this.template = require('hbs!./notice');
    this.tagName = 'section';
    this.ui = {
      buttons: '.NoticeView__btns'
    };
    super(options);
    this.model = this.model || new NoticeViewModel();
    if (options) {
      if (options.header) {
        this.model.set('header', options.header);
      }
      if (options.body) {
        this.model.set('body', options.body);
      }
      if (options.buttons) {
        this.model.buttons = options.buttons;
      }
    }
    this.listenTo(this.model, 'change', this.render);
  }

  _loadingView:SpinnerView.SpinnerView;
  options:INoticeViewOptions;

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

