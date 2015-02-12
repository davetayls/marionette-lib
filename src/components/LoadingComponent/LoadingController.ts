/// <reference path="../../../typings/tsd.d.ts" />

import AppController = require('../../controllers/App');
import SpinnerView = require('../SpinnerView/SpinnerView');
import whenFetched = require('../../utilities/whenFetched');

export interface ILoadingOptions extends AppController.IConstructorOptions {
  view:Backbone.View<Backbone.Model>;
  loadingType:string;
  monitorReadyState?:(
    realView:Backbone.View<Backbone.Model>,
    loadingView:Backbone.View<Backbone.Model>,
    readyCallback:(errors?:any)=>void) => Q.Promise<any>;
  debug?:boolean;
  entities?:any;
}

export class LoadingController extends AppController.AppController {

  constructor(options:ILoadingOptions) {
    super(options);
    _.defaults(this.options, {
      loadingType: "spinner",
      debug: false
    });
    this.entities = options.entities || this.getEntities(options.view);
    this.loadingView = this.getLoadingView();
    if (this.loadingView) {
      this.show(this.loadingView);
    }
    if (!this.options.debug) {
      this.monitorReadyState(options.view, this.loadingView);
    }
  }

  options:ILoadingOptions;
  entities:any;
  loadingView:Backbone.View<Backbone.Model>;

  getLoadingView():Backbone.View<Backbone.Model> {
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

  monitorReadyState(realView:Backbone.View<Backbone.Model>, loadingView) {
    var _viewReady = (errors) => {
      if (errors && errors.length) {
        this.showError(realView, loadingView);
      } else {
        this.showRealView(realView, loadingView);
      }
    };
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

  showRealView(realView, loadingView):void {
    switch (this.options.loadingType) {
      case "opacity":
        this.region.currentView.$el.removeAttr("style");
        break;
      case 'spinner':
        if (this.region.currentView !== loadingView && this.region._nextView !== loadingView) {
          realView.destroy();
        }
    }
    if (!(!realView || this.options.debug)) {
      this.show(realView);
    }
  }

  getEntities(view) {
    return _.chain(view).pick("model", "collection").toArray().compact().value();
  }

}

