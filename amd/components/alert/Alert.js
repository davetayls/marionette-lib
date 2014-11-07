define(function (require, exports, module) {'use strict';
var AlertComponent, ItemView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ItemView = require('../../views/ItemView');

AlertComponent = (function(_super) {
  __extends(AlertComponent, _super);

  function AlertComponent() {
    return AlertComponent.__super__.constructor.apply(this, arguments);
  }

  AlertComponent.prototype.name = 'alert';

  AlertComponent.prototype.template = require('hbs!./alert');

  AlertComponent.prototype.templateHelpers = function() {
    return {
      message: this.options.message
    };
  };

  AlertComponent.prototype.onShow = function() {
    return this.$el.addClass('alert-' + (this.options.alertType || 'info'));
  };

  return AlertComponent;

})(ItemView);

module.exports = AlertComponent;

});
