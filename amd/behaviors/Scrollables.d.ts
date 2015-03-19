/// <reference path="../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
export interface IScrollablesOptions {
    [key: string]: string;
}
export declare class ScrollablesBehavior extends Marionette.Behavior {
    options: IScrollablesOptions;
    onShow(): void;
}
