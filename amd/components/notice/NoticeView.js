define(function (require, exports, module) {'use strict';
var ItemView, NoticeView, SpinnerView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ItemView = require('../../views/ItemView');

SpinnerView = require('../spinner/SpinnerView');

NoticeView = (function(_super) {
  __extends(NoticeView, _super);

  function NoticeView() {
    return NoticeView.__super__.constructor.apply(this, arguments);
  }

  NoticeView.prototype.template = require('hbs!./notice');

  NoticeView.prototype.tagName = 'section';

  NoticeView.prototype.className = 'notice';

  NoticeView.prototype.defaults = {
    header: '',
    body: '',
    buttons: [],
    canDismiss: true
  };

  NoticeView.prototype.ui = {
    buttons: '.notice__btns'
  };

  NoticeView.prototype.initialize = function(options) {
    NoticeView.__super__.initialize.apply(this, arguments);
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
    this.buttons = [];
    return this.listenTo(this.model, 'change', this.render);
  };

  NoticeView.prototype.onRender = function() {
    if (!this._loadingView) {
      this._loadingView = new SpinnerView();
    }
    this.$el.append(this._loadingView.el);
    if (this.model.get('loading')) {
      this._loadingView.start();
    } else {
      this._loadingView.stop();
    }
    this.ui.buttons.empty();
    return this.model.get('buttons').forEach((function(_this) {
      return function(btn) {
        btn.render();
        _this.listenTo(btn, 'click', _this.onButtonClicked);
        return _this.ui.buttons.append(btn.el);
      };
    })(this));
  };

  NoticeView.prototype.canDismiss = function() {
    return this.model.get('canDismiss');
  };

  NoticeView.prototype.hide = function() {
    this.$el.hide();
    if (this._loadingView) {
      return this._loadingView.stop();
    }
  };

  NoticeView.prototype.show = function() {
    return this.$el.show();
  };

  NoticeView.prototype.set = function() {
    this.model.set.apply(this.model, arguments);
    return this.show();
  };

  NoticeView.prototype.closeButtons = function() {
    return this.model.get('buttons').forEach(function(btn) {
      return btn.close();
    });
  };

  NoticeView.prototype.onButtonClicked = function() {
    return this.trigger('button:clicked');
  };

  return NoticeView;

})(ItemView);

module.exports = NoticeView;

//# sourceMappingURL=NoticeView.js.map

});
