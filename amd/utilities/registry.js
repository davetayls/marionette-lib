define(function (require, exports, module) {var API, app, _;

_ = require('underscore');

app = require('app');

API = {
  register: function(instance, id) {
    if (app._registry == null) {
      app._registry = {};
    }
    return app._registry[id] = instance;
  },
  unregister: function(instance, id) {
    return delete app._registry[id];
  },
  resetRegistry: function() {
    var controller, key, oldCount, ret, _ref;
    oldCount = this.getRegistrySize();
    _ref = app._registry;
    for (key in _ref) {
      controller = _ref[key];
      controller.region.close();
    }
    ret = {
      count: this.getRegistrySize(),
      previous: oldCount,
      msg: "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize())
    };
    console.info(ret);
    return ret;
  },
  getRegistrySize: function() {
    return _.size(app._registry);
  }
};

app.commands.setHandler("register:instance", function(instance, id) {
  if (app.environment === "development") {
    return API.register(instance, id);
  }
});

app.commands.setHandler("unregister:instance", function(instance, id) {
  if (app.environment === "development") {
    return API.unregister(instance, id);
  }
});

app.reqres.setHandler("reset:registry", function() {
  return API.resetRegistry();
});

module.exports = API;

//# sourceMappingURL=registry.js.map

});
