define(function (require, exports, module) {'use strict';
var List, Marionette,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

List = (function(_super) {
  __extends(List, _super);

  function List() {
    return List.__super__.constructor.apply(this, arguments);
  }

  List.prototype.className = function() {
    return this.name;
  };

  List.prototype.behaviors = function() {
    return {
      Modifiers: {}
    };
  };

  List.prototype.animateOut = function(cb) {
    return cb();
  };

  return List;

})(Marionette.CompositeView);

module.exports = List;

});
