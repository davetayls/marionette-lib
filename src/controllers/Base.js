var BaseController, Marionette, app,
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

  BaseController.prototype.proxyEvents = function(instance, prefix) {
    return this.listenTo(instance, "all", (function(_this) {
      return function() {
        var args, rootEvent;
        args = Array.prototype.slice.call(arguments);
        rootEvent = args[0];
        if (prefix) {
          args[0] = prefix + ":" + rootEvent;
        }
        args.push(instance);
        _this.triggerMethod.apply(_this, args);
      };
    })(this));
  };

  return BaseController;

})(Marionette.Controller);

module.exports = BaseController;

//# sourceMappingURL=Base.js.map
