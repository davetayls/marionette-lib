/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette = require('backbone.marionette');
var ModifiersBehavior = (function (_super) {
    __extends(ModifiersBehavior, _super);
    function ModifiersBehavior() {
        _super.apply(this, arguments);
    }
    ModifiersBehavior.prototype.addModifier = function (modifier) {
        this.$el.addClass("" + this.view.name + "--" + modifier);
        return true;
    };
    ModifiersBehavior.prototype.removeModifier = function (modifier) {
        this.$el.removeClass("" + this.view.name + "--" + modifier);
        return false;
    };
    ModifiersBehavior.prototype.toggleModifier = function (modifier) {
        if (this.$el.hasClass("" + this.view.name + "--" + modifier)) {
            return this.removeModifier(modifier);
        }
        else {
            return this.addModifier(modifier);
        }
    };
    ModifiersBehavior.prototype.onModified = function (modifier, options) {
        if (options === void 0) { options = {}; }
        var state;
        if (!this.view.name) {
            throw new Error('A name is required on this View');
        }
        if (options.remove) {
            state = this.removeModifier(modifier);
        }
        else if (options.toggle) {
            state = this.toggleModifier(modifier);
        }
        else {
            state = this.addModifier(modifier);
        }
        this.view.triggerMethod("modified:" + modifier, {
            on: state
        });
    };
    return ModifiersBehavior;
})(Marionette.Behavior);
exports.ModifiersBehavior = ModifiersBehavior;
//# sourceMappingURL=Modifiers.js.map