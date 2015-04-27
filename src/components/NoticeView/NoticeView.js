/// <reference path="../../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Backbone = require('backbone');
var ItemView = require('../../views/ItemView');
var SpinnerView = require('../SpinnerView/SpinnerView');
var NoticeViewModel = (function (_super) {
    __extends(NoticeViewModel, _super);
    function NoticeViewModel() {
        _super.apply(this, arguments);
    }
    NoticeViewModel.prototype.defaults = function () {
        return {
            header: '',
            body: '',
            buttons: [],
            canDismiss: true
        };
    };
    Object.defineProperty(NoticeViewModel.prototype, "header", {
        get: function () {
            return this.get('header');
        },
        set: function (value) {
            this.set('header', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeViewModel.prototype, "body", {
        get: function () {
            return this.get('body');
        },
        set: function (value) {
            this.set('body', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeViewModel.prototype, "buttons", {
        get: function () {
            return this.get('buttons');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeViewModel.prototype, "canDismiss", {
        get: function () {
            return this.get('canDismiss');
        },
        set: function (value) {
            this.set('canDismiss', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeViewModel.prototype, "loading", {
        get: function () {
            return this.get('loading');
        },
        set: function (value) {
            this.set('loading', value);
        },
        enumerable: true,
        configurable: true
    });
    return NoticeViewModel;
})(Backbone.Model);
exports.NoticeViewModel = NoticeViewModel;
var NoticeView = (function (_super) {
    __extends(NoticeView, _super);
    function NoticeView(options) {
        if (options === void 0) { options = {}; }
        this.name = 'NoticeView';
        this.template = require('./notice.hbs');
        this.tagName = 'section';
        this.ui = {
            buttons: '.NoticeView__btns'
        };
        _super.call(this, options);
        this.model = this.model || new NoticeViewModel();
        if (options.header) {
            this.model.header = options.header;
        }
        if (options.body) {
            this.model.body = options.body;
        }
        if (options.buttons) {
            this.model.buttons = options.buttons;
        }
        if (_.isBoolean(options.loading)) {
            this.model.loading = options.loading;
        }
        if (_.isBoolean(options.canDismiss)) {
            this.model.canDismiss = options.canDismiss;
        }
        this.listenTo(this.model, 'change', this.render);
    }
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
    NoticeView.prototype.destroyButtons = function () {
        this.model.buttons.forEach(function (btn) {
            btn.destroy();
        });
        this.model.buttons.length = 0;
    };
    NoticeView.prototype.onButtonClicked = function () {
        return this.trigger('button:clicked');
    };
    return NoticeView;
})(ItemView.ItemView);
exports.NoticeView = NoticeView;
//# sourceMappingURL=NoticeView.js.map