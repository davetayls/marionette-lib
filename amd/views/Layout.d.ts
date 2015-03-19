/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
export declare class Layout<T extends Backbone.Model> extends Marionette.LayoutView<T> {
    constructor(options?: Backbone.ViewOptions<T>);
    name: string;
    template: (data: any) => string;
    regions: {
        [key: string]: any;
    };
    className: string;
}
