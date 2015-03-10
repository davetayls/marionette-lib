define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
var BaseController = require('./Base');
var clientConfig = require('../config/client');
var AppController = (function (_super) {
    __extends(AppController, _super);
    function AppController(options) {
        if (options === void 0) { options = {}; }
        this._managedRegions = [];
        this.region = this.region || options.region || clientConfig.config.defaultRegion;
        _super.call(this, options);
    }
    AppController.prototype.showController = function (controller, options) {
        if (options === void 0) { options = {}; }
        options.controller = controller;
        options.monitorReadyState = controller.getOption('monitorReadyState');
        return this.show(controller.getMainView(), options);
    };
    AppController.prototype.show = function (view, options) {
        if (options === void 0) { options = {}; }
        _.defaults(options, {
            loading: null,
            immediate: false,
            region: this.region
        });
        if (!view) {
            throw new Error("A view instance is required");
        }
        this.setMainView(view);
        this._manageView(view, options);
        return {
            view: view,
            options: options
        };
    };
    AppController.prototype.getMainView = function () {
        return this._mainView;
    };
    AppController.prototype.setMainView = function (view) {
        if (this._mainView) {
            return;
        }
        this._mainView = view;
        if (view) {
            return this.listenTo(view, "destroy", this.destroy);
        }
    };
    AppController.prototype.manageRegion = function (region) {
        return this._managedRegions.push(region);
    };
    AppController.prototype._manageView = function (view, options) {
        if (options.loading) {
            if (_.isBoolean(options.loading)) {
                options.loading = {};
            }
            _.defaults(options.loading, {
                loadingHeader: _.result(this, 'loadingHeader'),
                loadingBody: _.result(this, 'loadingBody'),
                monitorReadyState: options.monitorReadyState
            });
            clientConfig.config.app.execute("show:loading", view, options);
        }
        else {
            options.region.show(view, options.immediate);
        }
    };
    AppController.prototype.destroy = function () {
        _.invoke(this._managedRegions, 'animateEmpty');
        this._managedRegions = null;
        _super.prototype.destroy.call(this);
    };
    return AppController;
})(BaseController.BaseController);
exports.AppController = AppController;
//# sourceMappingURL=App.js.map
});
