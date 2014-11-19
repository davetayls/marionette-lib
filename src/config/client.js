var MarionetteLibConfiguration, sync;

sync = require('./backbone/sync');

require('./marionette/LayoutView');

require('./marionette/Region');

require('./marionette/View');

MarionetteLibConfiguration = (function() {
  function MarionetteLibConfiguration() {}

  MarionetteLibConfiguration.prototype.app = null;

  MarionetteLibConfiguration.prototype.configure = function(options) {
    if (options == null) {
      options = {};
    }
    this.app = options.app;
    this.handlebars = options.handlebars;
    this.componentsPath = options.componentsPath;
    if (app) {
      return sync(app);
    }
  };

  return MarionetteLibConfiguration;

})();

module.exports = new MarionetteLibConfiguration();
