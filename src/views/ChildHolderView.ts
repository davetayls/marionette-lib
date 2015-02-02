/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
import View = require('./View');

export class ChildHolderView<T extends Backbone.Model> extends View.View<T> {

  initialize(options) {
    this.children = new Backbone.ChildViewContainer<T>();
  }

  children:Backbone.ChildViewContainer<T>;

  add(view:Backbone.View<T>) {
    this.children.add(view);
    return this.$el.append(view.el);
  }

  render() {
    this.children.call('render');
    return this;
  }

  onDestroy() {
    this.children.call('destroy');
  }

  animateOut(cb) {
    return cb.call(this);
  }
  
}
