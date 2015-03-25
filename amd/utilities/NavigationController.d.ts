/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import Marionette = require('backbone.marionette');
export declare class NavigationController extends Marionette.Controller {
    constructor();
    historyIsStarted: boolean;
    to(route: string, options?: any): void;
    getCurrentRoute(): string;
    startHistory(options?: Backbone.HistoryOptions): void;
}
