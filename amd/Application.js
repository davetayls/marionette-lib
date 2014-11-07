define(function (require, exports, module) {'use strict';
var App, Backbone, Marionette, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

Backbone = require('backbone');

Marionette = require('backbone.marionette');

App = (function(_super) {
  __extends(App, _super);

  function App() {
    return App.__super__.constructor.apply(this, arguments);
  }

  return App;

})(Marionette.Application);

module.exports = App;

//# sourceMappingURL=Application.js.map

});
