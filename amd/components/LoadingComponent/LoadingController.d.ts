/// <reference path="../../../typings/tsd.d.ts" />
import AppController = require('../../controllers/App');
export interface ILoadingOptions extends AppController.IConstructorOptions {
    view: Marionette.View<Backbone.Model>;
    loadingType: string;
    monitorReadyState?: (realView: Backbone.View<Backbone.Model>, loadingController: LoadingController, readyCallback: (errors?: any) => void) => void;
    debug?: boolean;
    entities?: any;
}
export declare class LoadingController extends AppController.AppController {
    constructor(options: ILoadingOptions);
    options: ILoadingOptions;
    entities: any;
    loadingView: Marionette.View<Backbone.Model>;
    getLoadingView(): Marionette.View<Backbone.Model>;
    monitorReadyState(realView: Marionette.View<Backbone.Model>, loadingView: Marionette.View<Backbone.Model>): void;
    showError(realView: Marionette.View<Backbone.Model>, loadingView: Marionette.View<Backbone.Model>): JQuery;
    showRealView(realView: Marionette.View<Backbone.Model>, loadingView: Marionette.View<Backbone.Model>): void;
    getEntities(view: Marionette.View<Backbone.Model>): Marionette.View<Backbone.Model>[];
}
