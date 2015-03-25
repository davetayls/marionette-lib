/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import View = require('./View');
export declare class ChildHolderView<T extends Backbone.Model> extends View.View<T> {
    constructor(options?: Backbone.ViewOptions<T>);
    children: Backbone.ChildViewContainer<T>;
    add(view: Backbone.View<T>, index?: number): void;
    protected renderChildView(view: Backbone.View<T>, index?: number): void;
    protected viewDestroyed(view: Backbone.View<T>): void;
    protected attachHtml(view: Backbone.View<T>, index?: number): void;
    render(): ChildHolderView<T>;
    empty(): void;
    onDestroy(): void;
    animateOut(cb: () => void): any;
}
export declare class GenericChildHolderView extends ChildHolderView<Backbone.Model> {
}
