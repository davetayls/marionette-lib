/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
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
    BUTTON_THEME.link = new BUTTON_THEME('link');
    BUTTON_THEME.primary = new BUTTON_THEME('primary');
    BUTTON_THEME.secondary = new BUTTON_THEME('secondary');
    return BUTTON_THEME;
})(constants.StringConstant);
exports.BUTTON_THEME = BUTTON_THEME;
var BUTTON_SIZE = (function (_super) {
    __extends(BUTTON_SIZE, _super);
    function BUTTON_SIZE() {
        _super.apply(this, arguments);
    }
    BUTTON_SIZE.default = new BUTTON_SIZE('default');
    BUTTON_SIZE.small = new BUTTON_SIZE('small');
    BUTTON_SIZE.large = new BUTTON_SIZE('large');
    return BUTTON_SIZE;
})(constants.StringConstant);
exports.BUTTON_SIZE = BUTTON_SIZE;
var ButtonModel = (function (_super) {
    __extends(ButtonModel, _super);
    function ButtonModel(attributes, options) {
        this.idAttribute = 'name';
        _super.call(this, attributes, options);
    }
    ButtonModel.prototype.defaults = function () {
        return {
            name: '',
            icon: '',
            text: '',
            block: true,
            theme: BUTTON_THEME.default,
            size: BUTTON_SIZE.default
        };
    };
    Object.defineProperty(ButtonModel.prototype, "name", {
        get: function () { return this.get('name'); },
        set: function (value) { this.set('name', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "icon", {
        get: function () { return this.get('icon'); },
        set: function (value) { this.set('icon', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "text", {
        get: function () { return this.get('text'); },
        set: function (value) { this.set('text', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "block", {
        get: function () { return this.get('block'); },
        set: function (value) { this.set('block', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "theme", {
        get: function () { return this.get('theme'); },
        set: function (value) { this.set('theme', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonModel.prototype, "size", {
        get: function () { return this.get('size'); },
        set: function (value) { this.set('size', value); },
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
        this.template = require('./Button.hbs');
        if (options.submit) {
            this.tagName = 'button';
        }
        else {
            this.tagName = 'a';
        }
        this.triggers = {
            'click': 'click'
        };
        this.on('click', this.navigate);
        _super.call(this, options);
        if (options)
            this.setProperties(options);
        this.setClassNames();
    }
    Object.defineProperty(Button.prototype, "className", {
        get: function () {
            return 'Button btn Button--' + this.name + 'Button';
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.getIconClass = function (iconName) {
        return 'Icon Icon--' + iconName;
    };
    Object.defineProperty(Button.prototype, "text", {
        get: function () { return this.model.text; },
        set: function (value) { this.model.text = value; },
        enumerable: true,
        configurable: true
    });
    Button.prototype.serializeData = function () {
        var data = this.model.toJSON();
        data.iconClass = this.getIconClass(this.model.icon);
        return data;
    };
    Button.prototype.navigate = function () {
        this.trigger(BUTTON_EVENTS.navigate.val, this.name);
    };
    Button.prototype.setProperties = function (options) {
        this.unsetClassNames();
        if (options.icon)
            this.model.icon = options.icon;
        if (options.text)
            this.model.text = options.text;
        if (_.isBoolean(options.block))
            this.model.block = options.block;
        if (options.theme)
            this.model.theme = options.theme;
        if (options.size)
            this.model.size = options.size;
        if (options.submit)
            this.$el.attr('type', 'submit');
    };
    Button.prototype.unsetClassNames = function () {
        if (!this.$el)
            return;
        this.$el
            .removeClass('btn-link')
            .removeClass('Button--' + this.model.theme)
            .removeClass('Button--' + this.model.size);
        this.$el.removeClass('btn-block');
    };
    Button.prototype.setClassNames = function () {
        this.$el
            .addClass('Button--' + this.model.theme)
            .addClass('Button--' + this.model.size + 'Size');
        if (this.model.theme === BUTTON_THEME.link) {
            this.$el.addClass('btn-link');
        }
        if (this.model.block) {
            this.$el.addClass('btn-block');
        }
    };
    return Button;
})(ItemView.ItemView);
exports.Button = Button;
//# sourceMappingURL=Button.js.map