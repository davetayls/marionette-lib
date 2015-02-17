// Generated by dts-bundle v0.2.0
// Dependencies for this module:
//   ../typings/marionette/marionette.d.ts
//   ../typings/q/Q.d.ts
//   ../typings/backbone/backbone.d.ts
//   ../typings/spin/spin.d.ts

declare module 'marionette_lib' {
    import _config = require('__marionette_lib/config/client');
    export import config = _config.config;
    export function configure(options: _config.IConfigureOptions): void;
    export import behaviors = require('__marionette_lib/behaviors/index');
    export import Exceptions = require('__marionette_lib/Exceptions');
    export import components = require('__marionette_lib/components/index');
    export import interfaces = require('__marionette_lib/interfaces');
    import _Api = require('__marionette_lib/controllers/Api');
    import _App = require('__marionette_lib/controllers/App');
    import _Base = require('__marionette_lib/controllers/Base');
    import _Component = require('__marionette_lib/controllers/Component');
    import _Router = require('__marionette_lib/controllers/RouterController');
    import _Static = require('__marionette_lib/controllers/Static');
    export module controllers {
        export import Api = _Api;
        export import App = _App;
        export import Base = _Base;
        export import Component = _Component;
        export import Router = _Router;
        export import Static = _Static;
    }
    export import handlebars = require('__marionette_lib/handlebars/index');
    export import routers = require('__marionette_lib/routers/index');
    export import stickit = require('__marionette_lib/stickit/index');
    import _whenFetched = require('__marionette_lib/utilities/whenFetched');
    export import whenFetched = _whenFetched.whenFetched;
    export import navigation = require('__marionette_lib/utilities/navigation');
    export import registry = require('__marionette_lib/utilities/registry');
    export import views = require('__marionette_lib/views/index');
}

declare module '__marionette_lib/config/client' {
    import Marionette = require('backbone.marionette');
    export interface IConfigureOptions {
        app?: Marionette.Application;
        handlebars: HandlebarsStatic;
        componentsPath: string;
    }
    export class MarionetteLibConfiguration {
        app: Marionette.Application;
        handlebars: HandlebarsStatic;
        componentsPath: string;
        configure(options: IConfigureOptions): void;
    }
    export var config: MarionetteLibConfiguration;
}

declare module '__marionette_lib/behaviors/index' {
    import modifiers = require('__marionette_lib/behaviors/Modifiers');
    export import Modifiers = modifiers.ModifiersBehavior;
}

declare module '__marionette_lib/Exceptions' {
    export interface IException extends Error {
        stack: string;
    }
    export class Exception {
        constructor(error: Error);
        error: Error;
        name: string;
        message: string;
        stack: string;
        toString(): string;
    }
}

declare module '__marionette_lib/components/index' {
    import _Alert = require('__marionette_lib/components/alert/Alert');
    import _Loading = require('__marionette_lib/components/LoadingComponent/LoadingController');
    export import Alert = _Alert.AlertComponent;
    export import Loading = _Loading.LoadingController;
    export import NoticeView = require('__marionette_lib/components/NoticeView/NoticeView');
    export import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
}

declare module '__marionette_lib/interfaces' {
    export interface IFetchResolution {
        response: any;
        status: number;
        failed: boolean;
    }
    export interface IFetchModelResolution extends IFetchResolution {
        options: Backbone.ModelFetchOptions;
    }
    export interface IFetchCollectionResolution extends IFetchResolution {
        options: Backbone.CollectionFetchOptions;
    }
    export interface IFetchableModel {
        _fetch: Q.Promise<IFetchModelResolution>;
    }
    export interface IFetchableCollection {
        _fetch: Q.Promise<IFetchCollectionResolution>;
    }
}

declare module '__marionette_lib/controllers/Api' {
    import BaseController = require('__marionette_lib/controllers/Base');
    export interface IApiControllerOptions {
    }
    export class ApiController extends BaseController.BaseController {
    }
}

