define(function (require, exports, module) {'use strict';
var AppController, BaseController, app, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

BaseController = require('./Base');

app = require('app');

AppController = (function(_super) {
  __extends(AppController, _super);

  function AppController(options) {
    if (options == null) {
      options = {};
    }
    this._managedRegions = [];
    this.region = this.region || options.region || app.request("default:region");
    AppController.__super__.constructor.apply(this, arguments);
  }

  AppController.prototype.show = function(view, options) {
    var _ref;
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      loading: false,
      immediate: false,
      region: this.region
    });
    if (view.getMainView) {
      options.controller = view;
      options.monitorReadyState = view.getOption('monitorReadyState');
      view = view.getMainView();
    }
    if (!view) {
      throw new Error("getMainView() did not return a view instance or " + (view != null ? (_ref = view.constructor) != null ? _ref.name : void 0 : void 0) + " is not a view instance");
    }
    this.setMainView(view);
    this._manageView(view, options);
    return {
      view: view,
      options: options
    };
  };

  AppController.prototype.getMainView = function() {
    return this._mainView;
  };

  AppController.prototype.setMainView = function(view) {
    if (this._mainView) {
      return;
    }
    this._mainView = view;
    if (view) {
      return this.listenTo(view, "destroy", this.destroy);
    }
  };

  AppController.prototype._manageRegion = function(region) {
    return this._managedRegions.push(region);
  };

  AppController.prototype._manageView = function(view, options) {
    if (options.loading) {
      if (_.isBoolean(options.loading)) {
        options.loading = {};
      }
      _.defaults(options.loading, {
        loadingHeader: _.result(this, 'loadingHeader'),
        loadingBody: _.result(this, 'loadingBody'),
        monitorReadyState: options.monitorReadyState
      });
      return app.execute("show:loading", view, options);
    } else {
      return options.region.show(view, options.immediate);
    }
  };

  AppController.prototype.destroy = function() {
    _.invoke(this._managedRegions, 'animateEmpty');
    this._managedRegions = null;
    return AppController.__super__.destroy.apply(this, arguments);
  };

  return AppController;

})(BaseController);

module.exports = AppController;

});
