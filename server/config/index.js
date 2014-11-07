var MarionetteLibConfiguration, hbs;

hbs = require('../middleware/hbs');

MarionetteLibConfiguration = (function() {
  function MarionetteLibConfiguration() {}

  MarionetteLibConfiguration.prototype.handlebars = null;

  MarionetteLibConfiguration.prototype.componentsPath = null;

  MarionetteLibConfiguration.prototype.configure = function(options) {
    if (options == null) {
      options = {};
    }
    this.handlebars = options.handlebars;
    this.componentsPath = options.componentsPath;
    if (this.componentsPath && this.handlebars) {
      return hbs.components(this.componentsPath, this.handlebars);
    }
  };

  return MarionetteLibConfiguration;

})();

module.exports = new MarionetteLibConfiguration();

//# sourceMappingURL=index.js.map
