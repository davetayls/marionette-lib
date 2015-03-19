/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
export declare class List<T extends Backbone.Model> extends Marionette.CompositeView<T> {
    constructor(options?: Backbone.ViewOptions<T>);
    name: string;
    template: (data: any) => string;
    className: string;
    animateOut(cb: any): any;
}
