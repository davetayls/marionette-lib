define(function (require, exports, module) {var Marionette, ModifiersBehavior,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

ModifiersBehavior = (function(_super) {
  __extends(ModifiersBehavior, _super);

  function ModifiersBehavior() {
    return ModifiersBehavior.__super__.constructor.apply(this, arguments);
  }

  ModifiersBehavior.prototype.onModified = function(modifier, add) {
    if (add == null) {
      add = true;
    }
    if (!this.view.name) {
      throw new Error('A name is required on this View');
    }
    if (add) {
      return this.$el.addClass("" + this.view.name + "--" + modifier);
    } else {
      return this.$el.removeClass("" + this.view.name + "--" + modifier);
    }
  };

  return ModifiersBehavior;

})(Marionette.Behavior);

module.exports = ModifiersBehavior;

});
