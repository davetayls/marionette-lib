/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import ItemView = require('../../views/ItemView');
import SpinnerView = require('../SpinnerView/SpinnerView');

export interface INoticeProperties {
  header?:string;
  body?:string;
  buttons?:Marionette.View<Backbone.Model>[];
  canDismiss?:boolean;
  loading?:boolean;
}

export interface INoticeViewOptions extends INoticeProperties,Backbone.ViewOptions<NoticeViewModel> {}

export class NoticeViewModel extends Backbone.Model {

  defaults():INoticeProperties {
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

  get buttons():Marionette.View<Backbone.Model>[] { return this.get('buttons'); }

  get canDismiss():boolean { return this.get('canDismiss'); }
  set canDismiss(value:boolean) { this.set('canDismiss', value); }

  get loading():boolean { return this.get('loading'); }
  set loading(value:boolean) { this.set('loading', value); }

}

export class NoticeView extends ItemView.ItemView<NoticeViewModel> {

  constructor(options:INoticeViewOptions = {}) {
    this.name = 'NoticeView';
    this.template = require('./notice.hbs');
    this.tagName = 'section';
    this.ui = {
      buttons: '.NoticeView__btns'
    };
    super(options);
    this.model = this.model || new NoticeViewModel();
    if (options.header) {
      this.model.header = options.header;
    }
    if (options.body) {
      this.model.body = options.body;
    }
    if (options.buttons) {
      this.model.buttons = options.buttons;
    }
    if (_.isBoolean(options.loading)) {
      this.model.loading = options.loading;
    }
    if (_.isBoolean(options.canDismiss)) {
      this.model.canDismiss = options.canDismiss;
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
    this.model.get('buttons').forEach((btn:Marionette.View<any>) => {
        btn.render();
        this.listenTo(btn, 'click', this.onButtonClicked);
        this.ui.buttons.append(btn.el);
    });
  }

  canDismiss() {
    return this.model.get('canDismiss');
  }

  hide():void {
    this.hideView();
  }

  hideView():void {
    super.hideView();
    if (this._loadingView) {
      this._loadingView.stop();
    }
  }

  show():void {
    this.showView();
  }

  set(properties:INoticeProperties) {
    this.model.set(properties);
    return this.show();
  }

  destroyButtons() {
    this.model.buttons.forEach(function(btn) {
      btn.destroy();
    });
    this.model.buttons.length = 0;
  }

  onButtonClicked() {
    return this.trigger('button:clicked');
  }

}

