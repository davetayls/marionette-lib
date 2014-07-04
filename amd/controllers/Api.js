define(function (require, exports, module) {var $, ApiController, BaseController,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$ = require('jquery');

BaseController = require('./Base');

ApiController = (function(_super) {
  __extends(ApiController, _super);

  function ApiController() {
    return ApiController.__super__.constructor.apply(this, arguments);
  }

  ApiController.prototype.all = function(options, cb) {
    var all;
    if (options == null) {
      options = {};
    }
    cb = cb || _.reduceRight(arguments, function(m, arg) {
      return m || arg;
    });
    all = new this.Entity.Collection();
    return all.fetch({
      success: (function(_this) {
        return function() {
          return cb.call(_this, all);
        };
      })(this),
      error: (function(_this) {
        return function(model, err) {
          return cb.call(_this, err);
        };
      })(this)
    });
  };

  ApiController.prototype.byId = function(id, cb) {
    var entity, properties;
    properties = {};
    properties[this.Entity.prototype.idAttribute] = id;
    entity = new this.Entity(properties);
    entity.fetch({
      success: function(model) {
        return cb.call(this, null, model);
      },
      error: function(model, err) {
        return cb.call(this, err, model);
      }
    });
    return entity;
  };

  return ApiController;

})(BaseController);

module.exports = ApiController;

});
