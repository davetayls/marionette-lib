define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var NavigationController = (function (_super) {
    __extends(NavigationController, _super);
    function NavigationController() {
        _super.call(this);
        this.historyIsStarted = false;
    }
    NavigationController.prototype.to = function (route, options) {
        if (options === void 0) { options = {}; }
        Backbone.history.navigate(route, options);
        this.trigger('navigated', route);
    };
    NavigationController.prototype.getCurrentRoute = function () {
        var frag = Backbone.history.getFragment();
        if (_.isEmpty(frag)) {
            return null;
        }
        else {
            return frag;
        }
    };
    NavigationController.prototype.startHistory = function (options) {
        if (Backbone.history) {
            Backbone.history.start(options);
            this.historyIsStarted = true;
        }
    };
    return NavigationController;
})(Marionette.Controller);
exports.NavigationController = NavigationController;
//# sourceMappingURL=NavigationController.js.map
});
