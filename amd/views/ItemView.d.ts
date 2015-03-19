/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
export declare class ItemView<T extends Backbone.Model> extends Marionette.ItemView<T> {
    constructor(options?: Backbone.ViewOptions<T>);
    name: string;
    defaults(): any;
    options: any;
    ui: any;
    template: any;
    className: string;
}
