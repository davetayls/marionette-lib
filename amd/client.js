define("marionette_lib", ["backbone.marionette","underscore","q","jquery","backbone","backbone-forms","spin","i18next","showdown","flux","handlebars"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_68__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/tsd.d.ts" />
	var Marionette = __webpack_require__(1);
	exports.config = __webpack_require__(2);
	function configure(options) {
	    return exports.config.config.configure(options);
	}
	exports.configure = configure;
	;
	exports.behaviors = __webpack_require__(3);
	Marionette.Behaviors.behaviorsLookup = function () {
	    return exports.behaviors;
	};
	exports.components = __webpack_require__(4);
	exports.constants = __webpack_require__(5);
	exports.Exceptions = __webpack_require__(6);
	exports.interfaces = __webpack_require__(7);
	var _Api = __webpack_require__(8);
	var _App = __webpack_require__(9);
	var _Base = __webpack_require__(10);
	var _Component = __webpack_require__(11);
	var _Router = __webpack_require__(12);
	var _Static = __webpack_require__(13);
	var controllers;
	(function (controllers) {
	    controllers.Api = _Api;
	    controllers.App = _App;
	    controllers.Base = _Base;
	    controllers.Component = _Component;
	    controllers.Router = _Router;
	    controllers.Static = _Static;
	})(controllers = exports.controllers || (exports.controllers = {}));
	exports.handlebars = __webpack_require__(14);
	exports.routers = __webpack_require__(15);
	exports.stickit = __webpack_require__(16);
	exports.flux = __webpack_require__(17);
	exports.DebouncedDocContainer = __webpack_require__(18);
	var _whenFetched = __webpack_require__(19);
	exports.whenFetched = _whenFetched.whenFetched;
	exports.navigation = __webpack_require__(20);
	exports.registry = __webpack_require__(21);
	exports.urlUtils = __webpack_require__(22);
	exports.preventSelectionCallout = __webpack_require__(23);
	exports.views = __webpack_require__(24);
	//# sourceMappingURL=client.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var sync = __webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var _Modifiers = __webpack_require__(31);
	var _Scrollables = __webpack_require__(32);
	exports.Modifiers = _Modifiers.ModifiersBehavior;
	exports.Scrollables = _Scrollables.ScrollablesBehavior;
	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _Alert = __webpack_require__(33);
	var _Loading = __webpack_require__(34);
	exports.Alert = _Alert.AlertComponent;
	exports.AnimatedRegion = __webpack_require__(35);
	exports.Button = __webpack_require__(36);
	exports.FormView = __webpack_require__(37);
	exports.SpinnerView = __webpack_require__(38);
	exports.Loading = _Loading.LoadingController;
	exports.NoticeView = __webpack_require__(39);
	//# sourceMappingURL=index.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../typings/tsd.d.ts"/>
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var StringConstant = (function () {
	    function StringConstant(val) {
	        this.val = val;
	    }
	    StringConstant.prototype.toString = function () {
	        return this.val;
	    };
	    StringConstant.prototype.matches = function (value) {
	        return this.toString() === value;
	    };
	    StringConstant.allConstants = function () {
	        var t = this;
	        var all = [];
	        _.each(_.keys(this), function (propertyKey) {
	            if (t[propertyKey] instanceof t) {
	                var constant = t[propertyKey];
	                all.push(constant);
	            }
	        });
	        return all;
	    };
	    StringConstant.fromKey = function (key) {
	        var all = this.allConstants();
	        for (var i = 0; i < all.length; i += 1) {
	            if (all[i].matches(key)) {
	                return all[i];
	            }
	        }
	    };
	    StringConstant.fromValue = function (key) {
	        var all = this.allConstants();
	        for (var i = 0; i < all.length; i += 1) {
	            if (all[i].matches(key)) {
	                return all[i];
	            }
	        }
	    };
	    return StringConstant;
	})();
	exports.StringConstant = StringConstant;
	var EVENT_TYPES = (function (_super) {
	    __extends(EVENT_TYPES, _super);
	    function EVENT_TYPES() {
	        _super.apply(this, arguments);
	    }
	    EVENT_TYPES.Change = new EVENT_TYPES('Change');
	    return EVENT_TYPES;
	})(StringConstant);
	exports.EVENT_TYPES = EVENT_TYPES;
	var ACTION_SOURCES = (function (_super) {
	    __extends(ACTION_SOURCES, _super);
	    function ACTION_SOURCES() {
	        _super.apply(this, arguments);
	    }
	    ACTION_SOURCES.ServerAction = new ACTION_SOURCES('ServerAction');
	    ACTION_SOURCES.ViewAction = new ACTION_SOURCES('ViewAction');
	    ACTION_SOURCES.DeviceAction = new ACTION_SOURCES('DeviceAction');
	    return ACTION_SOURCES;
	})(StringConstant);
	exports.ACTION_SOURCES = ACTION_SOURCES;
	var DOC_STATUSES = (function (_super) {
	    __extends(DOC_STATUSES, _super);
	    function DOC_STATUSES() {
	        _super.apply(this, arguments);
	    }
	    DOC_STATUSES.empty = new DOC_STATUSES('empty');
	    DOC_STATUSES.fetchingFromServer = new DOC_STATUSES('fetchingFromServer');
	    DOC_STATUSES.fetchingLocal = new DOC_STATUSES('fetchingLocal');
	    DOC_STATUSES.fetched = new DOC_STATUSES('fetched');
	    DOC_STATUSES.creatingOnServer = new DOC_STATUSES('creatingOnServer');
	    DOC_STATUSES.updatingOnServer = new DOC_STATUSES('updatingOnServer');
	    DOC_STATUSES.deletingOnServer = new DOC_STATUSES('deletingOnServer');
	    DOC_STATUSES.deletedOnServer = new DOC_STATUSES('deletedOnServer');
	    DOC_STATUSES.deletedLocal = new DOC_STATUSES('deletedLocal');
	    DOC_STATUSES.deleted = new DOC_STATUSES('deleted');
	    return DOC_STATUSES;
	})(StringConstant);
	exports.DOC_STATUSES = DOC_STATUSES;
	//# sourceMappingURL=constants.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Exception = (function () {
	    function Exception(error) {
	        this.error = error;
	        console.warn('EXCEPTION', this);
	    }
	    Object.defineProperty(Exception.prototype, "name", {
	        get: function () {
	            return this.constructor.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Exception.prototype, "message", {
	        get: function () {
	            return this.error.message;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Exception.prototype, "stack", {
	        get: function () {
	            return this.error.stack;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Exception.prototype.toString = function () {
	        return this.name + ': ' + this.message;
	    };
	    return Exception;
	})();
	exports.Exception = Exception;
	var DocumentExistsException = (function (_super) {
	    __extends(DocumentExistsException, _super);
	    function DocumentExistsException() {
	        _super.apply(this, arguments);
	    }
	    return DocumentExistsException;
	})(Exception);
	exports.DocumentExistsException = DocumentExistsException;
	var NotImplementedException = (function (_super) {
	    __extends(NotImplementedException, _super);
	    function NotImplementedException() {
	        _super.apply(this, arguments);
	    }
	    return NotImplementedException;
	})(Exception);
	exports.NotImplementedException = NotImplementedException;
	//# sourceMappingURL=Exceptions.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/tsd.d.ts" />
	//# sourceMappingURL=interfaces.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var BaseController = __webpack_require__(10);
	var ApiController = (function (_super) {
	    __extends(ApiController, _super);
	    function ApiController() {
	        _super.apply(this, arguments);
	    }
	    return ApiController;
	})(BaseController.BaseController);
	exports.ApiController = ApiController;
	//# sourceMappingURL=Api.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var BaseController = __webpack_require__(10);
	var clientConfig = __webpack_require__(2);
	var AppController = (function (_super) {
	    __extends(AppController, _super);
	    function AppController(options) {
	        if (options === void 0) { options = {}; }
	        this._managedRegions = [];
	        this.region = this.region || options.region || clientConfig.config.defaultRegion;
	        _super.call(this, options);
	    }
	    AppController.prototype.showController = function (controller, options) {
	        if (options === void 0) { options = {}; }
	        options.controller = controller;
	        options.monitorReadyState = controller.getOption('monitorReadyState');
	        return this.show(controller.getMainView(), options);
	    };
	    AppController.prototype.show = function (view, options) {
	        if (options === void 0) { options = {}; }
	        _.defaults(options, {
	            loading: null,
	            immediate: false,
	            region: this.region
	        });
	        if (!view) {
	            throw new Error("A view instance is required");
	        }
	        this.setMainView(view);
	        this._manageView(view, options);
	        return {
	            view: view,
	            options: options
	        };
	    };
	    AppController.prototype.getMainView = function () {
	        return this._mainView;
	    };
	    AppController.prototype.setMainView = function (view) {
	        if (this._mainView) {
	            return;
	        }
	        this._mainView = view;
	        if (view) {
	            return this.listenTo(view, "destroy", this.destroy);
	        }
	    };
	    AppController.prototype.manageRegion = function (region) {
	        return this._managedRegions.push(region);
	    };
	    AppController.prototype._manageView = function (view, options) {
	        if (options.loading) {
	            if (_.isBoolean(options.loading)) {
	                options.loading = {};
	            }
	            _.defaults(options.loading, {
	                loadingHeader: _.result(this, 'loadingHeader'),
	                loadingBody: _.result(this, 'loadingBody'),
	                monitorReadyState: options.monitorReadyState
	            });
	            clientConfig.config.app.execute("show:loading", view, options);
	        }
	        else {
	            options.region.show(view, options.immediate);
	        }
	    };
	    AppController.prototype.destroy = function () {
	        _.invoke(this._managedRegions, 'animateEmpty');
	        this._managedRegions = null;
	        _super.prototype.destroy.call(this);
	    };
	    return AppController;
	})(BaseController.BaseController);
	exports.AppController = AppController;
	//# sourceMappingURL=App.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var registry = __webpack_require__(21);
	var Marionette = __webpack_require__(1);
	var BaseController = (function (_super) {
	    __extends(BaseController, _super);
	    function BaseController(options) {
	        this._instance_id = _.uniqueId('controller');
	        registry.register(this, this._instance_id);
	        _super.call(this, options);
	    }
	    BaseController.prototype.destroy = function () {
	        console.log("destroying", this);
	        registry.unregister(this, this._instance_id);
	        _super.prototype.destroy.call(this);
	    };
	    BaseController.prototype.proxyEvents = function (instance, prefix) {
	        var _this = this;
	        this.listenTo(instance, "all", function () {
	            var args = Array.prototype.slice.call(arguments);
	            var rootEvent = args[0];
	            if (prefix) {
	                args[0] = prefix + ":" + rootEvent;
	            }
	            args.push(instance);
	            Marionette.triggerMethod.apply(_this, args);
	        });
	    };
	    return BaseController;
	})(Marionette.Controller);
	exports.BaseController = BaseController;
	//# sourceMappingURL=Base.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var AppController = __webpack_require__(9);
	var ComponentController = (function (_super) {
	    __extends(ComponentController, _super);
	    function ComponentController() {
	        _super.apply(this, arguments);
	    }
	    ComponentController.prototype.show = function (view, options) {
	        if (!(options.region && this._mainView)) {
	            throw new Error('You should not @show the main view, use @setMainView with components and @show from the apps controller.');
	        }
	        else {
	            return _super.prototype.show.call(this, view, options);
	        }
	    };
	    return ComponentController;
	})(AppController.AppController);
	exports.ComponentController = ComponentController;
	//# sourceMappingURL=Component.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var BaseController = __webpack_require__(10);
	var RouterController = (function (_super) {
	    __extends(RouterController, _super);
	    function RouterController() {
	        _super.apply(this, arguments);
	    }
	    RouterController.prototype.initialize = function (options) {
	        if (options.actions) {
	            this._setupActions(options.actions);
	        }
	    };
	    RouterController.prototype.authorizeAnAction = function (actionName, actionConfig) {
	        return this._getActionPolicy(actionConfig).isAuthorized(actionName, actionConfig);
	    };
	    RouterController.prototype.actionUnauthorized = function (actionName, actionConfig) {
	        var err = new Error("" + actionName + " was unauthorized");
	        err.name = 'ActionUnauthorized';
	        err.actionName = actionName;
	        err.actionConfig = actionConfig;
	        throw err;
	    };
	    RouterController.prototype.callActionUnauthorized = function (actionName, actionConfig) {
	        if (_.isFunction(actionConfig.unauthorized)) {
	            return actionConfig.unauthorized.call(this, actionName, actionConfig);
	        }
	        else {
	            return this.getOption('actionUnauthorized').call(this, actionName, actionConfig);
	        }
	    };
	    RouterController.prototype.defaultPolicy = function () {
	        return new ActionPolicy();
	    };
	    RouterController.prototype._setupActions = function (actions) {
	        var _this = this;
	        _.each(actions, function (config, key) {
	            _this.addAction(key, config);
	        });
	    };
	    RouterController.prototype._getActionConfig = function (actionConfig) {
	        if (actionConfig == null) {
	            actionConfig = {
	                fn: function () {
	                }
	            };
	        }
	        if (_.isFunction(actionConfig)) {
	            return this._getActionConfigFromFn(actionConfig);
	        }
	        else {
	            return actionConfig;
	        }
	    };
	    RouterController.prototype._getActionConfigFromFn = function (fn) {
	        return {
	            fn: fn
	        };
	    };
	    RouterController.prototype._getActionFunction = function (actionConfig) {
	        if (_.isFunction(actionConfig)) {
	            return actionConfig;
	        }
	        return actionConfig.fn;
	    };
	    RouterController.prototype._getActionPolicy = function (actionConfig) {
	        if (_.isFunction(actionConfig) || !actionConfig.policy) {
	            var defaultPolicy = this.getOption('defaultPolicy');
	            if (_.isFunction(defaultPolicy)) {
	                return defaultPolicy.call(this, actionConfig);
	            }
	            else {
	                return defaultPolicy;
	            }
	        }
	        else {
	            return actionConfig.policy;
	        }
	    };
	    RouterController.prototype.addAction = function (actionName, actionConfig) {
	        var _this = this;
	        var attacher = this;
	        actionConfig = this._getActionConfig(actionConfig);
	        var _fn = this._getActionFunction(actionConfig);
	        if (_.isFunction(_fn)) {
	            attacher[actionName] = function () {
	                if (_this.getOption('authorizeAnAction').call(_this, actionName, actionConfig)) {
	                    try {
	                        return _fn.apply(_this, arguments);
	                    }
	                    catch (error) {
	                        if (error.name === 'ActionUnauthorized') {
	                            actionConfig.internalActionError = error;
	                            return _this.callActionUnauthorized(actionName, actionConfig);
	                        }
	                        else {
	                            throw error;
	                        }
	                    }
	                }
	                else {
	                    return _this.callActionUnauthorized(actionName, actionConfig);
	                }
	            };
	        }
	        else {
	            throw new Error('Proxying through an authorize method requires a function');
	        }
	    };
	    return RouterController;
	})(BaseController.BaseController);
	exports.RouterController = RouterController;
	var ActionPolicy = (function (_super) {
	    __extends(ActionPolicy, _super);
	    function ActionPolicy(options) {
	        _super.call(this, options);
	    }
	    ActionPolicy.prototype.isAuthorized = function (actionName, actionConfig) {
	        if (this.options.isAuthorized) {
	            return this.options.isAuthorized.call(this, actionName, actionConfig);
	        }
	        else {
	            return true;
	        }
	    };
	    return ActionPolicy;
	})(BaseController.BaseController);
	exports.ActionPolicy = ActionPolicy;
	//# sourceMappingURL=RouterController.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(25);
	var StaticController = (function () {
	    function StaticController(options) {
	        if (options === void 0) { options = {}; }
	        this.tagName = 'section';
	        this.cloneContext = true;
	        this.options = options;
	        this.model = options.model;
	    }
	    StaticController.prototype.attributes = function (hash) {
	        return {};
	    };
	    StaticController.prototype.contextProperties = function () {
	        return {};
	    };
	    StaticController.prototype.template = function () {
	        if (this.options.templateFn) {
	            return this.options.templateFn;
	        }
	        else {
	            throw new Error('template not implemented');
	        }
	    };
	    StaticController.prototype.className = function (hash) {
	        if (hash === void 0) { hash = {}; }
	        var classes;
	        if (!this.name) {
	            throw new Error('Component must specify a name');
	        }
	        if (hash["class"]) {
	            classes = hash["class"].split(' ');
	        }
	        else {
	            classes = [];
	        }
	        var attributes = _.result(this, 'attributes');
	        if (attributes && attributes["class"]) {
	            classes = _.union(classes, attributes["class"].split(' '));
	        }
	        classes.push(this.name);
	        return classes.join(' ');
	    };
	    StaticController.prototype.getContext = function () {
	        var context;
	        if (this.model) {
	            if (this.cloneContext) {
	                context = _.clone(this.model);
	                context._componentName = this.name;
	            }
	            else {
	                context = this.model;
	            }
	        }
	        else {
	            context = {};
	        }
	        if (context._regions == null) {
	            context._regions = [];
	        }
	        return context;
	    };
	    StaticController.prototype.getChildContext = function () {
	        return this.model;
	    };
	    StaticController.prototype.mixinHash = function (context, hash) {
	        if (hash == null) {
	            hash = {};
	        }
	        var contextProps = _.result(this, 'contextProperties');
	        if (_.isObject(contextProps)) {
	            var propertyKeys = _.keys(contextProps);
	            var properties = _.pick(hash, propertyKeys);
	            return _.extend(context, contextProps, properties);
	        }
	    };
	    StaticController.prototype.getComponentTemplate = function () {
	        if (_.isFunction(this.template)) {
	            return this.template();
	        }
	        else {
	            throw new Error('There is no template on this static controller');
	        }
	    };
	    StaticController.prototype.getAttributes = function (hash) {
	        var attributes = this.attributes(hash);
	        if (attributes) {
	            attributes = _.omit(attributes, 'class');
	            var attr = _.map(attributes || {}, function (val, key) {
	                if (_.isString(hash[key] || _.isFinite(hash[key]))) {
	                    return "" + key + "=\"" + hash[key] + "\"";
	                }
	                else if (_.isString(val || _.isFinite(val))) {
	                    return "" + key + "=\"" + val + "\"";
	                }
	                else {
	                    return '';
	                }
	            });
	            if (attr.length) {
	                return ' ' + attr.join(' ');
	            }
	            else {
	                return '';
	            }
	        }
	        else {
	            return '';
	        }
	    };
	    StaticController.prototype.getInnerBody = function (context, fn) {
	        if (_.isFunction(fn)) {
	            return fn(context);
	        }
	    };
	    StaticController.prototype.render = function (options) {
	        if (options === void 0) { options = {}; }
	        this.context = this.getContext();
	        this.mixinHash(this.context, options.hash);
	        this.context.className = this.className(options.hash);
	        this.context.__body__ = this.getInnerBody(this.getChildContext(), options.fn);
	        this.context.attributes = this.getAttributes(options.hash);
	        return this.renderOuterHtml(this.context, {
	            className: this.context.className,
	            attributes: this.context.attributes
	        });
	    };
	    StaticController.prototype.renderOuterHtml = function (context, options) {
	        if (options === void 0) { options = {}; }
	        var className = options.className;
	        var attributes = options.attributes;
	        var tagName = _.result(this, 'tagName');
	        return ["<" + tagName, attributes, " class=\"" + className + "\"", ">\n", this.renderContentTemplate(context), "</" + tagName + ">"].join('');
	    };
	    StaticController.prototype.renderContentTemplate = function (context) {
	        var tmpl = this.getComponentTemplate();
	        return tmpl(context);
	    };
	    return StaticController;
	})();
	exports.StaticController = StaticController;
	//# sourceMappingURL=Static.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports.components = __webpack_require__(40);
	exports.i18next = __webpack_require__(41);
	//# sourceMappingURL=index.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports.App = __webpack_require__(42);
	//# sourceMappingURL=index.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports.mdown = __webpack_require__(43);
	//# sourceMappingURL=index.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports.actions = __webpack_require__(44);
	exports.interfaces = __webpack_require__(45);
	exports.Dispatcher = __webpack_require__(46);
	exports.Store = __webpack_require__(47);
	//# sourceMappingURL=index.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(25);
	var Exceptions = __webpack_require__(6);
	var DebouncedDocContainer = (function () {
	    function DebouncedDocContainer() {
	        this.docs = [];
	        this.docTimeToLive = 1000;
	    }
	    Object.defineProperty(DebouncedDocContainer.prototype, "length", {
	        get: function () {
	            return this.docs.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DebouncedDocContainer.prototype.clearExpiredDocs = function () {
	        throw new Error('Not implemented');
	    };
	    DebouncedDocContainer.prototype.clearAllDocs = function () {
	        this.docs.length = 0;
	    };
	    /**
	     * Puts a document in to the array if it is not there
	     * @param doc
	     */
	    DebouncedDocContainer.prototype.put = function (doc) {
	        if (!this.byId(doc.id)) {
	            this.docs.push({
	                id: doc.id,
	                doc: doc,
	                expires: this.docTimeToLive ? Date.now() + this.docTimeToLive : null
	            });
	        }
	        else {
	            throw new Exceptions.DocumentExistsException(new Error('Document ' + doc.id + ' already exists'));
	        }
	    };
	    /**
	     * Return the entry with details about the doc with an id
	     * @param id
	     */
	    DebouncedDocContainer.prototype.entryById = function (id) {
	        var item = _.findWhere(this.docs, { id: id });
	        if (item)
	            return item;
	    };
	    /**
	     * Return all the docs
	     * @returns {IDebouncedDocItem<T>[]}
	     */
	    DebouncedDocContainer.prototype.all = function () {
	        return this.docs.map(function (entry) {
	            return entry.doc;
	        });
	    };
	    /**
	     * Return the saved document by its id
	     * @param id
	     * @returns {T}
	     */
	    DebouncedDocContainer.prototype.byId = function (id) {
	        var item = _.findWhere(this.docs, { id: id });
	        if (item) {
	            return item.doc;
	        }
	    };
	    /**
	     * Merges a doc in to the store, if it exists
	     * otherwise adds it
	     * @param doc
	     */
	    DebouncedDocContainer.prototype.mergeDoc = function (doc) {
	        var _this = this;
	        if (!doc.id)
	            throw new Error('mergeDoc document must have a valid id');
	        var keys = _.keys(doc);
	        var entry = this.entryById(doc.id);
	        if (entry) {
	            var existingDoc = entry.doc;
	            var changedProperties = [];
	            _.each(keys, function (key) {
	                if (_this.mergeDocKey(key, existingDoc, doc)) {
	                    changedProperties.push(key);
	                }
	            });
	            return {
	                added: false,
	                merged: changedProperties.length > 0,
	                changedProperties: changedProperties,
	                doc: existingDoc
	            };
	        }
	        else {
	            this.put(doc);
	            return {
	                added: true,
	                merged: false,
	                changedProperties: keys,
	                doc: doc
	            };
	        }
	    };
	    DebouncedDocContainer.prototype.mergeDocKey = function (key, existingDoc, doc) {
	        var value = doc[key];
	        if (!_.isFunction(value)) {
	            if (existingDoc[key] !== value) {
	                existingDoc[key] = value;
	                return true;
	            }
	        }
	    };
	    DebouncedDocContainer.prototype.mergeMultiple = function (docs) {
	        var _this = this;
	        var merges = docs.map(function (doc) {
	            return _this.mergeDoc(doc);
	        });
	        return merges;
	    };
	    return DebouncedDocContainer;
	})();
	exports.DebouncedDocContainer = DebouncedDocContainer;
	//# sourceMappingURL=DebouncedDocContainer.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Q = __webpack_require__(26);
	var _ = __webpack_require__(25);
	function whenFetched(entities, callback) {
	    var promises = _.chain([entities]).flatten().pluck("_fetch").compact().value();
	    if (promises.length) {
	        return Q.all(promises).done(function (results) {
	            console.log('whenFetched', results);
	            var errors = results.filter(function (result) {
	                return result.failed;
	            });
	            return callback(errors);
	        });
	    }
	    else {
	        console.log('whenFetched', entities);
	        throw new Error('Nothing is being fetched');
	    }
	}
	exports.whenFetched = whenFetched;
	;
	//# sourceMappingURL=whenFetched.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var NavigationController = __webpack_require__(48);
	var navigation = new NavigationController.NavigationController();
	module.exports = navigation;
	//# sourceMappingURL=navigation.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(25);
	exports._registry = {};
	function register(instance, id) {
	    exports._registry[id] = instance;
	}
	exports.register = register;
	function unregister(instance, id) {
	    delete exports._registry[id];
	}
	exports.unregister = unregister;
	function resetRegistry() {
	    var oldCount = getRegistrySize();
	    var controller;
	    for (var key in exports._registry) {
	        controller = exports._registry[key];
	        controller.region.destroy();
	    }
	    var ret = {
	        count: getRegistrySize(),
	        previous: oldCount,
	        msg: "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize())
	    };
	    console.info('Registry reset', ret);
	    return ret;
	}
	exports.resetRegistry = resetRegistry;
	function getRegistrySize() {
	    return _.size(exports._registry);
	}
	exports.getRegistrySize = getRegistrySize;
	//# sourceMappingURL=registry.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../typings/tsd.d.ts' />
	'use strict';
	var _ = __webpack_require__(25);
	/**
	 * Extract a query string value
	 * @param searchString
	 * @param key
	 * @returns {*}
	 */
	function getQuery(searchString, key) {
	    var values = searchString.split("&");
	    var i = 0;
	    while (i < values.length) {
	        var ft = values[i].split("=");
	        if (ft[0] === key) {
	            return ft[1];
	        }
	        i += 1;
	    }
	    return null;
	}
	exports.getQuery = getQuery;
	/**
	 * Extract the searchString query string values from a url
	 * @param url
	 * @returns {string}
	 */
	function searchString(url) {
	    if (/\#/.test(url)) {
	        url = url.split('#')[0];
	    }
	    if (/\?/.test(url)) {
	        return url.split('?')[1];
	    }
	    else {
	        return '';
	    }
	}
	exports.searchString = searchString;
	/**
	 * Get the correct separator for a url and a query string
	 * @param url
	 * @returns {string}
	 */
	function separator(url) {
	    if (url) {
	        if (/\?/.test(url)) {
	            return '&';
	        }
	        else {
	            return '?';
	        }
	    }
	    else {
	        return '';
	    }
	}
	exports.separator = separator;
	/**
	 * Joins url query string values
	 * @param urls
	 * @returns {string}
	 */
	function join() {
	    var urls = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        urls[_i - 0] = arguments[_i];
	    }
	    var _merge = function (memo, val) {
	        return memo + (separator(memo)) + val;
	    };
	    return _.reduce(urls, _merge);
	}
	exports.join = join;
	/**
	 * Join url paths
	 * @param urls
	 * @returns {string}
	 */
	function joinPaths() {
	    var urls = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        urls[_i - 0] = arguments[_i];
	    }
	    var _merge = function (memo, val) {
	        return memo + '/' + val;
	    };
	    return _.reduce(urls, _merge);
	}
	exports.joinPaths = joinPaths;
	function param(obj, separator, joiner) {
	    if (separator === void 0) { separator = '&'; }
	    if (joiner === void 0) { joiner = '='; }
	    function _param(memo, val, key) {
	        if (_.isUndefined(val)) {
	            return memo;
	        }
	        else {
	            var pre = memo ? memo + separator : '';
	            return pre + key + joiner + val;
	        }
	    }
	    return _.reduce(obj, _param, '');
	}
	exports.param = param;
	//# sourceMappingURL=url.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	function preventGlobally() {
	    var style = document.documentElement.style;
	    style.webkitTouchCallout = "none";
	    style.webkitUserSelect = "none";
	}
	exports.preventGlobally = preventGlobally;
	//# sourceMappingURL=preventSelectionCallout.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports.ChildHolderView = __webpack_require__(49);
	exports.View = __webpack_require__(50);
	exports.ItemView = __webpack_require__(51);
	exports.Layout = __webpack_require__(52);
	exports.List = __webpack_require__(53);
	//# sourceMappingURL=index.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var $ = __webpack_require__(54);
	var Backbone = __webpack_require__(55);
	var _ = __webpack_require__(25);
	function configureBackboneSync(app) {
	    var _sync = Backbone.sync;
	    Backbone.sync = function (method, entity, options) {
	        if (options === void 0) { options = {}; }
	        _.defaults(options, {
	            beforeSend: _.bind(beforeSend, entity),
	            complete: _.bind(complete, entity)
	        });
	        if (!entity._fetch && method === "read") {
	            addFetchPromise(entity, options);
	        }
	        return _sync(method, entity, options);
	    };
	    function beforeSend() {
	        return this.trigger("sync:start", this);
	    }
	    function complete() {
	        return this.trigger("sync:stop", this);
	    }
	    function addFetchPromise(entity, options) {
	        var d = $.Deferred();
	        entity._fetch = d.promise();
	        var _success = options.success;
	        var _error = options.error;
	        options.success = function (resp, status, xhr) {
	            _success.apply(this, arguments);
	            d.resolve({
	                response: resp,
	                options: options,
	                status: xhr ? xhr.status : 0,
	                failed: false
	            });
	        };
	        options.error = function (resp, status) {
	            if (resp.status === 0) {
	                entity.trigger('error:offline');
	                app.vent.trigger('fetch:offline', entity);
	            }
	            else if (_.contains([401, 403], resp.status)) {
	                entity.trigger('unauthorised');
	                app.vent.trigger('fetch:unauthorised', entity);
	            }
	            else if (Math.floor(resp.status / 100) === 5) {
	                entity.trigger('error:server');
	                app.vent.trigger('fetch:error:server');
	            }
	            _error.apply(this, arguments);
	            d.resolve({
	                response: resp,
	                options: options,
	                status: resp.status,
	                failed: true
	            });
	        };
	    }
	}
	exports.configureBackboneSync = configureBackboneSync;
	//# sourceMappingURL=sync.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var Marionette = __webpack_require__(1);
	var LayoutView = Marionette.LayoutView;
	/*
	  _buildRegions
	  -------------
	  We need to ensure that there is an element on the
	  LayoutView so that getEl relative to the parentEl
	  works properly
	 */
	var _buildRegions = LayoutView.prototype._buildRegions;
	LayoutView.prototype._buildRegions = function (regions) {
	    this._ensureElement();
	    return _buildRegions.apply(this, arguments);
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var Backbone, Marionette, _, _close, _getEl, _getName, _show;
	
	_ = __webpack_require__(25);
	
	Backbone = __webpack_require__(55);
	
	Marionette = __webpack_require__(1);
	
	
	/*
	  Animate Out
	  -----------
	  Animate out the old view before being ready to show
	  the next
	 */
	
	Marionette.Region.prototype.animateOut = function(cb) {
	  if (this.currentView && this.currentView.animateOut) {
	    console.log('animating out', this.currentView, this.el);
	    this.triggerMethod('before:animating:out');
	    return this.currentView.animateOut(cb);
	  } else if (_.isFunction(cb)) {
	    return cb.call(this);
	  }
	};
	
	
	/*
	  Animated Empty
	  -----
	  Use animation when emptying the region if it
	  is available
	 */
	
	Marionette.Region.prototype.animateEmpty = function(options, cb) {
	  return this.animateOut((function(_this) {
	    return function() {
	      _this.empty();
	      if (_.isFunction(cb)) {
	        return cb.call(_this);
	      }
	    };
	  })(this));
	};
	
	
	/*
	  getEl
	  -----
	  Update the default functionality to check for
	  parentEl on the options and find the selector
	  based on it's children
	 */
	
	_getEl = Marionette.Region.prototype.getEl;
	
	Marionette.Region.prototype.getEl = function(el) {
	  var $el, parentEl;
	  if (_.isString(el)) {
	    parentEl = _.result(this.options, 'parentEl');
	    if (parentEl) {
	      $el = Backbone.$(parentEl).find(el);
	      if ($el.length) {
	        return $el;
	      } else {
	
	      }
	    } else {
	      return _getEl.apply(this, arguments);
	    }
	  } else {
	    return _getEl.apply(this, arguments);
	  }
	};
	
	
	/*
	  Show new View
	  -------------
	  Handle transitions between old view and new one
	  with the option to disable animations
	 */
	
	_show = Marionette.Region.prototype.show;
	
	_getName = function(view) {
	  if (view) {
	    if (view.name) {
	      return view.name;
	    } else {
	      return view.constructor.name;
	    }
	  } else {
	    return 'no view';
	  }
	};
	
	Marionette.Region.prototype.show = function(view, immediate) {
	  if (immediate == null) {
	    immediate = false;
	  }
	  this._nextView = view;
	  if (immediate) {
	    if (this.$el && this.$el[0]) {
	      this.$el[0].scrollTop = 0;
	      this.$el[0].scrollLeft = 0;
	    }
	    this._nextView = null;
	    _show.call(this, view);
	    return console.log('showing', _getName(view), view, this.el);
	  } else {
	    return this.animateOut((function(_this) {
	      return function() {
	        if (_this.$el && _this.$el[0]) {
	          _this.$el[0].scrollTop = 0;
	          _this.$el[0].scrollLeft = 0;
	        }
	        _this._nextView = null;
	        _show.call(_this, view);
	        return console.log('showing', _getName(view), view, _this.el);
	      };
	    })(this));
	  }
	};
	
	
	/*
	  This will show the view immediately if #getEl returns an element
	  otherwise it will wait for the show event to fire on waitForView
	  before showing the view
	 */
	
	Marionette.Region.prototype.showWithView = function(waitForView, viewToShow, options) {
	  var $el;
	  if (options == null) {
	    options = {};
	  }
	  _.defaults(options, {
	    immediate: false,
	    waitForEvent: 'show'
	  });
	  if (_.isString(this.el)) {
	    $el = this.getEl(this.el);
	  } else {
	    $el = this.$el;
	  }
	  if ($el.length) {
	    this.show(viewToShow, options.immediate);
	  } else {
	    this.listenToOnce(waitForView, options.waitForEvent, (function(_this) {
	      return function() {
	        return _this.show(viewToShow, options.immediate);
	      };
	    })(this));
	  }
	};
	
	
	/*
	  Close
	  -----
	  Update to include logging when a view is closed
	 */
	
	_close = Marionette.Region.prototype.close;
	
	Marionette.Region.prototype.close = function() {
	  console.log('closing', (this.currentView ? this.currentView : void 0), this.el);
	  return _close.apply(this, arguments);
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Marionette, _;
	
	_ = __webpack_require__(25);
	
	Marionette = __webpack_require__(1);
	
	_.extend(Marionette.View.prototype, {
	  tagName: 'section',
	  className: function() {
	    return this.name;
	  },
	  templateHelpers: function() {
	    return {
	      modelName: this.model ? this.model.name : ''
	    };
	  }
	});


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(1);
	var ModifiersBehavior = (function (_super) {
	    __extends(ModifiersBehavior, _super);
	    function ModifiersBehavior() {
	        _super.apply(this, arguments);
	    }
	    ModifiersBehavior.prototype.addModifier = function (modifier) {
	        this.$el.addClass("" + this.view.name + "--" + modifier);
	        return true;
	    };
	    ModifiersBehavior.prototype.removeModifier = function (modifier) {
	        this.$el.removeClass("" + this.view.name + "--" + modifier);
	        return false;
	    };
	    ModifiersBehavior.prototype.toggleModifier = function (modifier) {
	        if (this.$el.hasClass("" + this.view.name + "--" + modifier)) {
	            return this.removeModifier(modifier);
	        }
	        else {
	            return this.addModifier(modifier);
	        }
	    };
	    ModifiersBehavior.prototype.onModified = function (modifier, options) {
	        if (options === void 0) { options = {}; }
	        var state;
	        if (!this.view.name) {
	            throw new Error('A name is required on this View');
	        }
	        if (options.remove) {
	            state = this.removeModifier(modifier);
	        }
	        else if (options.toggle) {
	            state = this.toggleModifier(modifier);
	        }
	        else {
	            state = this.addModifier(modifier);
	        }
	        this.view.triggerMethod("modified:" + modifier, {
	            on: state
	        });
	    };
	    return ModifiersBehavior;
	})(Marionette.Behavior);
	exports.ModifiersBehavior = ModifiersBehavior;
	//# sourceMappingURL=Modifiers.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var Marionette = __webpack_require__(1);
	var $ = __webpack_require__(54);
	var globalStateInitialized = false;
	var SCROLLABLE_CLASS = 'Scrollables__container';
	function initGlobalScrollableState() {
	    globalStateInitialized = true;
	    // Disable scroll for the document, we'll handle it ourselves
	    $(document).on("touchmove", function (e) {
	        e.preventDefault();
	    });
	    $(document.body).addClass('Scrollables--attached').on("touchstart", "." + SCROLLABLE_CLASS, function (e) {
	        // If the element is scrollable (content overflows), then...
	        if (this.scrollHeight !== this.clientHeight) {
	            // If we're at the top, scroll down one pixel to allow scrolling up
	            if (this.scrollTop === 0) {
	                this.scrollTop = 1;
	            }
	            // If we're at the bottom, scroll up one pixel to allow scrolling down
	            if (this.scrollTop === this.scrollHeight - this.clientHeight) {
	                this.scrollTop = this.scrollHeight - this.clientHeight - 1;
	            }
	        }
	        // Check if we can scroll
	        this.allowUp = this.scrollTop > 0;
	        this.allowDown = this.scrollTop < (this.scrollHeight - this.clientHeight);
	        this.lastY = e.originalEvent.pageY;
	    }).on("touchmove", "." + SCROLLABLE_CLASS, function (e) {
	        var event = e.originalEvent;
	        var up = event.pageY > this.lastY;
	        var down = !up;
	        this.lastY = event.pageY;
	        if ((up && this.allowUp) || (down && this.allowDown)) {
	            console.log('stop');
	            event.stopPropagation();
	        }
	        else {
	            console.log('prevent');
	            event.preventDefault();
	        }
	    });
	}
	var ScrollablesBehavior = (function (_super) {
	    __extends(ScrollablesBehavior, _super);
	    function ScrollablesBehavior() {
	        _super.apply(this, arguments);
	    }
	    ScrollablesBehavior.prototype.onShow = function () {
	        var _this = this;
	        //if (!globalStateInitialized) {
	        //  initGlobalScrollableState();
	        //}
	        _.each(this.options, function (val, key) {
	            var $el;
	            if (val === 'el') {
	                $el = _this.$el;
	            }
	            else {
	                $el = _this.$(val);
	            }
	            if ($el && $el.length)
	                $el.addClass(SCROLLABLE_CLASS);
	        });
	    };
	    return ScrollablesBehavior;
	})(Marionette.Behavior);
	exports.ScrollablesBehavior = ScrollablesBehavior;
	//# sourceMappingURL=Scrollables.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var ItemView = __webpack_require__(51);
	var AlertComponent = (function (_super) {
	    __extends(AlertComponent, _super);
	    function AlertComponent(options) {
	        this.name = 'alert';
	        this.template = __webpack_require__(63);
	        _super.call(this, options);
	    }
	    AlertComponent.prototype.templateHelpers = function () {
	        return {
	            message: this.options.message
	        };
	    };
	    AlertComponent.prototype.onShow = function () {
	        this.$el.addClass('alert-' + (this.options.alertType || 'info'));
	    };
	    return AlertComponent;
	})(ItemView.ItemView);
	exports.AlertComponent = AlertComponent;
	//# sourceMappingURL=Alert.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var AppController = __webpack_require__(9);
	var SpinnerView = __webpack_require__(38);
	var whenFetched = __webpack_require__(19);
	var LoadingController = (function (_super) {
	    __extends(LoadingController, _super);
	    function LoadingController(options) {
	        _super.call(this, options);
	        _.defaults(this.options, {
	            loadingType: "spinner",
	            debug: false
	        });
	        this.entities = options.entities || this.getEntities(options.view);
	        this.loadingView = this.getLoadingView();
	        if (this.loadingView) {
	            this.show(this.loadingView);
	        }
	        if (!this.options.debug) {
	            this.monitorReadyState(options.view, this.loadingView);
	        }
	    }
	    LoadingController.prototype.getLoadingView = function () {
	        switch (this.options.loadingType) {
	            case "opacity":
	                this.region.currentView.$el.css("opacity", 0.5);
	                break;
	            case 'spinner':
	                var loadingView = new SpinnerView.SpinnerView();
	                loadingView.start();
	                break;
	            default:
	                throw new Error("Invalid loadingType");
	        }
	        return loadingView;
	    };
	    LoadingController.prototype.monitorReadyState = function (realView, loadingView) {
	        var _this = this;
	        var _viewReady = function (errors) {
	            if (errors && errors.length) {
	                _this.showError(realView, loadingView);
	            }
	            else {
	                _this.showRealView(realView, loadingView);
	            }
	        };
	        if (this.options.monitorReadyState) {
	            return this.options.monitorReadyState(realView, this, _viewReady);
	        }
	        else {
	            return whenFetched.whenFetched(this.entities, _viewReady);
	        }
	    };
	    LoadingController.prototype.showError = function (realView, loadingView) {
	        if (realView) {
	            realView.destroy();
	        }
	        switch (this.options.loadingType) {
	            case 'spinner':
	                return loadingView.stop();
	            default:
	                throw new Error('No error handline on loading type');
	        }
	    };
	    LoadingController.prototype.showRealView = function (realView, loadingView) {
	        switch (this.options.loadingType) {
	            case "opacity":
	                this.region.currentView.$el.removeAttr("style");
	                break;
	            case 'spinner':
	                if (this.region.currentView !== loadingView && this.region._nextView !== loadingView) {
	                    realView.destroy();
	                }
	        }
	        if (!(!realView || this.options.debug)) {
	            this.show(realView);
	        }
	    };
	    LoadingController.prototype.getEntities = function (view) {
	        return _.chain(view).pick("model", "collection").toArray().compact().value();
	    };
	    return LoadingController;
	})(AppController.AppController);
	exports.LoadingController = LoadingController;
	//# sourceMappingURL=LoadingController.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var Marionette = __webpack_require__(1);
	var AnimatedRegion = (function (_super) {
	    __extends(AnimatedRegion, _super);
	    function AnimatedRegion() {
	        _super.apply(this, arguments);
	    }
	    AnimatedRegion.prototype.animateOut = function (cb) {
	        if (this.currentView && this.currentView.animateOut) {
	            console.log('animating out', this.currentView, this.el);
	            this.currentView.animateOut(cb);
	        }
	        else if (_.isFunction(cb)) {
	            cb();
	        }
	    };
	    AnimatedRegion.prototype.animateEmpty = function (cb) {
	        var _this = this;
	        this.animateOut(function () {
	            _this.empty();
	            if (_.isFunction(cb)) {
	                cb();
	            }
	        });
	    };
	    return AnimatedRegion;
	})(Marionette.Region);
	exports.AnimatedRegion = AnimatedRegion;
	//# sourceMappingURL=AnimatedRegion.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Backbone = __webpack_require__(55);
	var constants = __webpack_require__(5);
	var ItemView = __webpack_require__(51);
	var BUTTON_EVENTS = (function (_super) {
	    __extends(BUTTON_EVENTS, _super);
	    function BUTTON_EVENTS() {
	        _super.apply(this, arguments);
	    }
	    BUTTON_EVENTS.navigate = new BUTTON_EVENTS('navigate');
	    return BUTTON_EVENTS;
	})(constants.StringConstant);
	exports.BUTTON_EVENTS = BUTTON_EVENTS;
	var BUTTON_THEME = (function (_super) {
	    __extends(BUTTON_THEME, _super);
	    function BUTTON_THEME() {
	        _super.apply(this, arguments);
	    }
	    BUTTON_THEME.default = new BUTTON_THEME('default');
	    BUTTON_THEME.inverse = new BUTTON_THEME('inverse');
	    BUTTON_THEME.action = new BUTTON_THEME('action');
	    BUTTON_THEME.link = new BUTTON_THEME('link');
	    BUTTON_THEME.primary = new BUTTON_THEME('primary');
	    BUTTON_THEME.secondary = new BUTTON_THEME('secondary');
	    return BUTTON_THEME;
	})(constants.StringConstant);
	exports.BUTTON_THEME = BUTTON_THEME;
	var BUTTON_SIZE = (function (_super) {
	    __extends(BUTTON_SIZE, _super);
	    function BUTTON_SIZE() {
	        _super.apply(this, arguments);
	    }
	    BUTTON_SIZE.default = new BUTTON_SIZE('default');
	    BUTTON_SIZE.small = new BUTTON_SIZE('small');
	    BUTTON_SIZE.large = new BUTTON_SIZE('large');
	    return BUTTON_SIZE;
	})(constants.StringConstant);
	exports.BUTTON_SIZE = BUTTON_SIZE;
	var ButtonModel = (function (_super) {
	    __extends(ButtonModel, _super);
	    function ButtonModel(attributes, options) {
	        this.idAttribute = 'name';
	        _super.call(this, attributes, options);
	    }
	    ButtonModel.prototype.defaults = function () {
	        return {
	            name: '',
	            icon: '',
	            text: '',
	            block: true,
	            theme: BUTTON_THEME.default,
	            size: BUTTON_SIZE.default
	        };
	    };
	    Object.defineProperty(ButtonModel.prototype, "name", {
	        get: function () {
	            return this.get('name');
	        },
	        set: function (value) {
	            this.set('name', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "icon", {
	        get: function () {
	            return this.get('icon');
	        },
	        set: function (value) {
	            this.set('icon', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "text", {
	        get: function () {
	            return this.get('text');
	        },
	        set: function (value) {
	            this.set('text', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "block", {
	        get: function () {
	            return this.get('block');
	        },
	        set: function (value) {
	            this.set('block', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "theme", {
	        get: function () {
	            return this.get('theme');
	        },
	        set: function (value) {
	            this.set('theme', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "size", {
	        get: function () {
	            return this.get('size');
	        },
	        set: function (value) {
	            this.set('size', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ButtonModel;
	})(Backbone.Model);
	exports.ButtonModel = ButtonModel;
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(options) {
	        this.model = options.model || new ButtonModel(this.defaults());
	        this.name = options.name || this.model.name || 'base-button';
	        this.template = __webpack_require__(64);
	        if (options.submit) {
	            this.tagName = 'button';
	        }
	        else {
	            this.tagName = 'a';
	        }
	        this.triggers = {
	            'click': 'click'
	        };
	        this.on('click', this.navigate);
	        _super.call(this, options);
	        if (options)
	            this.setProperties(options);
	        this.setClassNames();
	    }
	    Object.defineProperty(Button.prototype, "className", {
	        get: function () {
	            return 'Button btn Button--' + this.name + 'Button';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Button.prototype.getIconClass = function (iconName) {
	        return 'Icon Icon--' + iconName;
	    };
	    Object.defineProperty(Button.prototype, "text", {
	        get: function () {
	            return this.model.text;
	        },
	        set: function (value) {
	            this.model.text = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Button.prototype.serializeData = function () {
	        var data = this.model.toJSON();
	        data.iconClass = this.getIconClass(this.model.icon);
	        return data;
	    };
	    Button.prototype.navigate = function () {
	        this.trigger(BUTTON_EVENTS.navigate.val, this.name);
	    };
	    Button.prototype.setProperties = function (options) {
	        this.unsetClassNames();
	        if (options.icon)
	            this.model.icon = options.icon;
	        if (options.text)
	            this.model.text = options.text;
	        if (_.isBoolean(options.block))
	            this.model.block = options.block;
	        if (options.theme)
	            this.model.theme = options.theme;
	        if (options.size)
	            this.model.size = options.size;
	        if (options.submit)
	            this.$el.attr('type', 'submit');
	    };
	    Button.prototype.unsetClassNames = function () {
	        if (!this.$el)
	            return;
	        this.$el.removeClass('btn-link').removeClass('Button--' + this.model.theme).removeClass('Button--' + this.model.size);
	        this.$el.removeClass('btn-block');
	    };
	    Button.prototype.setClassNames = function () {
	        this.$el.addClass('Button--' + this.model.theme).addClass('Button--' + this.model.size + 'Size');
	        if (this.model.theme === BUTTON_THEME.link) {
	            this.$el.addClass('btn-link');
	        }
	        if (this.model.block) {
	            this.$el.addClass('btn-block');
	        }
	    };
	    return Button;
	})(ItemView.ItemView);
	exports.Button = Button;
	//# sourceMappingURL=Button.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var BackboneForms = __webpack_require__(56);
	var templates = __webpack_require__(61);
	var constants = __webpack_require__(5);
	var views = __webpack_require__(24);
	var Layout = views.Layout;
	var ChildHolderView = views.ChildHolderView;
	templates.init();
	var FORMVIEW_EVENTS = (function (_super) {
	    __extends(FORMVIEW_EVENTS, _super);
	    function FORMVIEW_EVENTS() {
	        _super.apply(this, arguments);
	    }
	    FORMVIEW_EVENTS.submitted = new FORMVIEW_EVENTS('submitted');
	    return FORMVIEW_EVENTS;
	})(constants.StringConstant);
	exports.FORMVIEW_EVENTS = FORMVIEW_EVENTS;
	var FormView = (function (_super) {
	    __extends(FormView, _super);
	    function FormView(options) {
	        this.name = 'FormView';
	        this.tagName = 'form';
	        this.attributes = { role: 'form' };
	        this.template = __webpack_require__(65);
	        this.regions = {
	            fieldsRegion: '.FormView__fieldsRegion',
	            buttonsRegion: '.FormView__buttonsRegion'
	        };
	        this.parseIconProperties(options.schema);
	        _super.call(this);
	        this.$el.addClass('FormStacked');
	        this.fields = new BackboneForms(options);
	        this.buttonsHolder = new ChildHolderView.GenericChildHolderView();
	        this.setListeners();
	    }
	    FormView.prototype.onDestroy = function () {
	        this.$el.off();
	        this.fields.stopListening();
	        this.fields = null;
	    };
	    FormView.prototype.setListeners = function () {
	        this.$el.on('submit', this.onFormSubmit.bind(this));
	    };
	    FormView.prototype.onShow = function () {
	        this.fieldsRegion.show(this.fields);
	        this.buttonsRegion.show(this.buttonsHolder);
	    };
	    FormView.prototype.parseIconProperties = function (schema) {
	        _.each(schema, function (schemaItem) {
	            if (schemaItem.icon) {
	                schemaItem.title = '<i class="fa fa-' + schemaItem.icon + '"></i>';
	            }
	        });
	    };
	    FormView.prototype.onFormSubmit = function (e) {
	        this.trigger(FORMVIEW_EVENTS.submitted.toString());
	        e.preventDefault();
	        e.stopImmediatePropagation();
	        return false;
	    };
	    FormView.prototype.disableForm = function () {
	        this.$el.addClass(FormView.DISABLED_CLASS);
	    };
	    FormView.prototype.enableForm = function () {
	        this.$el.removeClass(FormView.DISABLED_CLASS);
	    };
	    FormView.prototype.validate = function () {
	        return this.fields.validate();
	    };
	    FormView.prototype.getValue = function (property) {
	        return this.fields.getValue(property);
	    };
	    FormView.prototype.setValue = function (properties) {
	        return this.fields.setValue(properties);
	    };
	    FormView.DISABLED_CLASS = 'FormView--disabled';
	    return FormView;
	})(Layout.Layout);
	exports.FormView = FormView;
	//# sourceMappingURL=FormView.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var View = __webpack_require__(50);
	var Spin = __webpack_require__(57);
	var SpinnerView = (function (_super) {
	    __extends(SpinnerView, _super);
	    function SpinnerView(options) {
	        this.name = 'SpinnerView';
	        this.loadingDelay = 1000;
	        this.loadingClass = 'SpinnerView--spinning';
	        _super.call(this, options);
	    }
	    SpinnerView.prototype.onDestroy = function () {
	        this.stop();
	    };
	    SpinnerView.prototype.start = function () {
	        var _this = this;
	        this.stop();
	        if (this.loadingTimeout) {
	            clearTimeout(this.loadingTimeout);
	        }
	        this.loadingTimeout = setTimeout(function () {
	            _this.$el.addClass(_this.loadingClass);
	            _this.loadingSpinner = new Spin(SpinnerView.spinOptions);
	            _this.loadingSpinner.spin(_this.$el[0]);
	        }, this.loadingDelay);
	    };
	    SpinnerView.prototype.stop = function () {
	        if (this.loadingTimeout) {
	            clearTimeout(this.loadingTimeout);
	        }
	        if (this.loadingSpinner) {
	            this.loadingSpinner.stop();
	            return this.$el.removeClass(this.loadingClass);
	        }
	    };
	    SpinnerView.spinOptions = {
	        lines: 13,
	        length: 4,
	        width: 2,
	        radius: 5,
	        corners: 1,
	        rotate: 0,
	        direction: 1,
	        color: "#fff",
	        speed: 1,
	        trail: 60,
	        shadow: false,
	        hwaccel: true,
	        className: "SpinnerView__spinner animated bounceIn",
	        zIndex: 2e9,
	        top: "30px",
	        left: "auto"
	    };
	    return SpinnerView;
	})(View.View);
	exports.SpinnerView = SpinnerView;
	//# sourceMappingURL=SpinnerView.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Backbone = __webpack_require__(55);
	var ItemView = __webpack_require__(51);
	var SpinnerView = __webpack_require__(38);
	var NoticeViewModel = (function (_super) {
	    __extends(NoticeViewModel, _super);
	    function NoticeViewModel() {
	        _super.apply(this, arguments);
	    }
	    NoticeViewModel.prototype.defaults = function () {
	        return {
	            header: '',
	            body: '',
	            buttons: [],
	            canDismiss: true
	        };
	    };
	    Object.defineProperty(NoticeViewModel.prototype, "header", {
	        get: function () {
	            return this.get('header');
	        },
	        set: function (value) {
	            this.set('header', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "body", {
	        get: function () {
	            return this.get('body');
	        },
	        set: function (value) {
	            this.set('body', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "buttons", {
	        get: function () {
	            return this.get('buttons');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "canDismiss", {
	        get: function () {
	            return this.get('canDismiss');
	        },
	        set: function (value) {
	            this.set('canDismiss', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "loading", {
	        get: function () {
	            return this.get('loading');
	        },
	        set: function (value) {
	            this.set('loading', value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return NoticeViewModel;
	})(Backbone.Model);
	exports.NoticeViewModel = NoticeViewModel;
	var NoticeView = (function (_super) {
	    __extends(NoticeView, _super);
	    function NoticeView(options) {
	        if (options === void 0) { options = {}; }
	        this.name = 'NoticeView';
	        this.template = __webpack_require__(66);
	        this.tagName = 'section';
	        this.ui = {
	            buttons: '.NoticeView__btns'
	        };
	        _super.call(this, options);
	        this.model = this.model || new NoticeViewModel();
	        if (options.header) {
	            this.model.header = options.header;
	        }
	        if (options.body) {
	            this.model.body = options.body;
	        }
	        if (options.buttons) {
	            this.model.buttons = options.buttons;
	        }
	        if (_.isBoolean(options.loading)) {
	            this.model.loading = options.loading;
	        }
	        if (_.isBoolean(options.canDismiss)) {
	            this.model.canDismiss = options.canDismiss;
	        }
	        this.listenTo(this.model, 'change', this.render);
	    }
	    NoticeView.prototype.onRender = function () {
	        var _this = this;
	        if (!this._loadingView) {
	            this._loadingView = new SpinnerView.SpinnerView();
	        }
	        this.$el.append(this._loadingView.el);
	        if (this.model.get('loading')) {
	            this._loadingView.start();
	        }
	        else {
	            this._loadingView.stop();
	        }
	        this.ui.buttons.empty();
	        this.model.get('buttons').forEach(function (btn) {
	            btn.render();
	            _this.listenTo(btn, 'click', _this.onButtonClicked);
	            _this.ui.buttons.append(btn.el);
	        });
	    };
	    NoticeView.prototype.canDismiss = function () {
	        return this.model.get('canDismiss');
	    };
	    NoticeView.prototype.hide = function () {
	        this.$el.hide();
	        if (this._loadingView) {
	            return this._loadingView.stop();
	        }
	    };
	    NoticeView.prototype.show = function () {
	        return this.$el.show();
	    };
	    NoticeView.prototype.set = function (properties) {
	        this.model.set(properties);
	        return this.show();
	    };
	    NoticeView.prototype.destroyButtons = function () {
	        this.model.buttons.forEach(function (btn) {
	            btn.destroy();
	        });
	        this.model.buttons.length = 0;
	    };
	    NoticeView.prototype.onButtonClicked = function () {
	        return this.trigger('button:clicked');
	    };
	    return NoticeView;
	})(ItemView.ItemView);
	exports.NoticeView = NoticeView;
	//# sourceMappingURL=NoticeView.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(25);
	var config = __webpack_require__(2);
	function initComponents(components) {
	    if (!config.config.handlebars) {
	        throw new Error('This requires handlebars to have been passed in to configure');
	    }
	    function getComponentController(name, context) {
	        var Controller = components[name];
	        if (Controller) {
	            return new Controller({
	                model: context
	            });
	        }
	        else {
	            throw new Error("Cannot find " + name + " component");
	        }
	    }
	    function getAttributes(attributes) {
	        if (attributes === void 0) { attributes = {}; }
	        var attr = _.map(attributes || {}, function (val, key) {
	            if (_.isString(val || _.isFinite(val))) {
	                return "" + key + "=\"" + val + "\"";
	            }
	            else {
	                return '';
	            }
	        });
	        if (attr.length) {
	            return ' ' + attr.join(' ');
	        }
	        else {
	            return '';
	        }
	    }
	    function className(name, hash) {
	        var classes;
	        if (hash == null) {
	            hash = {};
	        }
	        if (!name) {
	            throw new Error('className must specify a name');
	        }
	        if (hash["class"]) {
	            classes = hash["class"].split(' ');
	        }
	        else {
	            classes = [];
	        }
	        classes.unshift(name);
	        return hash["class"] = classes.join(' ');
	    }
	    config.config.handlebars.registerHelper('c', function (name, options) {
	        var controller = getComponentController(name, this);
	        return controller.render(options);
	    });
	    config.config.handlebars.registerHelper('in_region', function (name, options) {
	        return this._regions[name] = {
	            fn: options.fn
	        };
	    });
	    config.config.handlebars.registerHelper('region', function (name, options) {
	        var componentPath = "" + this._componentName + "__" + name;
	        var in_region = this._regions[name];
	        var content = in_region ? in_region.fn(this) : '';
	        var hash = options.hash || {};
	        className("" + componentPath + "-region", hash);
	        var attributes = getAttributes(hash);
	        return ['<div', attributes, '>', content, "</div>"].join('');
	    });
	}
	exports.initComponents = initComponents;
	;
	//# sourceMappingURL=components.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var i18next = __webpack_require__(58);
	var _ = __webpack_require__(25);
	var config = __webpack_require__(2);
	function init() {
	    var handlebars = config.config.handlebars;
	    /**
	     * Get translation for a given key, passing the options hash to i18next
	     * to allow for variable replacement
	     * {{k header myVar="hello"}}
	     */
	    handlebars.registerHelper("t", function (i18n_key, options) {
	        var opts = {
	            wrapWithKey: true
	        };
	        _.extend(opts, options.hash);
	        var result = i18next.t(i18n_key, opts);
	        var attrs = ["data-t=\"" + i18n_key + "\""];
	        _.each(opts, function (val, key) {
	            if (_.isString(val || _.isFinite(val))) {
	                return attrs.push("data-" + key + "=\"" + val + "\"");
	            }
	        });
	        if (opts['wrapWithKey']) {
	            return "<span " + (attrs.join(' ')) + ">" + (new handlebars.SafeString(result)) + "</span>";
	        }
	        else {
	            return new handlebars.SafeString(result);
	        }
	    });
	    /**
	     * Translation in a block context
	     */
	    handlebars.registerHelper("tr", function (context, options) {
	        var opts = i18next.functions.extend(options.hash, context);
	        if (options.fn) {
	            opts.defaultValue = options.fn(context);
	        }
	        var result = i18next.t(opts.key, opts);
	        return new handlebars.SafeString(result);
	    });
	}
	exports.init = init;
	//# sourceMappingURL=i18next.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(1);
	var constants = __webpack_require__(5);
	var APP_ROUTER_EVENTS = (function (_super) {
	    __extends(APP_ROUTER_EVENTS, _super);
	    function APP_ROUTER_EVENTS() {
	        _super.apply(this, arguments);
	    }
	    APP_ROUTER_EVENTS.firstRoute = new APP_ROUTER_EVENTS('firstRoute');
	    return APP_ROUTER_EVENTS;
	})(constants.StringConstant);
	exports.APP_ROUTER_EVENTS = APP_ROUTER_EVENTS;
	var AppRouter = (function (_super) {
	    __extends(AppRouter, _super);
	    function AppRouter(options) {
	        _super.call(this, options);
	        console.log('AppRouter ' + options.name + ' created', options.appRoutes);
	    }
	    AppRouter.prototype.onRoute = function (routeName, routePath, routeArgs) {
	        if (AppRouter._firstRouteTriggered) {
	            this.trigger(APP_ROUTER_EVENTS.firstRoute.val);
	        }
	        else {
	            AppRouter._firstRouteTriggered = true;
	        }
	    };
	    return AppRouter;
	})(Marionette.AppRouter);
	exports.AppRouter = AppRouter;
	//# sourceMappingURL=App.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Showdown = __webpack_require__(59);
	var mdown = new Showdown.Converter();
	exports.selector = '[data-mdown]';
	exports.updateMethod = 'html';
	function onGet(val) {
	    return mdown.makeHtml(val);
	}
	//# sourceMappingURL=mdown.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Action = (function () {
	    function Action(type) {
	        this.type = type;
	    }
	    return Action;
	})();
	exports.Action = Action;
	var ActionCreator = (function () {
	    function ActionCreator(dispatcher) {
	        this.dispatcher = dispatcher;
	    }
	    return ActionCreator;
	})();
	exports.ActionCreator = ActionCreator;
	//# sourceMappingURL=actions.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	//# sourceMappingURL=interfaces.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var flux = __webpack_require__(60);
	var constants = __webpack_require__(5);
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        this.stores = [];
	        this.payloadQueue = [];
	        _super.call(this);
	    }
	    Dispatcher.prototype.registerStore = function (store) {
	        this.stores.push(store);
	        return this.register(store.dispatch.bind(store));
	    };
	    Dispatcher.prototype.dispatchPayload = function () {
	        var payload = this.payloadQueue.shift();
	        if (payload) {
	            this.dispatching = true;
	            console.log('Dispatching:', payload);
	            this.dispatch(payload);
	            this.notifyStoreListeners();
	            this.dispatching = false;
	            this.dispatchPayload();
	        }
	    };
	    Dispatcher.prototype.notifyStoreListeners = function () {
	        this.stores.forEach(function (store) {
	            store.notifyIfStateChanged();
	        });
	    };
	    Dispatcher.prototype.handlePayload = function (payload) {
	        this.payloadQueue.push(payload);
	        console.log('Dispatcher: Handling', payload);
	        if (!this.dispatching)
	            this.dispatchPayload();
	    };
	    Dispatcher.prototype.handleServerAction = function (action) {
	        var payload = {
	            source: constants.ACTION_SOURCES.ServerAction,
	            action: action
	        };
	        this.handlePayload(payload);
	    };
	    Dispatcher.prototype.handleDeviceAction = function (action) {
	        var payload = {
	            source: constants.ACTION_SOURCES.DeviceAction,
	            action: action
	        };
	        this.handlePayload(payload);
	    };
	    Dispatcher.prototype.handleViewAction = function (action) {
	        var payload = {
	            source: constants.ACTION_SOURCES.ViewAction,
	            action: action
	        };
	        this.handlePayload(payload);
	    };
	    return Dispatcher;
	})(flux.Dispatcher);
	exports.Dispatcher = Dispatcher;
	//# sourceMappingURL=Dispatcher.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var constants = __webpack_require__(5);
	var EventedClass = __webpack_require__(62);
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(dispatcher) {
	        _super.call(this);
	        this.dispatcher = dispatcher;
	        this.dispatchToken = dispatcher.registerStore(this);
	    }
	    Store.prototype.dispatch = function (payload) {
	    };
	    Store.prototype.stateChanged = function () {
	        this.stateHasChanged = true;
	    };
	    Store.prototype.notifyIfStateChanged = function () {
	        if (this.stateHasChanged) {
	            this.stateHasChanged = false;
	            this.trigger(constants.EVENT_TYPES.Change.val);
	        }
	    };
	    Store.prototype.addChangeListener = function (callback) {
	        this.on(constants.EVENT_TYPES.Change.val, callback);
	    };
	    Store.prototype.removeChangeListener = function (callback) {
	        this.off(constants.EVENT_TYPES.Change.val, callback);
	    };
	    return Store;
	})(EventedClass.EventedClass);
	exports.Store = Store;
	//# sourceMappingURL=Store.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(25);
	var Backbone = __webpack_require__(55);
	var Marionette = __webpack_require__(1);
	var NavigationController = (function (_super) {
	    __extends(NavigationController, _super);
	    function NavigationController() {
	        _super.call(this);
	        this.historyIsStarted = false;
	    }
	    NavigationController.prototype.to = function (route, options) {
	        if (options === void 0) { options = {}; }
	        Backbone.history.navigate(route, options);
	        this.trigger('navigated', route);
	    };
	    NavigationController.prototype.getCurrentRoute = function () {
	        var frag = Backbone.history.getFragment();
	        if (_.isEmpty(frag)) {
	            return null;
	        }
	        else {
	            return frag;
	        }
	    };
	    NavigationController.prototype.startHistory = function (options) {
	        if (Backbone.history) {
	            Backbone.history.start(options);
	            this.historyIsStarted = true;
	        }
	    };
	    return NavigationController;
	})(Marionette.Controller);
	exports.NavigationController = NavigationController;
	//# sourceMappingURL=NavigationController.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Backbone = __webpack_require__(55);
	var Marionette = __webpack_require__(1);
	var View = __webpack_require__(50);
	var ChildHolderView = (function (_super) {
	    __extends(ChildHolderView, _super);
	    function ChildHolderView(options) {
	        this.children = new Backbone.ChildViewContainer();
	        _super.call(this, options);
	    }
	    ChildHolderView.prototype.add = function (view, index) {
	        var _this = this;
	        this.triggerMethod('before:add:child', view);
	        // Store the child view itself so we can properly
	        // remove and/or destroy it later
	        this.children.add(view);
	        this.listenTo(view, 'destroy', function () {
	            _this.viewDestroyed(view);
	        });
	        this.renderChildView(view, index);
	        Marionette.triggerMethod.call(view, 'show');
	        this.triggerMethod('add:child', view);
	    };
	    // render the child view
	    ChildHolderView.prototype.renderChildView = function (view, index) {
	        view.render();
	        this.attachHtml(view, index);
	    };
	    ChildHolderView.prototype.viewDestroyed = function (view) {
	        this.children.remove(view);
	    };
	    ChildHolderView.prototype.attachHtml = function (view, index) {
	        this.$el.append(view.el);
	    };
	    ChildHolderView.prototype.render = function () {
	        this.children.call('render');
	        return this;
	    };
	    ChildHolderView.prototype.empty = function () {
	        this.children.call('destroy');
	    };
	    ChildHolderView.prototype.onDestroy = function () {
	        this.empty();
	    };
	    ChildHolderView.prototype.animateOut = function (cb) {
	        return cb.call(this);
	    };
	    return ChildHolderView;
	})(View.View);
	exports.ChildHolderView = ChildHolderView;
	var GenericChildHolderView = (function (_super) {
	    __extends(GenericChildHolderView, _super);
	    function GenericChildHolderView() {
	        _super.apply(this, arguments);
	    }
	    return GenericChildHolderView;
	})(ChildHolderView);
	exports.GenericChildHolderView = GenericChildHolderView;
	//# sourceMappingURL=ChildHolderView.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(1);
	var View = (function (_super) {
	    __extends(View, _super);
	    function View(options) {
	        this.behaviors = this.behaviors || {};
	        this.behaviors['Modifiers'] = {};
	        _super.call(this, options);
	    }
	    Object.defineProperty(View.prototype, "className", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    View.prototype.getUi = function (key) {
	        return this.ui[key];
	    };
	    View.prototype.hideView = function () {
	        if (this.isHidden)
	            return;
	        this.$el.hide();
	        this.isHidden = true;
	    };
	    View.prototype.showView = function (show) {
	        if (show === void 0) { show = true; }
	        if (show === false) {
	            this.hideView();
	        }
	        else {
	            if (!this.isHidden)
	                return;
	            this.$el.show();
	            this.isHidden = false;
	        }
	    };
	    return View;
	})(Marionette.View);
	exports.View = View;
	//# sourceMappingURL=View.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(1);
	var ItemView = (function (_super) {
	    __extends(ItemView, _super);
	    function ItemView(options) {
	        this.behaviors = this.behaviors || {};
	        this.behaviors['Modifiers'] = {};
	        _super.call(this, options);
	    }
	    ItemView.prototype.defaults = function () {
	    };
	    Object.defineProperty(ItemView.prototype, "className", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ItemView.prototype.hideView = function () {
	        if (this.isHidden)
	            return;
	        this.$el.hide();
	        this.isHidden = true;
	    };
	    ItemView.prototype.showView = function (show) {
	        if (show === void 0) { show = true; }
	        if (show === false) {
	            this.hideView();
	        }
	        else {
	            if (!this.isHidden)
	                return;
	            this.$el.show();
	            this.isHidden = false;
	        }
	    };
	    return ItemView;
	})(Marionette.ItemView);
	exports.ItemView = ItemView;
	//# sourceMappingURL=ItemView.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(1);
	var Layout = (function (_super) {
	    __extends(Layout, _super);
	    function Layout(options) {
	        this.behaviors = this.behaviors || {};
	        this.behaviors['Modifiers'] = {};
	        _super.call(this, options);
	    }
	    Object.defineProperty(Layout.prototype, "className", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Layout.prototype.hideView = function () {
	        if (this.isHidden)
	            return;
	        this.$el.hide();
	        this.isHidden = true;
	    };
	    Layout.prototype.showView = function (show) {
	        if (show === void 0) { show = true; }
	        if (show === false) {
	            this.hideView();
	        }
	        else {
	            if (!this.isHidden)
	                return;
	            this.$el.show();
	            this.isHidden = false;
	        }
	    };
	    return Layout;
	})(Marionette.LayoutView);
	exports.Layout = Layout;
	//# sourceMappingURL=Layout.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(1);
	var List = (function (_super) {
	    __extends(List, _super);
	    function List(options) {
	        this.behaviors = this.behaviors || {};
	        this.behaviors['Modifiers'] = {};
	        _super.call(this, options);
	    }
	    Object.defineProperty(List.prototype, "className", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    List.prototype.animateOut = function (cb) {
	        return cb.call(this);
	    };
	    List.prototype.hideView = function () {
	        if (this.isHidden)
	            return;
	        this.$el.hide();
	        this.isHidden = true;
	    };
	    List.prototype.showView = function (show) {
	        if (show === void 0) { show = true; }
	        if (show === false) {
	            this.hideView();
	        }
	        else {
	            if (!this.isHidden)
	                return;
	            this.$el.show();
	            this.isHidden = false;
	        }
	    };
	    return List;
	})(Marionette.CompositeView);
	exports.List = List;
	//# sourceMappingURL=List.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../typings/tsd.d.ts"/>
	/**
	 * Include this template file after backbone-forms.amd.js to override the default templates
	 *
	 * 'data-*' attributes control where elements are placed
	 */
	var Form = __webpack_require__(56);
	function init() {
	    Form.template = _.template('<div data-fieldsets></div>');
	    Form.Fieldset.template = _.template('\
	  <fieldset data-fields>\
	    <% if (legend) { %>\
	      <legend><%= legend %></legend>\
	    <% } %>\
	  </fieldset>\
	');
	    Form.Field.template = __webpack_require__(67);
	    Form.NestedField.template = _.template('\
	  <div class="field-<%= key %>">\
	    <div title="<%= title %>" class="input-xlarge">\
	      <span data-editor></span>\
	      <div class="help-inline" data-error></div>\
	    </div>\
	    <div class="help-block"><%= help %></div>\
	  </div>\
	');
	    Form.Field.errorClassName = 'FormGroup--hasError';
	    if (Form.editors.List) {
	        Form.editors.List.template = _.template('\
	    <div class="bbf-list">\
	      <ul class="unstyled clearfix" data-items></ul>\
	      <button type="button" class="btn bbf-add" data-action="add">Add</button>\
	    </div>\
	  ');
	        Form.editors.List.Item.template = _.template('\
	    <li class="clearfix">\
	      <div class="pull-left" data-editor></div>\
	      <button type="button" class="btn bbf-del" data-action="remove">&times;</button>\
	    </li>\
	  ');
	        Form.editors.List.Object.template = Form.editors.List.NestedModel.template = _.template('\
	    <div class="bbf-list-modal"><%= summary %></div>\
	  ');
	    }
	}
	exports.init = init;
	//# sourceMappingURL=templates.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Backbone = __webpack_require__(55);
	var _ = __webpack_require__(25);
	var EventedClass = (function () {
	    function EventedClass() {
	    }
	    return EventedClass;
	})();
	exports.EventedClass = EventedClass;
	_.extend(EventedClass.prototype, Backbone.Events);
	//# sourceMappingURL=EventedClass.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(68);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
	    + "\n";
	},"useData":true});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(68);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "<span class=\"Button__icon\"><div class=\""
	    + this.escapeExpression(((helper = (helper = helpers.iconClass || (depth0 != null ? depth0.iconClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"iconClass","hash":{},"data":data}) : helper)))
	    + "\"></div></span>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.iconClass : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "<span class=\"Button__text\">"
	    + this.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
	    + "</span>\n";
	},"useData":true});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(68);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "\n<div class=\"FormView__fieldsRegion\"></div>\n<div class=\"FormView__buttonsRegion\"></div>\n<div class=\"FormView__disable\"></div>\n";
	},"useData":true});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(68);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "<div class=\"heading heading--notice animated bounceIn\">\n    <h1>"
	    + this.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper)))
	    + "</h1>\n    <p>"
	    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</p>\n</div>\n<div class=\"NoticeView__btns\"></div>\n";
	},"useData":true});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(68);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "    <p class=\"FormGroup__helpMessage\">"
	    + ((stack1 = ((helper = (helper = helpers.help || (depth0 != null ? depth0.help : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"help","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</p>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "<div\n  class=\"FormGroup FormGroup--"
	    + this.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
	    + "\">\n  <label class=\"FormGroup__label\" for=\""
	    + ((stack1 = ((helper = (helper = helpers.editorId || (depth0 != null ? depth0.editorId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"editorId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\">"
	    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</label>\n  <span class=\"FormGroup__control\" data-editor></span>\n  <p class=\"FormGroup__errorMessage\" data-error></p>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.help : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }
/******/ ])});;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzUwZWY3Y2QyNWRlZjUzYzkxY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9FeGNlcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy93aGVuRmV0Y2hlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicVwiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYmFja2JvbmUvc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvTGF5b3V0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvUmVnaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvU2Nyb2xsYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlYmFycy9jb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGViYXJzL2kxOG5leHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGlja2l0L21kb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW50ZXJmYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9EaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NoaWxkSG9sZGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhY2tib25lLWZvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3BpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG93ZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZsdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybUZpZWxkLmhicyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxnRUFBZ0U7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7OztBQzNDQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxtQzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUN0RkE7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsdUM7Ozs7OztBQ3REQTtBQUNBLHVDOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsaUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDZDOzs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQzdJQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0ZBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrRDs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hELDZCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7O0FDTEEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxS0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxzQzs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esd0M7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG1DOzs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EscUM7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHdDOzs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsaUJBQWlCO0FBQ3JELDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0Esb0M7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGdDOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG9DOzs7Ozs7QUNkQSx1Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHVDOzs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGlEOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw0Qzs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGlDOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHFDOzs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpQzs7Ozs7O0FDOUNBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDOzs7Ozs7QUNWQTtBQUNBLGtFQUFpRTtBQUNqRTs7QUFFQSxrTkFBaU4sMEJBQTBCLGFBQWE7QUFDeFA7QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNOakI7QUFDQSxrRUFBaUU7QUFDakU7O0FBRUE7QUFDQSxtTkFBa04sNEJBQTRCLGFBQWE7QUFDM1A7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEsNkZBQTRGLHFCQUFxQiwrREFBK0Q7QUFDaEw7QUFDQSx5TUFBd00sdUJBQXVCLGFBQWE7QUFDNU87QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNkakI7QUFDQSxrRUFBaUU7QUFDakU7QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNIakI7QUFDQSxrRUFBaUU7QUFDakU7O0FBRUE7QUFDQSwwTEFBeUwseUJBQXlCLGFBQWE7QUFDL047QUFDQSwyS0FBMEssdUJBQXVCLGFBQWE7QUFDOU07QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNUakI7QUFDQSxrRUFBaUU7QUFDakU7O0FBRUE7QUFDQSw4TEFBNkwsdUJBQXVCLGFBQWE7QUFDak87QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQSxvTEFBbUwsc0JBQXNCLGFBQWE7QUFDdE47QUFDQSxtTEFBa0wsMkJBQTJCLGFBQWE7QUFDMU47QUFDQSw2S0FBNEssd0JBQXdCLGFBQWE7QUFDak47QUFDQSxxRkFBb0YscUJBQXFCLCtEQUErRDtBQUN4SztBQUNBLEVBQUMsZ0JBQWdCLEU7Ozs7OztBQ25CakIsaUQiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzNTBlZjdjZDI1ZGVmNTNjOTFjYVxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xuZXhwb3J0cy5jb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9jbGllbnQnKTtcbmZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29uZmlnLmNvbmZpZy5jb25maWd1cmUob3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbmZpZ3VyZSA9IGNvbmZpZ3VyZTtcbjtcbmV4cG9ydHMuYmVoYXZpb3JzID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvaW5kZXgnKTtcbk1hcmlvbmV0dGUuQmVoYXZpb3JzLmJlaGF2aW9yc0xvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5iZWhhdmlvcnM7XG59O1xuZXhwb3J0cy5jb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2luZGV4Jyk7XG5leHBvcnRzLmNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5leHBvcnRzLkV4Y2VwdGlvbnMgPSByZXF1aXJlKCcuL0V4Y2VwdGlvbnMnKTtcbmV4cG9ydHMuaW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4vaW50ZXJmYWNlcycpO1xudmFyIF9BcGkgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FwaScpO1xudmFyIF9BcHAgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FwcCcpO1xudmFyIF9CYXNlID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9CYXNlJyk7XG52YXIgX0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQ29tcG9uZW50Jyk7XG52YXIgX1JvdXRlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUm91dGVyQ29udHJvbGxlcicpO1xudmFyIF9TdGF0aWMgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N0YXRpYycpO1xudmFyIGNvbnRyb2xsZXJzO1xuKGZ1bmN0aW9uIChjb250cm9sbGVycykge1xuICAgIGNvbnRyb2xsZXJzLkFwaSA9IF9BcGk7XG4gICAgY29udHJvbGxlcnMuQXBwID0gX0FwcDtcbiAgICBjb250cm9sbGVycy5CYXNlID0gX0Jhc2U7XG4gICAgY29udHJvbGxlcnMuQ29tcG9uZW50ID0gX0NvbXBvbmVudDtcbiAgICBjb250cm9sbGVycy5Sb3V0ZXIgPSBfUm91dGVyO1xuICAgIGNvbnRyb2xsZXJzLlN0YXRpYyA9IF9TdGF0aWM7XG59KShjb250cm9sbGVycyA9IGV4cG9ydHMuY29udHJvbGxlcnMgfHwgKGV4cG9ydHMuY29udHJvbGxlcnMgPSB7fSkpO1xuZXhwb3J0cy5oYW5kbGViYXJzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2luZGV4Jyk7XG5leHBvcnRzLnJvdXRlcnMgPSByZXF1aXJlKCcuL3JvdXRlcnMvaW5kZXgnKTtcbmV4cG9ydHMuc3RpY2tpdCA9IHJlcXVpcmUoJy4vc3RpY2tpdC9pbmRleCcpO1xuZXhwb3J0cy5mbHV4ID0gcmVxdWlyZSgnLi9mbHV4L2luZGV4Jyk7XG5leHBvcnRzLkRlYm91bmNlZERvY0NvbnRhaW5lciA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL0RlYm91bmNlZERvY0NvbnRhaW5lcicpO1xudmFyIF93aGVuRmV0Y2hlZCA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3doZW5GZXRjaGVkJyk7XG5leHBvcnRzLndoZW5GZXRjaGVkID0gX3doZW5GZXRjaGVkLndoZW5GZXRjaGVkO1xuZXhwb3J0cy5uYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmF2aWdhdGlvbicpO1xuZXhwb3J0cy5yZWdpc3RyeSA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3JlZ2lzdHJ5Jyk7XG5leHBvcnRzLnVybFV0aWxzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdXJsJyk7XG5leHBvcnRzLnByZXZlbnRTZWxlY3Rpb25DYWxsb3V0ID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcHJldmVudFNlbGVjdGlvbkNhbGxvdXQnKTtcbmV4cG9ydHMudmlld3MgPSByZXF1aXJlKCcuL3ZpZXdzL2luZGV4Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgc3luYyA9IHJlcXVpcmUoJy4vYmFja2JvbmUvc3luYycpO1xucmVxdWlyZSgnLi9tYXJpb25ldHRlL0xheW91dFZpZXcnKTtcbnJlcXVpcmUoJy4vbWFyaW9uZXR0ZS9SZWdpb24nKTtcbnJlcXVpcmUoJy4vbWFyaW9uZXR0ZS9WaWV3Jyk7XG52YXIgTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uKCkge1xuICAgIH1cbiAgICBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbi5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBvcHRpb25zLmFwcDtcbiAgICAgICAgdGhpcy5oYW5kbGViYXJzID0gb3B0aW9ucy5oYW5kbGViYXJzO1xuICAgICAgICB0aGlzLmRlZmF1bHRSZWdpb24gPSBvcHRpb25zLmRlZmF1bHRSZWdpb247XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1BhdGggPSBvcHRpb25zLmNvbXBvbmVudHNQYXRoO1xuICAgICAgICBpZiAodGhpcy5hcHApIHtcbiAgICAgICAgICAgIHN5bmMuY29uZmlndXJlQmFja2JvbmVTeW5jKHRoaXMuYXBwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uO1xufSkoKTtcbmV4cG9ydHMuTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24gPSBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbjtcbmV4cG9ydHMuY29uZmlnID0gbmV3IE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9Nb2RpZmllcnMgPSByZXF1aXJlKCcuL01vZGlmaWVycycpO1xudmFyIF9TY3JvbGxhYmxlcyA9IHJlcXVpcmUoJy4vU2Nyb2xsYWJsZXMnKTtcbmV4cG9ydHMuTW9kaWZpZXJzID0gX01vZGlmaWVycy5Nb2RpZmllcnNCZWhhdmlvcjtcbmV4cG9ydHMuU2Nyb2xsYWJsZXMgPSBfU2Nyb2xsYWJsZXMuU2Nyb2xsYWJsZXNCZWhhdmlvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYmVoYXZpb3JzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9BbGVydCA9IHJlcXVpcmUoJy4vYWxlcnQvQWxlcnQnKTtcbnZhciBfTG9hZGluZyA9IHJlcXVpcmUoJy4vTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlcicpO1xuZXhwb3J0cy5BbGVydCA9IF9BbGVydC5BbGVydENvbXBvbmVudDtcbmV4cG9ydHMuQW5pbWF0ZWRSZWdpb24gPSByZXF1aXJlKCcuL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uJyk7XG5leHBvcnRzLkJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uL0J1dHRvbicpO1xuZXhwb3J0cy5Gb3JtVmlldyA9IHJlcXVpcmUoJy4vRm9ybVZpZXcvRm9ybVZpZXcnKTtcbmV4cG9ydHMuU3Bpbm5lclZpZXcgPSByZXF1aXJlKCcuL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG5leHBvcnRzLkxvYWRpbmcgPSBfTG9hZGluZy5Mb2FkaW5nQ29udHJvbGxlcjtcbmV4cG9ydHMuTm90aWNlVmlldyA9IHJlcXVpcmUoJy4vTm90aWNlVmlldy9Ob3RpY2VWaWV3Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBTdHJpbmdDb25zdGFudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RyaW5nQ29uc3RhbnQodmFsKSB7XG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgIH1cbiAgICBTdHJpbmdDb25zdGFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbDtcbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgPT09IHZhbHVlO1xuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQuYWxsQ29uc3RhbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBhbGwgPSBbXTtcbiAgICAgICAgXy5lYWNoKF8ua2V5cyh0aGlzKSwgZnVuY3Rpb24gKHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAodFtwcm9wZXJ0eUtleV0gaW5zdGFuY2VvZiB0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0YW50ID0gdFtwcm9wZXJ0eUtleV07XG4gICAgICAgICAgICAgICAgYWxsLnB1c2goY29uc3RhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LmZyb21LZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBhbGwgPSB0aGlzLmFsbENvbnN0YW50cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFsbFtpXS5tYXRjaGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5mcm9tVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBhbGwgPSB0aGlzLmFsbENvbnN0YW50cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFsbFtpXS5tYXRjaGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3RyaW5nQ29uc3RhbnQ7XG59KSgpO1xuZXhwb3J0cy5TdHJpbmdDb25zdGFudCA9IFN0cmluZ0NvbnN0YW50O1xudmFyIEVWRU5UX1RZUEVTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRVZFTlRfVFlQRVMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRVZFTlRfVFlQRVMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBFVkVOVF9UWVBFUy5DaGFuZ2UgPSBuZXcgRVZFTlRfVFlQRVMoJ0NoYW5nZScpO1xuICAgIHJldHVybiBFVkVOVF9UWVBFUztcbn0pKFN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuRVZFTlRfVFlQRVMgPSBFVkVOVF9UWVBFUztcbnZhciBBQ1RJT05fU09VUkNFUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFDVElPTl9TT1VSQ0VTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFDVElPTl9TT1VSQ0VTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQUNUSU9OX1NPVVJDRVMuU2VydmVyQWN0aW9uID0gbmV3IEFDVElPTl9TT1VSQ0VTKCdTZXJ2ZXJBY3Rpb24nKTtcbiAgICBBQ1RJT05fU09VUkNFUy5WaWV3QWN0aW9uID0gbmV3IEFDVElPTl9TT1VSQ0VTKCdWaWV3QWN0aW9uJyk7XG4gICAgQUNUSU9OX1NPVVJDRVMuRGV2aWNlQWN0aW9uID0gbmV3IEFDVElPTl9TT1VSQ0VTKCdEZXZpY2VBY3Rpb24nKTtcbiAgICByZXR1cm4gQUNUSU9OX1NPVVJDRVM7XG59KShTdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkFDVElPTl9TT1VSQ0VTID0gQUNUSU9OX1NPVVJDRVM7XG52YXIgRE9DX1NUQVRVU0VTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRE9DX1NUQVRVU0VTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERPQ19TVEFUVVNFUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIERPQ19TVEFUVVNFUy5lbXB0eSA9IG5ldyBET0NfU1RBVFVTRVMoJ2VtcHR5Jyk7XG4gICAgRE9DX1NUQVRVU0VTLmZldGNoaW5nRnJvbVNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2ZldGNoaW5nRnJvbVNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5mZXRjaGluZ0xvY2FsID0gbmV3IERPQ19TVEFUVVNFUygnZmV0Y2hpbmdMb2NhbCcpO1xuICAgIERPQ19TVEFUVVNFUy5mZXRjaGVkID0gbmV3IERPQ19TVEFUVVNFUygnZmV0Y2hlZCcpO1xuICAgIERPQ19TVEFUVVNFUy5jcmVhdGluZ09uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnY3JlYXRpbmdPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy51cGRhdGluZ09uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygndXBkYXRpbmdPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGluZ09uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRpbmdPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGVkT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGVkT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRlZExvY2FsID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRlZExvY2FsJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0ZWQgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGVkJyk7XG4gICAgcmV0dXJuIERPQ19TVEFUVVNFUztcbn0pKFN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuRE9DX1NUQVRVU0VTID0gRE9DX1NUQVRVU0VTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uc3RhbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgRXhjZXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFeGNlcHRpb24oZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0VYQ0VQVElPTicsIHRoaXMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJzdGFja1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3Iuc3RhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAnOiAnICsgdGhpcy5tZXNzYWdlO1xuICAgIH07XG4gICAgcmV0dXJuIEV4Y2VwdGlvbjtcbn0pKCk7XG5leHBvcnRzLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbnZhciBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERvY3VtZW50RXhpc3RzRXhjZXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERvY3VtZW50RXhpc3RzRXhjZXB0aW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIERvY3VtZW50RXhpc3RzRXhjZXB0aW9uO1xufSkoRXhjZXB0aW9uKTtcbmV4cG9ydHMuRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24gPSBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbjtcbnZhciBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdEltcGxlbWVudGVkRXhjZXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdEltcGxlbWVudGVkRXhjZXB0aW9uO1xufSkoRXhjZXB0aW9uKTtcbmV4cG9ydHMuTm90SW1wbGVtZW50ZWRFeGNlcHRpb24gPSBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4Y2VwdGlvbnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9FeGNlcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ludGVyZmFjZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZScpO1xudmFyIEFwaUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcGlDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwaUNvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gQXBpQ29udHJvbGxlcjtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuQXBpQ29udHJvbGxlciA9IEFwaUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcGkuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9BcGkuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgY2xpZW50Q29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcHBDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcENvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9tYW5hZ2VkUmVnaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlZ2lvbiA9IHRoaXMucmVnaW9uIHx8IG9wdGlvbnMucmVnaW9uIHx8IGNsaWVudENvbmZpZy5jb25maWcuZGVmYXVsdFJlZ2lvbjtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNob3dDb250cm9sbGVyID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgb3B0aW9ucy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgb3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZSA9IGNvbnRyb2xsZXIuZ2V0T3B0aW9uKCdtb25pdG9yUmVhZHlTdGF0ZScpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93KGNvbnRyb2xsZXIuZ2V0TWFpblZpZXcoKSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICAgICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZ2lvbjogdGhpcy5yZWdpb25cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSB2aWV3IGluc3RhbmNlIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpblZpZXcodmlldyk7XG4gICAgICAgIHRoaXMuX21hbmFnZVZpZXcodmlldywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3OiB2aWV3LFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TWFpblZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluVmlldztcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNldE1haW5WaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21haW5WaWV3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFpblZpZXcgPSB2aWV3O1xuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuVG8odmlldywgXCJkZXN0cm95XCIsIHRoaXMuZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLm1hbmFnZVJlZ2lvbiA9IGZ1bmN0aW9uIChyZWdpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmFnZWRSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLl9tYW5hZ2VWaWV3ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMubG9hZGluZykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvYWRpbmcgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uZGVmYXVsdHMob3B0aW9ucy5sb2FkaW5nLCB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0hlYWRlcjogXy5yZXN1bHQodGhpcywgJ2xvYWRpbmdIZWFkZXInKSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nQm9keTogXy5yZXN1bHQodGhpcywgJ2xvYWRpbmdCb2R5JyksXG4gICAgICAgICAgICAgICAgbW9uaXRvclJlYWR5U3RhdGU6IG9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xpZW50Q29uZmlnLmNvbmZpZy5hcHAuZXhlY3V0ZShcInNob3c6bG9hZGluZ1wiLCB2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVnaW9uLnNob3codmlldywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfLmludm9rZSh0aGlzLl9tYW5hZ2VkUmVnaW9ucywgJ2FuaW1hdGVFbXB0eScpO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkUmVnaW9ucyA9IG51bGw7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEFwcENvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFwcENvbnRyb2xsZXIgPSBBcHBDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQXBwLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgcmVnaXN0cnkgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcmVnaXN0cnknKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQmFzZUNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFzZUNvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZV9pZCA9IF8udW5pcXVlSWQoJ2NvbnRyb2xsZXInKTtcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXIodGhpcywgdGhpcy5faW5zdGFuY2VfaWQpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveWluZ1wiLCB0aGlzKTtcbiAgICAgICAgcmVnaXN0cnkudW5yZWdpc3Rlcih0aGlzLCB0aGlzLl9pbnN0YW5jZV9pZCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlLnByb3h5RXZlbnRzID0gZnVuY3Rpb24gKGluc3RhbmNlLCBwcmVmaXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5UbyhpbnN0YW5jZSwgXCJhbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIHJvb3RFdmVudCA9IGFyZ3NbMF07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgYXJnc1swXSA9IHByZWZpeCArIFwiOlwiICsgcm9vdEV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJncy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgICAgIE1hcmlvbmV0dGUudHJpZ2dlck1ldGhvZC5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VDb250cm9sbGVyO1xufSkoTWFyaW9uZXR0ZS5Db250cm9sbGVyKTtcbmV4cG9ydHMuQmFzZUNvbnRyb2xsZXIgPSBCYXNlQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2UuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9CYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0FwcCcpO1xudmFyIENvbXBvbmVudENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21wb25lbnRDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbXBvbmVudENvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCEob3B0aW9ucy5yZWdpb24gJiYgdGhpcy5fbWFpblZpZXcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgbm90IEBzaG93IHRoZSBtYWluIHZpZXcsIHVzZSBAc2V0TWFpblZpZXcgd2l0aCBjb21wb25lbnRzIGFuZCBAc2hvdyBmcm9tIHRoZSBhcHBzIGNvbnRyb2xsZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zaG93LmNhbGwodGhpcywgdmlldywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb21wb25lbnRDb250cm9sbGVyO1xufSkoQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcbmV4cG9ydHMuQ29tcG9uZW50Q29udHJvbGxlciA9IENvbXBvbmVudENvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb25lbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9Db21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZScpO1xudmFyIFJvdXRlckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSb3V0ZXJDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJvdXRlckNvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5fc2V0dXBBY3Rpb25zKG9wdGlvbnMuYWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmF1dGhvcml6ZUFuQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWN0aW9uUG9saWN5KGFjdGlvbkNvbmZpZykuaXNBdXRob3JpemVkKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hY3Rpb25VbmF1dGhvcml6ZWQgPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJcIiArIGFjdGlvbk5hbWUgKyBcIiB3YXMgdW5hdXRob3JpemVkXCIpO1xuICAgICAgICBlcnIubmFtZSA9ICdBY3Rpb25VbmF1dGhvcml6ZWQnO1xuICAgICAgICBlcnIuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XG4gICAgICAgIGVyci5hY3Rpb25Db25maWcgPSBhY3Rpb25Db25maWc7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmNhbGxBY3Rpb25VbmF1dGhvcml6ZWQgPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnLnVuYXV0aG9yaXplZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWcudW5hdXRob3JpemVkLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbignYWN0aW9uVW5hdXRob3JpemVkJykuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kZWZhdWx0UG9saWN5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFjdGlvblBvbGljeSgpO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX3NldHVwQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF8uZWFjaChhY3Rpb25zLCBmdW5jdGlvbiAoY29uZmlnLCBrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLmFkZEFjdGlvbihrZXksIGNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvbkNvbmZpZyA9IGZ1bmN0aW9uIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKGFjdGlvbkNvbmZpZyA9PSBudWxsKSB7XG4gICAgICAgICAgICBhY3Rpb25Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFjdGlvbkNvbmZpZ0Zyb21GbihhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvbkNvbmZpZ0Zyb21GbiA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm46IGZuXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uRnVuY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnLmZuO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvblBvbGljeSA9IGZ1bmN0aW9uIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcpIHx8ICFhY3Rpb25Db25maWcucG9saWN5KSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvbGljeSA9IHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0UG9saWN5Jyk7XG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGRlZmF1bHRQb2xpY3kpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRQb2xpY3kuY2FsbCh0aGlzLCBhY3Rpb25Db25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRQb2xpY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnLnBvbGljeTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYXR0YWNoZXIgPSB0aGlzO1xuICAgICAgICBhY3Rpb25Db25maWcgPSB0aGlzLl9nZXRBY3Rpb25Db25maWcoYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgdmFyIF9mbiA9IHRoaXMuX2dldEFjdGlvbkZ1bmN0aW9uKGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oX2ZuKSkge1xuICAgICAgICAgICAgYXR0YWNoZXJbYWN0aW9uTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmdldE9wdGlvbignYXV0aG9yaXplQW5BY3Rpb24nKS5jYWxsKF90aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZuLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdBY3Rpb25VbmF1dGhvcml6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uQ29uZmlnLmludGVybmFsQWN0aW9uRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FsbEFjdGlvblVuYXV0aG9yaXplZChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYWxsQWN0aW9uVW5hdXRob3JpemVkKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJveHlpbmcgdGhyb3VnaCBhbiBhdXRob3JpemUgbWV0aG9kIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJvdXRlckNvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLlJvdXRlckNvbnRyb2xsZXIgPSBSb3V0ZXJDb250cm9sbGVyO1xudmFyIEFjdGlvblBvbGljeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvblBvbGljeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb25Qb2xpY3kob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQWN0aW9uUG9saWN5LnByb3RvdHlwZS5pc0F1dGhvcml6ZWQgPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNBdXRob3JpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzQXV0aG9yaXplZC5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvblBvbGljeTtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuQWN0aW9uUG9saWN5ID0gQWN0aW9uUG9saWN5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGVyQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL1JvdXRlckNvbnRyb2xsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgU3RhdGljQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhdGljQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdzZWN0aW9uJztcbiAgICAgICAgdGhpcy5jbG9uZUNvbnRleHQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB9XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuYXR0cmlidXRlcyA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmNvbnRleHRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRlbXBsYXRlRm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RlbXBsYXRlIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5jbGFzc05hbWUgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICBpZiAoaGFzaCA9PT0gdm9pZCAwKSB7IGhhc2ggPSB7fTsgfVxuICAgICAgICB2YXIgY2xhc3NlcztcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IG11c3Qgc3BlY2lmeSBhIG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzaFtcImNsYXNzXCJdKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gaGFzaFtcImNsYXNzXCJdLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBfLnJlc3VsdCh0aGlzLCAnYXR0cmlidXRlcycpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzW1wiY2xhc3NcIl0pIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfLnVuaW9uKGNsYXNzZXMsIGF0dHJpYnV0ZXNbXCJjbGFzc1wiXS5zcGxpdCgnICcpKTtcbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbG9uZUNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gXy5jbG9uZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9jb21wb25lbnROYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuX3JlZ2lvbnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGV4dC5fcmVnaW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLm1peGluSGFzaCA9IGZ1bmN0aW9uIChjb250ZXh0LCBoYXNoKSB7XG4gICAgICAgIGlmIChoYXNoID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhc2ggPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGV4dFByb3BzID0gXy5yZXN1bHQodGhpcywgJ2NvbnRleHRQcm9wZXJ0aWVzJyk7XG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGNvbnRleHRQcm9wcykpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eUtleXMgPSBfLmtleXMoY29udGV4dFByb3BzKTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gXy5waWNrKGhhc2gsIHByb3BlcnR5S2V5cyk7XG4gICAgICAgICAgICByZXR1cm4gXy5leHRlbmQoY29udGV4dCwgY29udGV4dFByb3BzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50VGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIHRlbXBsYXRlIG9uIHRoaXMgc3RhdGljIGNvbnRyb2xsZXInKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzKGhhc2gpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IF8ub21pdChhdHRyaWJ1dGVzLCAnY2xhc3MnKTtcbiAgICAgICAgICAgIHZhciBhdHRyID0gXy5tYXAoYXR0cmlidXRlcyB8fCB7fSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcoaGFzaFtrZXldIHx8IF8uaXNGaW5pdGUoaGFzaFtrZXldKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyBoYXNoW2tleV0gKyBcIlxcXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXy5pc1N0cmluZyh2YWwgfHwgXy5pc0Zpbml0ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGtleSArIFwiPVxcXCJcIiArIHZhbCArIFwiXFxcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGF0dHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgJyArIGF0dHIuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbm5lckJvZHkgPSBmdW5jdGlvbiAoY29udGV4dCwgZm4pIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmbihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMubWl4aW5IYXNoKHRoaXMuY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5fX2JvZHlfXyA9IHRoaXMuZ2V0SW5uZXJCb2R5KHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCksIG9wdGlvbnMuZm4pO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXR0cmlidXRlcyA9IHRoaXMuZ2V0QXR0cmlidXRlcyhvcHRpb25zLmhhc2gpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJPdXRlckh0bWwodGhpcy5jb250ZXh0LCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29udGV4dC5jbGFzc05hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0aGlzLmNvbnRleHQuYXR0cmlidXRlc1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlck91dGVySHRtbCA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXM7XG4gICAgICAgIHZhciB0YWdOYW1lID0gXy5yZXN1bHQodGhpcywgJ3RhZ05hbWUnKTtcbiAgICAgICAgcmV0dXJuIFtcIjxcIiArIHRhZ05hbWUsIGF0dHJpYnV0ZXMsIFwiIGNsYXNzPVxcXCJcIiArIGNsYXNzTmFtZSArIFwiXFxcIlwiLCBcIj5cXG5cIiwgdGhpcy5yZW5kZXJDb250ZW50VGVtcGxhdGUoY29udGV4dCksIFwiPC9cIiArIHRhZ05hbWUgKyBcIj5cIl0uam9pbignJyk7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXJDb250ZW50VGVtcGxhdGUgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICB2YXIgdG1wbCA9IHRoaXMuZ2V0Q29tcG9uZW50VGVtcGxhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRtcGwoY29udGV4dCk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhdGljQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLlN0YXRpY0NvbnRyb2xsZXIgPSBTdGF0aWNDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RhdGljLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvU3RhdGljLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuY29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xuZXhwb3J0cy5pMThuZXh0ID0gcmVxdWlyZSgnLi9pMThuZXh0Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5BcHAgPSByZXF1aXJlKCcuL0FwcCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb3V0ZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMubWRvd24gPSByZXF1aXJlKCcuL21kb3duJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0aWNraXQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5leHBvcnRzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMnKTtcbmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vRGlzcGF0Y2hlcicpO1xuZXhwb3J0cy5TdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBFeGNlcHRpb25zID0gcmVxdWlyZSgnLi4vRXhjZXB0aW9ucycpO1xudmFyIERlYm91bmNlZERvY0NvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VkRG9jQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICAgICAgdGhpcy5kb2NUaW1lVG9MaXZlID0gMTAwMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2NzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5jbGVhckV4cGlyZWREb2NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5jbGVhckFsbERvY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9jcy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHV0cyBhIGRvY3VtZW50IGluIHRvIHRoZSBhcnJheSBpZiBpdCBpcyBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIGlmICghdGhpcy5ieUlkKGRvYy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICAgIGRvYzogZG9jLFxuICAgICAgICAgICAgICAgIGV4cGlyZXM6IHRoaXMuZG9jVGltZVRvTGl2ZSA/IERhdGUubm93KCkgKyB0aGlzLmRvY1RpbWVUb0xpdmUgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb25zLkRvY3VtZW50RXhpc3RzRXhjZXB0aW9uKG5ldyBFcnJvcignRG9jdW1lbnQgJyArIGRvYy5pZCArICcgYWxyZWFkeSBleGlzdHMnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW50cnkgd2l0aCBkZXRhaWxzIGFib3V0IHRoZSBkb2Mgd2l0aCBhbiBpZFxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuZW50cnlCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gXy5maW5kV2hlcmUodGhpcy5kb2NzLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgaWYgKGl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbGwgdGhlIGRvY3NcbiAgICAgKiBAcmV0dXJucyB7SURlYm91bmNlZERvY0l0ZW08VD5bXX1cbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZG9jO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2F2ZWQgZG9jdW1lbnQgYnkgaXRzIGlkXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5ieUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gXy5maW5kV2hlcmUodGhpcy5kb2NzLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmRvYztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgZG9jIGluIHRvIHRoZSBzdG9yZSwgaWYgaXQgZXhpc3RzXG4gICAgICogb3RoZXJ3aXNlIGFkZHMgaXRcbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZURvYyA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFkb2MuaWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21lcmdlRG9jIGRvY3VtZW50IG11c3QgaGF2ZSBhIHZhbGlkIGlkJyk7XG4gICAgICAgIHZhciBrZXlzID0gXy5rZXlzKGRvYyk7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuZW50cnlCeUlkKGRvYy5pZCk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nRG9jID0gZW50cnkuZG9jO1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICBfLmVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5tZXJnZURvY0tleShrZXksIGV4aXN0aW5nRG9jLCBkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lcmdlZDogY2hhbmdlZFByb3BlcnRpZXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllczogY2hhbmdlZFByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgZG9jOiBleGlzdGluZ0RvY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHV0KGRvYyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lcmdlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IGtleXMsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VEb2NLZXkgPSBmdW5jdGlvbiAoa2V5LCBleGlzdGluZ0RvYywgZG9jKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRvY1trZXldO1xuICAgICAgICBpZiAoIV8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0RvY1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nRG9jW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZU11bHRpcGxlID0gZnVuY3Rpb24gKGRvY3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1lcmdlcyA9IGRvY3MubWFwKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tZXJnZURvYyhkb2MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlcztcbiAgICB9O1xuICAgIHJldHVybiBEZWJvdW5jZWREb2NDb250YWluZXI7XG59KSgpO1xuZXhwb3J0cy5EZWJvdW5jZWREb2NDb250YWluZXIgPSBEZWJvdW5jZWREb2NDb250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWJvdW5jZWREb2NDb250YWluZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvRGVib3VuY2VkRG9jQ29udGFpbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBRID0gcmVxdWlyZSgncScpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5mdW5jdGlvbiB3aGVuRmV0Y2hlZChlbnRpdGllcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBfLmNoYWluKFtlbnRpdGllc10pLmZsYXR0ZW4oKS5wbHVjayhcIl9mZXRjaFwiKS5jb21wYWN0KCkudmFsdWUoKTtcbiAgICBpZiAocHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBRLmFsbChwcm9taXNlcykuZG9uZShmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3doZW5GZXRjaGVkJywgcmVzdWx0cyk7XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZmFpbGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3JzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnd2hlbkZldGNoZWQnLCBlbnRpdGllcyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBpcyBiZWluZyBmZXRjaGVkJyk7XG4gICAgfVxufVxuZXhwb3J0cy53aGVuRmV0Y2hlZCA9IHdoZW5GZXRjaGVkO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2hlbkZldGNoZWQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvd2hlbkZldGNoZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIE5hdmlnYXRpb25Db250cm9sbGVyID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uQ29udHJvbGxlcicpO1xudmFyIG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbkNvbnRyb2xsZXIuTmF2aWdhdGlvbkNvbnRyb2xsZXIoKTtcbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdmlnYXRpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvbmF2aWdhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmV4cG9ydHMuX3JlZ2lzdHJ5ID0ge307XG5mdW5jdGlvbiByZWdpc3RlcihpbnN0YW5jZSwgaWQpIHtcbiAgICBleHBvcnRzLl9yZWdpc3RyeVtpZF0gPSBpbnN0YW5jZTtcbn1cbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcbmZ1bmN0aW9uIHVucmVnaXN0ZXIoaW5zdGFuY2UsIGlkKSB7XG4gICAgZGVsZXRlIGV4cG9ydHMuX3JlZ2lzdHJ5W2lkXTtcbn1cbmV4cG9ydHMudW5yZWdpc3RlciA9IHVucmVnaXN0ZXI7XG5mdW5jdGlvbiByZXNldFJlZ2lzdHJ5KCkge1xuICAgIHZhciBvbGRDb3VudCA9IGdldFJlZ2lzdHJ5U2l6ZSgpO1xuICAgIHZhciBjb250cm9sbGVyO1xuICAgIGZvciAodmFyIGtleSBpbiBleHBvcnRzLl9yZWdpc3RyeSkge1xuICAgICAgICBjb250cm9sbGVyID0gZXhwb3J0cy5fcmVnaXN0cnlba2V5XTtcbiAgICAgICAgY29udHJvbGxlci5yZWdpb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB2YXIgcmV0ID0ge1xuICAgICAgICBjb3VudDogZ2V0UmVnaXN0cnlTaXplKCksXG4gICAgICAgIHByZXZpb3VzOiBvbGRDb3VudCxcbiAgICAgICAgbXNnOiBcIlRoZXJlIHdlcmUgXCIgKyBvbGRDb3VudCArIFwiIGNvbnRyb2xsZXJzIGluIHRoZSByZWdpc3RyeSwgdGhlcmUgYXJlIG5vdyBcIiArICh0aGlzLmdldFJlZ2lzdHJ5U2l6ZSgpKVxuICAgIH07XG4gICAgY29uc29sZS5pbmZvKCdSZWdpc3RyeSByZXNldCcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydHMucmVzZXRSZWdpc3RyeSA9IHJlc2V0UmVnaXN0cnk7XG5mdW5jdGlvbiBnZXRSZWdpc3RyeVNpemUoKSB7XG4gICAgcmV0dXJuIF8uc2l6ZShleHBvcnRzLl9yZWdpc3RyeSk7XG59XG5leHBvcnRzLmdldFJlZ2lzdHJ5U2l6ZSA9IGdldFJlZ2lzdHJ5U2l6ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZ2lzdHJ5LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3JlZ2lzdHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uL3R5cGluZ3MvdHNkLmQudHMnIC8+XG4ndXNlIHN0cmljdCc7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbi8qKlxuICogRXh0cmFjdCBhIHF1ZXJ5IHN0cmluZyB2YWx1ZVxuICogQHBhcmFtIHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIGtleVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGdldFF1ZXJ5KHNlYXJjaFN0cmluZywga2V5KSB7XG4gICAgdmFyIHZhbHVlcyA9IHNlYXJjaFN0cmluZy5zcGxpdChcIiZcIik7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZnQgPSB2YWx1ZXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICBpZiAoZnRbMF0gPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ0WzFdO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLmdldFF1ZXJ5ID0gZ2V0UXVlcnk7XG4vKipcbiAqIEV4dHJhY3QgdGhlIHNlYXJjaFN0cmluZyBxdWVyeSBzdHJpbmcgdmFsdWVzIGZyb20gYSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNlYXJjaFN0cmluZyh1cmwpIHtcbiAgICBpZiAoL1xcIy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuICAgIH1cbiAgICBpZiAoL1xcPy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLnNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZztcbi8qKlxuICogR2V0IHRoZSBjb3JyZWN0IHNlcGFyYXRvciBmb3IgYSB1cmwgYW5kIGEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZXBhcmF0b3IodXJsKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgICBpZiAoL1xcPy8udGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICc/JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuLyoqXG4gKiBKb2lucyB1cmwgcXVlcnkgc3RyaW5nIHZhbHVlc1xuICogQHBhcmFtIHVybHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW4oKSB7XG4gICAgdmFyIHVybHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB1cmxzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX21lcmdlID0gZnVuY3Rpb24gKG1lbW8sIHZhbCkge1xuICAgICAgICByZXR1cm4gbWVtbyArIChzZXBhcmF0b3IobWVtbykpICsgdmFsO1xuICAgIH07XG4gICAgcmV0dXJuIF8ucmVkdWNlKHVybHMsIF9tZXJnZSk7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuLyoqXG4gKiBKb2luIHVybCBwYXRoc1xuICogQHBhcmFtIHVybHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5QYXRocygpIHtcbiAgICB2YXIgdXJscyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHVybHNbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBfbWVyZ2UgPSBmdW5jdGlvbiAobWVtbywgdmFsKSB7XG4gICAgICAgIHJldHVybiBtZW1vICsgJy8nICsgdmFsO1xuICAgIH07XG4gICAgcmV0dXJuIF8ucmVkdWNlKHVybHMsIF9tZXJnZSk7XG59XG5leHBvcnRzLmpvaW5QYXRocyA9IGpvaW5QYXRocztcbmZ1bmN0aW9uIHBhcmFtKG9iaiwgc2VwYXJhdG9yLCBqb2luZXIpIHtcbiAgICBpZiAoc2VwYXJhdG9yID09PSB2b2lkIDApIHsgc2VwYXJhdG9yID0gJyYnOyB9XG4gICAgaWYgKGpvaW5lciA9PT0gdm9pZCAwKSB7IGpvaW5lciA9ICc9JzsgfVxuICAgIGZ1bmN0aW9uIF9wYXJhbShtZW1vLCB2YWwsIGtleSkge1xuICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmUgPSBtZW1vID8gbWVtbyArIHNlcGFyYXRvciA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIHByZSArIGtleSArIGpvaW5lciArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXy5yZWR1Y2Uob2JqLCBfcGFyYW0sICcnKTtcbn1cbmV4cG9ydHMucGFyYW0gPSBwYXJhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy91cmwuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gcHJldmVudEdsb2JhbGx5KCkge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgICBzdHlsZS53ZWJraXRUb3VjaENhbGxvdXQgPSBcIm5vbmVcIjtcbiAgICBzdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJub25lXCI7XG59XG5leHBvcnRzLnByZXZlbnRHbG9iYWxseSA9IHByZXZlbnRHbG9iYWxseTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuQ2hpbGRIb2xkZXJWaWV3ID0gcmVxdWlyZSgnLi9DaGlsZEhvbGRlclZpZXcnKTtcbmV4cG9ydHMuVmlldyA9IHJlcXVpcmUoJy4vVmlldycpO1xuZXhwb3J0cy5JdGVtVmlldyA9IHJlcXVpcmUoJy4vSXRlbVZpZXcnKTtcbmV4cG9ydHMuTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbmV4cG9ydHMuTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwidW5kZXJzY29yZVwiXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJxXCJcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmZ1bmN0aW9uIGNvbmZpZ3VyZUJhY2tib25lU3luYyhhcHApIHtcbiAgICB2YXIgX3N5bmMgPSBCYWNrYm9uZS5zeW5jO1xuICAgIEJhY2tib25lLnN5bmMgPSBmdW5jdGlvbiAobWV0aG9kLCBlbnRpdHksIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBfLmJpbmQoYmVmb3JlU2VuZCwgZW50aXR5KSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBfLmJpbmQoY29tcGxldGUsIGVudGl0eSlcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZW50aXR5Ll9mZXRjaCAmJiBtZXRob2QgPT09IFwicmVhZFwiKSB7XG4gICAgICAgICAgICBhZGRGZXRjaFByb21pc2UoZW50aXR5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N5bmMobWV0aG9kLCBlbnRpdHksIG9wdGlvbnMpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gYmVmb3JlU2VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihcInN5bmM6c3RhcnRcIiwgdGhpcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKFwic3luYzpzdG9wXCIsIHRoaXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRGZXRjaFByb21pc2UoZW50aXR5LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBkID0gJC5EZWZlcnJlZCgpO1xuICAgICAgICBlbnRpdHkuX2ZldGNoID0gZC5wcm9taXNlKCk7XG4gICAgICAgIHZhciBfc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcbiAgICAgICAgdmFyIF9lcnJvciA9IG9wdGlvbnMuZXJyb3I7XG4gICAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uIChyZXNwLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgX3N1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGQucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3AsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhociA/IHhoci5zdGF0dXMgOiAwLFxuICAgICAgICAgICAgICAgIGZhaWxlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLmVycm9yID0gZnVuY3Rpb24gKHJlc3AsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ2Vycm9yOm9mZmxpbmUnKTtcbiAgICAgICAgICAgICAgICBhcHAudmVudC50cmlnZ2VyKCdmZXRjaDpvZmZsaW5lJywgZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF8uY29udGFpbnMoWzQwMSwgNDAzXSwgcmVzcC5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ3VuYXV0aG9yaXNlZCcpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOnVuYXV0aG9yaXNlZCcsIGVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmZsb29yKHJlc3Auc3RhdHVzIC8gMTAwKSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGVudGl0eS50cmlnZ2VyKCdlcnJvcjpzZXJ2ZXInKTtcbiAgICAgICAgICAgICAgICBhcHAudmVudC50cmlnZ2VyKCdmZXRjaDplcnJvcjpzZXJ2ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9lcnJvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcC5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLmNvbmZpZ3VyZUJhY2tib25lU3luYyA9IGNvbmZpZ3VyZUJhY2tib25lU3luYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5bmMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvYmFja2JvbmUvc3luYy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBMYXlvdXRWaWV3ID0gTWFyaW9uZXR0ZS5MYXlvdXRWaWV3O1xuLypcbiAgX2J1aWxkUmVnaW9uc1xuICAtLS0tLS0tLS0tLS0tXG4gIFdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlcmUgaXMgYW4gZWxlbWVudCBvbiB0aGVcbiAgTGF5b3V0VmlldyBzbyB0aGF0IGdldEVsIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRFbFxuICB3b3JrcyBwcm9wZXJseVxuICovXG52YXIgX2J1aWxkUmVnaW9ucyA9IExheW91dFZpZXcucHJvdG90eXBlLl9idWlsZFJlZ2lvbnM7XG5MYXlvdXRWaWV3LnByb3RvdHlwZS5fYnVpbGRSZWdpb25zID0gZnVuY3Rpb24gKHJlZ2lvbnMpIHtcbiAgICB0aGlzLl9lbnN1cmVFbGVtZW50KCk7XG4gICAgcmV0dXJuIF9idWlsZFJlZ2lvbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL0xheW91dFZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEJhY2tib25lLCBNYXJpb25ldHRlLCBfLCBfY2xvc2UsIF9nZXRFbCwgX2dldE5hbWUsIF9zaG93O1xuXG5fID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG5cbk1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG5cblxuLypcbiAgQW5pbWF0ZSBPdXRcbiAgLS0tLS0tLS0tLS1cbiAgQW5pbWF0ZSBvdXQgdGhlIG9sZCB2aWV3IGJlZm9yZSBiZWluZyByZWFkeSB0byBzaG93XG4gIHRoZSBuZXh0XG4gKi9cblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYikge1xuICBpZiAodGhpcy5jdXJyZW50VmlldyAmJiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQpIHtcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW5nIG91dCcsIHRoaXMuY3VycmVudFZpZXcsIHRoaXMuZWwpO1xuICAgIHRoaXMudHJpZ2dlck1ldGhvZCgnYmVmb3JlOmFuaW1hdGluZzpvdXQnKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KGNiKTtcbiAgfSBlbHNlIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgcmV0dXJuIGNiLmNhbGwodGhpcyk7XG4gIH1cbn07XG5cblxuLypcbiAgQW5pbWF0ZWQgRW1wdHlcbiAgLS0tLS1cbiAgVXNlIGFuaW1hdGlvbiB3aGVuIGVtcHR5aW5nIHRoZSByZWdpb24gaWYgaXRcbiAgaXMgYXZhaWxhYmxlXG4gKi9cblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmFuaW1hdGVFbXB0eSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNiKSB7XG4gIHJldHVybiB0aGlzLmFuaW1hdGVPdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuZW1wdHkoKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKF90aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSh0aGlzKSk7XG59O1xuXG5cbi8qXG4gIGdldEVsXG4gIC0tLS0tXG4gIFVwZGF0ZSB0aGUgZGVmYXVsdCBmdW5jdGlvbmFsaXR5IHRvIGNoZWNrIGZvclxuICBwYXJlbnRFbCBvbiB0aGUgb3B0aW9ucyBhbmQgZmluZCB0aGUgc2VsZWN0b3JcbiAgYmFzZWQgb24gaXQncyBjaGlsZHJlblxuICovXG5cbl9nZXRFbCA9IE1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5nZXRFbDtcblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmdldEVsID0gZnVuY3Rpb24oZWwpIHtcbiAgdmFyICRlbCwgcGFyZW50RWw7XG4gIGlmIChfLmlzU3RyaW5nKGVsKSkge1xuICAgIHBhcmVudEVsID0gXy5yZXN1bHQodGhpcy5vcHRpb25zLCAncGFyZW50RWwnKTtcbiAgICBpZiAocGFyZW50RWwpIHtcbiAgICAgICRlbCA9IEJhY2tib25lLiQocGFyZW50RWwpLmZpbmQoZWwpO1xuICAgICAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9nZXRFbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2dldEVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn07XG5cblxuLypcbiAgU2hvdyBuZXcgVmlld1xuICAtLS0tLS0tLS0tLS0tXG4gIEhhbmRsZSB0cmFuc2l0aW9ucyBiZXR3ZWVuIG9sZCB2aWV3IGFuZCBuZXcgb25lXG4gIHdpdGggdGhlIG9wdGlvbiB0byBkaXNhYmxlIGFuaW1hdGlvbnNcbiAqL1xuXG5fc2hvdyA9IE1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5zaG93O1xuXG5fZ2V0TmFtZSA9IGZ1bmN0aW9uKHZpZXcpIHtcbiAgaWYgKHZpZXcpIHtcbiAgICBpZiAodmlldy5uYW1lKSB7XG4gICAgICByZXR1cm4gdmlldy5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmlldy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ25vIHZpZXcnO1xuICB9XG59O1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKHZpZXcsIGltbWVkaWF0ZSkge1xuICBpZiAoaW1tZWRpYXRlID09IG51bGwpIHtcbiAgICBpbW1lZGlhdGUgPSBmYWxzZTtcbiAgfVxuICB0aGlzLl9uZXh0VmlldyA9IHZpZXc7XG4gIGlmIChpbW1lZGlhdGUpIHtcbiAgICBpZiAodGhpcy4kZWwgJiYgdGhpcy4kZWxbMF0pIHtcbiAgICAgIHRoaXMuJGVsWzBdLnNjcm9sbFRvcCA9IDA7XG4gICAgICB0aGlzLiRlbFswXS5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbmV4dFZpZXcgPSBudWxsO1xuICAgIF9zaG93LmNhbGwodGhpcywgdmlldyk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdzaG93aW5nJywgX2dldE5hbWUodmlldyksIHZpZXcsIHRoaXMuZWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGVPdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChfdGhpcy4kZWwgJiYgX3RoaXMuJGVsWzBdKSB7XG4gICAgICAgICAgX3RoaXMuJGVsWzBdLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgX3RoaXMuJGVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9uZXh0VmlldyA9IG51bGw7XG4gICAgICAgIF9zaG93LmNhbGwoX3RoaXMsIHZpZXcpO1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3Nob3dpbmcnLCBfZ2V0TmFtZSh2aWV3KSwgdmlldywgX3RoaXMuZWwpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cbn07XG5cblxuLypcbiAgVGhpcyB3aWxsIHNob3cgdGhlIHZpZXcgaW1tZWRpYXRlbHkgaWYgI2dldEVsIHJldHVybnMgYW4gZWxlbWVudFxuICBvdGhlcndpc2UgaXQgd2lsbCB3YWl0IGZvciB0aGUgc2hvdyBldmVudCB0byBmaXJlIG9uIHdhaXRGb3JWaWV3XG4gIGJlZm9yZSBzaG93aW5nIHRoZSB2aWV3XG4gKi9cblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLnNob3dXaXRoVmlldyA9IGZ1bmN0aW9uKHdhaXRGb3JWaWV3LCB2aWV3VG9TaG93LCBvcHRpb25zKSB7XG4gIHZhciAkZWw7XG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgaW1tZWRpYXRlOiBmYWxzZSxcbiAgICB3YWl0Rm9yRXZlbnQ6ICdzaG93J1xuICB9KTtcbiAgaWYgKF8uaXNTdHJpbmcodGhpcy5lbCkpIHtcbiAgICAkZWwgPSB0aGlzLmdldEVsKHRoaXMuZWwpO1xuICB9IGVsc2Uge1xuICAgICRlbCA9IHRoaXMuJGVsO1xuICB9XG4gIGlmICgkZWwubGVuZ3RoKSB7XG4gICAgdGhpcy5zaG93KHZpZXdUb1Nob3csIG9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxpc3RlblRvT25jZSh3YWl0Rm9yVmlldywgb3B0aW9ucy53YWl0Rm9yRXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvdyh2aWV3VG9TaG93LCBvcHRpb25zLmltbWVkaWF0ZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxufTtcblxuXG4vKlxuICBDbG9zZVxuICAtLS0tLVxuICBVcGRhdGUgdG8gaW5jbHVkZSBsb2dnaW5nIHdoZW4gYSB2aWV3IGlzIGNsb3NlZFxuICovXG5cbl9jbG9zZSA9IE1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5jbG9zZTtcblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdjbG9zaW5nJywgKHRoaXMuY3VycmVudFZpZXcgPyB0aGlzLmN1cnJlbnRWaWV3IDogdm9pZCAwKSwgdGhpcy5lbCk7XG4gIHJldHVybiBfY2xvc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1JlZ2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgTWFyaW9uZXR0ZSwgXztcblxuXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcblxuTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcblxuXy5leHRlbmQoTWFyaW9uZXR0ZS5WaWV3LnByb3RvdHlwZSwge1xuICB0YWdOYW1lOiAnc2VjdGlvbicsXG4gIGNsYXNzTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfSxcbiAgdGVtcGxhdGVIZWxwZXJzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZWxOYW1lOiB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC5uYW1lIDogJydcbiAgICB9O1xuICB9XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIE1vZGlmaWVyc0JlaGF2aW9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW9kaWZpZXJzQmVoYXZpb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTW9kaWZpZXJzQmVoYXZpb3IoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUuYWRkTW9kaWZpZXIgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJcIiArIHRoaXMudmlldy5uYW1lICsgXCItLVwiICsgbW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS5yZW1vdmVNb2RpZmllciA9IGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhcIlwiICsgdGhpcy52aWV3Lm5hbWUgKyBcIi0tXCIgKyBtb2RpZmllcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS50b2dnbGVNb2RpZmllciA9IGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICBpZiAodGhpcy4kZWwuaGFzQ2xhc3MoXCJcIiArIHRoaXMudmlldy5uYW1lICsgXCItLVwiICsgbW9kaWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS5vbk1vZGlmaWVkID0gZnVuY3Rpb24gKG1vZGlmaWVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBzdGF0ZTtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5hbWUgaXMgcmVxdWlyZWQgb24gdGhpcyBWaWV3Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMucmVtb3ZlTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudG9nZ2xlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMudG9nZ2xlTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmFkZE1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcudHJpZ2dlck1ldGhvZChcIm1vZGlmaWVkOlwiICsgbW9kaWZpZXIsIHtcbiAgICAgICAgICAgIG9uOiBzdGF0ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNb2RpZmllcnNCZWhhdmlvcjtcbn0pKE1hcmlvbmV0dGUuQmVoYXZpb3IpO1xuZXhwb3J0cy5Nb2RpZmllcnNCZWhhdmlvciA9IE1vZGlmaWVyc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9kaWZpZXJzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYmVoYXZpb3JzL01vZGlmaWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGdsb2JhbFN0YXRlSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbnZhciBTQ1JPTExBQkxFX0NMQVNTID0gJ1Njcm9sbGFibGVzX19jb250YWluZXInO1xuZnVuY3Rpb24gaW5pdEdsb2JhbFNjcm9sbGFibGVTdGF0ZSgpIHtcbiAgICBnbG9iYWxTdGF0ZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAvLyBEaXNhYmxlIHNjcm9sbCBmb3IgdGhlIGRvY3VtZW50LCB3ZSdsbCBoYW5kbGUgaXQgb3Vyc2VsdmVzXG4gICAgJChkb2N1bWVudCkub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ1Njcm9sbGFibGVzLS1hdHRhY2hlZCcpLm9uKFwidG91Y2hzdGFydFwiLCBcIi5cIiArIFNDUk9MTEFCTEVfQ0xBU1MsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHNjcm9sbGFibGUgKGNvbnRlbnQgb3ZlcmZsb3dzKSwgdGhlbi4uLlxuICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWlnaHQgIT09IHRoaXMuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgdG9wLCBzY3JvbGwgZG93biBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgYm90dG9tLCBzY3JvbGwgdXAgb25lIHBpeGVsIHRvIGFsbG93IHNjcm9sbGluZyBkb3duXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPT09IHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBzY3JvbGxcbiAgICAgICAgdGhpcy5hbGxvd1VwID0gdGhpcy5zY3JvbGxUb3AgPiAwO1xuICAgICAgICB0aGlzLmFsbG93RG93biA9IHRoaXMuc2Nyb2xsVG9wIDwgKHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQpO1xuICAgICAgICB0aGlzLmxhc3RZID0gZS5vcmlnaW5hbEV2ZW50LnBhZ2VZO1xuICAgIH0pLm9uKFwidG91Y2htb3ZlXCIsIFwiLlwiICsgU0NST0xMQUJMRV9DTEFTUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICB2YXIgdXAgPSBldmVudC5wYWdlWSA+IHRoaXMubGFzdFk7XG4gICAgICAgIHZhciBkb3duID0gIXVwO1xuICAgICAgICB0aGlzLmxhc3RZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIGlmICgodXAgJiYgdGhpcy5hbGxvd1VwKSB8fCAoZG93biAmJiB0aGlzLmFsbG93RG93bikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wJyk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcmV2ZW50Jyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG52YXIgU2Nyb2xsYWJsZXNCZWhhdmlvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjcm9sbGFibGVzQmVoYXZpb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2Nyb2xsYWJsZXNCZWhhdmlvcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFNjcm9sbGFibGVzQmVoYXZpb3IucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy9pZiAoIWdsb2JhbFN0YXRlSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gIGluaXRHbG9iYWxTY3JvbGxhYmxlU3RhdGUoKTtcbiAgICAgICAgLy99XG4gICAgICAgIF8uZWFjaCh0aGlzLm9wdGlvbnMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgdmFyICRlbDtcbiAgICAgICAgICAgIGlmICh2YWwgPT09ICdlbCcpIHtcbiAgICAgICAgICAgICAgICAkZWwgPSBfdGhpcy4kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwgPSBfdGhpcy4kKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGVsICYmICRlbC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKFNDUk9MTEFCTEVfQ0xBU1MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTY3JvbGxhYmxlc0JlaGF2aW9yO1xufSkoTWFyaW9uZXR0ZS5CZWhhdmlvcik7XG5leHBvcnRzLlNjcm9sbGFibGVzQmVoYXZpb3IgPSBTY3JvbGxhYmxlc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2Nyb2xsYWJsZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvU2Nyb2xsYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgSXRlbVZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9JdGVtVmlldycpO1xudmFyIEFsZXJ0Q29tcG9uZW50ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWxlcnRDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWxlcnRDb21wb25lbnQob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnYWxlcnQnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9hbGVydC5oYnMnKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFsZXJ0Q29tcG9uZW50LnByb3RvdHlwZS50ZW1wbGF0ZUhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm9wdGlvbnMubWVzc2FnZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgQWxlcnRDb21wb25lbnQucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2FsZXJ0LScgKyAodGhpcy5vcHRpb25zLmFsZXJ0VHlwZSB8fCAnaW5mbycpKTtcbiAgICB9O1xuICAgIHJldHVybiBBbGVydENvbXBvbmVudDtcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuQWxlcnRDb21wb25lbnQgPSBBbGVydENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFsZXJ0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hbGVydC9BbGVydC5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vLi4vY29udHJvbGxlcnMvQXBwJyk7XG52YXIgU3Bpbm5lclZpZXcgPSByZXF1aXJlKCcuLi9TcGlubmVyVmlldy9TcGlubmVyVmlldycpO1xudmFyIHdoZW5GZXRjaGVkID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3doZW5GZXRjaGVkJyk7XG52YXIgTG9hZGluZ0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkaW5nQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkaW5nQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBfLmRlZmF1bHRzKHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgbG9hZGluZ1R5cGU6IFwic3Bpbm5lclwiLFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gb3B0aW9ucy5lbnRpdGllcyB8fCB0aGlzLmdldEVudGl0aWVzKG9wdGlvbnMudmlldyk7XG4gICAgICAgIHRoaXMubG9hZGluZ1ZpZXcgPSB0aGlzLmdldExvYWRpbmdWaWV3KCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNob3codGhpcy5sb2FkaW5nVmlldyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMubW9uaXRvclJlYWR5U3RhdGUob3B0aW9ucy52aWV3LCB0aGlzLmxvYWRpbmdWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TG9hZGluZ1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmxvYWRpbmdUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwib3BhY2l0eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLmN1cnJlbnRWaWV3LiRlbC5jc3MoXCJvcGFjaXR5XCIsIDAuNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGlubmVyJzpcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ1ZpZXcgPSBuZXcgU3Bpbm5lclZpZXcuU3Bpbm5lclZpZXcoKTtcbiAgICAgICAgICAgICAgICBsb2FkaW5nVmlldy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvYWRpbmdUeXBlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2FkaW5nVmlldztcbiAgICB9O1xuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5tb25pdG9yUmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChyZWFsVmlldywgbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF92aWV3UmVhZHkgPSBmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zaG93RXJyb3IocmVhbFZpZXcsIGxvYWRpbmdWaWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dSZWFsVmlldyhyZWFsVmlldywgbG9hZGluZ1ZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vbml0b3JSZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm1vbml0b3JSZWFkeVN0YXRlKHJlYWxWaWV3LCB0aGlzLCBfdmlld1JlYWR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aGVuRmV0Y2hlZC53aGVuRmV0Y2hlZCh0aGlzLmVudGl0aWVzLCBfdmlld1JlYWR5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLnNob3dFcnJvciA9IGZ1bmN0aW9uIChyZWFsVmlldywgbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgaWYgKHJlYWxWaWV3KSB7XG4gICAgICAgICAgICByZWFsVmlldy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkaW5nVmlldy5zdG9wKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZXJyb3IgaGFuZGxpbmUgb24gbG9hZGluZyB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5zaG93UmVhbFZpZXcgPSBmdW5jdGlvbiAocmVhbFZpZXcsIGxvYWRpbmdWaWV3KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmxvYWRpbmdUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwib3BhY2l0eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLmN1cnJlbnRWaWV3LiRlbC5yZW1vdmVBdHRyKFwic3R5bGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGlubmVyJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWdpb24uY3VycmVudFZpZXcgIT09IGxvYWRpbmdWaWV3ICYmIHRoaXMucmVnaW9uLl9uZXh0VmlldyAhPT0gbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFZpZXcuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoISghcmVhbFZpZXcgfHwgdGhpcy5vcHRpb25zLmRlYnVnKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KHJlYWxWaWV3KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEVudGl0aWVzID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIF8uY2hhaW4odmlldykucGljayhcIm1vZGVsXCIsIFwiY29sbGVjdGlvblwiKS50b0FycmF5KCkuY29tcGFjdCgpLnZhbHVlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTG9hZGluZ0NvbnRyb2xsZXI7XG59KShBcHBDb250cm9sbGVyLkFwcENvbnRyb2xsZXIpO1xuZXhwb3J0cy5Mb2FkaW5nQ29udHJvbGxlciA9IExvYWRpbmdDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9hZGluZ0NvbnRyb2xsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvYWRpbmdDb21wb25lbnQvTG9hZGluZ0NvbnRyb2xsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIEFuaW1hdGVkUmVnaW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0ZWRSZWdpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0ZWRSZWdpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBbmltYXRlZFJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmlldyAmJiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbmltYXRpbmcgb3V0JywgdGhpcy5jdXJyZW50VmlldywgdGhpcy5lbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQoY2IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFuaW1hdGVkUmVnaW9uLnByb3RvdHlwZS5hbmltYXRlRW1wdHkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hbmltYXRlT3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmVtcHR5KCk7XG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGVkUmVnaW9uO1xufSkoTWFyaW9uZXR0ZS5SZWdpb24pO1xuZXhwb3J0cy5BbmltYXRlZFJlZ2lvbiA9IEFuaW1hdGVkUmVnaW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QW5pbWF0ZWRSZWdpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcbnZhciBJdGVtVmlldyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL0l0ZW1WaWV3Jyk7XG52YXIgQlVUVE9OX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJVVFRPTl9FVkVOVFMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlVUVE9OX0VWRU5UUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEJVVFRPTl9FVkVOVFMubmF2aWdhdGUgPSBuZXcgQlVUVE9OX0VWRU5UUygnbmF2aWdhdGUnKTtcbiAgICByZXR1cm4gQlVUVE9OX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkJVVFRPTl9FVkVOVFMgPSBCVVRUT05fRVZFTlRTO1xudmFyIEJVVFRPTl9USEVNRSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJVVFRPTl9USEVNRSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCVVRUT05fVEhFTUUoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBCVVRUT05fVEhFTUUuZGVmYXVsdCA9IG5ldyBCVVRUT05fVEhFTUUoJ2RlZmF1bHQnKTtcbiAgICBCVVRUT05fVEhFTUUuaW52ZXJzZSA9IG5ldyBCVVRUT05fVEhFTUUoJ2ludmVyc2UnKTtcbiAgICBCVVRUT05fVEhFTUUuYWN0aW9uID0gbmV3IEJVVFRPTl9USEVNRSgnYWN0aW9uJyk7XG4gICAgQlVUVE9OX1RIRU1FLmxpbmsgPSBuZXcgQlVUVE9OX1RIRU1FKCdsaW5rJyk7XG4gICAgQlVUVE9OX1RIRU1FLnByaW1hcnkgPSBuZXcgQlVUVE9OX1RIRU1FKCdwcmltYXJ5Jyk7XG4gICAgQlVUVE9OX1RIRU1FLnNlY29uZGFyeSA9IG5ldyBCVVRUT05fVEhFTUUoJ3NlY29uZGFyeScpO1xuICAgIHJldHVybiBCVVRUT05fVEhFTUU7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5CVVRUT05fVEhFTUUgPSBCVVRUT05fVEhFTUU7XG52YXIgQlVUVE9OX1NJWkUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCVVRUT05fU0laRSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCVVRUT05fU0laRSgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEJVVFRPTl9TSVpFLmRlZmF1bHQgPSBuZXcgQlVUVE9OX1NJWkUoJ2RlZmF1bHQnKTtcbiAgICBCVVRUT05fU0laRS5zbWFsbCA9IG5ldyBCVVRUT05fU0laRSgnc21hbGwnKTtcbiAgICBCVVRUT05fU0laRS5sYXJnZSA9IG5ldyBCVVRUT05fU0laRSgnbGFyZ2UnKTtcbiAgICByZXR1cm4gQlVUVE9OX1NJWkU7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5CVVRUT05fU0laRSA9IEJVVFRPTl9TSVpFO1xudmFyIEJ1dHRvbk1vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uTW9kZWwoYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmlkQXR0cmlidXRlID0gJ25hbWUnO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgICB0aGVtZTogQlVUVE9OX1RIRU1FLmRlZmF1bHQsXG4gICAgICAgICAgICBzaXplOiBCVVRUT05fU0laRS5kZWZhdWx0XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnbmFtZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ25hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwiaWNvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdpY29uJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnaWNvbicsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3RleHQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0JywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcImJsb2NrXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Jsb2NrJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnYmxvY2snLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwidGhlbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgndGhlbWUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0aGVtZScsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NpemUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdzaXplJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uTW9kZWw7XG59KShCYWNrYm9uZS5Nb2RlbCk7XG5leHBvcnRzLkJ1dHRvbk1vZGVsID0gQnV0dG9uTW9kZWw7XG52YXIgQnV0dG9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsIHx8IG5ldyBCdXR0b25Nb2RlbCh0aGlzLmRlZmF1bHRzKCkpO1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5tb2RlbC5uYW1lIHx8ICdiYXNlLWJ1dHRvbic7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL0J1dHRvbi5oYnMnKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0KSB7XG4gICAgICAgICAgICB0aGlzLnRhZ05hbWUgPSAnYnV0dG9uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFnTmFtZSA9ICdhJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXJzID0ge1xuICAgICAgICAgICAgJ2NsaWNrJzogJ2NsaWNrJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHRoaXMubmF2aWdhdGUpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lcygpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnQnV0dG9uIGJ0biBCdXR0b24tLScgKyB0aGlzLm5hbWUgKyAnQnV0dG9uJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5nZXRJY29uQ2xhc3MgPSBmdW5jdGlvbiAoaWNvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdJY29uIEljb24tLScgKyBpY29uTmFtZTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXJpYWxpemVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMubW9kZWwudG9KU09OKCk7XG4gICAgICAgIGRhdGEuaWNvbkNsYXNzID0gdGhpcy5nZXRJY29uQ2xhc3ModGhpcy5tb2RlbC5pY29uKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoQlVUVE9OX0VWRU5UUy5uYXZpZ2F0ZS52YWwsIHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNldFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLnVuc2V0Q2xhc3NOYW1lcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5pY29uKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5pY29uID0gb3B0aW9ucy5pY29uO1xuICAgICAgICBpZiAob3B0aW9ucy50ZXh0KVxuICAgICAgICAgICAgdGhpcy5tb2RlbC50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5ibG9jaykpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJsb2NrID0gb3B0aW9ucy5ibG9jaztcbiAgICAgICAgaWYgKG9wdGlvbnMudGhlbWUpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRoZW1lID0gb3B0aW9ucy50aGVtZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2l6ZSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0KVxuICAgICAgICAgICAgdGhpcy4kZWwuYXR0cigndHlwZScsICdzdWJtaXQnKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUudW5zZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuJGVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnYnRuLWxpbmsnKS5yZW1vdmVDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC50aGVtZSkucmVtb3ZlQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwuc2l6ZSk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdidG4tYmxvY2snKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuc2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwudGhlbWUpLmFkZENsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnNpemUgKyAnU2l6ZScpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC50aGVtZSA9PT0gQlVUVE9OX1RIRU1FLmxpbmspIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdidG4tbGluaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYnRuLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCdXR0b247XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJ1dHRvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lRm9ybXMgPSByZXF1aXJlKCdiYWNrYm9uZS1mb3JtcycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG52YXIgdmlld3MgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9pbmRleCcpO1xudmFyIExheW91dCA9IHZpZXdzLkxheW91dDtcbnZhciBDaGlsZEhvbGRlclZpZXcgPSB2aWV3cy5DaGlsZEhvbGRlclZpZXc7XG50ZW1wbGF0ZXMuaW5pdCgpO1xudmFyIEZPUk1WSUVXX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZPUk1WSUVXX0VWRU5UUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGT1JNVklFV19FVkVOVFMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBGT1JNVklFV19FVkVOVFMuc3VibWl0dGVkID0gbmV3IEZPUk1WSUVXX0VWRU5UUygnc3VibWl0dGVkJyk7XG4gICAgcmV0dXJuIEZPUk1WSUVXX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkZPUk1WSUVXX0VWRU5UUyA9IEZPUk1WSUVXX0VWRU5UUztcbnZhciBGb3JtVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1WaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0Zvcm1WaWV3JztcbiAgICAgICAgdGhpcy50YWdOYW1lID0gJ2Zvcm0nO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7IHJvbGU6ICdmb3JtJyB9O1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9Gb3JtVmlldy5oYnMnKTtcbiAgICAgICAgdGhpcy5yZWdpb25zID0ge1xuICAgICAgICAgICAgZmllbGRzUmVnaW9uOiAnLkZvcm1WaWV3X19maWVsZHNSZWdpb24nLFxuICAgICAgICAgICAgYnV0dG9uc1JlZ2lvbjogJy5Gb3JtVmlld19fYnV0dG9uc1JlZ2lvbidcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wYXJzZUljb25Qcm9wZXJ0aWVzKG9wdGlvbnMuc2NoZW1hKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdGb3JtU3RhY2tlZCcpO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IG5ldyBCYWNrYm9uZUZvcm1zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNIb2xkZXIgPSBuZXcgQ2hpbGRIb2xkZXJWaWV3LkdlbmVyaWNDaGlsZEhvbGRlclZpZXcoKTtcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwub2ZmKCk7XG4gICAgICAgIHRoaXMuZmllbGRzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBudWxsO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnNldExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwub24oJ3N1Ym1pdCcsIHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maWVsZHNSZWdpb24uc2hvdyh0aGlzLmZpZWxkcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uc1JlZ2lvbi5zaG93KHRoaXMuYnV0dG9uc0hvbGRlcik7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUucGFyc2VJY29uUHJvcGVydGllcyA9IGZ1bmN0aW9uIChzY2hlbWEpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYSwgZnVuY3Rpb24gKHNjaGVtYUl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWFJdGVtLmljb24pIHtcbiAgICAgICAgICAgICAgICBzY2hlbWFJdGVtLnRpdGxlID0gJzxpIGNsYXNzPVwiZmEgZmEtJyArIHNjaGVtYUl0ZW0uaWNvbiArICdcIj48L2k+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUub25Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEZPUk1WSUVXX0VWRU5UUy5zdWJtaXR0ZWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLmRpc2FibGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcyhGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuZW5hYmxlRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMudmFsaWRhdGUoKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuZ2V0VmFsdWUocHJvcGVydHkpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRzLnNldFZhbHVlKHByb3BlcnRpZXMpO1xuICAgIH07XG4gICAgRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MgPSAnRm9ybVZpZXctLWRpc2FibGVkJztcbiAgICByZXR1cm4gRm9ybVZpZXc7XG59KShMYXlvdXQuTGF5b3V0KTtcbmV4cG9ydHMuRm9ybVZpZXcgPSBGb3JtVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvVmlldycpO1xudmFyIFNwaW4gPSByZXF1aXJlKCdzcGluJyk7XG52YXIgU3Bpbm5lclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTcGlubmVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTcGlubmVyVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdTcGlubmVyVmlldyc7XG4gICAgICAgIHRoaXMubG9hZGluZ0RlbGF5ID0gMTAwMDtcbiAgICAgICAgdGhpcy5sb2FkaW5nQ2xhc3MgPSAnU3Bpbm5lclZpZXctLXNwaW5uaW5nJztcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIFNwaW5uZXJWaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH07XG4gICAgU3Bpbm5lclZpZXcucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy4kZWwuYWRkQ2xhc3MoX3RoaXMubG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmdTcGlubmVyID0gbmV3IFNwaW4oU3Bpbm5lclZpZXcuc3Bpbk9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZ1NwaW5uZXIuc3BpbihfdGhpcy4kZWxbMF0pO1xuICAgICAgICB9LCB0aGlzLmxvYWRpbmdEZWxheSk7XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nU3Bpbm5lcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3Bpbm5lci5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5zcGluT3B0aW9ucyA9IHtcbiAgICAgICAgbGluZXM6IDEzLFxuICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIHdpZHRoOiAyLFxuICAgICAgICByYWRpdXM6IDUsXG4gICAgICAgIGNvcm5lcnM6IDEsXG4gICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICB0cmFpbDogNjAsXG4gICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgIGh3YWNjZWw6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogXCJTcGlubmVyVmlld19fc3Bpbm5lciBhbmltYXRlZCBib3VuY2VJblwiLFxuICAgICAgICB6SW5kZXg6IDJlOSxcbiAgICAgICAgdG9wOiBcIjMwcHhcIixcbiAgICAgICAgbGVmdDogXCJhdXRvXCJcbiAgICB9O1xuICAgIHJldHVybiBTcGlubmVyVmlldztcbn0pKFZpZXcuVmlldyk7XG5leHBvcnRzLlNwaW5uZXJWaWV3ID0gU3Bpbm5lclZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TcGlubmVyVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBTcGlubmVyVmlldyA9IHJlcXVpcmUoJy4uL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG52YXIgTm90aWNlVmlld01vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90aWNlVmlld01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdGljZVZpZXdNb2RlbCgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXI6ICcnLFxuICAgICAgICAgICAgYm9keTogJycsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGNhbkRpc21pc3M6IHRydWVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImhlYWRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdoZWFkZXInKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdoZWFkZXInLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImJvZHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnYm9keScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2JvZHknLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImJ1dHRvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnYnV0dG9ucycpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJjYW5EaXNtaXNzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2NhbkRpc21pc3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjYW5EaXNtaXNzJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJsb2FkaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdsb2FkaW5nJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm90aWNlVmlld01vZGVsO1xufSkoQmFja2JvbmUuTW9kZWwpO1xuZXhwb3J0cy5Ob3RpY2VWaWV3TW9kZWwgPSBOb3RpY2VWaWV3TW9kZWw7XG52YXIgTm90aWNlVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdGljZVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90aWNlVmlldyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMubmFtZSA9ICdOb3RpY2VWaWV3JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbm90aWNlLmhicycpO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnc2VjdGlvbic7XG4gICAgICAgIHRoaXMudWkgPSB7XG4gICAgICAgICAgICBidXR0b25zOiAnLk5vdGljZVZpZXdfX2J0bnMnXG4gICAgICAgIH07XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5tb2RlbCB8fCBuZXcgTm90aWNlVmlld01vZGVsKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5oZWFkZXIgPSBvcHRpb25zLmhlYWRlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zID0gb3B0aW9ucy5idXR0b25zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxvYWRpbmcgPSBvcHRpb25zLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMuY2FuRGlzbWlzcykpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2FuRGlzbWlzcyA9IG9wdGlvbnMuY2FuRGlzbWlzcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2UnLCB0aGlzLnJlbmRlcik7XG4gICAgfVxuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2xvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldyA9IG5ldyBTcGlubmVyVmlldy5TcGlubmVyVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLl9sb2FkaW5nVmlldy5lbCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbG9hZGluZycpKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuYnV0dG9ucy5lbXB0eSgpO1xuICAgICAgICB0aGlzLm1vZGVsLmdldCgnYnV0dG9ucycpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgYnRuLnJlbmRlcigpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuVG8oYnRuLCAnY2xpY2snLCBfdGhpcy5vbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICAgICAgX3RoaXMudWkuYnV0dG9ucy5hcHBlbmQoYnRuLmVsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5jYW5EaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXQoJ2NhbkRpc21pc3MnKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWwuc2hvdygpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQocHJvcGVydGllcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmRlc3Ryb3lCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBidG4uZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5vbkJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoJ2J1dHRvbjpjbGlja2VkJyk7XG4gICAgfTtcbiAgICByZXR1cm4gTm90aWNlVmlldztcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuTm90aWNlVmlldyA9IE5vdGljZVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpY2VWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L05vdGljZVZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xuZnVuY3Rpb24gaW5pdENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICAgIGlmICghY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyByZXF1aXJlcyBoYW5kbGViYXJzIHRvIGhhdmUgYmVlbiBwYXNzZWQgaW4gdG8gY29uZmlndXJlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudENvbnRyb2xsZXIobmFtZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgQ29udHJvbGxlciA9IGNvbXBvbmVudHNbbmFtZV07XG4gICAgICAgIGlmIChDb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xsZXIoe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBjb250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIFwiICsgbmFtZSArIFwiIGNvbXBvbmVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgPT09IHZvaWQgMCkgeyBhdHRyaWJ1dGVzID0ge307IH1cbiAgICAgICAgdmFyIGF0dHIgPSBfLm1hcChhdHRyaWJ1dGVzIHx8IHt9LCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcgJyArIGF0dHIuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsYXNzTmFtZShuYW1lLCBoYXNoKSB7XG4gICAgICAgIHZhciBjbGFzc2VzO1xuICAgICAgICBpZiAoaGFzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYXNoID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsYXNzTmFtZSBtdXN0IHNwZWNpZnkgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2hbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGhhc2hbXCJjbGFzc1wiXS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMudW5zaGlmdChuYW1lKTtcbiAgICAgICAgcmV0dXJuIGhhc2hbXCJjbGFzc1wiXSA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2MnLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IGdldENvbXBvbmVudENvbnRyb2xsZXIobmFtZSwgdGhpcyk7XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLnJlbmRlcihvcHRpb25zKTtcbiAgICB9KTtcbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2luX3JlZ2lvbicsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgZm46IG9wdGlvbnMuZm5cbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ3JlZ2lvbicsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRQYXRoID0gXCJcIiArIHRoaXMuX2NvbXBvbmVudE5hbWUgKyBcIl9fXCIgKyBuYW1lO1xuICAgICAgICB2YXIgaW5fcmVnaW9uID0gdGhpcy5fcmVnaW9uc1tuYW1lXTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBpbl9yZWdpb24gPyBpbl9yZWdpb24uZm4odGhpcykgOiAnJztcbiAgICAgICAgdmFyIGhhc2ggPSBvcHRpb25zLmhhc2ggfHwge307XG4gICAgICAgIGNsYXNzTmFtZShcIlwiICsgY29tcG9uZW50UGF0aCArIFwiLXJlZ2lvblwiLCBoYXNoKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBnZXRBdHRyaWJ1dGVzKGhhc2gpO1xuICAgICAgICByZXR1cm4gWyc8ZGl2JywgYXR0cmlidXRlcywgJz4nLCBjb250ZW50LCBcIjwvZGl2PlwiXS5qb2luKCcnKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaW5pdENvbXBvbmVudHMgPSBpbml0Q29tcG9uZW50cztcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudHMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2NvbXBvbmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIGkxOG5leHQgPSByZXF1aXJlKCdpMThuZXh0Jyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY2xpZW50Jyk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBoYW5kbGViYXJzID0gY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzO1xuICAgIC8qKlxuICAgICAqIEdldCB0cmFuc2xhdGlvbiBmb3IgYSBnaXZlbiBrZXksIHBhc3NpbmcgdGhlIG9wdGlvbnMgaGFzaCB0byBpMThuZXh0XG4gICAgICogdG8gYWxsb3cgZm9yIHZhcmlhYmxlIHJlcGxhY2VtZW50XG4gICAgICoge3trIGhlYWRlciBteVZhcj1cImhlbGxvXCJ9fVxuICAgICAqL1xuICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJ0XCIsIGZ1bmN0aW9uIChpMThuX2tleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIHdyYXBXaXRoS2V5OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIF8uZXh0ZW5kKG9wdHMsIG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBpMThuZXh0LnQoaTE4bl9rZXksIG9wdHMpO1xuICAgICAgICB2YXIgYXR0cnMgPSBbXCJkYXRhLXQ9XFxcIlwiICsgaTE4bl9rZXkgKyBcIlxcXCJcIl07XG4gICAgICAgIF8uZWFjaChvcHRzLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJzLnB1c2goXCJkYXRhLVwiICsga2V5ICsgXCI9XFxcIlwiICsgdmFsICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdHNbJ3dyYXBXaXRoS2V5J10pIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIFwiICsgKGF0dHJzLmpvaW4oJyAnKSkgKyBcIj5cIiArIChuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKHJlc3VsdCkpICsgXCI8L3NwYW4+XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRpb24gaW4gYSBibG9jayBjb250ZXh0XG4gICAgICovXG4gICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcInRyXCIsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0gaTE4bmV4dC5mdW5jdGlvbnMuZXh0ZW5kKG9wdGlvbnMuaGFzaCwgY29udGV4dCk7XG4gICAgICAgIGlmIChvcHRpb25zLmZuKSB7XG4gICAgICAgICAgICBvcHRzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZm4oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IGkxOG5leHQudChvcHRzLmtleSwgb3B0cyk7XG4gICAgICAgIHJldHVybiBuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKHJlc3VsdCk7XG4gICAgfSk7XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aTE4bmV4dC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hhbmRsZWJhcnMvaTE4bmV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xudmFyIEFQUF9ST1VURVJfRVZFTlRTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQVBQX1JPVVRFUl9FVkVOVFMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQVBQX1JPVVRFUl9FVkVOVFMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBUFBfUk9VVEVSX0VWRU5UUy5maXJzdFJvdXRlID0gbmV3IEFQUF9ST1VURVJfRVZFTlRTKCdmaXJzdFJvdXRlJyk7XG4gICAgcmV0dXJuIEFQUF9ST1VURVJfRVZFTlRTO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQVBQX1JPVVRFUl9FVkVOVFMgPSBBUFBfUk9VVEVSX0VWRU5UUztcbnZhciBBcHBSb3V0ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcHBSb3V0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwUm91dGVyKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBSb3V0ZXIgJyArIG9wdGlvbnMubmFtZSArICcgY3JlYXRlZCcsIG9wdGlvbnMuYXBwUm91dGVzKTtcbiAgICB9XG4gICAgQXBwUm91dGVyLnByb3RvdHlwZS5vblJvdXRlID0gZnVuY3Rpb24gKHJvdXRlTmFtZSwgcm91dGVQYXRoLCByb3V0ZUFyZ3MpIHtcbiAgICAgICAgaWYgKEFwcFJvdXRlci5fZmlyc3RSb3V0ZVRyaWdnZXJlZCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEFQUF9ST1VURVJfRVZFTlRTLmZpcnN0Um91dGUudmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEFwcFJvdXRlci5fZmlyc3RSb3V0ZVRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBcHBSb3V0ZXI7XG59KShNYXJpb25ldHRlLkFwcFJvdXRlcik7XG5leHBvcnRzLkFwcFJvdXRlciA9IEFwcFJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwcC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcnMvQXBwLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBTaG93ZG93biA9IHJlcXVpcmUoJ3Nob3dkb3duJyk7XG52YXIgbWRvd24gPSBuZXcgU2hvd2Rvd24uQ29udmVydGVyKCk7XG5leHBvcnRzLnNlbGVjdG9yID0gJ1tkYXRhLW1kb3duXSc7XG5leHBvcnRzLnVwZGF0ZU1ldGhvZCA9ICdodG1sJztcbmZ1bmN0aW9uIG9uR2V0KHZhbCkge1xuICAgIHJldHVybiBtZG93bi5tYWtlSHRtbCh2YWwpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWRvd24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGlja2l0L21kb3duLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFjdGlvbih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIHJldHVybiBBY3Rpb247XG59KSgpO1xuZXhwb3J0cy5BY3Rpb24gPSBBY3Rpb247XG52YXIgQWN0aW9uQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWN0aW9uQ3JlYXRvcihkaXNwYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgfVxuICAgIHJldHVybiBBY3Rpb25DcmVhdG9yO1xufSkoKTtcbmV4cG9ydHMuQWN0aW9uQ3JlYXRvciA9IEFjdGlvbkNyZWF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb25zLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9hY3Rpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVyZmFjZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L2ludGVyZmFjZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgZmx1eCA9IHJlcXVpcmUoJ2ZsdXgnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBEaXNwYXRjaGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGlzcGF0Y2hlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICAgICAgICB0aGlzLnN0b3JlcyA9IFtdO1xuICAgICAgICB0aGlzLnBheWxvYWRRdWV1ZSA9IFtdO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUucmVnaXN0ZXJTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICB0aGlzLnN0b3Jlcy5wdXNoKHN0b3JlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoc3RvcmUuZGlzcGF0Y2guYmluZChzdG9yZSkpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcGF0Y2hQYXlsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHRoaXMucGF5bG9hZFF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNwYXRjaGluZzonLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2gocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVN0b3JlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUGF5bG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5ub3RpZnlTdG9yZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLm5vdGlmeUlmU3RhdGVDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlUGF5bG9hZCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMucGF5bG9hZFF1ZXVlLnB1c2gocGF5bG9hZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEaXNwYXRjaGVyOiBIYW5kbGluZycsIHBheWxvYWQpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzcGF0Y2hpbmcpXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUGF5bG9hZCgpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlU2VydmVyQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogY29uc3RhbnRzLkFDVElPTl9TT1VSQ0VTLlNlcnZlckFjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bG9hZChwYXlsb2FkKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZURldmljZUFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGNvbnN0YW50cy5BQ1RJT05fU09VUkNFUy5EZXZpY2VBY3Rpb24sXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBheWxvYWQocGF5bG9hZCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVWaWV3QWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogY29uc3RhbnRzLkFDVElPTl9TT1VSQ0VTLlZpZXdBY3Rpb24sXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBheWxvYWQocGF5bG9hZCk7XG4gICAgfTtcbiAgICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0pKGZsdXguRGlzcGF0Y2hlcik7XG5leHBvcnRzLkRpc3BhdGNoZXIgPSBEaXNwYXRjaGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGlzcGF0Y2hlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvRGlzcGF0Y2hlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBFdmVudGVkQ2xhc3MgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvRXZlbnRlZENsYXNzJyk7XG52YXIgU3RvcmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdG9yZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdG9yZShkaXNwYXRjaGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoVG9rZW4gPSBkaXNwYXRjaGVyLnJlZ2lzdGVyU3RvcmUodGhpcyk7XG4gICAgfVxuICAgIFN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlSGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUubm90aWZ5SWZTdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlSGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcihjb25zdGFudHMuRVZFTlRfVFlQRVMuQ2hhbmdlLnZhbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5hZGRDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKGNvbnN0YW50cy5FVkVOVF9UWVBFUy5DaGFuZ2UudmFsLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vZmYoY29uc3RhbnRzLkVWRU5UX1RZUEVTLkNoYW5nZS52YWwsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZTtcbn0pKEV2ZW50ZWRDbGFzcy5FdmVudGVkQ2xhc3MpO1xuZXhwb3J0cy5TdG9yZSA9IFN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RvcmUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L1N0b3JlLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOYXZpZ2F0aW9uQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOYXZpZ2F0aW9uQ29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaGlzdG9yeUlzU3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBOYXZpZ2F0aW9uQ29udHJvbGxlci5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAocm91dGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZShyb3V0ZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignbmF2aWdhdGVkJywgcm91dGUpO1xuICAgIH07XG4gICAgTmF2aWdhdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldEN1cnJlbnRSb3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZyYWcgPSBCYWNrYm9uZS5oaXN0b3J5LmdldEZyYWdtZW50KCk7XG4gICAgICAgIGlmIChfLmlzRW1wdHkoZnJhZykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5hdmlnYXRpb25Db250cm9sbGVyLnByb3RvdHlwZS5zdGFydEhpc3RvcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAoQmFja2JvbmUuaGlzdG9yeSkge1xuICAgICAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydChvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUlzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBOYXZpZ2F0aW9uQ29udHJvbGxlcjtcbn0pKE1hcmlvbmV0dGUuQ29udHJvbGxlcik7XG5leHBvcnRzLk5hdmlnYXRpb25Db250cm9sbGVyID0gTmF2aWdhdGlvbkNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OYXZpZ2F0aW9uQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9OYXZpZ2F0aW9uQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBWaWV3ID0gcmVxdWlyZSgnLi9WaWV3Jyk7XG52YXIgQ2hpbGRIb2xkZXJWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hpbGRIb2xkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoaWxkSG9sZGVyVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgQmFja2JvbmUuQ2hpbGRWaWV3Q29udGFpbmVyKCk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyaWdnZXJNZXRob2QoJ2JlZm9yZTphZGQ6Y2hpbGQnLCB2aWV3KTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGNoaWxkIHZpZXcgaXRzZWxmIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgICAgICAvLyByZW1vdmUgYW5kL29yIGRlc3Ryb3kgaXQgbGF0ZXJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5hZGQodmlldyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odmlldywgJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy52aWV3RGVzdHJveWVkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZFZpZXcodmlldywgaW5kZXgpO1xuICAgICAgICBNYXJpb25ldHRlLnRyaWdnZXJNZXRob2QuY2FsbCh2aWV3LCAnc2hvdycpO1xuICAgICAgICB0aGlzLnRyaWdnZXJNZXRob2QoJ2FkZDpjaGlsZCcsIHZpZXcpO1xuICAgIH07XG4gICAgLy8gcmVuZGVyIHRoZSBjaGlsZCB2aWV3XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5yZW5kZXJDaGlsZFZpZXcgPSBmdW5jdGlvbiAodmlldywgaW5kZXgpIHtcbiAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hIdG1sKHZpZXcsIGluZGV4KTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUudmlld0Rlc3Ryb3llZCA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucmVtb3ZlKHZpZXcpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5hdHRhY2hIdG1sID0gZnVuY3Rpb24gKHZpZXcsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh2aWV3LmVsKTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmNhbGwoJ3JlbmRlcicpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uY2FsbCgnZGVzdHJveScpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBDaGlsZEhvbGRlclZpZXc7XG59KShWaWV3LlZpZXcpO1xuZXhwb3J0cy5DaGlsZEhvbGRlclZpZXcgPSBDaGlsZEhvbGRlclZpZXc7XG52YXIgR2VuZXJpY0NoaWxkSG9sZGVyVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdlbmVyaWNDaGlsZEhvbGRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2VuZXJpY0NoaWxkSG9sZGVyVmlldygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3O1xufSkoQ2hpbGRIb2xkZXJWaWV3KTtcbmV4cG9ydHMuR2VuZXJpY0NoaWxkSG9sZGVyVmlldyA9IEdlbmVyaWNDaGlsZEhvbGRlclZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGlsZEhvbGRlclZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9DaGlsZEhvbGRlclZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmlldy5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBWaWV3LnByb3RvdHlwZS5nZXRVaSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlba2V5XTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWaWV3O1xufSkoTWFyaW9uZXR0ZS5WaWV3KTtcbmV4cG9ydHMuVmlldyA9IFZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIEl0ZW1WaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSXRlbVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSXRlbVZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJdGVtVmlldy5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtVmlldy5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgSXRlbVZpZXcucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJdGVtVmlldztcbn0pKE1hcmlvbmV0dGUuSXRlbVZpZXcpO1xuZXhwb3J0cy5JdGVtVmlldyA9IEl0ZW1WaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SXRlbVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9JdGVtVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExheW91dCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExheW91dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYXlvdXQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYXlvdXQucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTGF5b3V0LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBMYXlvdXQucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMYXlvdXQ7XG59KShNYXJpb25ldHRlLkxheW91dFZpZXcpO1xuZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MYXlvdXQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9MYXlvdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBMaXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGlzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMaXN0KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGlzdC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMaXN0LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExpc3Q7XG59KShNYXJpb25ldHRlLkNvbXBvc2l0ZVZpZXcpO1xuZXhwb3J0cy5MaXN0ID0gTGlzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxpc3QuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9MaXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFja2JvbmVcIlxuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTZfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFja2JvbmUtZm9ybXNcIlxuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTdfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic3BpblwiXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81OF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpMThuZXh0XCJcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU5X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNob3dkb3duXCJcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzYwX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZsdXhcIlxuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxuLyoqXG4gKiBJbmNsdWRlIHRoaXMgdGVtcGxhdGUgZmlsZSBhZnRlciBiYWNrYm9uZS1mb3Jtcy5hbWQuanMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGVtcGxhdGVzXG4gKlxuICogJ2RhdGEtKicgYXR0cmlidXRlcyBjb250cm9sIHdoZXJlIGVsZW1lbnRzIGFyZSBwbGFjZWRcbiAqL1xudmFyIEZvcm0gPSByZXF1aXJlKCdiYWNrYm9uZS1mb3JtcycpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBGb3JtLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnPGRpdiBkYXRhLWZpZWxkc2V0cz48L2Rpdj4nKTtcbiAgICBGb3JtLkZpZWxkc2V0LnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgPGZpZWxkc2V0IGRhdGEtZmllbGRzPlxcXG4gICAgPCUgaWYgKGxlZ2VuZCkgeyAlPlxcXG4gICAgICA8bGVnZW5kPjwlPSBsZWdlbmQgJT48L2xlZ2VuZD5cXFxuICAgIDwlIH0gJT5cXFxuICA8L2ZpZWxkc2V0PlxcXG4nKTtcbiAgICBGb3JtLkZpZWxkLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9Gb3JtRmllbGQuaGJzJyk7XG4gICAgRm9ybS5OZXN0ZWRGaWVsZC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gIDxkaXYgY2xhc3M9XCJmaWVsZC08JT0ga2V5ICU+XCI+XFxcbiAgICA8ZGl2IHRpdGxlPVwiPCU9IHRpdGxlICU+XCIgY2xhc3M9XCJpbnB1dC14bGFyZ2VcIj5cXFxuICAgICAgPHNwYW4gZGF0YS1lZGl0b3I+PC9zcGFuPlxcXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVscC1pbmxpbmVcIiBkYXRhLWVycm9yPjwvZGl2PlxcXG4gICAgPC9kaXY+XFxcbiAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiPjwlPSBoZWxwICU+PC9kaXY+XFxcbiAgPC9kaXY+XFxcbicpO1xuICAgIEZvcm0uRmllbGQuZXJyb3JDbGFzc05hbWUgPSAnRm9ybUdyb3VwLS1oYXNFcnJvcic7XG4gICAgaWYgKEZvcm0uZWRpdG9ycy5MaXN0KSB7XG4gICAgICAgIEZvcm0uZWRpdG9ycy5MaXN0LnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgICA8ZGl2IGNsYXNzPVwiYmJmLWxpc3RcIj5cXFxuICAgICAgPHVsIGNsYXNzPVwidW5zdHlsZWQgY2xlYXJmaXhcIiBkYXRhLWl0ZW1zPjwvdWw+XFxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJiZi1hZGRcIiBkYXRhLWFjdGlvbj1cImFkZFwiPkFkZDwvYnV0dG9uPlxcXG4gICAgPC9kaXY+XFxcbiAgJyk7XG4gICAgICAgIEZvcm0uZWRpdG9ycy5MaXN0Lkl0ZW0udGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICAgIDxsaSBjbGFzcz1cImNsZWFyZml4XCI+XFxcbiAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIiBkYXRhLWVkaXRvcj48L2Rpdj5cXFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmJmLWRlbFwiIGRhdGEtYWN0aW9uPVwicmVtb3ZlXCI+JnRpbWVzOzwvYnV0dG9uPlxcXG4gICAgPC9saT5cXFxuICAnKTtcbiAgICAgICAgRm9ybS5lZGl0b3JzLkxpc3QuT2JqZWN0LnRlbXBsYXRlID0gRm9ybS5lZGl0b3JzLkxpc3QuTmVzdGVkTW9kZWwudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICAgIDxkaXYgY2xhc3M9XCJiYmYtbGlzdC1tb2RhbFwiPjwlPSBzdW1tYXJ5ICU+PC9kaXY+XFxcbiAgJyk7XG4gICAgfVxufVxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvdGVtcGxhdGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBFdmVudGVkQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50ZWRDbGFzcygpIHtcbiAgICB9XG4gICAgcmV0dXJuIEV2ZW50ZWRDbGFzcztcbn0pKCk7XG5leHBvcnRzLkV2ZW50ZWRDbGFzcyA9IEV2ZW50ZWRDbGFzcztcbl8uZXh0ZW5kKEV2ZW50ZWRDbGFzcy5wcm90b3R5cGUsIEJhY2tib25lLkV2ZW50cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FdmVudGVkQ2xhc3MuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvRXZlbnRlZENsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tZXNzYWdlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tZXNzYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJtZXNzYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lmhic1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIjxzcGFuIGNsYXNzPVxcXCJCdXR0b25fX2ljb25cXFwiPjxkaXYgY2xhc3M9XFxcIlwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pY29uQ2xhc3MgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmljb25DbGFzcyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaWNvbkNsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PC9kaXY+PC9zcGFuPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlcjtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pY29uQ2xhc3MgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPHNwYW4gY2xhc3M9XFxcIkJ1dHRvbl9fdGV4dFxcXCI+XCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRleHQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRleHQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaGJzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fZmllbGRzUmVnaW9uXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fYnV0dG9uc1JlZ2lvblxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2Rpc2FibGVcXFwiPjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3Lmhic1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImhlYWRpbmcgaGVhZGluZy0tbm90aWNlIGFuaW1hdGVkIGJvdW5jZUluXFxcIj5cXG4gICAgPGgxPlwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5oZWFkZXIgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlYWRlciA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaGVhZGVyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDE+XFxuICAgIDxwPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYm9keSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYm9keSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiYm9keVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9wPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIk5vdGljZVZpZXdfX2J0bnNcXFwiPjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvbm90aWNlLmhic1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiICAgIDxwIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2hlbHBNZXNzYWdlXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmhlbHAgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlbHAgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImhlbHBcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvcD5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMj1cImZ1bmN0aW9uXCI7XG5cbiAgcmV0dXJuIFwiPGRpdlxcbiAgY2xhc3M9XFxcIkZvcm1Hcm91cCBGb3JtR3JvdXAtLVwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5rZXkgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwia2V5XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuICA8bGFiZWwgY2xhc3M9XFxcIkZvcm1Hcm91cF9fbGFiZWxcXFwiIGZvcj1cXFwiXCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5lZGl0b3JJZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZWRpdG9ySWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImVkaXRvcklkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9sYWJlbD5cXG4gIDxzcGFuIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2NvbnRyb2xcXFwiIGRhdGEtZWRpdG9yPjwvc3Bhbj5cXG4gIDxwIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2Vycm9yTWVzc2FnZVxcXCIgZGF0YS1lcnJvcj48L3A+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVscCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtRmllbGQuaGJzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82OF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCJcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==