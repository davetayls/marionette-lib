var AppController, LoadingController, SpinnerView, app, whenFetched,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = require('app');

AppController = require('../../controllers/App');

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
      loadingType: "spinner",
      debug: false
    });
    this.entities = this.getOption('entities') || this.getEntities(view);
    this.loadingView = this.getLoadingView();
    if (this.loadingView) {
      this.show(this.loadingView);
    }
    if (!this.options.debug) {
      return this.monitorReadyState(view, this.loadingView);
    }
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
    if (realView) {
      realView.destroy();
    }
    switch (this.options.loadingType) {
      case 'spinner':
        return loadingView.stop();
      default:
        throw new Error('No error handline on loading type');
    }
  };

  LoadingController.prototype.showRealView = function(realView, loadingView) {
    switch (this.options.loadingType) {
      case "opacity":
        this.region.currentView.$el.removeAttr("style");
        break;
      case 'spinner':
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
