define(function (require, exports, module) {var Marionette;

Marionette = require('backbone.marionette');

require('./config/index');

require('./handlebars/index');

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
  Static: require('./controllers/Static')
};

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

});
