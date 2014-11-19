var Marionette, ModifiersBehavior,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

ModifiersBehavior = (function(_super) {
  __extends(ModifiersBehavior, _super);

  function ModifiersBehavior() {
    return ModifiersBehavior.__super__.constructor.apply(this, arguments);
  }

  ModifiersBehavior.prototype.addModifier = function(modifier) {
    this.$el.addClass("" + this.view.name + "--" + modifier);
    return true;
  };

  ModifiersBehavior.prototype.removeModifier = function(modifier) {
    this.$el.removeClass("" + this.view.name + "--" + modifier);
    return false;
  };

  ModifiersBehavior.prototype.toggleModifier = function(modifier) {
    if (this.$el.hasClass("" + this.view.name + "--" + modifier)) {
      return this.removeModifier(modifier);
    } else {
      return this.addModifier(modifier);
    }
  };

  ModifiersBehavior.prototype.onModified = function(modifier, _arg) {
    var remove, state, toggle, _ref;
    _ref = _arg != null ? _arg : {}, remove = _ref.remove, toggle = _ref.toggle;
    if (!this.view.name) {
      throw new Error('A name is required on this View');
    }
    if (remove) {
      state = this.removeModifier(modifier);
    } else if (toggle) {
      state = this.toggleModifier(modifier);
    } else {
      state = this.addModifier(modifier);
    }
    return this.view.triggerMethod("modified:" + modifier, {
      on: state
    });
  };

  return ModifiersBehavior;

})(Marionette.Behavior);

module.exports = ModifiersBehavior;
