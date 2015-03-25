/// <reference path="../../typings/tsd.d.ts" />
import Q = require('q');
import BaseController = require('./Base');
import AnimatedRegion = require('../components/AnimatedRegion/AnimatedRegion');
export interface IMonitorReadyState {
    (realView: Backbone.View<Backbone.Model>, loadingView: Backbone.View<Backbone.Model>, readyCallback: (errors?: any) => void): Q.Promise<any>;
}
export interface ILoadingOptions {
}
export interface IConstructorOptions {
    region?: AnimatedRegion.AnimatedRegion;
}
export interface IShowOptions {
    region?: AnimatedRegion.AnimatedRegion;
    controller?: AppController;
    monitorReadyState?: (realView: Backbone.View<Backbone.Model>, loadingView: Backbone.View<Backbone.Model>, readyCallback: (errors?: any) => void) => void;
    loading?: ILoadingOptions;
    immediate?: boolean;
}
export interface IShowOutcome {
    view: Backbone.View<Backbone.Model>;
    options: IShowOptions;
}
export declare class AppController extends BaseController.BaseController {
    constructor(options?: IConstructorOptions);
    _managedRegions: Marionette.Region[];
    _mainView: Marionette.View<Backbone.Model>;
    showController(controller: AppController, options?: IShowOptions): IShowOutcome;
    show(view: Marionette.View<Backbone.Model>, options?: IShowOptions): IShowOutcome;
    getMainView(): Marionette.View<Backbone.Model>;
    setMainView(view: Marionette.View<Backbone.Model>): any;
    manageRegion(region: Marionette.Region): number;
    _manageView(view: Marionette.View<Backbone.Model>, options: IShowOptions): void;
    destroy(): void;
}
