/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Backbone = require('backbone');
var View = require('./View');
var ChildHolderView = (function (_super) {
    __extends(ChildHolderView, _super);
    function ChildHolderView() {
        _super.apply(this, arguments);
    }
    ChildHolderView.prototype.initialize = function (options) {
        this.children = new Backbone.ChildViewContainer();
    };
    ChildHolderView.prototype.add = function (view) {
        this.children.add(view);
        return this.$el.append(view.el);
    };
    ChildHolderView.prototype.render = function () {
        this.children.call('render');
        return this;
    };
    ChildHolderView.prototype.onDestroy = function () {
        this.children.call('destroy');
    };
    ChildHolderView.prototype.animateOut = function (cb) {
        return cb.call(this);
    };
    return ChildHolderView;
})(View.View);
exports.ChildHolderView = ChildHolderView;
//# sourceMappingURL=ChildHolderView.js.map