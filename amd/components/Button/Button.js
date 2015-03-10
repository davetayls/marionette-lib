define(function (require, exports, module) {/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Backbone = require('backbone');
var constants = require('../../constants');
var ItemView = require('../../views/ItemView');
var BUTTON_EVENTS = (function (_super) {
    __extends(BUTTON_EVENTS, _super);
    function BUTTON_EVENTS() {
        _super.apply(this, arguments);
    }
    BUTTON_EVENTS.navigate = new BUTTON_EVENTS('navigate');
    return BUTTON_EVENTS;
})(constants.StringConstant);
exports.BUTTON_EVENTS = BUTTON_EVENTS;
var BUTTON_THEME = (function (_super) {
    __extends(BUTTON_THEME, _super);
    function BUTTON_THEME() {
        _super.apply(this, arguments);
    }
    BUTTON_THEME.default = new BUTTON_THEME('default');
    BUTTON_THEME.inverse = new BUTTON_THEME('inverse');
    BUTTON_THEME.action = new BUTTON_THEME('action');
    return BUTTON_THEME;
})(constants.StringConstant);
exports.BUTTON_THEME = BUTTON_THEME;
var ButtonModel = (function (_super) {
    __extends(ButtonModel, _super);
    function ButtonModel() {
        _super.apply(this, arguments);
    }
    ButtonModel.prototype.defaults = function () {
        return {
            name: '',
            icon: '',
            text: '',
            theme: BUTTON_THEME.default
        };
    };
    Object.defineProperty(ButtonModel.prototype, "name", {
        get: function () {
            return this.get('name');
        },
        set: function (value) {
            this.set('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        set: function (value) {
            this.set('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "text", {
        get: function () {
            return this.get('text');
        },
        set: function (value) {
            this.set('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "theme", {
        get: function () {
            return this.get('theme');
        },
        set: function (value) {
            this.set('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    return ButtonModel;
})(Backbone.Model);
exports.ButtonModel = ButtonModel;
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(options) {
        this.model = options.model || new ButtonModel(this.defaults());
        this.name = options.name || this.model.name || 'base-button';
        if (options)
            this.setOptions(options);
        this.template = require('hbs!./Button');
        this.tagName = 'a';
        this.triggers = {
            'click': 'click'
        };
        this.on('click', this.navigate);
        _super.call(this, options);
        this.$el.addClass('Button--' + this.model.theme.toString());
    }
    Object.defineProperty(Button.prototype, "className", {
        get: function () {
            return 'Button btn btn-block Button--' + this.name + 'Button';
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.navigate = function () {
        this.trigger(BUTTON_EVENTS.navigate.val, this.name);
    };
    Button.prototype.setOptions = function (options) {
        if (options.icon)
            this.model.icon = options.icon;
        if (options.text)
            this.model.text = options.text;
        if (options.theme)
            this.model.theme = options.theme;
    };
    return Button;
})(ItemView.ItemView);
exports.Button = Button;
//# sourceMappingURL=Button.js.map
});
