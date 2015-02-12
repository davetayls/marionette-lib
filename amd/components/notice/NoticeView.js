define(function (require, exports, module) {/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemView = require('../../views/ItemView');
var SpinnerView = require('../SpinnerView/SpinnerView');
var NoticeView = (function (_super) {
    __extends(NoticeView, _super);
    function NoticeView(options) {
        this.template = require('hbs!./notice');
        this.tagName = 'section';
        this.name = 'notice';
        this.ui = {
            buttons: '.notice__btns'
        };
        _super.call(this, options);
    }
    NoticeView.prototype.defaults = function () {
        return {
            header: '',
            body: '',
            buttons: [],
            canDismiss: true
        };
    };
    NoticeView.prototype.initialize = function (options) {
        _super.prototype.initialize.call(this, options);
        if (options) {
            if (options.header) {
                this.model.set('header', options.header);
            }
            if (options.body) {
                this.model.set('body', options.body);
            }
            if (options.buttons) {
                this.model.set('buttons', options.buttons);
            }
        }
        this.listenTo(this.model, 'change', this.render);
    };
    NoticeView.prototype.onRender = function () {
        var _this = this;
        if (!this._loadingView) {
            this._loadingView = new SpinnerView.SpinnerView();
        }
        this.$el.append(this._loadingView.el);
        if (this.model.get('loading')) {
            this._loadingView.start();
        }
        else {
            this._loadingView.stop();
        }
        this.ui.buttons.empty();
        this.model.get('buttons').forEach(function (btn) {
            btn.render();
            _this.listenTo(btn, 'click', _this.onButtonClicked);
            _this.ui.buttons.append(btn.el);
        });
    };
    NoticeView.prototype.canDismiss = function () {
        return this.model.get('canDismiss');
    };
    NoticeView.prototype.hide = function () {
        this.$el.hide();
        if (this._loadingView) {
            return this._loadingView.stop();
        }
    };
    NoticeView.prototype.show = function () {
        return this.$el.show();
    };
    NoticeView.prototype.set = function (properties) {
        this.model.set(properties);
        return this.show();
    };
    NoticeView.prototype.closeButtons = function () {
        return this.model.get('buttons').forEach(function (btn) {
            return btn.close();
        });
    };
    NoticeView.prototype.onButtonClicked = function () {
        return this.trigger('button:clicked');
    };
    return NoticeView;
})(ItemView.ItemView);
exports.NoticeView = NoticeView;
//# sourceMappingURL=NoticeView.js.map
});
