define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var _ = require('underscore');
exports._registry = {};
function register(instance, id) {
    exports._registry[id] = instance;
}
exports.register = register;
function unregister(instance, id) {
    delete exports._registry[id];
}
exports.unregister = unregister;
function resetRegistry() {
    var oldCount = getRegistrySize();
    var controller;
    for (var key in exports._registry) {
        controller = exports._registry[key];
        controller.region.destroy();
    }
    var ret = {
        count: getRegistrySize(),
        previous: oldCount,
        msg: "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize())
    };
    console.info('Registry reset', ret);
    return ret;
}
exports.resetRegistry = resetRegistry;
function getRegistrySize() {
    return _.size(exports._registry);
}
exports.getRegistrySize = getRegistrySize;
//# sourceMappingURL=registry.js.map
});
