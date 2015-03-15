/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemView = require('../../views/ItemView');
var AlertComponent = (function (_super) {
    __extends(AlertComponent, _super);
    function AlertComponent(options) {
        this.name = 'alert';
        this.template = require('hbs!./alert');
        _super.call(this, options);
    }
    AlertComponent.prototype.templateHelpers = function () {
        return {
            message: this.options.message
        };
    };
    AlertComponent.prototype.onShow = function () {
        this.$el.addClass('alert-' + (this.options.alertType || 'info'));
    };
    return AlertComponent;
})(ItemView.ItemView);
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=Alert.js.map