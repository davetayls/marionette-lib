define(function (require, exports, module) {var API, _;

_ = require('underscore');

API = {
  _registry: {},
  register: function(instance, id) {
    if (API._registry == null) {
      API._registry = {};
    }
    return API._registry[id] = instance;
  },
  unregister: function(instance, id) {
    return delete API._registry[id];
  },
  resetRegistry: function() {
    var controller, key, oldCount, ret, _ref;
    oldCount = this.getRegistrySize();
    _ref = API._registry;
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
    return _.size(API._registry);
  }
};

module.exports = API;

//# sourceMappingURL=registry.js.map

});
