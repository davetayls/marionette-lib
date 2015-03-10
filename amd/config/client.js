define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var sync = require('./backbone/sync');
require('./marionette/LayoutView');
require('./marionette/Region');
require('./marionette/View');
var MarionetteLibConfiguration = (function () {
    function MarionetteLibConfiguration() {
    }
    MarionetteLibConfiguration.prototype.configure = function (options) {
        this.app = options.app;
        this.handlebars = options.handlebars;
        this.defaultRegion = options.defaultRegion;
        this.componentsPath = options.componentsPath;
        if (this.app) {
            sync.configureBackboneSync(this.app);
        }
    };
    return MarionetteLibConfiguration;
})();
exports.MarionetteLibConfiguration = MarionetteLibConfiguration;
exports.config = new MarionetteLibConfiguration();
//# sourceMappingURL=client.js.map
});
