/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseController = require('./Base');
var ApiController = (function (_super) {
    __extends(ApiController, _super);
    function ApiController() {
        _super.apply(this, arguments);
    }
    return ApiController;
})(BaseController.BaseController);
exports.ApiController = ApiController;
//# sourceMappingURL=Api.js.map