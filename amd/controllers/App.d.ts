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
    _mainView: Backbone.View<Backbone.Model>;
    showController(controller: AppController, options?: IShowOptions): IShowOutcome;
    show(view: Backbone.View<Backbone.Model>, options?: IShowOptions): IShowOutcome;
    getMainView(): Backbone.View<Backbone.Model>;
    setMainView(view: any): any;
    manageRegion(region: any): number;
    _manageView(view: any, options: any): void;
    destroy(): void;
}
