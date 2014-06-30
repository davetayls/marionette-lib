define(function (require, exports, module) {'use strict';
var Layout, Marionette,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('marionette');

module.exports = Layout = (function(_super) {
  __extends(Layout, _super);

  function Layout() {
    return Layout.__super__.constructor.apply(this, arguments);
  }

  Layout.prototype.className = function() {
    return this.name;
  };

  return Layout;

})(Marionette.Layout);

});
