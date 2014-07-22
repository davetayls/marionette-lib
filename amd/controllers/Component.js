define(function (require, exports, module) {var AppController, ComponentController,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AppController = require('./App');

ComponentController = (function(_super) {
  __extends(ComponentController, _super);

  function ComponentController() {
    return ComponentController.__super__.constructor.apply(this, arguments);
  }

  ComponentController.prototype.show = function(view, _arg) {
    var region;
    region = _arg.region;
    if (!(region && this._mainView)) {
      throw new Error('You should not @show the main view, use @setMainView with components and @show from the apps controller.');
    } else {
      return ComponentController.__super__.show.apply(this, arguments);
    }
  };

  return ComponentController;

})(AppController);

module.exports = ComponentController;

});
