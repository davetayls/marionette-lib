define(function (require, exports, module) {var Marionette, _;

_ = require('underscore');

Marionette = require('backbone.marionette');

_.extend(Marionette.View.prototype, {
  className: function() {
    return this.name;
  }
});

});
