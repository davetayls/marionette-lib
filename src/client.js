var Marionette;

Marionette = require('backbone.marionette');

exports.config = require('./config/client');

exports.configure = function(options) {
  return exports.config.configure(options);
};

exports.behaviors = require('./behaviors/index');

Marionette.Behaviors.behaviorsLookup = function() {
  return exports.behaviors;
};

exports.components = require('./components/index');

exports.controllers = {
  Api: require('./controllers/Api'),
  App: require('./controllers/App'),
  Base: require('./controllers/Base'),
  Component: require('./controllers/Component'),
  Router: require('./controllers/RouterController'),
  Static: require('./controllers/Static')
};

exports.handlebars = require('./handlebars/index');

exports.routers = {
  App: require('./routers/App')
};

exports.stickit = require('./stickit/index');

exports.whenFetched = require('./utilities/whenFetched');

exports.navigation = require('./utilities/navigation');

exports.registry = require('./utilities/registry');

exports.views = {
  View: require('./views/View'),
  ItemView: require('./views/ItemView'),
  Layout: require('./views/Layout'),
  List: require('./views/List')
};
