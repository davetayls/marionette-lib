define(function (require, exports, module) {var BaseController, Marionette, app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = require('app');

Marionette = require('backbone.marionette');

BaseController = (function(_super) {
  __extends(BaseController, _super);

  function BaseController() {
    this._instance_id = _.uniqueId('controller');
    app.execute('register:instance', this, this._instance_id);
    BaseController.__super__.constructor.apply(this, arguments);
  }

  BaseController.prototype.destroy = function() {
    console.log("destroying", this);
    app.execute('unregister:instance', this, this._instance_id);
    return BaseController.__super__.destroy.apply(this, arguments);
  };

  return BaseController;

})(Marionette.Controller);

module.exports = BaseController;

});
