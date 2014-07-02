define(function (require, exports, module) {'use strict';
var BaseController, app, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

BaseController = require('./Base');

app = require('app');

module.exports = (function(_super) {
  __extends(exports, _super);

  function exports(options) {
    if (options == null) {
      options = {};
    }
    this.region = options.region || app.request("default:region");
    this._instance_id = _.uniqueId("controller");
    app.execute("register:instance", this, this._instance_id);
    if (this.background) {
      app.execute('blur:background');
    }
    exports.__super__.constructor.apply(this, arguments);
  }

  exports.prototype.close = function() {
    console.log('closing', this);
    app.execute("unregister:instance", this, this._instance_id);
    return exports.__super__.close.apply(this, arguments);
  };

  exports.prototype.show = function(view, options) {
    var _ref;
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      loading: false,
      immediate: false,
      region: this.region
    });
    view = view.getMainView ? view.getMainView() : view;
    if (!view) {
      throw new Error("getMainView() did not return a view instance or " + (view != null ? (_ref = view.constructor) != null ? _ref.name : void 0 : void 0) + " is not a view instance");
    }
    this._setMainView(view);
    return this._manageView(view, options);
  };

  exports.prototype._setMainView = function(view) {
    if (this._mainView) {
      return;
    }
    this._mainView = view;
    if (view) {
      return this.listenTo(view, "close", this.close);
    }
  };

  exports.prototype._manageView = function(view, options) {
    if (options.loading || options.fetch) {
      if (_.isBoolean(options.loading)) {
        options.loading = {};
      }
      _.defaults(options.loading, {
        loadingHeader: _.result(this, 'loadingHeader'),
        loadingBody: _.result(this, 'loadingBody')
      });
      return app.execute("show:loading", view, options);
    } else {
      return options.region.show(view, options.immediate);
    }
  };

  return exports;

})(BaseController);

});
