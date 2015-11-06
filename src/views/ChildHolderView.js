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
    function ChildHolderView(options) {
        this.children = new Backbone.ChildViewContainer();
        _super.call(this, options);
    }
    ChildHolderView.prototype.add = function (view, index) {
        var _this = this;
        this.triggerMethod('before:add:child', view);
        // Store the child view itself so we can properly
        // remove and/or destroy it later
        this.children.add(view);
        this.listenTo(view, 'destroy', function () {
            _this.viewDestroyed(view);
        });
        this.renderChildView(view, index);
        Marionette.triggerMethod.call(view, 'show');
        this.triggerMethod('add:child', view);
    };
    // render the child view
    ChildHolderView.prototype.renderChildView = function (view, index) {
        view.render();
        this.attachHtml(view, index);
    };
    ChildHolderView.prototype.viewDestroyed = function (view) {
        this.children.remove(view);
    };
    ChildHolderView.prototype.attachHtml = function (view, index) {
        var childAtIndex;
        if (!_.isFinite(index)) {
            // no index so add to end
            this.$el.append(view.el);
        }
        else if (index === 0) {
            // could just quickly use prepend
            this.$el.prepend(view.el);
        }
        else {
            // see if there is already a child at the index
            childAtIndex = this.$el.children().eq(index);
            if (childAtIndex.length) {
                childAtIndex.before(view.el);
            }
            else {
                this.$el.append(view.el);
            }
        }
    };
    ChildHolderView.prototype.render = function () {
        this.children.call('render');
        return this;
    };
    ChildHolderView.prototype.empty = function () {
        this.children.call('destroy');
    };
    ChildHolderView.prototype.onDestroy = function () {
        this.empty();
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