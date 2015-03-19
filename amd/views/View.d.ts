/// <reference path="../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
export declare class View<T extends Backbone.Model> extends Marionette.View<T> {
    constructor(options?: Backbone.ViewOptions<T>);
    name: string;
    className: string;
    getUi(key: string): JQuery;
}
