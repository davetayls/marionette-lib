define(function (require, exports, module) {var ActionPolicy, BaseController, RouterController, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

BaseController = require('./Base');

RouterController = (function(_super) {
  __extends(RouterController, _super);

  function RouterController() {
    return RouterController.__super__.constructor.apply(this, arguments);
  }

  RouterController.prototype.initialize = function(_arg) {
    var actions;
    actions = _arg.actions;
    if (actions) {
      return this._setupActions(actions);
    }
  };

  RouterController.prototype.authorizeAnAction = function(actionName, actionConfig) {
    return this._getActionPolicy(actionConfig).isAuthorized(actionName, actionConfig);
  };

  RouterController.prototype.actionUnauthorized = function(actionName, actionConfig) {
    var err;
    err = new Error("" + actionName + " was unauthorized");
    err.actionName = actionName;
    err.actionConfig = actionConfig;
    throw err;
  };

  RouterController.prototype.defaultPolicy = function() {
    return new ActionPolicy();
  };

  RouterController.prototype._setupActions = function(actions) {
    return _.each(actions, (function(_this) {
      return function(config, key) {
        return _this.addAction(key, config);
      };
    })(this));
  };

  RouterController.prototype._getActionConfig = function(actionConfig) {
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
  };

  RouterController.prototype._getActionFunction = function(actionConfig) {
    if (actionConfig == null) {
      actionConfig = {};
    }
    if (_.isFunction(actionConfig)) {
      return actionConfig;
    }
    return actionConfig.fn;
  };

  RouterController.prototype._getActionPolicy = function(actionConfig) {
    var defaultPolicy;
    if (actionConfig == null) {
      actionConfig = {};
    }
    if (_.isFunction(actionConfig) || !actionConfig.policy) {
      defaultPolicy = this.getOption('defaultPolicy');
      if (_.isFunction(defaultPolicy)) {
        return defaultPolicy.call(this, actionConfig);
      } else {
        return defaultPolicy;
      }
    } else {
      return actionConfig.policy;
    }
  };

  RouterController.prototype.addAction = function(actionName, actionConfig) {
    var _fn;
    actionConfig = this._getActionConfig(actionConfig);
    _fn = this._getActionFunction(actionConfig);
    if (_.isFunction(_fn)) {
      return this[actionName] = (function(_this) {
        return function() {
          if (_this.getOption('authorizeAnAction').call(_this, actionName, actionConfig)) {
            return _fn.apply(_this, arguments);
          } else {
            if (_.isFunction(actionConfig.unauthorized)) {
              return actionConfig.unauthorized.call(_this, actionName, actionConfig);
            } else {
              return _this.getOption('actionUnauthorized').call(_this, actionName, actionConfig);
            }
          }
        };
      })(this);
    } else {
      throw new Error('Proxying through an authorize method requires a function');
    }
  };

  return RouterController;

})(BaseController);

ActionPolicy = (function(_super) {
  __extends(ActionPolicy, _super);

  function ActionPolicy() {
    return ActionPolicy.__super__.constructor.apply(this, arguments);
  }

  ActionPolicy.prototype.isAuthorized = function() {
    if (this.options.isAuthorized) {
      return this.options.isAuthorized.apply(this, arguments);
    } else {
      return true;
    }
  };

  return ActionPolicy;

})(BaseController);

RouterController.ActionPolicy = ActionPolicy;

module.exports = RouterController;

});
