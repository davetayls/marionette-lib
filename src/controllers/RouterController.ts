/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import BaseController = require('./Base');

export interface IRouterOptions {
  actions:IActionConfig[];
}

export interface IActionConfig {
  fn:Function;
  policy?:ActionPolicy;
  unauthorized?:(actionName:string, actionConfig:IActionConfig) => void;
  internalActionError?:IActionUnauthorizedError;
}

export interface IActionUnauthorizedError extends Error {
  actionName:string;
  actionConfig:IActionConfig;
}

export class RouterController extends BaseController.BaseController {

  initialize(options:IRouterOptions) {
    if (options.actions) {
      this._setupActions(options.actions);
    }
  }

  authorizeAnAction(actionName:string, actionConfig:IActionConfig) {
    return this._getActionPolicy(actionConfig).isAuthorized(actionName, actionConfig);
  }

  actionUnauthorized(actionName:string, actionConfig:IActionConfig) {
    var err = <IActionUnauthorizedError>new Error("" + actionName + " was unauthorized");
    err.name = 'ActionUnauthorized';
    err.actionName = actionName;
    err.actionConfig = actionConfig;
    throw err;
  }

  callActionUnauthorized(actionName:string, actionConfig:IActionConfig) {
    if (_.isFunction(actionConfig.unauthorized)) {
      return actionConfig.unauthorized.call(this, actionName, actionConfig);
    } else {
      return this.getOption('actionUnauthorized').call(this, actionName, actionConfig);
    }
  }

  defaultPolicy():ActionPolicy {
    return new ActionPolicy();
  }

  _setupActions(actions:IActionConfig[]):void {
    _.each(actions, (config:IActionConfig, key) => {
      this.addAction(key, config);
    });
  }

  _getActionConfig(actionConfig) {
    if (actionConfig == null) {
      actionConfig = {};
    }
    if (_.isFunction(actionConfig)) {
      return {
        fn: actionConfig
      };
    } else {
      return actionConfig;
    }
  }

  _getActionFunction(actionConfig:any):Function {
    if (_.isFunction(actionConfig)) {
      return actionConfig;
    }
    return actionConfig.fn;
  }

  _getActionPolicy(actionConfig:IActionConfig):ActionPolicy {
    if (_.isFunction(actionConfig) || !actionConfig.policy) {
      var defaultPolicy = this.getOption('defaultPolicy');
      if (_.isFunction(defaultPolicy)) {
        return defaultPolicy.call(this, actionConfig);
      } else {
        return defaultPolicy;
      }
    } else {
      return actionConfig.policy;
    }
  }

  addAction(actionName:string, actionConfig:IActionConfig):void {
    actionConfig = this._getActionConfig(actionConfig);
    var _fn = this._getActionFunction(actionConfig);
    if (_.isFunction(_fn)) {
      this[actionName] = () => {
        if (this.getOption('authorizeAnAction').call(this, actionName, actionConfig)) {
          try {
            return _fn.apply(this, arguments);
          } catch (error) {
            if (error.name === 'ActionUnauthorized') {
              actionConfig.internalActionError = error;
              return this.callActionUnauthorized(actionName, actionConfig);
            } else {
              throw error;
            }
          }
        } else {
          return this.callActionUnauthorized(actionName, actionConfig);
        }
      }
    } else {
      throw new Error('Proxying through an authorize method requires a function');
    }
  }

}

export interface IActionPolicyOptions {
  isAuthorized(actionName:string, actionConfig:IActionConfig):boolean;
}

export class ActionPolicy extends BaseController.BaseController {

  constructor(options?:IActionPolicyOptions) {
    super(options);
  }

  isAuthorized(actionName:string, actionConfig:IActionConfig):boolean {
    if (this.options.isAuthorized) {
      return this.options.isAuthorized.call(this);
    } else {
      return true;
    }
  }

  options:IActionPolicyOptions;

}


