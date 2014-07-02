define(function (require, exports, module) {var ComponentController, LoadingController, NoticeView, app, i18n, whenFetched,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = require('app');

i18n = require('i18n');

ComponentController = require('../../controllers/Component');

NoticeView = require('../notice/NoticeView');

whenFetched = require('../../utilities/whenFetched');

LoadingController = (function(_super) {
  __extends(LoadingController, _super);

  function LoadingController() {
    return LoadingController.__super__.constructor.apply(this, arguments);
  }

  LoadingController.prototype.initialize = function(options) {
    var config, loadingView, view;
    view = options.view, config = options.config;
    config = _.isBoolean(config) ? {} : config;
    _.defaults(config, {
      loadingType: "spinner",
      loadingHeader: i18n.t('default_loading_header'),
      loadingBody: i18n.t('default_loading_body'),
      entities: this.getEntities(view),
      debug: false
    });
    switch (config.loadingType) {
      case "opacity":
        this.region.currentView.$el.css("opacity", 0.5);
        break;
      case "spinner":
        loadingView = this.getLoadingView();
        loadingView.set({
          header: config.loadingHeader,
          body: config.loadingBody,
          canDismiss: true,
          buttons: [],
          loading: true
        });
        this.show(loadingView);
        break;
      default:
        throw new Error("Invalid loadingType");
    }
    return this.monitorReadyState(view, loadingView, config);
  };

  LoadingController.prototype.monitorReadyState = function(realView, loadingView, config) {
    return whenFetched(config.entities, (function(_this) {
      return function(errors) {
        if (errors.length) {
          return _this.showError(realView, loadingView, config);
        } else {
          return _this.showRealView(realView, loadingView, config);
        }
      };
    })(this));
  };

  LoadingController.prototype.showError = function(realView, loadingView, config) {
    var def;
    realView.close();
    def = {
      header: i18n.t('no_server_header'),
      body: i18n.t('no_server_header'),
      buttons: [new Buttons.StartAgain()],
      canDismiss: true,
      loading: false
    };
    return loadingView.set(def);
  };

  LoadingController.prototype.showRealView = function(realView, loadingView, config) {
    switch (config.loadingType) {
      case "opacity":
        this.region.currentView.$el.removeAttr("style");
        break;
      case "spinner":
        if (this.region.currentView !== loadingView && this.region._nextView !== loadingView) {
          return realView.close();
        }
    }
    if (!config.debug) {
      return this.show(realView);
    }
  };

  LoadingController.prototype.getEntities = function(view) {
    return _.chain(view).pick("model", "collection").toArray().compact().value();
  };

  LoadingController.prototype.getLoadingView = function() {
    return new NoticeView();
  };

  return LoadingController;

})(ComponentController);

app.commands.setHandler("show:loading", function(view, options) {
  return new LoadingController({
    view: view,
    region: options.region,
    config: options.loading
  });
});

});
