/// <reference path="../../../typings/tsd.d.ts" />

import AppController = require('../../controllers/App');
import SpinnerView = require('../spinner/SpinnerView');
import whenFetched = require('../../utilities/whenFetched');

export class LoadingController extends AppController.AppController {

  initialize(options:any) {
    _.defaults(this.options, {
      loadingType: "spinner",
      debug: false
    });
    this.entities = this.getOption('entities') || this.getEntities(options.view);
    this.loadingView = this.getLoadingView();
    if (this.loadingView) {
      this.show(this.loadingView);
    }
    if (!this.options.debug) {
      return this.monitorReadyState(options.view, this.loadingView);
    }
  }

  options:any;
  entities:any;
  loadingView:Backbone.View<Backbone.Model>;

  getLoadingView() {
    switch (this.options.loadingType) {
      case "opacity":
        this.region.currentView.$el.css("opacity", 0.5);
        break;
      case 'spinner':
        var loadingView = new SpinnerView.SpinnerView();
        loadingView.start();
        break;
      default:
        throw new Error("Invalid loadingType");
    }
    return loadingView;
  }

  monitorReadyState(realView, loadingView) {
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
      return whenFetched.whenFetched(this.entities, _viewReady);
    }
  }

  showError(realView, loadingView) {
    if (realView) {
      realView.destroy();
    }
    switch (this.options.loadingType) {
      case 'spinner':
        return loadingView.stop();
      default:
        throw new Error('No error handline on loading type');
    }
  }

  showRealView(realView, loadingView) {
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
  }

  getEntities(view) {
    return _.chain(view).pick("model", "collection").toArray().compact().value();
  }

}

