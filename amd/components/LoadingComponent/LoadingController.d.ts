/// <reference path="../../../typings/tsd.d.ts" />
import AppController = require('../../controllers/App');
export interface ILoadingOptions extends AppController.IConstructorOptions {
    view: Backbone.View<Backbone.Model>;
    loadingType: string;
    monitorReadyState?: (realView: Backbone.View<Backbone.Model>, loadingController: LoadingController, readyCallback: (errors?: any) => void) => void;
    debug?: boolean;
    entities?: any;
}
export declare class LoadingController extends AppController.AppController {
    constructor(options: ILoadingOptions);
    options: ILoadingOptions;
    entities: any;
    loadingView: Backbone.View<Backbone.Model>;
    getLoadingView(): Backbone.View<Backbone.Model>;
    monitorReadyState(realView: Backbone.View<Backbone.Model>, loadingView: any): void;
    showError(realView: any, loadingView: any): any;
    showRealView(realView: any, loadingView: any): void;
    getEntities(view: any): any[];
}
