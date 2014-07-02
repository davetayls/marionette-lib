define(function (require, exports, module) {var BaseController, Marionette,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

BaseController = (function(_super) {
  __extends(BaseController, _super);

  function BaseController() {
    return BaseController.__super__.constructor.apply(this, arguments);
  }

  return BaseController;

})(Marionette.Controller);

module.exports = BaseController;

});
