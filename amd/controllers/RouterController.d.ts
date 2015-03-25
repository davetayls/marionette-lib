/// <reference path="../../typings/tsd.d.ts" />
import BaseController = require('./Base');
export interface IRouterOptions {
    actions: {
        [key: string]: IActionConfig;
    };
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
export declare class RouterController extends BaseController.BaseController {
    initialize(options: IRouterOptions): void;
    authorizeAnAction(actionName: string, actionConfig: IActionConfig): boolean;
    actionUnauthorized(actionName: string, actionConfig: IActionConfig): void;
    callActionUnauthorized(actionName: string, actionConfig: IActionConfig): any;
    defaultPolicy(): ActionPolicy;
    _setupActions(actions: {
        [key: string]: IActionConfig;
    }): void;
    _getActionConfig(actionConfig: IActionConfig): IActionConfig;
    _getActionConfigFromFn(fn: any): IActionConfig;
    _getActionFunction(actionConfig: any): Function;
    _getActionPolicy(actionConfig: IActionConfig): ActionPolicy;
    addAction(actionName: string, actionConfig: IActionConfig): void;
}
export interface IActionPolicyOptions {
    isAuthorized(actionName: string, actionConfig: IActionConfig): boolean;
}
export declare class ActionPolicy extends BaseController.BaseController {
    constructor(options?: IActionPolicyOptions);
    options: IActionPolicyOptions;
    isAuthorized(actionName: string, actionConfig: IActionConfig): boolean;
}
