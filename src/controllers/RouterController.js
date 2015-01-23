/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
var BaseController = require('./Base');
var RouterController = (function (_super) {
    __extends(RouterController, _super);
    function RouterController() {
        _super.apply(this, arguments);
    }
    RouterController.prototype.initialize = function (options) {
        if (options.actions) {
            this._setupActions(options.actions);
        }
    };
    RouterController.prototype.authorizeAnAction = function (actionName, actionConfig) {
        return this._getActionPolicy(actionConfig).isAuthorized(actionName, actionConfig);
    };
    RouterController.prototype.actionUnauthorized = function (actionName, actionConfig) {
        var err = new Error("" + actionName + " was unauthorized");
        err.name = 'ActionUnauthorized';
        err.actionName = actionName;
        err.actionConfig = actionConfig;
        throw err;
    };
    RouterController.prototype.callActionUnauthorized = function (actionName, actionConfig) {
        if (_.isFunction(actionConfig.unauthorized)) {
            return actionConfig.unauthorized.call(this, actionName, actionConfig);
        }
        else {
            return this.getOption('actionUnauthorized').call(this, actionName, actionConfig);
        }
    };
    RouterController.prototype.defaultPolicy = function () {
        return new ActionPolicy();
    };
    RouterController.prototype._setupActions = function (actions) {
        var _this = this;
        _.each(actions, function (config, key) {
            _this.addAction(key, config);
        });
    };
    RouterController.prototype._getActionConfig = function (actionConfig) {
        if (actionConfig == null) {
            actionConfig = {};
        }
        if (_.isFunction(actionConfig)) {
            return {
                fn: actionConfig
            };
        }
        else {
            return actionConfig;
        }
    };
    RouterController.prototype._getActionFunction = function (actionConfig) {
        if (_.isFunction(actionConfig)) {
            return actionConfig;
        }
        return actionConfig.fn;
    };
    RouterController.prototype._getActionPolicy = function (actionConfig) {
        if (_.isFunction(actionConfig) || !actionConfig.policy) {
            var defaultPolicy = this.getOption('defaultPolicy');
            if (_.isFunction(defaultPolicy)) {
                return defaultPolicy.call(this, actionConfig);
            }
            else {
                return defaultPolicy;
            }
        }
        else {
            return actionConfig.policy;
        }
    };
    RouterController.prototype.addAction = function (actionName, actionConfig) {
        var _this = this;
        actionConfig = this._getActionConfig(actionConfig);
        var _fn = this._getActionFunction(actionConfig);
        if (_.isFunction(_fn)) {
            this[actionName] = function () {
                if (_this.getOption('authorizeAnAction').call(_this, actionName, actionConfig)) {
                    try {
                        return _fn.apply(_this, arguments);
                    }
                    catch (error) {
                        if (error.name === 'ActionUnauthorized') {
                            actionConfig.internalActionError = error;
                            return _this.callActionUnauthorized(actionName, actionConfig);
                        }
                        else {
                            throw error;
                        }
                    }
                }
                else {
                    return _this.callActionUnauthorized(actionName, actionConfig);
                }
            };
        }
        else {
            throw new Error('Proxying through an authorize method requires a function');
        }
    };
    return RouterController;
})(BaseController.BaseController);
exports.RouterController = RouterController;
var ActionPolicy = (function (_super) {
    __extends(ActionPolicy, _super);
    function ActionPolicy(options) {
        _super.call(this, options);
    }
    ActionPolicy.prototype.isAuthorized = function (actionName, actionConfig) {
        if (this.options.isAuthorized) {
            return this.options.isAuthorized.call(this);
        }
        else {
            return true;
        }
    };
    return ActionPolicy;
})(BaseController.BaseController);
exports.ActionPolicy = ActionPolicy;
//# sourceMappingURL=RouterController.js.map