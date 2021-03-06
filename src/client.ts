/// <reference path="../typings/tsd.d.ts" />

import Marionette = require('backbone.marionette');

export import config = require('./config/client');
export function configure(options:config.IConfigureOptions) {
  return config.config.configure(options);
};

import behaviorsLookup = require('./behaviors/behaviorsLookup');
export import behaviors = behaviorsLookup.behaviors;

export import components = require('./components/index');
export import constants = require('./constants');
export import Exceptions = require('./Exceptions');
export import interfaces = require('./interfaces');
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
export import flux = require('./flux/index');

export import DebouncedDocContainer = require('./utilities/DebouncedDocContainer');
import _whenFetched = require('./utilities/whenFetched');
export import whenFetched = _whenFetched.whenFetched;
export import navigation = require('./utilities/navigation');
export import registry = require('./utilities/registry');
export import urlUtils = require('./utilities/url');
export import preventSelectionCallout = require('./utilities/preventSelectionCallout');
export import views = require('./views/index');
