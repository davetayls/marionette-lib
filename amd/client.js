define(function (require, exports, module) {/// <reference path="../typings/tsd.d.ts" />
var Marionette = require('backbone.marionette');
var _config = require('./config/client');
exports.config = _config.config;
function configure(options) {
    return _config.config.configure(options);
}
exports.configure = configure;
;
exports.behaviors = require('./behaviors/index');
Marionette.Behaviors.behaviorsLookup = function () {
    return exports.behaviors;
};
exports.Exceptions = require('./Exceptions');
exports.components = require('./components/index');
exports.interfaces = require('./interfaces');
var _Api = require('./controllers/Api');
var _App = require('./controllers/App');
var _Base = require('./controllers/Base');
var _Component = require('./controllers/Component');
var _Router = require('./controllers/RouterController');
var _Static = require('./controllers/Static');
var controllers;
(function (controllers) {
    controllers.Api = _Api;
    controllers.App = _App;
    controllers.Base = _Base;
    controllers.Component = _Component;
    controllers.Router = _Router;
    controllers.Static = _Static;
})(controllers = exports.controllers || (exports.controllers = {}));
exports.handlebars = require('./handlebars/index');
exports.routers = require('./routers/index');
exports.stickit = require('./stickit/index');
var _whenFetched = require('./utilities/whenFetched');
exports.whenFetched = _whenFetched.whenFetched;
exports.navigation = require('./utilities/navigation');
exports.registry = require('./utilities/registry');
exports.views = require('./views/index');
//# sourceMappingURL=client.js.map
});