declare module '__marionette_lib/controllers/App' {
    import Q = require('q');
    import BaseController = require('__marionette_lib/controllers/Base');
    import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
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
    export class AppController extends BaseController.BaseController {
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
}

declare module '__marionette_lib/controllers/Base' {
    import Marionette = require('backbone.marionette');
    import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
    export class BaseController extends Marionette.Controller {
        constructor(options?: any);
        _instance_id: string;
        region: AnimatedRegion.AnimatedRegion;
        destroy(): void;
        proxyEvents(instance: any, prefix?: string): void;
    }
}

declare module '__marionette_lib/controllers/Component' {
    import AppController = require('__marionette_lib/controllers/App');
    export class ComponentController extends AppController.AppController {
        show(view: Backbone.View<Backbone.Model>, options: any): AppController.IShowOutcome;
    }
}

declare module '__marionette_lib/controllers/RouterController' {
    import BaseController = require('__marionette_lib/controllers/Base');
    export interface IRouterOptions {
        actions: IActionConfig[];
    }
    export interface IActionConfig {
        fn: Function;
        policy?: ActionPolicy;
        unauthorized?: (actionName: string, actionConfig: IActionConfig) => void;
        internalActionError?: IActionUnauthorizedError;
    }
    export interface IActionUnauthorizedError extends Error {
        actionName: string;
        actionConfig: IActionConfig;
    }
    export class RouterController extends BaseController.BaseController {
        initialize(options: IRouterOptions): void;
        authorizeAnAction(actionName: string, actionConfig: IActionConfig): boolean;
        actionUnauthorized(actionName: string, actionConfig: IActionConfig): void;
        callActionUnauthorized(actionName: string, actionConfig: IActionConfig): any;
        defaultPolicy(): ActionPolicy;
        _setupActions(actions: IActionConfig[]): void;
        _getActionConfig(actionConfig: any): any;
        _getActionFunction(actionConfig: any): Function;
        _getActionPolicy(actionConfig: IActionConfig): ActionPolicy;
        addAction(actionName: string, actionConfig: IActionConfig): void;
    }
    export interface IActionPolicyOptions {
        isAuthorized(actionName: string, actionConfig: IActionConfig): boolean;
    }
    export class ActionPolicy extends BaseController.BaseController {
        constructor(options?: IActionPolicyOptions);
        options: IActionPolicyOptions;
        isAuthorized(actionName: string, actionConfig: IActionConfig): boolean;
    }
}

declare module '__marionette_lib/controllers/Static' {
    export interface IStaticControllerOptions {
        model?: any;
    }
    export class StaticController {
        constructor(options?: IStaticControllerOptions);
        name: string;
        options: IStaticControllerOptions;
        model: any;
        tagName: string;
        cloneContext: boolean;
        context: any;
        attributes(hash: any): {
            [index: string]: string;
        };
        contextProperties(): {
            [index: string]: any;
        };
        template(): Function;
        className(hash?: any): string;
        getContext(): any;
        getChildContext(): any;
        mixinHash(context: any, hash: any): any;
        getComponentTemplate(): Function;
        getAttributes(hash: any): string;
        getInnerBody(context: any, fn: any): any;
        render(options: any): string;
        renderOuterHtml(context: any, _arg: any): string;
        renderContentTemplate(context: any): any;
    }
}

declare module '__marionette_lib/handlebars/index' {
    export import components = require('__marionette_lib/handlebars/components');
    export import i18next = require('__marionette_lib/handlebars/i18next');
}

declare module '__marionette_lib/routers/index' {
    export import App = require('__marionette_lib/routers/App');
}

declare module '__marionette_lib/stickit/index' {
    export import mdown = require('__marionette_lib/stickit/mdown');
}

declare module '__marionette_lib/utilities/whenFetched' {
    import Q = require('q');
    export interface IWhenFetchedEntity {
        _fetch: Q.Promise<IFetchResolution>;
    }
    export interface IFetchResolution {
        response: any;
        options: any;
        status: number;
        failed: boolean;
    }
    export function whenFetched(entities: IWhenFetchedEntity[], callback: (errors?: any[]) => any): void;
}

declare module '__marionette_lib/utilities/navigation' {
    import Backbone = require('backbone');
    export var historyIsStarted: boolean;
    export function to(route: any, options?: any): boolean;
    export function getCurrentRoute(): string;
    export function startHistory(options?: Backbone.HistoryOptions): void;
}

declare module '__marionette_lib/utilities/registry' {
    export interface IRegistryDestroyable {
        destroy(): any;
    }
    export interface IRegistryItem {
        region: IRegistryDestroyable;
    }
    export var _registry: {
        [index: string]: IRegistryItem;
    };
    export function register(instance: IRegistryItem, id: string): void;
    export function unregister(instance: IRegistryItem, id: string): void;
    export interface IRegistryState {
        count: number;
        previous: number;
        msg: string;
    }
    export function resetRegistry(): IRegistryState;
    export function getRegistrySize(): number;
}

declare module '__marionette_lib/views/index' {
    export import ChildHolderView = require('__marionette_lib/views/ChildHolderView');
    export import View = require('__marionette_lib/views/View');
    export import ItemView = require('__marionette_lib/views/ItemView');
    export import Layout = require('__marionette_lib/views/Layout');
    export import List = require('__marionette_lib/views/List');
}

declare module '__marionette_lib/behaviors/Modifiers' {
    import Marionette = require('backbone.marionette');
    export interface IModifiedOptions {
        remove?: boolean;
        toggle?: boolean;
    }
    export class ModifiersBehavior extends Marionette.Behavior {
        addModifier(modifier: string): boolean;
        removeModifier(modifier: string): boolean;
        toggleModifier(modifier: string): boolean;
        onModified(modifier: string, options?: IModifiedOptions): void;
    }
}

declare module '__marionette_lib/components/alert/Alert' {
    import Backbone = require('backbone');
    import ItemView = require('__marionette_lib/views/ItemView');
    export class AlertComponent extends ItemView.ItemView<Backbone.Model> {
        name: string;
        template: any;
        templateHelpers(): {
            message: any;
        };
        onShow(): void;
    }
}

declare module '__marionette_lib/components/LoadingComponent/LoadingController' {
    import AppController = require('__marionette_lib/controllers/App');
    export interface ILoadingOptions extends AppController.IConstructorOptions {
        view: Backbone.View<Backbone.Model>;
        loadingType: string;
        monitorReadyState?: (realView: Backbone.View<Backbone.Model>, loadingController: LoadingController, readyCallback: (errors?: any) => void) => void;
        debug?: boolean;
        entities?: any;
    }
    export class LoadingController extends AppController.AppController {
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
}

declare module '__marionette_lib/components/NoticeView/NoticeView' {
    import Backbone = require('backbone');
    import ItemView = require('__marionette_lib/views/ItemView');
    import SpinnerView = require('__marionette_lib/components/SpinnerView/SpinnerView');
    export interface INoticeProperties {
        header?: string;
        body?: string;
        buttons?: Marionette.View<Backbone.Model>[];
        canDismiss?: boolean;
        loading?: boolean;
    }
    export interface INoticeViewOptions extends INoticeProperties, Backbone.ViewOptions<NoticeViewModel> {
    }
    export class NoticeViewModel extends Backbone.Model {
        defaults(): {
            header: string;
            body: string;
            buttons: any[];
            canDismiss: boolean;
        };
        header: string;
        body: string;
        buttons: Marionette.View<Backbone.Model>[];
        canDismiss: boolean;
    }
    export class NoticeView extends ItemView.ItemView<NoticeViewModel> {
        constructor(options?: INoticeViewOptions);
        _loadingView: SpinnerView.SpinnerView;
        options: INoticeViewOptions;
        onRender(): void;
        canDismiss(): any;
        hide(): JQuery;
        show(): JQuery;
        set(properties: INoticeProperties): JQuery;
        destroyButtons(): void;
        onButtonClicked(): any;
    }
}

declare module '__marionette_lib/components/AnimatedRegion/AnimatedRegion' {
    import Marionette = require('backbone.marionette');
    export class AnimatedRegion extends Marionette.Region {
        currentView: Backbone.View<Backbone.Model>;
        _nextView: Backbone.View<Backbone.Model>;
    }
}

declare module '__marionette_lib/handlebars/components' {
    import StaticController = require('__marionette_lib/controllers/Static');
    export function initComponents(components: {
        [key: string]: StaticController.StaticController;
    }): void;
}

declare module '__marionette_lib/handlebars/i18next' {
    export function init(): void;
}

declare module '__marionette_lib/routers/App' {
    import Marionette = require('backbone.marionette');
    export enum APP_ROUTER_EVENTS {
        firstRoute = 0,
    }
    export class AppRouter extends Marionette.AppRouter {
        static _firstRouteTriggered: boolean;
        onRoute(routeName: string, routePath: string, routeArgs: any): void;
    }
}

declare module '__marionette_lib/stickit/mdown' {
    export var selector: string;
    export var updateMethod: string;
}

declare module '__marionette_lib/views/ChildHolderView' {
    import Backbone = require('backbone');
    import View = require('__marionette_lib/views/View');
    export class ChildHolderView<T extends Backbone.Model> extends View.View<T> {
        initialize(options: any): void;
        children: Backbone.ChildViewContainer<T>;
        add(view: Backbone.View<T>): JQuery;
        render(): ChildHolderView<T>;
        onDestroy(): void;
        animateOut(cb: any): any;
    }
}

declare module '__marionette_lib/views/View' {
    import Marionette = require('backbone.marionette');
    export class View<T extends Backbone.Model> extends Marionette.View<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        className: string;
        getUi(key: string): JQuery;
    }
}

declare module '__marionette_lib/views/ItemView' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class ItemView<T extends Backbone.Model> extends Marionette.ItemView<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        defaults(): any;
        options: any;
        ui: any;
        template: any;
        className: string;
    }
}

declare module '__marionette_lib/views/Layout' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class Layout<T extends Backbone.Model> extends Marionette.LayoutView<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        template: (data: any) => string;
        regions: {
            [key: string]: any;
        };
        className: string;
    }
}

declare module '__marionette_lib/views/List' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class List<T extends Backbone.Model> extends Marionette.CompositeView<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        template: (data: any) => string;
        className: string;
        animateOut(cb: any): any;
    }
}

declare module '__marionette_lib/components/SpinnerView/SpinnerView' {
    import View = require('__marionette_lib/views/View');
    import Spin = require('spin');
    export class SpinnerView extends View.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>);
        loadingDelay: number;
        loadingClass: string;
        loadingTimeout: number;
        loadingSpinner: Spin;
        static spinOptions: {
            lines: number;
            length: number;
            width: number;
            radius: number;
            corners: number;
            rotate: number;
            direction: number;
            color: string;
            speed: number;
            trail: number;
            shadow: boolean;
            hwaccel: boolean;
            className: string;
            zIndex: number;
            top: string;
            left: string;
        };
        start(): void;
        stop(): JQuery;
    }
}

