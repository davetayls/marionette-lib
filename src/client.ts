/// <reference path="../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

import _config = require('./config/client');
export import config = _config.config;
export function configure(options:_config.IConfigureOptions) {
  return _config.config.configure(options);
};

export import behaviors = require('./behaviors/index');

Marionette.Behaviors.behaviorsLookup = function() {
  return behaviors;
};

export import components = require('./components/index');
import _Api = require('./controllers/Api');
import _App = require('./controllers/App');
import _Base = require('./controllers/Base');
import _Component = require('./controllers/Component');
import _Router = require('./controllers/RouterController');
import _Static = require('./controllers/Static');

export module controllers {
  export import Api = _Api;
  export import App = _App;
  export import Base = _Base;
  export import Component = _Component;
  export import Router = _Router;
  export import Static = _Static;
}

export import handlebars = require('./handlebars/index');
export import routers = require('./routers/index');
export import stickit = require('./stickit/index');

import _whenFetched = require('./utilities/whenFetched');
export import whenFetched = _whenFetched.whenFetched;
export import navigation = require('./utilities/navigation');
export import registry = require('./utilities/registry');
export import views = require('./views/index');
