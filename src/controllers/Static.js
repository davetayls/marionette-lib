/// <reference path="../../typings/tsd.d.ts" />
var _ = require('underscore');
var StaticController = (function () {
    function StaticController(options) {
        if (options === void 0) { options = {}; }
        this.tagName = 'section';
        this.cloneContext = true;
        this.options = options;
        this.model = options.model;
    }
    StaticController.prototype.attributes = function (hash) {
        return {};
    };
    StaticController.prototype.contextProperties = function () {
        return {};
    };
    StaticController.prototype.template = function () {
        if (this.options.templateFn) {
            return this.options.templateFn;
        }
        else {
            throw new Error('template not implemented');
        }
    };
    StaticController.prototype.className = function (hash) {
        if (hash === void 0) { hash = {}; }
        var classes;
        if (!this.name) {
            throw new Error('Component must specify a name');
        }
        if (hash["class"]) {
            classes = hash["class"].split(' ');
        }
        else {
            classes = [];
        }
        var attributes = _.result(this, 'attributes');
        if (attributes && attributes["class"]) {
            classes = _.union(classes, attributes["class"].split(' '));
        }
        classes.push(this.name);
        return classes.join(' ');
    };
    StaticController.prototype.getContext = function () {
        var context;
        if (this.model) {
            if (this.cloneContext) {
                context = _.clone(this.model);
                context._componentName = this.name;
            }
            else {
                context = this.model;
            }
        }
        else {
            context = {};
        }
        if (context._regions == null) {
            context._regions = [];
        }
        return context;
    };
    StaticController.prototype.getChildContext = function () {
        return this.model;
    };
    StaticController.prototype.mixinHash = function (context, hash) {
        if (hash == null) {
            hash = {};
        }
        var contextProps = _.result(this, 'contextProperties');
        if (_.isObject(contextProps)) {
            var propertyKeys = _.keys(contextProps);
            var properties = _.pick(hash, propertyKeys);
            return _.extend(context, contextProps, properties);
        }
    };
    StaticController.prototype.getComponentTemplate = function () {
        if (_.isFunction(this.template)) {
            return this.template();
        }
        else {
            throw new Error('There is no template on this static controller');
        }
    };
    StaticController.prototype.getAttributes = function (hash) {
        var attributes = this.attributes(hash);
        if (attributes) {
            attributes = _.omit(attributes, 'class');
            var attr = _.map(attributes || {}, function (val, key) {
                if (_.isString(hash[key] || _.isFinite(hash[key]))) {
                    return "" + key + "=\"" + hash[key] + "\"";
                }
                else if (_.isString(val || _.isFinite(val))) {
                    return "" + key + "=\"" + val + "\"";
                }
                else {
                    return '';
                }
            });
            if (attr.length) {
                return ' ' + attr.join(' ');
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    };
    StaticController.prototype.getInnerBody = function (context, fn) {
        if (_.isFunction(fn)) {
            return fn(context);
        }
    };
    StaticController.prototype.render = function (options) {
        if (options === void 0) { options = {}; }
        this.context = this.getContext();
        this.mixinHash(this.context, options.hash);
        this.context.className = this.className(options.hash);
        this.context.__body__ = this.getInnerBody(this.getChildContext(), options.fn);
        this.context.attributes = this.getAttributes(options.hash);
        return this.renderOuterHtml(this.context, {
            className: this.context.className,
            attributes: this.context.attributes
        });
    };
    StaticController.prototype.renderOuterHtml = function (context, options) {
        if (options === void 0) { options = {}; }
        var className = options.className;
        var attributes = options.attributes;
        var tagName = _.result(this, 'tagName');
        return ["<" + tagName, attributes, " class=\"" + className + "\"", ">\n", this.renderContentTemplate(context), "</" + tagName + ">"].join('');
    };
    StaticController.prototype.renderContentTemplate = function (context) {
        var tmpl = this.getComponentTemplate();
        return tmpl(context);
    };
    return StaticController;
})();
exports.StaticController = StaticController;
//# sourceMappingURL=Static.js.map