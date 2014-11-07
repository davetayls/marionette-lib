'use strict';
var Backbone, ItemView, Marionette,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Backbone = require('backbone');

Marionette = require('backbone.marionette');

ItemView = (function(_super) {
  __extends(ItemView, _super);

  function ItemView() {
    return ItemView.__super__.constructor.apply(this, arguments);
  }

  ItemView.prototype.initialize = function() {
    if (this.defaults && !this.getOption('model')) {
      this.model = new Backbone.Model(this.defaults);
    }
    return ItemView.__super__.initialize.apply(this, arguments);
  };

  ItemView.prototype.className = function() {
    return this.name;
  };

  ItemView.prototype.behaviors = function() {
    return {
      Modifiers: {}
    };
  };

  return ItemView;

})(Marionette.ItemView);

module.exports = ItemView;
