var API, Backbone, _;

_ = require('underscore');

Backbone = require('backbone');

API = {
  historyIsStarted: false,
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
  startHistory: function(options) {
    if (Backbone.history) {
      Backbone.history.start(options);
      return API.historyIsStarted = true;
    }
  }
};

module.exports = API;

//# sourceMappingURL=navigation.js.map
