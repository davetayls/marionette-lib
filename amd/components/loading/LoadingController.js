define(function (require, exports, module) {/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppController = require('../../controllers/App');
var SpinnerView = require('../spinner/SpinnerView');
var whenFetched = require('../../utilities/whenFetched');
var LoadingController = (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        _super.apply(this, arguments);
    }
    LoadingController.prototype.initialize = function (options) {
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
    };
    LoadingController.prototype.getLoadingView = function () {
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
    };
    LoadingController.prototype.monitorReadyState = function (realView, loadingView) {
        var _viewReady;
        _viewReady = (function (_this) {
            return function (errors) {
                if (errors && errors.length) {
                    return _this.showError(realView, loadingView);
                }
                else {
                    return _this.showRealView(realView, loadingView);
                }
            };
        })(this);
        if (this.options.monitorReadyState) {
            return this.options.monitorReadyState.call(this, realView, loadingView, _viewReady);
        }
        else {
            return whenFetched.whenFetched(this.entities, _viewReady);
        }
    };
    LoadingController.prototype.showError = function (realView, loadingView) {
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
    LoadingController.prototype.showRealView = function (realView, loadingView) {
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
    LoadingController.prototype.getEntities = function (view) {
        return _.chain(view).pick("model", "collection").toArray().compact().value();
    };
    return LoadingController;
})(AppController.AppController);
//# sourceMappingURL=LoadingController.js.map
});
