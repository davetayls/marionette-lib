define(function (require, exports, module) {var AppController, LoadingController, NoticeView, SpinnerView, app, i18n, whenFetched,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = require('app');

i18n = require('i18n');

AppController = require('../../controllers/App');

NoticeView = require('../notice/NoticeView');

SpinnerView = require('../spinner/SpinnerView');

whenFetched = require('../../utilities/whenFetched');

LoadingController = (function(_super) {
  __extends(LoadingController, _super);

  function LoadingController() {
    return LoadingController.__super__.constructor.apply(this, arguments);
  }

  LoadingController.prototype.initialize = function(_arg) {
    var view;
    view = (_arg != null ? _arg : {}).view;
    _.defaults(this.options, {
      loadingType: "notice",
      loadingHeader: i18n.t('default_loading_header'),
      loadingBody: i18n.t('default_loading_body'),
      debug: false
    });
    this.entities = this.getOption('entities') || this.getEntities(view);
    this.loadingView = this.getLoadingView();
    if (this.loadingView) {
      this.show(this.loadingView);
    }
    return this.monitorReadyState(view, this.loadingView);
  };

  LoadingController.prototype.getLoadingView = function() {
    var loadingView;
    switch (this.options.loadingType) {
      case "opacity":
        this.region.currentView.$el.css("opacity", 0.5);
        break;
      case 'spinner':
        loadingView = new SpinnerView();
        loadingView.start();
        break;
      case "notice":
        loadingView = new NoticeView();
        loadingView.set({
          header: this.options.loadingHeader,
          body: this.options.loadingBody,
          canDismiss: true,
          buttons: [],
          loading: true
        });
        break;
      default:
        throw new Error("Invalid loadingType");
    }
    return loadingView;
  };

  LoadingController.prototype.monitorReadyState = function(realView, loadingView) {
    var _viewReady;
    _viewReady = (function(_this) {
      return function(errors) {
        if (errors && errors.length) {
          return _this.showError(realView, loadingView);
        } else {
          return _this.showRealView(realView, loadingView);
        }
      };
    })(this);
    if (this.options.monitorReadyState) {
      return this.options.monitorReadyState.call(this, realView, loadingView, _viewReady);
    } else {
      return whenFetched(this.entities, _viewReady);
    }
  };

  LoadingController.prototype.showError = function(realView, loadingView) {
    var def;
    if (realView) {
      realView.destroy();
    }
    switch (this.options.loadingType) {
      case 'spinner':
        return loadingView.stop();
      case 'notice':
        def = {
          header: i18n.t('no_server_header'),
          body: i18n.t('no_server_header'),
          canDismiss: true,
          loading: false
        };
        return loadingView.set(def);
      default:
        throw new Error('No error handline on loading type');
    }
  };

  LoadingController.prototype.showRealView = function(realView, loadingView) {
    switch (this.options.loadingType) {
      case "opacity":
        this.region.currentView.$el.removeAttr("style");
        break;
      case 'spinner' || 'notice':
        if (this.region.currentView !== loadingView && this.region._nextView !== loadingView) {
          return realView.destroy();
        }
    }
    if (!(!realView || this.options.debug)) {
      return this.show(realView);
    }
  };

  LoadingController.prototype.getEntities = function(view) {
    return _.chain(view).pick("model", "collection").toArray().compact().value();
  };

  return LoadingController;

})(AppController);

module.exports = LoadingController;

});
