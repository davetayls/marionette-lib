/// <reference path="../../typings/tsd.d.ts" />
var Marionette = require('backbone.marionette');
exports.behaviors = require('./index');
Marionette.Behaviors.behaviorsLookup = function () {
    return exports.behaviors;
};
//# sourceMappingURL=behaviorsLookup.js.map