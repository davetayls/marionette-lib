define(function (require, exports, module) {var AppController, ComponentController,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AppController = require('./App');

ComponentController = (function(_super) {
  __extends(ComponentController, _super);

  function ComponentController() {
    return ComponentController.__super__.constructor.apply(this, arguments);
  }

  return ComponentController;

})(AppController);

module.exports = ComponentController;

});
