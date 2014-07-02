define(function (require, exports, module) {var ApiController, BaseController,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

BaseController = require('./Base');

ApiController = (function(_super) {
  __extends(ApiController, _super);

  function ApiController() {
    return ApiController.__super__.constructor.apply(this, arguments);
  }

  return ApiController;

})(BaseController);

module.exports = ApiController;

});
