/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemView = require('../../views/ItemView');
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(options) {
        this.name = this.name || 'base-button';
        this.tagName = 'a';
        this.triggers = {
            'click': 'click'
        };
        _super.call(this, options);
    }
    Button.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.on('click', this.navigate);
    };
    Button.prototype.defaults = function () {
        return {
            icon: '',
            text: ''
        };
    };
    Object.defineProperty(Button.prototype, "className", {
        get: function () {
            return 'btn btn-block btn--' + this.name;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.navigate = function () {
        return null;
    };
    return Button;
})(ItemView.ItemView);
exports.Button = Button;
//# sourceMappingURL=Button.js.map