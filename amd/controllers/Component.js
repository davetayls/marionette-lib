define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppController = require('./App');
var ComponentController = (function (_super) {
    __extends(ComponentController, _super);
    function ComponentController() {
        _super.apply(this, arguments);
    }
    ComponentController.prototype.show = function (view, options) {
        if (!(options.region && this._mainView)) {
            throw new Error('You should not @show the main view, use @setMainView with components and @show from the apps controller.');
        }
        else {
            return _super.prototype.show.call(this, view, options);
        }
    };
    return ComponentController;
})(AppController.AppController);
exports.ComponentController = ComponentController;
//# sourceMappingURL=Component.js.map
});
