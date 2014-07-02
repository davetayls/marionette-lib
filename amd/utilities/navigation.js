define(function (require, exports, module) {var API, Backbone, _;

_ = require('underscore');

Backbone = require('backbone');

API = {
  to: function(route, options) {
    if (options == null) {
      options = {};
    }
    return Backbone.history.navigate(route, options);
  },
  getCurrentRoute: function() {
    var frag;
    frag = Backbone.history.fragment;
    if (_.isEmpty(frag)) {
      return null;
    } else {
      return frag;
    }
  },
  startHistory: function() {
    if (Backbone.history) {
      return Backbone.history.start();
    }
  }
};

module.exports = API;

});
