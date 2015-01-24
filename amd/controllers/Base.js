define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var registry = require('../utilities/registry');
var Marionette = require('backbone.marionette');
var BaseController = (function (_super) {
    __extends(BaseController, _super);
    function BaseController(options) {
        this._instance_id = _.uniqueId('controller');
        registry.register(this, this._instance_id);
        _super.call(this, options);
    }
    BaseController.prototype.destroy = function () {
        console.log("destroying", this);
        registry.unregister(this, this._instance_id);
        _super.prototype.destroy.call(this);
    };
    BaseController.prototype.proxyEvents = function (instance, prefix) {
        var _this = this;
        return this.listenTo(instance, "all", function () {
            var args = Array.prototype.slice.call(arguments);
            var rootEvent = args[0];
            if (prefix) {
                args[0] = prefix + ":" + rootEvent;
            }
            args.push(instance);
            Marionette.triggerMethod.apply(_this, args);
        });
    };
    return BaseController;
})(Marionette.Controller);
exports.BaseController = BaseController;
//# sourceMappingURL=Base.js.map
});
