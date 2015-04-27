/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
import View = require('./View');

export class ChildHolderView<T extends Backbone.Model> extends View.View<T> {

  constructor(options?: Backbone.ViewOptions<T>) {
    this.children = new Backbone.ChildViewContainer<T>();
    super(options);
  }

  children:Backbone.ChildViewContainer<T>;
  private isHidden:boolean;

  add(view:Backbone.View<T>, index?:number) {
    this.triggerMethod('before:add:child', view);
    // Store the child view itself so we can properly
    // remove and/or destroy it later
    this.children.add(view);
    this.listenTo(view, 'destroy', () => {
      this.viewDestroyed(view);
    });
    this.renderChildView(view, index);
    Marionette.triggerMethod.call(view, 'show');
    this.triggerMethod('add:child', view);
  }

  // render the child view
  protected renderChildView(view:Backbone.View<T>, index?:number) {
    view.render();
    this.attachHtml(view, index);
  }

  protected viewDestroyed(view:Backbone.View<T>):void {
    this.children.remove(view);
  }

  protected attachHtml(view:Backbone.View<T>, index?:number) {
    this.$el.append(view.el);
  }

  render() {
    this.children.call('render');
    return this;
  }

  empty():void {
    this.children.call('destroy');
  }

  onDestroy() {
    this.empty();
  }

  animateOut(cb:()=>void) {
    return cb.call(this);
  }

  hideView():void {
    if (this.isHidden) return;
    this.$el.hide();
    this.isHidden = true;
  }

  showView(show = true):void {
    if (show === false) {
      this.hideView();
    } else {
      if (!this.isHidden) return;
      this.$el.show();
      this.isHidden = false;
    }
  }

}

export class GenericChildHolderView extends ChildHolderView<Backbone.Model> {}
