define(function (require, exports, module) {'use strict';
var ItemView, Marionette,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

module.exports = ItemView = (function(_super) {
  __extends(ItemView, _super);

  function ItemView() {
    return ItemView.__super__.constructor.apply(this, arguments);
  }

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

});
