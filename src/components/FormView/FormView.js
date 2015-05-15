/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
var BackboneForms = require('backbone-forms');
var templates = require('./templates');
var constants = require('../../constants');
var views = require('../../views/index');
var Layout = views.Layout;
var ChildHolderView = views.ChildHolderView;
templates.init();
var FORMVIEW_EVENTS = (function (_super) {
    __extends(FORMVIEW_EVENTS, _super);
    function FORMVIEW_EVENTS() {
        _super.apply(this, arguments);
    }
    FORMVIEW_EVENTS.submitted = new FORMVIEW_EVENTS('submitted');
    return FORMVIEW_EVENTS;
})(constants.StringConstant);
exports.FORMVIEW_EVENTS = FORMVIEW_EVENTS;
var FormView = (function (_super) {
    __extends(FormView, _super);
    function FormView(options) {
        this.name = 'FormView';
        this.tagName = 'form';
        this.attributes = { role: 'form' };
        this.template = require('./FormView.hbs');
        this.regions = {
            fieldsRegion: '.FormView__fieldsRegion',
            buttonsRegion: '.FormView__buttonsRegion'
        };
        this.parseIconProperties(options.schema);
        _super.call(this);
        this.$el.addClass('FormStacked');
        this.fields = new BackboneForms(options);
        this.buttonsHolder = new ChildHolderView.GenericChildHolderView();
    }
    FormView.prototype.onDestroy = function () {
        this.$el.off();
        this.fields.stopListening();
        this.fields = null;
    };
    FormView.prototype.setListeners = function () {
        this.$el.on('submit', this.onFormSubmit.bind(this));
    };
    FormView.prototype.onShow = function () {
        this.fieldsRegion.show(this.fields);
        this.buttonsRegion.show(this.buttonsHolder);
    };
    FormView.prototype.parseIconProperties = function (schema) {
        _.each(schema, function (schemaItem) {
            if (schemaItem.icon) {
                schemaItem.title = '<i class="fa fa-' + schemaItem.icon + '"></i>';
            }
        });
    };
    FormView.prototype.onFormSubmit = function (e) {
        this.trigger(FORMVIEW_EVENTS.submitted.toString());
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    };
    FormView.prototype.disableForm = function () {
        this.$el.addClass(FormView.DISABLED_CLASS);
    };
    FormView.prototype.enableForm = function () {
        this.$el.removeClass(FormView.DISABLED_CLASS);
    };
    FormView.prototype.validate = function () {
        return this.fields.validate();
    };
    FormView.prototype.getValue = function (property) {
        return this.fields.getValue(property);
    };
    FormView.prototype.setValue = function (properties) {
        return this.fields.setValue(properties);
    };
    FormView.DISABLED_CLASS = 'FormView--disabled';
    return FormView;
})(Layout.Layout);
exports.FormView = FormView;
//# sourceMappingURL=FormView.js.map