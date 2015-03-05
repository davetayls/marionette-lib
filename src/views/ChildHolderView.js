/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var View = require('./View');
var ChildHolderView = (function (_super) {
    __extends(ChildHolderView, _super);
    function ChildHolderView() {
        _super.apply(this, arguments);
    }
    ChildHolderView.prototype.initialize = function (options) {
        this.children = new Backbone.ChildViewContainer();
    };
    ChildHolderView.prototype.add = function (view, index) {
        this.triggerMethod('before:add:child', view);
        // Store the child view itself so we can properly
        // remove and/or destroy it later
        this.children.add(view);
        this.renderChildView(view, index);
        Marionette.triggerMethod.call(view, 'show');
        this.triggerMethod('add:child', view);
    };
    // render the child view
    ChildHolderView.prototype.renderChildView = function (view, index) {
        view.render();
        this.attachHtml(view, index);
    };
    ChildHolderView.prototype.attachHtml = function (view, index) {
        this.$el.append(view.el);
    };
    ChildHolderView.prototype.render = function () {
        this.children.call('render');
        return this;
    };
    //onShow() {
    //  this.render();
    //}
    ChildHolderView.prototype.onDestroy = function () {
        this.children.call('destroy');
    };
    ChildHolderView.prototype.animateOut = function (cb) {
        return cb.call(this);
    };
    return ChildHolderView;
})(View.View);
exports.ChildHolderView = ChildHolderView;
var GenericChildHolderView = (function (_super) {
    __extends(GenericChildHolderView, _super);
    function GenericChildHolderView() {
        _super.apply(this, arguments);
    }
    return GenericChildHolderView;
})(ChildHolderView);
exports.GenericChildHolderView = GenericChildHolderView;
//# sourceMappingURL=ChildHolderView.js.map