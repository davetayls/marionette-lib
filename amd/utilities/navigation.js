define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var _ = require('underscore');
var Backbone = require('backbone');
exports.historyIsStarted = false;
function to(route, options) {
    if (options === void 0) { options = {}; }
    return Backbone.history.navigate(route, options);
}
exports.to = to;
function getCurrentRoute() {
    var frag = Backbone.history.getFragment();
    if (_.isEmpty(frag)) {
        return null;
    }
    else {
        return frag;
    }
}
exports.getCurrentRoute = getCurrentRoute;
function startHistory(options) {
    if (Backbone.history) {
        Backbone.history.start(options);
        exports.historyIsStarted = true;
    }
}
exports.startHistory = startHistory;
//# sourceMappingURL=navigation.js.map
});
