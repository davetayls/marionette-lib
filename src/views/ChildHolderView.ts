/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
import View = require('./View');

export class ChildHolderView<T extends Backbone.Model> extends View.View<T> {

  initialize(options) {
    this.children = new Backbone.ChildViewContainer<T>();
  }

  children:Backbone.ChildViewContainer<T>;

  add(view:Backbone.View<T>, index?:number) {
    this.triggerMethod('before:add:child', view);
    // Store the child view itself so we can properly
    // remove and/or destroy it later
    this.children.add(view);
    this.renderChildView(view, index);
    Marionette.triggerMethod.call(view, 'show');
    this.triggerMethod('add:child', view);
  }

  // render the child view
  renderChildView(view:Backbone.View<T>, index?:number) {
    view.render();
    this.attachHtml(view, index);
  }

  attachHtml(view:Backbone.View<T>, index?:number) {
    this.$el.append(view.el);
  }

  render() {
    this.children.call('render');
    return this;
  }

  //onShow() {
  //  this.render();
  //}

  onDestroy() {
    this.children.call('destroy');
  }

  animateOut(cb) {
    return cb.call(this);
  }
  
}

export class GenericChildHolderView extends ChildHolderView<Backbone.Model> {}
