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
	var views = __webpack_require__(24);
	var Layout = views.Layout;
	var ChildHolderView = views.ChildHolderView;
	templates.init();
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
	    }
	    FormView.prototype.onDestroy = function () {
	        this.fields.stopListening();
	        this.fields = null;
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
	var mdown = new Showdown.converter();
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
	    + this.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
	    + "\n";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmQ0Zjk3MjJiOTg2ZGFhODJjODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9FeGNlcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy93aGVuRmV0Y2hlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicVwiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYmFja2JvbmUvc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvTGF5b3V0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvUmVnaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvU2Nyb2xsYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlYmFycy9jb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGViYXJzL2kxOG5leHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGlja2l0L21kb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW50ZXJmYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9EaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NoaWxkSG9sZGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhY2tib25lLWZvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3BpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG93ZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZsdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybUZpZWxkLmhicyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxnRUFBZ0U7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7OztBQzNDQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxtQzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUN0RkE7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsdUM7Ozs7OztBQ3REQTtBQUNBLHVDOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsaUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDZDOzs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQzdJQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0ZBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrRDs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hELDZCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7O0FDTEEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxS0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxzQzs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esd0M7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG1DOzs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHFDOzs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx3Qzs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsdUM7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLGlCQUFpQjtBQUNyRCwwQ0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLG9DOzs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxnQzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxvQzs7Ozs7O0FDZEEsdUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esa0M7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpRDs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpQzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxxQzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG1DOzs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsaUM7Ozs7OztBQzlDQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDVkE7QUFDQSxrRUFBaUU7QUFDakU7O0FBRUEsa05BQWlOLDBCQUEwQixhQUFhO0FBQ3hQO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDTmpCO0FBQ0Esa0VBQWlFO0FBQ2pFOztBQUVBO0FBQ0EsbU5BQWtOLDRCQUE0QixhQUFhO0FBQzNQO0FBQ0EsRUFBQztBQUNEOztBQUVBLDZGQUE0RixxQkFBcUIsK0RBQStEO0FBQ2hMLHlNQUF3TSx1QkFBdUIsYUFBYTtBQUM1TztBQUNBLEVBQUMsZ0JBQWdCLEU7Ozs7OztBQ2JqQjtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBLEVBQUMsZ0JBQWdCLEU7Ozs7OztBQ0hqQjtBQUNBLGtFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLDBMQUF5TCx5QkFBeUIsYUFBYTtBQUMvTjtBQUNBLDJLQUEwSyx1QkFBdUIsYUFBYTtBQUM5TTtBQUNBLEVBQUMsZ0JBQWdCLEU7Ozs7OztBQ1RqQjtBQUNBLGtFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLDhMQUE2TCx1QkFBdUIsYUFBYTtBQUNqTztBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBLG9MQUFtTCxzQkFBc0IsYUFBYTtBQUN0TjtBQUNBLG1MQUFrTCwyQkFBMkIsYUFBYTtBQUMxTjtBQUNBLDZLQUE0Syx3QkFBd0IsYUFBYTtBQUNqTjtBQUNBLHFGQUFvRixxQkFBcUIsK0RBQStEO0FBQ3hLO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDbkJqQixpRCIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJkNGY5NzIyYjk4NmRhYTgyYzg1XG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG5leHBvcnRzLmNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL2NsaWVudCcpO1xuZnVuY3Rpb24gY29uZmlndXJlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb25maWcuY29uZmlnLmNvbmZpZ3VyZShvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29uZmlndXJlID0gY29uZmlndXJlO1xuO1xuZXhwb3J0cy5iZWhhdmlvcnMgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9pbmRleCcpO1xuTWFyaW9uZXR0ZS5CZWhhdmlvcnMuYmVoYXZpb3JzTG9va3VwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBleHBvcnRzLmJlaGF2aW9ycztcbn07XG5leHBvcnRzLmNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5kZXgnKTtcbmV4cG9ydHMuY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmV4cG9ydHMuRXhjZXB0aW9ucyA9IHJlcXVpcmUoJy4vRXhjZXB0aW9ucycpO1xuZXhwb3J0cy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzJyk7XG52YXIgX0FwaSA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQXBpJyk7XG52YXIgX0FwcCA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQXBwJyk7XG52YXIgX0Jhc2UgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Jhc2UnKTtcbnZhciBfQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9Db21wb25lbnQnKTtcbnZhciBfUm91dGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyJyk7XG52YXIgX1N0YXRpYyA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvU3RhdGljJyk7XG52YXIgY29udHJvbGxlcnM7XG4oZnVuY3Rpb24gKGNvbnRyb2xsZXJzKSB7XG4gICAgY29udHJvbGxlcnMuQXBpID0gX0FwaTtcbiAgICBjb250cm9sbGVycy5BcHAgPSBfQXBwO1xuICAgIGNvbnRyb2xsZXJzLkJhc2UgPSBfQmFzZTtcbiAgICBjb250cm9sbGVycy5Db21wb25lbnQgPSBfQ29tcG9uZW50O1xuICAgIGNvbnRyb2xsZXJzLlJvdXRlciA9IF9Sb3V0ZXI7XG4gICAgY29udHJvbGxlcnMuU3RhdGljID0gX1N0YXRpYztcbn0pKGNvbnRyb2xsZXJzID0gZXhwb3J0cy5jb250cm9sbGVycyB8fCAoZXhwb3J0cy5jb250cm9sbGVycyA9IHt9KSk7XG5leHBvcnRzLmhhbmRsZWJhcnMgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvaW5kZXgnKTtcbmV4cG9ydHMucm91dGVycyA9IHJlcXVpcmUoJy4vcm91dGVycy9pbmRleCcpO1xuZXhwb3J0cy5zdGlja2l0ID0gcmVxdWlyZSgnLi9zdGlja2l0L2luZGV4Jyk7XG5leHBvcnRzLmZsdXggPSByZXF1aXJlKCcuL2ZsdXgvaW5kZXgnKTtcbmV4cG9ydHMuRGVib3VuY2VkRG9jQ29udGFpbmVyID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvRGVib3VuY2VkRG9jQ29udGFpbmVyJyk7XG52YXIgX3doZW5GZXRjaGVkID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvd2hlbkZldGNoZWQnKTtcbmV4cG9ydHMud2hlbkZldGNoZWQgPSBfd2hlbkZldGNoZWQud2hlbkZldGNoZWQ7XG5leHBvcnRzLm5hdmlnYXRpb24gPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYXZpZ2F0aW9uJyk7XG5leHBvcnRzLnJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcmVnaXN0cnknKTtcbmV4cG9ydHMudXJsVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy91cmwnKTtcbmV4cG9ydHMucHJldmVudFNlbGVjdGlvbkNhbGxvdXQgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dCcpO1xuZXhwb3J0cy52aWV3cyA9IHJlcXVpcmUoJy4vdmlld3MvaW5kZXgnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhY2tib25lLm1hcmlvbmV0dGVcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBzeW5jID0gcmVxdWlyZSgnLi9iYWNrYm9uZS9zeW5jJyk7XG5yZXF1aXJlKCcuL21hcmlvbmV0dGUvTGF5b3V0VmlldycpO1xucmVxdWlyZSgnLi9tYXJpb25ldHRlL1JlZ2lvbicpO1xucmVxdWlyZSgnLi9tYXJpb25ldHRlL1ZpZXcnKTtcbnZhciBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgfVxuICAgIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uLnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmFwcCA9IG9wdGlvbnMuYXBwO1xuICAgICAgICB0aGlzLmhhbmRsZWJhcnMgPSBvcHRpb25zLmhhbmRsZWJhcnM7XG4gICAgICAgIHRoaXMuZGVmYXVsdFJlZ2lvbiA9IG9wdGlvbnMuZGVmYXVsdFJlZ2lvbjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUGF0aCA9IG9wdGlvbnMuY29tcG9uZW50c1BhdGg7XG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xuICAgICAgICAgICAgc3luYy5jb25maWd1cmVCYWNrYm9uZVN5bmModGhpcy5hcHApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb247XG59KSgpO1xuZXhwb3J0cy5NYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbiA9IE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uO1xuZXhwb3J0cy5jb25maWcgPSBuZXcgTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX01vZGlmaWVycyA9IHJlcXVpcmUoJy4vTW9kaWZpZXJzJyk7XG52YXIgX1Njcm9sbGFibGVzID0gcmVxdWlyZSgnLi9TY3JvbGxhYmxlcycpO1xuZXhwb3J0cy5Nb2RpZmllcnMgPSBfTW9kaWZpZXJzLk1vZGlmaWVyc0JlaGF2aW9yO1xuZXhwb3J0cy5TY3JvbGxhYmxlcyA9IF9TY3JvbGxhYmxlcy5TY3JvbGxhYmxlc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX0FsZXJ0ID0gcmVxdWlyZSgnLi9hbGVydC9BbGVydCcpO1xudmFyIF9Mb2FkaW5nID0gcmVxdWlyZSgnLi9Mb2FkaW5nQ29tcG9uZW50L0xvYWRpbmdDb250cm9sbGVyJyk7XG5leHBvcnRzLkFsZXJ0ID0gX0FsZXJ0LkFsZXJ0Q29tcG9uZW50O1xuZXhwb3J0cy5BbmltYXRlZFJlZ2lvbiA9IHJlcXVpcmUoJy4vQW5pbWF0ZWRSZWdpb24vQW5pbWF0ZWRSZWdpb24nKTtcbmV4cG9ydHMuQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24vQnV0dG9uJyk7XG5leHBvcnRzLkZvcm1WaWV3ID0gcmVxdWlyZSgnLi9Gb3JtVmlldy9Gb3JtVmlldycpO1xuZXhwb3J0cy5TcGlubmVyVmlldyA9IHJlcXVpcmUoJy4vU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcnKTtcbmV4cG9ydHMuTG9hZGluZyA9IF9Mb2FkaW5nLkxvYWRpbmdDb250cm9sbGVyO1xuZXhwb3J0cy5Ob3RpY2VWaWV3ID0gcmVxdWlyZSgnLi9Ob3RpY2VWaWV3L05vdGljZVZpZXcnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIFN0cmluZ0NvbnN0YW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHJpbmdDb25zdGFudCh2YWwpIHtcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XG4gICAgfVxuICAgIFN0cmluZ0NvbnN0YW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsO1xuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSA9PT0gdmFsdWU7XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5hbGxDb25zdGFudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGFsbCA9IFtdO1xuICAgICAgICBfLmVhY2goXy5rZXlzKHRoaXMpLCBmdW5jdGlvbiAocHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICh0W3Byb3BlcnR5S2V5XSBpbnN0YW5jZW9mIHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RhbnQgPSB0W3Byb3BlcnR5S2V5XTtcbiAgICAgICAgICAgICAgICBhbGwucHVzaChjb25zdGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQuZnJvbUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuYWxsQ29uc3RhbnRzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYWxsW2ldLm1hdGNoZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LmZyb21WYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuYWxsQ29uc3RhbnRzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYWxsW2ldLm1hdGNoZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdHJpbmdDb25zdGFudDtcbn0pKCk7XG5leHBvcnRzLlN0cmluZ0NvbnN0YW50ID0gU3RyaW5nQ29uc3RhbnQ7XG52YXIgRVZFTlRfVFlQRVMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFVkVOVF9UWVBFUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFVkVOVF9UWVBFUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEVWRU5UX1RZUEVTLkNoYW5nZSA9IG5ldyBFVkVOVF9UWVBFUygnQ2hhbmdlJyk7XG4gICAgcmV0dXJuIEVWRU5UX1RZUEVTO1xufSkoU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5FVkVOVF9UWVBFUyA9IEVWRU5UX1RZUEVTO1xudmFyIEFDVElPTl9TT1VSQ0VTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQUNUSU9OX1NPVVJDRVMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQUNUSU9OX1NPVVJDRVMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBQ1RJT05fU09VUkNFUy5TZXJ2ZXJBY3Rpb24gPSBuZXcgQUNUSU9OX1NPVVJDRVMoJ1NlcnZlckFjdGlvbicpO1xuICAgIEFDVElPTl9TT1VSQ0VTLlZpZXdBY3Rpb24gPSBuZXcgQUNUSU9OX1NPVVJDRVMoJ1ZpZXdBY3Rpb24nKTtcbiAgICBBQ1RJT05fU09VUkNFUy5EZXZpY2VBY3Rpb24gPSBuZXcgQUNUSU9OX1NPVVJDRVMoJ0RldmljZUFjdGlvbicpO1xuICAgIHJldHVybiBBQ1RJT05fU09VUkNFUztcbn0pKFN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQUNUSU9OX1NPVVJDRVMgPSBBQ1RJT05fU09VUkNFUztcbnZhciBET0NfU1RBVFVTRVMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhET0NfU1RBVFVTRVMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRE9DX1NUQVRVU0VTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgRE9DX1NUQVRVU0VTLmVtcHR5ID0gbmV3IERPQ19TVEFUVVNFUygnZW1wdHknKTtcbiAgICBET0NfU1RBVFVTRVMuZmV0Y2hpbmdGcm9tU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnZmV0Y2hpbmdGcm9tU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmZldGNoaW5nTG9jYWwgPSBuZXcgRE9DX1NUQVRVU0VTKCdmZXRjaGluZ0xvY2FsJyk7XG4gICAgRE9DX1NUQVRVU0VTLmZldGNoZWQgPSBuZXcgRE9DX1NUQVRVU0VTKCdmZXRjaGVkJyk7XG4gICAgRE9DX1NUQVRVU0VTLmNyZWF0aW5nT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdjcmVhdGluZ09uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLnVwZGF0aW5nT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCd1cGRhdGluZ09uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0aW5nT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGluZ09uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0ZWRPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0ZWRPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGVkTG9jYWwgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGVkTG9jYWwnKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRlZCA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0ZWQnKTtcbiAgICByZXR1cm4gRE9DX1NUQVRVU0VTO1xufSkoU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5ET0NfU1RBVFVTRVMgPSBET0NfU1RBVFVTRVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25zdGFudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBFeGNlcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV4Y2VwdGlvbihlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIGNvbnNvbGUud2FybignRVhDRVBUSU9OJywgdGhpcyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24ucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24ucHJvdG90eXBlLCBcIm1lc3NhZ2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24ucHJvdG90eXBlLCBcInN0YWNrXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvci5zdGFjaztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRXhjZXB0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICc6ICcgKyB0aGlzLm1lc3NhZ2U7XG4gICAgfTtcbiAgICByZXR1cm4gRXhjZXB0aW9uO1xufSkoKTtcbmV4cG9ydHMuRXhjZXB0aW9uID0gRXhjZXB0aW9uO1xudmFyIERvY3VtZW50RXhpc3RzRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gRG9jdW1lbnRFeGlzdHNFeGNlcHRpb247XG59KShFeGNlcHRpb24pO1xuZXhwb3J0cy5Eb2N1bWVudEV4aXN0c0V4Y2VwdGlvbiA9IERvY3VtZW50RXhpc3RzRXhjZXB0aW9uO1xudmFyIE5vdEltcGxlbWVudGVkRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90SW1wbGVtZW50ZWRFeGNlcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gTm90SW1wbGVtZW50ZWRFeGNlcHRpb247XG59KShFeGNlcHRpb24pO1xuZXhwb3J0cy5Ob3RJbXBsZW1lbnRlZEV4Y2VwdGlvbiA9IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXhjZXB0aW9ucy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL0V4Y2VwdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcmZhY2VzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW50ZXJmYWNlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgQXBpQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwaUNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBpQ29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBBcGlDb250cm9sbGVyO1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5BcGlDb250cm9sbGVyID0gQXBpQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwaS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0FwaS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2UnKTtcbnZhciBjbGllbnRDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY2xpZW50Jyk7XG52YXIgQXBwQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwcENvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX21hbmFnZWRSZWdpb25zID0gW107XG4gICAgICAgIHRoaXMucmVnaW9uID0gdGhpcy5yZWdpb24gfHwgb3B0aW9ucy5yZWdpb24gfHwgY2xpZW50Q29uZmlnLmNvbmZpZy5kZWZhdWx0UmVnaW9uO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoY29udHJvbGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICBvcHRpb25zLm1vbml0b3JSZWFkeVN0YXRlID0gY29udHJvbGxlci5nZXRPcHRpb24oJ21vbml0b3JSZWFkeVN0YXRlJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3coY29udHJvbGxlci5nZXRNYWluVmlldygpLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodmlldywgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICAgICAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVnaW9uOiB0aGlzLnJlZ2lvblxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIHZpZXcgaW5zdGFuY2UgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNYWluVmlldyh2aWV3KTtcbiAgICAgICAgdGhpcy5fbWFuYWdlVmlldyh2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXc6IHZpZXcsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNYWluVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5WaWV3O1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuc2V0TWFpblZpZXcgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICBpZiAodGhpcy5fbWFpblZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYWluVmlldyA9IHZpZXc7XG4gICAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5Ubyh2aWV3LCBcImRlc3Ryb3lcIiwgdGhpcy5kZXN0cm95KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUubWFuYWdlUmVnaW9uID0gZnVuY3Rpb24gKHJlZ2lvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYWdlZFJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuX21hbmFnZVZpZXcgPSBmdW5jdGlvbiAodmlldywgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5sb2FkaW5nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9hZGluZyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLmxvYWRpbmcsIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nSGVhZGVyOiBfLnJlc3VsdCh0aGlzLCAnbG9hZGluZ0hlYWRlcicpLFxuICAgICAgICAgICAgICAgIGxvYWRpbmdCb2R5OiBfLnJlc3VsdCh0aGlzLCAnbG9hZGluZ0JvZHknKSxcbiAgICAgICAgICAgICAgICBtb25pdG9yUmVhZHlTdGF0ZTogb3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjbGllbnRDb25maWcuY29uZmlnLmFwcC5leGVjdXRlKFwic2hvdzpsb2FkaW5nXCIsIHZpZXcsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5yZWdpb24uc2hvdyh2aWV3LCBvcHRpb25zLmltbWVkaWF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF8uaW52b2tlKHRoaXMuX21hbmFnZWRSZWdpb25zLCAnYW5pbWF0ZUVtcHR5Jyk7XG4gICAgICAgIHRoaXMuX21hbmFnZWRSZWdpb25zID0gbnVsbDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwQ29udHJvbGxlcjtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuQXBwQ29udHJvbGxlciA9IEFwcENvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9BcHAuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciByZWdpc3RyeSA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yZWdpc3RyeScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgQmFzZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYXNlQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCYXNlQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlX2lkID0gXy51bmlxdWVJZCgnY29udHJvbGxlcicpO1xuICAgICAgICByZWdpc3RyeS5yZWdpc3Rlcih0aGlzLCB0aGlzLl9pbnN0YW5jZV9pZCk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBCYXNlQ29udHJvbGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXN0cm95aW5nXCIsIHRoaXMpO1xuICAgICAgICByZWdpc3RyeS51bnJlZ2lzdGVyKHRoaXMsIHRoaXMuX2luc3RhbmNlX2lkKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBCYXNlQ29udHJvbGxlci5wcm90b3R5cGUucHJveHlFdmVudHMgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIHByZWZpeCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlblRvKGluc3RhbmNlLCBcImFsbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgcm9vdEV2ZW50ID0gYXJnc1swXTtcbiAgICAgICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICBhcmdzWzBdID0gcHJlZml4ICsgXCI6XCIgKyByb290RXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAgICAgTWFyaW9uZXR0ZS50cmlnZ2VyTWV0aG9kLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFzZUNvbnRyb2xsZXI7XG59KShNYXJpb25ldHRlLkNvbnRyb2xsZXIpO1xuZXhwb3J0cy5CYXNlQ29udHJvbGxlciA9IEJhc2VDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0Jhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQXBwJyk7XG52YXIgQ29tcG9uZW50Q29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbXBvbmVudENvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50Q29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIENvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodmlldywgb3B0aW9ucykge1xuICAgICAgICBpZiAoIShvcHRpb25zLnJlZ2lvbiAmJiB0aGlzLl9tYWluVmlldykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHNob3VsZCBub3QgQHNob3cgdGhlIG1haW4gdmlldywgdXNlIEBzZXRNYWluVmlldyB3aXRoIGNvbXBvbmVudHMgYW5kIEBzaG93IGZyb20gdGhlIGFwcHMgY29udHJvbGxlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNob3cuY2FsbCh0aGlzLCB2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbXBvbmVudENvbnRyb2xsZXI7XG59KShBcHBDb250cm9sbGVyLkFwcENvbnRyb2xsZXIpO1xuZXhwb3J0cy5Db21wb25lbnRDb250cm9sbGVyID0gQ29tcG9uZW50Q29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbXBvbmVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0NvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgUm91dGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJvdXRlckNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUm91dGVyQ29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5hY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR1cEFjdGlvbnMob3B0aW9ucy5hY3Rpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuYXV0aG9yaXplQW5BY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRBY3Rpb25Qb2xpY3koYWN0aW9uQ29uZmlnKS5pc0F1dGhvcml6ZWQoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGlvblVuYXV0aG9yaXplZCA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIlwiICsgYWN0aW9uTmFtZSArIFwiIHdhcyB1bmF1dGhvcml6ZWRcIik7XG4gICAgICAgIGVyci5uYW1lID0gJ0FjdGlvblVuYXV0aG9yaXplZCc7XG4gICAgICAgIGVyci5hY3Rpb25OYW1lID0gYWN0aW9uTmFtZTtcbiAgICAgICAgZXJyLmFjdGlvbkNvbmZpZyA9IGFjdGlvbkNvbmZpZztcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuY2FsbEFjdGlvblVuYXV0aG9yaXplZCA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcudW5hdXRob3JpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZy51bmF1dGhvcml6ZWQuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9uKCdhY3Rpb25VbmF1dGhvcml6ZWQnKS5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmRlZmF1bHRQb2xpY3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQWN0aW9uUG9saWN5KCk7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fc2V0dXBBY3Rpb25zID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgXy5lYWNoKGFjdGlvbnMsIGZ1bmN0aW9uIChjb25maWcsIGtleSkge1xuICAgICAgICAgICAgX3RoaXMuYWRkQWN0aW9uKGtleSwgY29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uQ29uZmlnID0gZnVuY3Rpb24gKGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoYWN0aW9uQ29uZmlnID09IG51bGwpIHtcbiAgICAgICAgICAgIGFjdGlvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWN0aW9uQ29uZmlnRnJvbUZuKGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uQ29uZmlnRnJvbUZuID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmbjogZm5cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25GdW5jdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25Db25maWcuZm47XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uUG9saWN5ID0gZnVuY3Rpb24gKGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZykgfHwgIWFjdGlvbkNvbmZpZy5wb2xpY3kpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9saWN5ID0gdGhpcy5nZXRPcHRpb24oJ2RlZmF1bHRQb2xpY3knKTtcbiAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oZGVmYXVsdFBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFBvbGljeS5jYWxsKHRoaXMsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFBvbGljeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWcucG9saWN5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhdHRhY2hlciA9IHRoaXM7XG4gICAgICAgIGFjdGlvbkNvbmZpZyA9IHRoaXMuX2dldEFjdGlvbkNvbmZpZyhhY3Rpb25Db25maWcpO1xuICAgICAgICB2YXIgX2ZuID0gdGhpcy5fZ2V0QWN0aW9uRnVuY3Rpb24oYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihfZm4pKSB7XG4gICAgICAgICAgICBhdHRhY2hlclthY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZ2V0T3B0aW9uKCdhdXRob3JpemVBbkFjdGlvbicpLmNhbGwoX3RoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZm4uYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0FjdGlvblVuYXV0aG9yaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25Db25maWcuaW50ZXJuYWxBY3Rpb25FcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYWxsQWN0aW9uVW5hdXRob3JpemVkKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxBY3Rpb25VbmF1dGhvcml6ZWQoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm94eWluZyB0aHJvdWdoIGFuIGF1dGhvcml6ZSBtZXRob2QgcmVxdWlyZXMgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUm91dGVyQ29udHJvbGxlcjtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuUm91dGVyQ29udHJvbGxlciA9IFJvdXRlckNvbnRyb2xsZXI7XG52YXIgQWN0aW9uUG9saWN5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWN0aW9uUG9saWN5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjdGlvblBvbGljeShvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBBY3Rpb25Qb2xpY3kucHJvdG90eXBlLmlzQXV0aG9yaXplZCA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0F1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNBdXRob3JpemVkLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uUG9saWN5O1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5BY3Rpb25Qb2xpY3kgPSBBY3Rpb25Qb2xpY3k7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3V0ZXJDb250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvUm91dGVyQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBTdGF0aWNDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0aWNDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy50YWdOYW1lID0gJ3NlY3Rpb24nO1xuICAgICAgICB0aGlzLmNsb25lQ29udGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIH1cbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5hdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuY29udGV4dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRlbXBsYXRlRm4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudGVtcGxhdGVGbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGVtcGxhdGUgbm90IGltcGxlbWVudGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmNsYXNzTmFtZSA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIGlmIChoYXNoID09PSB2b2lkIDApIHsgaGFzaCA9IHt9OyB9XG4gICAgICAgIHZhciBjbGFzc2VzO1xuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgbXVzdCBzcGVjaWZ5IGEgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNoW1wiY2xhc3NcIl0pIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBoYXNoW1wiY2xhc3NcIl0uc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IF8ucmVzdWx0KHRoaXMsICdhdHRyaWJ1dGVzJyk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXNbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IF8udW5pb24oY2xhc3NlcywgYXR0cmlidXRlc1tcImNsYXNzXCJdLnNwbGl0KCcgJykpO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsb25lQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBfLmNsb25lKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX2NvbXBvbmVudE5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5fcmVnaW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0Ll9yZWdpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUubWl4aW5IYXNoID0gZnVuY3Rpb24gKGNvbnRleHQsIGhhc2gpIHtcbiAgICAgICAgaWYgKGhhc2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFzaCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0UHJvcHMgPSBfLnJlc3VsdCh0aGlzLCAnY29udGV4dFByb3BlcnRpZXMnKTtcbiAgICAgICAgaWYgKF8uaXNPYmplY3QoY29udGV4dFByb3BzKSkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5S2V5cyA9IF8ua2V5cyhjb250ZXh0UHJvcHMpO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBfLnBpY2soaGFzaCwgcHJvcGVydHlLZXlzKTtcbiAgICAgICAgICAgIHJldHVybiBfLmV4dGVuZChjb250ZXh0LCBjb250ZXh0UHJvcHMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnRUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gdGVtcGxhdGUgb24gdGhpcyBzdGF0aWMgY29udHJvbGxlcicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXMoaGFzaCk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gXy5vbWl0KGF0dHJpYnV0ZXMsICdjbGFzcycpO1xuICAgICAgICAgICAgdmFyIGF0dHIgPSBfLm1hcChhdHRyaWJ1dGVzIHx8IHt9LCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pc1N0cmluZyhoYXNoW2tleV0gfHwgXy5pc0Zpbml0ZShoYXNoW2tleV0pKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGtleSArIFwiPVxcXCJcIiArIGhhc2hba2V5XSArIFwiXFxcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsga2V5ICsgXCI9XFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXR0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyAnICsgYXR0ci5qb2luKCcgJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldElubmVyQm9keSA9IGZ1bmN0aW9uIChjb250ZXh0LCBmbikge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5taXhpbkhhc2godGhpcy5jb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUob3B0aW9ucy5oYXNoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0Ll9fYm9keV9fID0gdGhpcy5nZXRJbm5lckJvZHkodGhpcy5nZXRDaGlsZENvbnRleHQoKSwgb3B0aW9ucy5mbik7XG4gICAgICAgIHRoaXMuY29udGV4dC5hdHRyaWJ1dGVzID0gdGhpcy5nZXRBdHRyaWJ1dGVzKG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlck91dGVySHRtbCh0aGlzLmNvbnRleHQsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb250ZXh0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuY29udGV4dC5hdHRyaWJ1dGVzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyT3V0ZXJIdG1sID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcztcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBfLnJlc3VsdCh0aGlzLCAndGFnTmFtZScpO1xuICAgICAgICByZXR1cm4gW1wiPFwiICsgdGFnTmFtZSwgYXR0cmlidXRlcywgXCIgY2xhc3M9XFxcIlwiICsgY2xhc3NOYW1lICsgXCJcXFwiXCIsIFwiPlxcblwiLCB0aGlzLnJlbmRlckNvbnRlbnRUZW1wbGF0ZShjb250ZXh0KSwgXCI8L1wiICsgdGFnTmFtZSArIFwiPlwiXS5qb2luKCcnKTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlckNvbnRlbnRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHZhciB0bXBsID0gdGhpcy5nZXRDb21wb25lbnRUZW1wbGF0ZSgpO1xuICAgICAgICByZXR1cm4gdG1wbChjb250ZXh0KTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuU3RhdGljQ29udHJvbGxlciA9IFN0YXRpY0NvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0aWMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5jb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzJyk7XG5leHBvcnRzLmkxOG5leHQgPSByZXF1aXJlKCcuL2kxOG5leHQnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaGFuZGxlYmFycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLkFwcCA9IHJlcXVpcmUoJy4vQXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5tZG93biA9IHJlcXVpcmUoJy4vbWRvd24nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RpY2tpdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcbmV4cG9ydHMuaW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4vaW50ZXJmYWNlcycpO1xuZXhwb3J0cy5EaXNwYXRjaGVyID0gcmVxdWlyZSgnLi9EaXNwYXRjaGVyJyk7XG5leHBvcnRzLlN0b3JlID0gcmVxdWlyZSgnLi9TdG9yZScpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEV4Y2VwdGlvbnMgPSByZXF1aXJlKCcuLi9FeGNlcHRpb25zJyk7XG52YXIgRGVib3VuY2VkRG9jQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZWREb2NDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuZG9jcyA9IFtdO1xuICAgICAgICB0aGlzLmRvY1RpbWVUb0xpdmUgPSAxMDAwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvY3MubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmNsZWFyRXhwaXJlZERvY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfTtcbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmNsZWFyQWxsRG9jcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kb2NzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdXRzIGEgZG9jdW1lbnQgaW4gdG8gdGhlIGFycmF5IGlmIGl0IGlzIG5vdCB0aGVyZVxuICAgICAqIEBwYXJhbSBkb2NcbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJ5SWQoZG9jLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5kb2NzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2MsXG4gICAgICAgICAgICAgICAgZXhwaXJlczogdGhpcy5kb2NUaW1lVG9MaXZlID8gRGF0ZS5ub3coKSArIHRoaXMuZG9jVGltZVRvTGl2ZSA6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbnMuRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24obmV3IEVycm9yKCdEb2N1bWVudCAnICsgZG9jLmlkICsgJyBhbHJlYWR5IGV4aXN0cycpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBlbnRyeSB3aXRoIGRldGFpbHMgYWJvdXQgdGhlIGRvYyB3aXRoIGFuIGlkXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5lbnRyeUJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfLmZpbmRXaGVyZSh0aGlzLmRvY3MsIHsgaWQ6IGlkIH0pO1xuICAgICAgICBpZiAoaXRlbSlcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFsbCB0aGUgZG9jc1xuICAgICAqIEByZXR1cm5zIHtJRGVib3VuY2VkRG9jSXRlbTxUPltdfVxuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2NzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5kb2M7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzYXZlZCBkb2N1bWVudCBieSBpdHMgaWRcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJucyB7VH1cbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfLmZpbmRXaGVyZSh0aGlzLmRvY3MsIHsgaWQ6IGlkIH0pO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZG9jO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBkb2MgaW4gdG8gdGhlIHN0b3JlLCBpZiBpdCBleGlzdHNcbiAgICAgKiBvdGhlcndpc2UgYWRkcyBpdFxuICAgICAqIEBwYXJhbSBkb2NcbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLm1lcmdlRG9jID0gZnVuY3Rpb24gKGRvYykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWRvYy5pZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWVyZ2VEb2MgZG9jdW1lbnQgbXVzdCBoYXZlIGEgdmFsaWQgaWQnKTtcbiAgICAgICAgdmFyIGtleXMgPSBfLmtleXMoZG9jKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5lbnRyeUJ5SWQoZG9jLmlkKTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdEb2MgPSBlbnRyeS5kb2M7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgIF8uZWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm1lcmdlRG9jS2V5KGtleSwgZXhpc3RpbmdEb2MsIGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVyZ2VkOiBjaGFuZ2VkUHJvcGVydGllcy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBjaGFuZ2VkUHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICBkb2M6IGV4aXN0aW5nRG9jXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXQoZG9jKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVyZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllczoga2V5cyxcbiAgICAgICAgICAgICAgICBkb2M6IGRvY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZURvY0tleSA9IGZ1bmN0aW9uIChrZXksIGV4aXN0aW5nRG9jLCBkb2MpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZG9jW2tleV07XG4gICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nRG9jW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdEb2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLm1lcmdlTXVsdGlwbGUgPSBmdW5jdGlvbiAoZG9jcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbWVyZ2VzID0gZG9jcy5tYXAoZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm1lcmdlRG9jKGRvYyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVyZ2VzO1xuICAgIH07XG4gICAgcmV0dXJuIERlYm91bmNlZERvY0NvbnRhaW5lcjtcbn0pKCk7XG5leHBvcnRzLkRlYm91bmNlZERvY0NvbnRhaW5lciA9IERlYm91bmNlZERvY0NvbnRhaW5lcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlYm91bmNlZERvY0NvbnRhaW5lci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIFEgPSByZXF1aXJlKCdxJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmZ1bmN0aW9uIHdoZW5GZXRjaGVkKGVudGl0aWVzLCBjYWxsYmFjaykge1xuICAgIHZhciBwcm9taXNlcyA9IF8uY2hhaW4oW2VudGl0aWVzXSkuZmxhdHRlbigpLnBsdWNrKFwiX2ZldGNoXCIpLmNvbXBhY3QoKS52YWx1ZSgpO1xuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFEuYWxsKHByb21pc2VzKS5kb25lKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2hlbkZldGNoZWQnLCByZXN1bHRzKTtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5mYWlsZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGVuRmV0Y2hlZCcsIGVudGl0aWVzKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3RoaW5nIGlzIGJlaW5nIGZldGNoZWQnKTtcbiAgICB9XG59XG5leHBvcnRzLndoZW5GZXRjaGVkID0gd2hlbkZldGNoZWQ7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aGVuRmV0Y2hlZC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy93aGVuRmV0Y2hlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL05hdmlnYXRpb25Db250cm9sbGVyJyk7XG52YXIgbmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uQ29udHJvbGxlci5OYXZpZ2F0aW9uQ29udHJvbGxlcigpO1xubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9uYXZpZ2F0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZXhwb3J0cy5fcmVnaXN0cnkgPSB7fTtcbmZ1bmN0aW9uIHJlZ2lzdGVyKGluc3RhbmNlLCBpZCkge1xuICAgIGV4cG9ydHMuX3JlZ2lzdHJ5W2lkXSA9IGluc3RhbmNlO1xufVxuZXhwb3J0cy5yZWdpc3RlciA9IHJlZ2lzdGVyO1xuZnVuY3Rpb24gdW5yZWdpc3RlcihpbnN0YW5jZSwgaWQpIHtcbiAgICBkZWxldGUgZXhwb3J0cy5fcmVnaXN0cnlbaWRdO1xufVxuZXhwb3J0cy51bnJlZ2lzdGVyID0gdW5yZWdpc3RlcjtcbmZ1bmN0aW9uIHJlc2V0UmVnaXN0cnkoKSB7XG4gICAgdmFyIG9sZENvdW50ID0gZ2V0UmVnaXN0cnlTaXplKCk7XG4gICAgdmFyIGNvbnRyb2xsZXI7XG4gICAgZm9yICh2YXIga2V5IGluIGV4cG9ydHMuX3JlZ2lzdHJ5KSB7XG4gICAgICAgIGNvbnRyb2xsZXIgPSBleHBvcnRzLl9yZWdpc3RyeVtrZXldO1xuICAgICAgICBjb250cm9sbGVyLnJlZ2lvbi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHZhciByZXQgPSB7XG4gICAgICAgIGNvdW50OiBnZXRSZWdpc3RyeVNpemUoKSxcbiAgICAgICAgcHJldmlvdXM6IG9sZENvdW50LFxuICAgICAgICBtc2c6IFwiVGhlcmUgd2VyZSBcIiArIG9sZENvdW50ICsgXCIgY29udHJvbGxlcnMgaW4gdGhlIHJlZ2lzdHJ5LCB0aGVyZSBhcmUgbm93IFwiICsgKHRoaXMuZ2V0UmVnaXN0cnlTaXplKCkpXG4gICAgfTtcbiAgICBjb25zb2xlLmluZm8oJ1JlZ2lzdHJ5IHJlc2V0JywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xufVxuZXhwb3J0cy5yZXNldFJlZ2lzdHJ5ID0gcmVzZXRSZWdpc3RyeTtcbmZ1bmN0aW9uIGdldFJlZ2lzdHJ5U2l6ZSgpIHtcbiAgICByZXR1cm4gXy5zaXplKGV4cG9ydHMuX3JlZ2lzdHJ5KTtcbn1cbmV4cG9ydHMuZ2V0UmVnaXN0cnlTaXplID0gZ2V0UmVnaXN0cnlTaXplO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVnaXN0cnkuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvcmVnaXN0cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vdHlwaW5ncy90c2QuZC50cycgLz5cbid1c2Ugc3RyaWN0JztcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuLyoqXG4gKiBFeHRyYWN0IGEgcXVlcnkgc3RyaW5nIHZhbHVlXG4gKiBAcGFyYW0gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ga2V5XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2V0UXVlcnkoc2VhcmNoU3RyaW5nLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVzID0gc2VhcmNoU3RyaW5nLnNwbGl0KFwiJlwiKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBmdCA9IHZhbHVlc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICAgIGlmIChmdFswXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZnRbMV07XG4gICAgICAgIH1cbiAgICAgICAgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydHMuZ2V0UXVlcnkgPSBnZXRRdWVyeTtcbi8qKlxuICogRXh0cmFjdCB0aGUgc2VhcmNoU3RyaW5nIHF1ZXJ5IHN0cmluZyB2YWx1ZXMgZnJvbSBhIHVybFxuICogQHBhcmFtIHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2VhcmNoU3RyaW5nKHVybCkge1xuICAgIGlmICgvXFwjLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG4gICAgfVxuICAgIGlmICgvXFw/Ly50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgnPycpWzFdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nO1xuLyoqXG4gKiBHZXQgdGhlIGNvcnJlY3Qgc2VwYXJhdG9yIGZvciBhIHVybCBhbmQgYSBxdWVyeSBzdHJpbmdcbiAqIEBwYXJhbSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNlcGFyYXRvcih1cmwpIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICAgIGlmICgvXFw/Ly50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJz8nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG4vKipcbiAqIEpvaW5zIHVybCBxdWVyeSBzdHJpbmcgdmFsdWVzXG4gKiBAcGFyYW0gdXJsc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gam9pbigpIHtcbiAgICB2YXIgdXJscyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHVybHNbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBfbWVyZ2UgPSBmdW5jdGlvbiAobWVtbywgdmFsKSB7XG4gICAgICAgIHJldHVybiBtZW1vICsgKHNlcGFyYXRvcihtZW1vKSkgKyB2YWw7XG4gICAgfTtcbiAgICByZXR1cm4gXy5yZWR1Y2UodXJscywgX21lcmdlKTtcbn1cbmV4cG9ydHMuam9pbiA9IGpvaW47XG4vKipcbiAqIEpvaW4gdXJsIHBhdGhzXG4gKiBAcGFyYW0gdXJsc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gam9pblBhdGhzKCkge1xuICAgIHZhciB1cmxzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdXJsc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIF9tZXJnZSA9IGZ1bmN0aW9uIChtZW1vLCB2YWwpIHtcbiAgICAgICAgcmV0dXJuIG1lbW8gKyAnLycgKyB2YWw7XG4gICAgfTtcbiAgICByZXR1cm4gXy5yZWR1Y2UodXJscywgX21lcmdlKTtcbn1cbmV4cG9ydHMuam9pblBhdGhzID0gam9pblBhdGhzO1xuZnVuY3Rpb24gcGFyYW0ob2JqLCBzZXBhcmF0b3IsIGpvaW5lcikge1xuICAgIGlmIChzZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBzZXBhcmF0b3IgPSAnJic7IH1cbiAgICBpZiAoam9pbmVyID09PSB2b2lkIDApIHsgam9pbmVyID0gJz0nOyB9XG4gICAgZnVuY3Rpb24gX3BhcmFtKG1lbW8sIHZhbCwga2V5KSB7XG4gICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZSA9IG1lbW8gPyBtZW1vICsgc2VwYXJhdG9yIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gcHJlICsga2V5ICsgam9pbmVyICsgdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfLnJlZHVjZShvYmosIF9wYXJhbSwgJycpO1xufVxuZXhwb3J0cy5wYXJhbSA9IHBhcmFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3VybC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiBwcmV2ZW50R2xvYmFsbHkoKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICAgIHN0eWxlLndlYmtpdFRvdWNoQ2FsbG91dCA9IFwibm9uZVwiO1xuICAgIHN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbn1cbmV4cG9ydHMucHJldmVudEdsb2JhbGx5ID0gcHJldmVudEdsb2JhbGx5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJldmVudFNlbGVjdGlvbkNhbGxvdXQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvcHJldmVudFNlbGVjdGlvbkNhbGxvdXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5DaGlsZEhvbGRlclZpZXcgPSByZXF1aXJlKCcuL0NoaWxkSG9sZGVyVmlldycpO1xuZXhwb3J0cy5WaWV3ID0gcmVxdWlyZSgnLi9WaWV3Jyk7XG5leHBvcnRzLkl0ZW1WaWV3ID0gcmVxdWlyZSgnLi9JdGVtVmlldycpO1xuZXhwb3J0cy5MYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xuZXhwb3J0cy5MaXN0ID0gcmVxdWlyZSgnLi9MaXN0Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCJcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI2X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInFcIlxuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZnVuY3Rpb24gY29uZmlndXJlQmFja2JvbmVTeW5jKGFwcCkge1xuICAgIHZhciBfc3luYyA9IEJhY2tib25lLnN5bmM7XG4gICAgQmFja2JvbmUuc3luYyA9IGZ1bmN0aW9uIChtZXRob2QsIGVudGl0eSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IF8uYmluZChiZWZvcmVTZW5kLCBlbnRpdHkpLFxuICAgICAgICAgICAgY29tcGxldGU6IF8uYmluZChjb21wbGV0ZSwgZW50aXR5KVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFlbnRpdHkuX2ZldGNoICYmIG1ldGhvZCA9PT0gXCJyZWFkXCIpIHtcbiAgICAgICAgICAgIGFkZEZldGNoUHJvbWlzZShlbnRpdHksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3luYyhtZXRob2QsIGVudGl0eSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBiZWZvcmVTZW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKFwic3luYzpzdGFydFwiLCB0aGlzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoXCJzeW5jOnN0b3BcIiwgdGhpcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEZldGNoUHJvbWlzZShlbnRpdHksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGQgPSAkLkRlZmVycmVkKCk7XG4gICAgICAgIGVudGl0eS5fZmV0Y2ggPSBkLnByb21pc2UoKTtcbiAgICAgICAgdmFyIF9zdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuICAgICAgICB2YXIgX2Vycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3AsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICBfc3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHN0YXR1czogeGhyID8geGhyLnN0YXR1cyA6IDAsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbiAocmVzcCwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcignZXJyb3I6b2ZmbGluZScpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOm9mZmxpbmUnLCBlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoXy5jb250YWlucyhbNDAxLCA0MDNdLCByZXNwLnN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcigndW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICAgICAgICAgYXBwLnZlbnQudHJpZ2dlcignZmV0Y2g6dW5hdXRob3Jpc2VkJywgZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguZmxvb3IocmVzcC5zdGF0dXMgLyAxMDApID09PSA1KSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ2Vycm9yOnNlcnZlcicpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOmVycm9yOnNlcnZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBkLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBmYWlsZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuY29uZmlndXJlQmFja2JvbmVTeW5jID0gY29uZmlndXJlQmFja2JvbmVTeW5jO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3luYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9iYWNrYm9uZS9zeW5jLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExheW91dFZpZXcgPSBNYXJpb25ldHRlLkxheW91dFZpZXc7XG4vKlxuICBfYnVpbGRSZWdpb25zXG4gIC0tLS0tLS0tLS0tLS1cbiAgV2UgbmVlZCB0byBlbnN1cmUgdGhhdCB0aGVyZSBpcyBhbiBlbGVtZW50IG9uIHRoZVxuICBMYXlvdXRWaWV3IHNvIHRoYXQgZ2V0RWwgcmVsYXRpdmUgdG8gdGhlIHBhcmVudEVsXG4gIHdvcmtzIHByb3Blcmx5XG4gKi9cbnZhciBfYnVpbGRSZWdpb25zID0gTGF5b3V0Vmlldy5wcm90b3R5cGUuX2J1aWxkUmVnaW9ucztcbkxheW91dFZpZXcucHJvdG90eXBlLl9idWlsZFJlZ2lvbnMgPSBmdW5jdGlvbiAocmVnaW9ucykge1xuICAgIHRoaXMuX2Vuc3VyZUVsZW1lbnQoKTtcbiAgICByZXR1cm4gX2J1aWxkUmVnaW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvTGF5b3V0Vmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgQmFja2JvbmUsIE1hcmlvbmV0dGUsIF8sIF9jbG9zZSwgX2dldEVsLCBfZ2V0TmFtZSwgX3Nob3c7XG5cbl8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcblxuTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcblxuXG4vKlxuICBBbmltYXRlIE91dFxuICAtLS0tLS0tLS0tLVxuICBBbmltYXRlIG91dCB0aGUgb2xkIHZpZXcgYmVmb3JlIGJlaW5nIHJlYWR5IHRvIHNob3dcbiAgdGhlIG5leHRcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNiKSB7XG4gIGlmICh0aGlzLmN1cnJlbnRWaWV3ICYmIHRoaXMuY3VycmVudFZpZXcuYW5pbWF0ZU91dCkge1xuICAgIGNvbnNvbGUubG9nKCdhbmltYXRpbmcgb3V0JywgdGhpcy5jdXJyZW50VmlldywgdGhpcy5lbCk7XG4gICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdiZWZvcmU6YW5pbWF0aW5nOm91dCcpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQoY2IpO1xuICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgfVxufTtcblxuXG4vKlxuICBBbmltYXRlZCBFbXB0eVxuICAtLS0tLVxuICBVc2UgYW5pbWF0aW9uIHdoZW4gZW1wdHlpbmcgdGhlIHJlZ2lvbiBpZiBpdFxuICBpcyBhdmFpbGFibGVcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZUVtcHR5ID0gZnVuY3Rpb24ob3B0aW9ucywgY2IpIHtcbiAgcmV0dXJuIHRoaXMuYW5pbWF0ZU91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5lbXB0eSgpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwoX3RoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKHRoaXMpKTtcbn07XG5cblxuLypcbiAgZ2V0RWxcbiAgLS0tLS1cbiAgVXBkYXRlIHRoZSBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gY2hlY2sgZm9yXG4gIHBhcmVudEVsIG9uIHRoZSBvcHRpb25zIGFuZCBmaW5kIHRoZSBzZWxlY3RvclxuICBiYXNlZCBvbiBpdCdzIGNoaWxkcmVuXG4gKi9cblxuX2dldEVsID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmdldEVsO1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuZ2V0RWwgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgJGVsLCBwYXJlbnRFbDtcbiAgaWYgKF8uaXNTdHJpbmcoZWwpKSB7XG4gICAgcGFyZW50RWwgPSBfLnJlc3VsdCh0aGlzLm9wdGlvbnMsICdwYXJlbnRFbCcpO1xuICAgIGlmIChwYXJlbnRFbCkge1xuICAgICAgJGVsID0gQmFja2JvbmUuJChwYXJlbnRFbCkuZmluZChlbCk7XG4gICAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2dldEVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBfZ2V0RWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufTtcblxuXG4vKlxuICBTaG93IG5ldyBWaWV3XG4gIC0tLS0tLS0tLS0tLS1cbiAgSGFuZGxlIHRyYW5zaXRpb25zIGJldHdlZW4gb2xkIHZpZXcgYW5kIG5ldyBvbmVcbiAgd2l0aCB0aGUgb3B0aW9uIHRvIGRpc2FibGUgYW5pbWF0aW9uc1xuICovXG5cbl9zaG93ID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLnNob3c7XG5cbl9nZXROYW1lID0gZnVuY3Rpb24odmlldykge1xuICBpZiAodmlldykge1xuICAgIGlmICh2aWV3Lm5hbWUpIHtcbiAgICAgIHJldHVybiB2aWV3Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2aWV3LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbm8gdmlldyc7XG4gIH1cbn07XG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24odmlldywgaW1tZWRpYXRlKSB7XG4gIGlmIChpbW1lZGlhdGUgPT0gbnVsbCkge1xuICAgIGltbWVkaWF0ZSA9IGZhbHNlO1xuICB9XG4gIHRoaXMuX25leHRWaWV3ID0gdmlldztcbiAgaWYgKGltbWVkaWF0ZSkge1xuICAgIGlmICh0aGlzLiRlbCAmJiB0aGlzLiRlbFswXSkge1xuICAgICAgdGhpcy4kZWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgIHRoaXMuJGVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9uZXh0VmlldyA9IG51bGw7XG4gICAgX3Nob3cuY2FsbCh0aGlzLCB2aWV3KTtcbiAgICByZXR1cm4gY29uc29sZS5sb2coJ3Nob3dpbmcnLCBfZ2V0TmFtZSh2aWV3KSwgdmlldywgdGhpcy5lbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0ZU91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLiRlbCAmJiBfdGhpcy4kZWxbMF0pIHtcbiAgICAgICAgICBfdGhpcy4kZWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICBfdGhpcy4kZWxbMF0uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX25leHRWaWV3ID0gbnVsbDtcbiAgICAgICAgX3Nob3cuY2FsbChfdGhpcywgdmlldyk7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnc2hvd2luZycsIF9nZXROYW1lKHZpZXcpLCB2aWV3LCBfdGhpcy5lbCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxufTtcblxuXG4vKlxuICBUaGlzIHdpbGwgc2hvdyB0aGUgdmlldyBpbW1lZGlhdGVseSBpZiAjZ2V0RWwgcmV0dXJucyBhbiBlbGVtZW50XG4gIG90aGVyd2lzZSBpdCB3aWxsIHdhaXQgZm9yIHRoZSBzaG93IGV2ZW50IHRvIGZpcmUgb24gd2FpdEZvclZpZXdcbiAgYmVmb3JlIHNob3dpbmcgdGhlIHZpZXdcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuc2hvd1dpdGhWaWV3ID0gZnVuY3Rpb24od2FpdEZvclZpZXcsIHZpZXdUb1Nob3csIG9wdGlvbnMpIHtcbiAgdmFyICRlbDtcbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAgIHdhaXRGb3JFdmVudDogJ3Nob3cnXG4gIH0pO1xuICBpZiAoXy5pc1N0cmluZyh0aGlzLmVsKSkge1xuICAgICRlbCA9IHRoaXMuZ2V0RWwodGhpcy5lbCk7XG4gIH0gZWxzZSB7XG4gICAgJGVsID0gdGhpcy4kZWw7XG4gIH1cbiAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICB0aGlzLnNob3codmlld1RvU2hvdywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGlzdGVuVG9PbmNlKHdhaXRGb3JWaWV3LCBvcHRpb25zLndhaXRGb3JFdmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93KHZpZXdUb1Nob3csIG9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG59O1xuXG5cbi8qXG4gIENsb3NlXG4gIC0tLS0tXG4gIFVwZGF0ZSB0byBpbmNsdWRlIGxvZ2dpbmcgd2hlbiBhIHZpZXcgaXMgY2xvc2VkXG4gKi9cblxuX2Nsb3NlID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmNsb3NlO1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2Nsb3NpbmcnLCAodGhpcy5jdXJyZW50VmlldyA/IHRoaXMuY3VycmVudFZpZXcgOiB2b2lkIDApLCB0aGlzLmVsKTtcbiAgcmV0dXJuIF9jbG9zZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvUmVnaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXJpb25ldHRlLCBfO1xuXG5fID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5NYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xuXG5fLmV4dGVuZChNYXJpb25ldHRlLlZpZXcucHJvdG90eXBlLCB7XG4gIHRhZ05hbWU6ICdzZWN0aW9uJyxcbiAgY2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuICB0ZW1wbGF0ZUhlbHBlcnM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbE5hbWU6IHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLm5hbWUgOiAnJ1xuICAgIH07XG4gIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTW9kaWZpZXJzQmVoYXZpb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNb2RpZmllcnNCZWhhdmlvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNb2RpZmllcnNCZWhhdmlvcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIlwiICsgdGhpcy52aWV3Lm5hbWUgKyBcIi0tXCIgKyBtb2RpZmllcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLnJlbW92ZU1vZGlmaWVyID0gZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKFwiXCIgKyB0aGlzLnZpZXcubmFtZSArIFwiLS1cIiArIG1vZGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLnRvZ2dsZU1vZGlmaWVyID0gZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbC5oYXNDbGFzcyhcIlwiICsgdGhpcy52aWV3Lm5hbWUgKyBcIi0tXCIgKyBtb2RpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZU1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLm9uTW9kaWZpZWQgPSBmdW5jdGlvbiAobW9kaWZpZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIHN0YXRlO1xuICAgICAgICBpZiAoIXRoaXMudmlldy5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbmFtZSBpcyByZXF1aXJlZCBvbiB0aGlzIFZpZXcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5yZW1vdmVNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50b2dnbGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy50b2dnbGVNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuYWRkTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy50cmlnZ2VyTWV0aG9kKFwibW9kaWZpZWQ6XCIgKyBtb2RpZmllciwge1xuICAgICAgICAgICAgb246IHN0YXRlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1vZGlmaWVyc0JlaGF2aW9yO1xufSkoTWFyaW9uZXR0ZS5CZWhhdmlvcik7XG5leHBvcnRzLk1vZGlmaWVyc0JlaGF2aW9yID0gTW9kaWZpZXJzQmVoYXZpb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2RpZmllcnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvTW9kaWZpZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgZ2xvYmFsU3RhdGVJbml0aWFsaXplZCA9IGZhbHNlO1xudmFyIFNDUk9MTEFCTEVfQ0xBU1MgPSAnU2Nyb2xsYWJsZXNfX2NvbnRhaW5lcic7XG5mdW5jdGlvbiBpbml0R2xvYmFsU2Nyb2xsYWJsZVN0YXRlKCkge1xuICAgIGdsb2JhbFN0YXRlSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIC8vIERpc2FibGUgc2Nyb2xsIGZvciB0aGUgZG9jdW1lbnQsIHdlJ2xsIGhhbmRsZSBpdCBvdXJzZWx2ZXNcbiAgICAkKGRvY3VtZW50KS5vbihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnU2Nyb2xsYWJsZXMtLWF0dGFjaGVkJykub24oXCJ0b3VjaHN0YXJ0XCIsIFwiLlwiICsgU0NST0xMQUJMRV9DTEFTUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSAoY29udGVudCBvdmVyZmxvd3MpLCB0aGVuLi4uXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlaWdodCAhPT0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSB0b3AsIHNjcm9sbCBkb3duIG9uZSBwaXhlbCB0byBhbGxvdyBzY3JvbGxpbmcgdXBcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBib3R0b20sIHNjcm9sbCB1cCBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA9PT0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIHNjcm9sbFxuICAgICAgICB0aGlzLmFsbG93VXAgPSB0aGlzLnNjcm9sbFRvcCA+IDA7XG4gICAgICAgIHRoaXMuYWxsb3dEb3duID0gdGhpcy5zY3JvbGxUb3AgPCAodGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMubGFzdFkgPSBlLm9yaWdpbmFsRXZlbnQucGFnZVk7XG4gICAgfSkub24oXCJ0b3VjaG1vdmVcIiwgXCIuXCIgKyBTQ1JPTExBQkxFX0NMQVNTLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgIHZhciB1cCA9IGV2ZW50LnBhZ2VZID4gdGhpcy5sYXN0WTtcbiAgICAgICAgdmFyIGRvd24gPSAhdXA7XG4gICAgICAgIHRoaXMubGFzdFkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgaWYgKCh1cCAmJiB0aGlzLmFsbG93VXApIHx8IChkb3duICYmIHRoaXMuYWxsb3dEb3duKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3AnKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByZXZlbnQnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBTY3JvbGxhYmxlc0JlaGF2aW9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2Nyb2xsYWJsZXNCZWhhdmlvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTY3JvbGxhYmxlc0JlaGF2aW9yKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgU2Nyb2xsYWJsZXNCZWhhdmlvci5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvL2lmICghZ2xvYmFsU3RhdGVJbml0aWFsaXplZCkge1xuICAgICAgICAvLyAgaW5pdEdsb2JhbFNjcm9sbGFibGVTdGF0ZSgpO1xuICAgICAgICAvL31cbiAgICAgICAgXy5lYWNoKHRoaXMub3B0aW9ucywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICB2YXIgJGVsO1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gJ2VsJykge1xuICAgICAgICAgICAgICAgICRlbCA9IF90aGlzLiRlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbCA9IF90aGlzLiQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkZWwgJiYgJGVsLmxlbmd0aClcbiAgICAgICAgICAgICAgICAkZWwuYWRkQ2xhc3MoU0NST0xMQUJMRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNjcm9sbGFibGVzQmVoYXZpb3I7XG59KShNYXJpb25ldHRlLkJlaGF2aW9yKTtcbmV4cG9ydHMuU2Nyb2xsYWJsZXNCZWhhdmlvciA9IFNjcm9sbGFibGVzQmVoYXZpb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY3JvbGxhYmxlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2JlaGF2aW9ycy9TY3JvbGxhYmxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBJdGVtVmlldyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL0l0ZW1WaWV3Jyk7XG52YXIgQWxlcnRDb21wb25lbnQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbGVydENvbXBvbmVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbGVydENvbXBvbmVudChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdhbGVydCc7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL2FsZXJ0LmhicycpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQWxlcnRDb21wb25lbnQucHJvdG90eXBlLnRlbXBsYXRlSGVscGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMub3B0aW9ucy5tZXNzYWdlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBbGVydENvbXBvbmVudC5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYWxlcnQtJyArICh0aGlzLm9wdGlvbnMuYWxlcnRUeXBlIHx8ICdpbmZvJykpO1xuICAgIH07XG4gICAgcmV0dXJuIEFsZXJ0Q29tcG9uZW50O1xufSkoSXRlbVZpZXcuSXRlbVZpZXcpO1xuZXhwb3J0cy5BbGVydENvbXBvbmVudCA9IEFsZXJ0Q29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWxlcnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi8uLi9jb250cm9sbGVycy9BcHAnKTtcbnZhciBTcGlubmVyVmlldyA9IHJlcXVpcmUoJy4uL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG52YXIgd2hlbkZldGNoZWQgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvd2hlbkZldGNoZWQnKTtcbnZhciBMb2FkaW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRpbmdDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRpbmdDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIF8uZGVmYXVsdHModGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICBsb2FkaW5nVHlwZTogXCJzcGlubmVyXCIsXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBvcHRpb25zLmVudGl0aWVzIHx8IHRoaXMuZ2V0RW50aXRpZXMob3B0aW9ucy52aWV3KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nVmlldyA9IHRoaXMuZ2V0TG9hZGluZ1ZpZXcoKTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyh0aGlzLmxvYWRpbmdWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5tb25pdG9yUmVhZHlTdGF0ZShvcHRpb25zLnZpZXcsIHRoaXMubG9hZGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5nZXRMb2FkaW5nVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24uY3VycmVudFZpZXcuJGVsLmNzcyhcIm9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nVmlldyA9IG5ldyBTcGlubmVyVmlldy5TcGlubmVyVmlldygpO1xuICAgICAgICAgICAgICAgIGxvYWRpbmdWaWV3LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9hZGluZ1R5cGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvYWRpbmdWaWV3O1xuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLm1vbml0b3JSZWFkeVN0YXRlID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX3ZpZXdSZWFkeSA9IGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dFcnJvcihyZWFsVmlldywgbG9hZGluZ1ZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd1JlYWxWaWV3KHJlYWxWaWV3LCBsb2FkaW5nVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUocmVhbFZpZXcsIHRoaXMsIF92aWV3UmVhZHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdoZW5GZXRjaGVkLndoZW5GZXRjaGVkKHRoaXMuZW50aXRpZXMsIF92aWV3UmVhZHkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd0Vycm9yID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICBpZiAocmVhbFZpZXcpIHtcbiAgICAgICAgICAgIHJlYWxWaWV3LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmdWaWV3LnN0b3AoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlcnJvciBoYW5kbGluZSBvbiBsb2FkaW5nIHR5cGUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLnNob3dSZWFsVmlldyA9IGZ1bmN0aW9uIChyZWFsVmlldywgbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24uY3VycmVudFZpZXcuJGVsLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lvbi5jdXJyZW50VmlldyAhPT0gbG9hZGluZ1ZpZXcgJiYgdGhpcy5yZWdpb24uX25leHRWaWV3ICE9PSBsb2FkaW5nVmlldykge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghKCFyZWFsVmlldyB8fCB0aGlzLm9wdGlvbnMuZGVidWcpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cocmVhbFZpZXcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0RW50aXRpZXMgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICByZXR1cm4gXy5jaGFpbih2aWV3KS5waWNrKFwibW9kZWxcIiwgXCJjb2xsZWN0aW9uXCIpLnRvQXJyYXkoKS5jb21wYWN0KCkudmFsdWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBMb2FkaW5nQ29udHJvbGxlcjtcbn0pKEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5leHBvcnRzLkxvYWRpbmdDb250cm9sbGVyID0gTG9hZGluZ0NvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2FkaW5nQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgQW5pbWF0ZWRSZWdpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbmltYXRlZFJlZ2lvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbmltYXRlZFJlZ2lvbigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEFuaW1hdGVkUmVnaW9uLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ICYmIHRoaXMuY3VycmVudFZpZXcuYW5pbWF0ZU91dCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuaW1hdGluZyBvdXQnLCB0aGlzLmN1cnJlbnRWaWV3LCB0aGlzLmVsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuYW5pbWF0ZU91dChjYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5pbWF0ZWRSZWdpb24ucHJvdG90eXBlLmFuaW1hdGVFbXB0eSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGVPdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZW1wdHkoKTtcbiAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0ZWRSZWdpb247XG59KShNYXJpb25ldHRlLlJlZ2lvbik7XG5leHBvcnRzLkFuaW1hdGVkUmVnaW9uID0gQW5pbWF0ZWRSZWdpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbmltYXRlZFJlZ2lvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRSZWdpb24vQW5pbWF0ZWRSZWdpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBCVVRUT05fRVZFTlRTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlVUVE9OX0VWRU5UUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCVVRUT05fRVZFTlRTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQlVUVE9OX0VWRU5UUy5uYXZpZ2F0ZSA9IG5ldyBCVVRUT05fRVZFTlRTKCduYXZpZ2F0ZScpO1xuICAgIHJldHVybiBCVVRUT05fRVZFTlRTO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQlVUVE9OX0VWRU5UUyA9IEJVVFRPTl9FVkVOVFM7XG52YXIgQlVUVE9OX1RIRU1FID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlVUVE9OX1RIRU1FLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJVVFRPTl9USEVNRSgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEJVVFRPTl9USEVNRS5kZWZhdWx0ID0gbmV3IEJVVFRPTl9USEVNRSgnZGVmYXVsdCcpO1xuICAgIEJVVFRPTl9USEVNRS5pbnZlcnNlID0gbmV3IEJVVFRPTl9USEVNRSgnaW52ZXJzZScpO1xuICAgIEJVVFRPTl9USEVNRS5hY3Rpb24gPSBuZXcgQlVUVE9OX1RIRU1FKCdhY3Rpb24nKTtcbiAgICBCVVRUT05fVEhFTUUubGluayA9IG5ldyBCVVRUT05fVEhFTUUoJ2xpbmsnKTtcbiAgICBCVVRUT05fVEhFTUUucHJpbWFyeSA9IG5ldyBCVVRUT05fVEhFTUUoJ3ByaW1hcnknKTtcbiAgICBCVVRUT05fVEhFTUUuc2Vjb25kYXJ5ID0gbmV3IEJVVFRPTl9USEVNRSgnc2Vjb25kYXJ5Jyk7XG4gICAgcmV0dXJuIEJVVFRPTl9USEVNRTtcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkJVVFRPTl9USEVNRSA9IEJVVFRPTl9USEVNRTtcbnZhciBCVVRUT05fU0laRSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJVVFRPTl9TSVpFLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJVVFRPTl9TSVpFKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQlVUVE9OX1NJWkUuZGVmYXVsdCA9IG5ldyBCVVRUT05fU0laRSgnZGVmYXVsdCcpO1xuICAgIEJVVFRPTl9TSVpFLnNtYWxsID0gbmV3IEJVVFRPTl9TSVpFKCdzbWFsbCcpO1xuICAgIEJVVFRPTl9TSVpFLmxhcmdlID0gbmV3IEJVVFRPTl9TSVpFKCdsYXJnZScpO1xuICAgIHJldHVybiBCVVRUT05fU0laRTtcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkJVVFRPTl9TSVpFID0gQlVUVE9OX1NJWkU7XG52YXIgQnV0dG9uTW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b25Nb2RlbChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGUgPSAnbmFtZSc7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBCdXR0b25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBibG9jazogdHJ1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBCVVRUT05fVEhFTUUuZGVmYXVsdCxcbiAgICAgICAgICAgIHNpemU6IEJVVFRPTl9TSVpFLmRlZmF1bHRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCduYW1lJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJpY29uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ljb24nKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdpY29uJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgndGV4dCcpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHQnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwiYmxvY2tcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnYmxvY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdibG9jaycsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJ0aGVtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd0aGVtZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RoZW1lJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnc2l6ZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3NpemUnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBCdXR0b25Nb2RlbDtcbn0pKEJhY2tib25lLk1vZGVsKTtcbmV4cG9ydHMuQnV0dG9uTW9kZWwgPSBCdXR0b25Nb2RlbDtcbnZhciBCdXR0b24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWwgfHwgbmV3IEJ1dHRvbk1vZGVsKHRoaXMuZGVmYXVsdHMoKSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLm1vZGVsLm5hbWUgfHwgJ2Jhc2UtYnV0dG9uJztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vQnV0dG9uLmhicycpO1xuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFnTmFtZSA9ICdidXR0b24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWdOYW1lID0gJ2EnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSB7XG4gICAgICAgICAgICAnY2xpY2snOiAnY2xpY2snXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgdGhpcy5uYXZpZ2F0ZSk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucylcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc05hbWVzKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdCdXR0b24gYnRuIEJ1dHRvbi0tJyArIHRoaXMubmFtZSArICdCdXR0b24nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b24ucHJvdG90eXBlLmdldEljb25DbGFzcyA9IGZ1bmN0aW9uIChpY29uTmFtZSkge1xuICAgICAgICByZXR1cm4gJ0ljb24gSWNvbi0tJyArIGljb25OYW1lO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGV4dCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNlcmlhbGl6ZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5tb2RlbC50b0pTT04oKTtcbiAgICAgICAgZGF0YS5pY29uQ2xhc3MgPSB0aGlzLmdldEljb25DbGFzcyh0aGlzLm1vZGVsLmljb24pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUubmF2aWdhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihCVVRUT05fRVZFTlRTLm5hdmlnYXRlLnZhbCwgdGhpcy5uYW1lKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuc2V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudW5zZXRDbGFzc05hbWVzKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmljb24pXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmljb24gPSBvcHRpb25zLmljb247XG4gICAgICAgIGlmIChvcHRpb25zLnRleHQpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmJsb2NrKSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYmxvY2sgPSBvcHRpb25zLmJsb2NrO1xuICAgICAgICBpZiAob3B0aW9ucy50aGVtZSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGhlbWUgPSBvcHRpb25zLnRoZW1lO1xuICAgICAgICBpZiAob3B0aW9ucy5zaXplKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQpXG4gICAgICAgICAgICB0aGlzLiRlbC5hdHRyKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS51bnNldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy4kZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdidG4tbGluaycpLnJlbW92ZUNsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnRoZW1lKS5yZW1vdmVDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC5zaXplKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2J0bi1ibG9jaycpO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC50aGVtZSkuYWRkQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwuc2l6ZSArICdTaXplJyk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLnRoZW1lID09PSBCVVRUT05fVEhFTUUubGluaykge1xuICAgICAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2J0bi1saW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW9kZWwuYmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdidG4tYmxvY2snKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnV0dG9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmVGb3JtcyA9IHJlcXVpcmUoJ2JhY2tib25lLWZvcm1zJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbnZhciB2aWV3cyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL2luZGV4Jyk7XG52YXIgTGF5b3V0ID0gdmlld3MuTGF5b3V0O1xudmFyIENoaWxkSG9sZGVyVmlldyA9IHZpZXdzLkNoaWxkSG9sZGVyVmlldztcbnRlbXBsYXRlcy5pbml0KCk7XG52YXIgRm9ybVZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdGb3JtVmlldyc7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdmb3JtJztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyByb2xlOiAnZm9ybScgfTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRm9ybVZpZXcuaGJzJyk7XG4gICAgICAgIHRoaXMucmVnaW9ucyA9IHtcbiAgICAgICAgICAgIGZpZWxkc1JlZ2lvbjogJy5Gb3JtVmlld19fZmllbGRzUmVnaW9uJyxcbiAgICAgICAgICAgIGJ1dHRvbnNSZWdpb246ICcuRm9ybVZpZXdfX2J1dHRvbnNSZWdpb24nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFyc2VJY29uUHJvcGVydGllcyhvcHRpb25zLnNjaGVtYSk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnRm9ybVN0YWNrZWQnKTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBuZXcgQmFja2JvbmVGb3JtcyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5idXR0b25zSG9sZGVyID0gbmV3IENoaWxkSG9sZGVyVmlldy5HZW5lcmljQ2hpbGRIb2xkZXJWaWV3KCk7XG4gICAgfVxuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZmllbGRzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBudWxsO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maWVsZHNSZWdpb24uc2hvdyh0aGlzLmZpZWxkcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uc1JlZ2lvbi5zaG93KHRoaXMuYnV0dG9uc0hvbGRlcik7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUucGFyc2VJY29uUHJvcGVydGllcyA9IGZ1bmN0aW9uIChzY2hlbWEpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYSwgZnVuY3Rpb24gKHNjaGVtYUl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWFJdGVtLmljb24pIHtcbiAgICAgICAgICAgICAgICBzY2hlbWFJdGVtLnRpdGxlID0gJzxpIGNsYXNzPVwiZmEgZmEtJyArIHNjaGVtYUl0ZW0uaWNvbiArICdcIj48L2k+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuZGlzYWJsZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKEZvcm1WaWV3LkRJU0FCTEVEX0NMQVNTKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5lbmFibGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkcy52YWxpZGF0ZSgpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkcy5nZXRWYWx1ZShwcm9wZXJ0eSk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuc2V0VmFsdWUocHJvcGVydGllcyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyA9ICdGb3JtVmlldy0tZGlzYWJsZWQnO1xuICAgIHJldHVybiBGb3JtVmlldztcbn0pKExheW91dC5MYXlvdXQpO1xuZXhwb3J0cy5Gb3JtVmlldyA9IEZvcm1WaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIFZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9WaWV3Jyk7XG52YXIgU3BpbiA9IHJlcXVpcmUoJ3NwaW4nKTtcbnZhciBTcGlubmVyVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNwaW5uZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNwaW5uZXJWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1NwaW5uZXJWaWV3JztcbiAgICAgICAgdGhpcy5sb2FkaW5nRGVsYXkgPSAxMDAwO1xuICAgICAgICB0aGlzLmxvYWRpbmdDbGFzcyA9ICdTcGlubmVyVmlldy0tc3Bpbm5pbmcnO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgU3Bpbm5lclZpZXcucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLiRlbC5hZGRDbGFzcyhfdGhpcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZ1NwaW5uZXIgPSBuZXcgU3BpbihTcGlubmVyVmlldy5zcGluT3B0aW9ucyk7XG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nU3Bpbm5lci5zcGluKF90aGlzLiRlbFswXSk7XG4gICAgICAgIH0sIHRoaXMubG9hZGluZ0RlbGF5KTtcbiAgICB9O1xuICAgIFNwaW5uZXJWaWV3LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdTcGlubmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTcGlubmVyLnN0b3AoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNwaW5uZXJWaWV3LnNwaW5PcHRpb25zID0ge1xuICAgICAgICBsaW5lczogMTMsXG4gICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgIHJhZGl1czogNSxcbiAgICAgICAgY29ybmVyczogMSxcbiAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgIHRyYWlsOiA2MCxcbiAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgaHdhY2NlbDogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlNwaW5uZXJWaWV3X19zcGlubmVyIGFuaW1hdGVkIGJvdW5jZUluXCIsXG4gICAgICAgIHpJbmRleDogMmU5LFxuICAgICAgICB0b3A6IFwiMzBweFwiLFxuICAgICAgICBsZWZ0OiBcImF1dG9cIlxuICAgIH07XG4gICAgcmV0dXJuIFNwaW5uZXJWaWV3O1xufSkoVmlldy5WaWV3KTtcbmV4cG9ydHMuU3Bpbm5lclZpZXcgPSBTcGlubmVyVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNwaW5uZXJWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TcGlubmVyVmlldy9TcGlubmVyVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgSXRlbVZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9JdGVtVmlldycpO1xudmFyIFNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi4vU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcnKTtcbnZhciBOb3RpY2VWaWV3TW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RpY2VWaWV3TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90aWNlVmlld01vZGVsKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgTm90aWNlVmlld01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcjogJycsXG4gICAgICAgICAgICBib2R5OiAnJyxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgICAgICAgY2FuRGlzbWlzczogdHJ1ZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiaGVhZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2hlYWRlcicpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2hlYWRlcicsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiYm9keVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdib2R5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnYm9keScsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiYnV0dG9uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdidXR0b25zJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImNhbkRpc21pc3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnY2FuRGlzbWlzcycpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2NhbkRpc21pc3MnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImxvYWRpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnbG9hZGluZycpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBOb3RpY2VWaWV3TW9kZWw7XG59KShCYWNrYm9uZS5Nb2RlbCk7XG5leHBvcnRzLk5vdGljZVZpZXdNb2RlbCA9IE5vdGljZVZpZXdNb2RlbDtcbnZhciBOb3RpY2VWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90aWNlVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RpY2VWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5uYW1lID0gJ05vdGljZVZpZXcnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9ub3RpY2UuaGJzJyk7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdzZWN0aW9uJztcbiAgICAgICAgdGhpcy51aSA9IHtcbiAgICAgICAgICAgIGJ1dHRvbnM6ICcuTm90aWNlVmlld19fYnRucydcbiAgICAgICAgfTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLm1vZGVsIHx8IG5ldyBOb3RpY2VWaWV3TW9kZWwoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5idXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMgPSBvcHRpb25zLmJ1dHRvbnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMubG9hZGluZykpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZGluZyA9IG9wdGlvbnMubG9hZGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5jYW5EaXNtaXNzKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5jYW5EaXNtaXNzID0gb3B0aW9ucy5jYW5EaXNtaXNzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZScsIHRoaXMucmVuZGVyKTtcbiAgICB9XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5fbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdWaWV3ID0gbmV3IFNwaW5uZXJWaWV3LlNwaW5uZXJWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuX2xvYWRpbmdWaWV3LmVsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdWaWV3LnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aS5idXR0b25zLmVtcHR5KCk7XG4gICAgICAgIHRoaXMubW9kZWwuZ2V0KCdidXR0b25zJykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBidG4ucmVuZGVyKCk7XG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5UbyhidG4sICdjbGljaycsIF90aGlzLm9uQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgICAgICBfdGhpcy51aS5idXR0b25zLmFwcGVuZChidG4uZWwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmNhbkRpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmdldCgnY2FuRGlzbWlzcycpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICBpZiAodGhpcy5fbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nVmlldy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5zaG93KCk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICB0aGlzLm1vZGVsLnNldChwcm9wZXJ0aWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuZGVzdHJveUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICAgIGJ0bi5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLm9uQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcignYnV0dG9uOmNsaWNrZWQnKTtcbiAgICB9O1xuICAgIHJldHVybiBOb3RpY2VWaWV3O1xufSkoSXRlbVZpZXcuSXRlbVZpZXcpO1xuZXhwb3J0cy5Ob3RpY2VWaWV3ID0gTm90aWNlVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGljZVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY2xpZW50Jyk7XG5mdW5jdGlvbiBpbml0Q29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gICAgaWYgKCFjb25maWcuY29uZmlnLmhhbmRsZWJhcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHJlcXVpcmVzIGhhbmRsZWJhcnMgdG8gaGF2ZSBiZWVuIHBhc3NlZCBpbiB0byBjb25maWd1cmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29udHJvbGxlcihuYW1lLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBDb250cm9sbGVyID0gY29tcG9uZW50c1tuYW1lXTtcbiAgICAgICAgaWYgKENvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbGxlcih7XG4gICAgICAgICAgICAgICAgbW9kZWw6IGNvbnRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgXCIgKyBuYW1lICsgXCIgY29tcG9uZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlcyA9PT0gdm9pZCAwKSB7IGF0dHJpYnV0ZXMgPSB7fTsgfVxuICAgICAgICB2YXIgYXR0ciA9IF8ubWFwKGF0dHJpYnV0ZXMgfHwge30sIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcodmFsIHx8IF8uaXNGaW5pdGUodmFsKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGtleSArIFwiPVxcXCJcIiArIHZhbCArIFwiXFxcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGF0dHIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAnICsgYXR0ci5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xhc3NOYW1lKG5hbWUsIGhhc2gpIHtcbiAgICAgICAgdmFyIGNsYXNzZXM7XG4gICAgICAgIGlmIChoYXNoID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhc2ggPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2xhc3NOYW1lIG11c3Qgc3BlY2lmeSBhIG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzaFtcImNsYXNzXCJdKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gaGFzaFtcImNsYXNzXCJdLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy51bnNoaWZ0KG5hbWUpO1xuICAgICAgICByZXR1cm4gaGFzaFtcImNsYXNzXCJdID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuICAgIGNvbmZpZy5jb25maWcuaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignYycsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb250cm9sbGVyID0gZ2V0Q29tcG9uZW50Q29udHJvbGxlcihuYW1lLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIucmVuZGVyKG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGNvbmZpZy5jb25maWcuaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignaW5fcmVnaW9uJywgZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lvbnNbbmFtZV0gPSB7XG4gICAgICAgICAgICBmbjogb3B0aW9ucy5mblxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGNvbmZpZy5jb25maWcuaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcigncmVnaW9uJywgZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudFBhdGggPSBcIlwiICsgdGhpcy5fY29tcG9uZW50TmFtZSArIFwiX19cIiArIG5hbWU7XG4gICAgICAgIHZhciBpbl9yZWdpb24gPSB0aGlzLl9yZWdpb25zW25hbWVdO1xuICAgICAgICB2YXIgY29udGVudCA9IGluX3JlZ2lvbiA/IGluX3JlZ2lvbi5mbih0aGlzKSA6ICcnO1xuICAgICAgICB2YXIgaGFzaCA9IG9wdGlvbnMuaGFzaCB8fCB7fTtcbiAgICAgICAgY2xhc3NOYW1lKFwiXCIgKyBjb21wb25lbnRQYXRoICsgXCItcmVnaW9uXCIsIGhhc2gpO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IGdldEF0dHJpYnV0ZXMoaGFzaCk7XG4gICAgICAgIHJldHVybiBbJzxkaXYnLCBhdHRyaWJ1dGVzLCAnPicsIGNvbnRlbnQsIFwiPC9kaXY+XCJdLmpvaW4oJycpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5pbml0Q29tcG9uZW50cyA9IGluaXRDb21wb25lbnRzO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50cy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hhbmRsZWJhcnMvY29tcG9uZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgaTE4bmV4dCA9IHJlcXVpcmUoJ2kxOG5leHQnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jbGllbnQnKTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGhhbmRsZWJhcnMgPSBjb25maWcuY29uZmlnLmhhbmRsZWJhcnM7XG4gICAgLyoqXG4gICAgICogR2V0IHRyYW5zbGF0aW9uIGZvciBhIGdpdmVuIGtleSwgcGFzc2luZyB0aGUgb3B0aW9ucyBoYXNoIHRvIGkxOG5leHRcbiAgICAgKiB0byBhbGxvdyBmb3IgdmFyaWFibGUgcmVwbGFjZW1lbnRcbiAgICAgKiB7e2sgaGVhZGVyIG15VmFyPVwiaGVsbG9cIn19XG4gICAgICovXG4gICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcInRcIiwgZnVuY3Rpb24gKGkxOG5fa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgd3JhcFdpdGhLZXk6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgXy5leHRlbmQob3B0cywgb3B0aW9ucy5oYXNoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGkxOG5leHQudChpMThuX2tleSwgb3B0cyk7XG4gICAgICAgIHZhciBhdHRycyA9IFtcImRhdGEtdD1cXFwiXCIgKyBpMThuX2tleSArIFwiXFxcIlwiXTtcbiAgICAgICAgXy5lYWNoKG9wdHMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcodmFsIHx8IF8uaXNGaW5pdGUodmFsKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cnMucHVzaChcImRhdGEtXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0c1snd3JhcFdpdGhLZXknXSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gXCIgKyAoYXR0cnMuam9pbignICcpKSArIFwiPlwiICsgKG5ldyBoYW5kbGViYXJzLlNhZmVTdHJpbmcocmVzdWx0KSkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGlvbiBpbiBhIGJsb2NrIGNvbnRleHRcbiAgICAgKi9cbiAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKFwidHJcIiwgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBpMThuZXh0LmZ1bmN0aW9ucy5leHRlbmQob3B0aW9ucy5oYXNoLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZm4pIHtcbiAgICAgICAgICAgIG9wdHMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5mbihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gaTE4bmV4dC50KG9wdHMua2V5LCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBoYW5kbGViYXJzLlNhZmVTdHJpbmcocmVzdWx0KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pMThuZXh0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaGFuZGxlYmFycy9pMThuZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG52YXIgQVBQX1JPVVRFUl9FVkVOVFMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBUFBfUk9VVEVSX0VWRU5UUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBUFBfUk9VVEVSX0VWRU5UUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEFQUF9ST1VURVJfRVZFTlRTLmZpcnN0Um91dGUgPSBuZXcgQVBQX1JPVVRFUl9FVkVOVFMoJ2ZpcnN0Um91dGUnKTtcbiAgICByZXR1cm4gQVBQX1JPVVRFUl9FVkVOVFM7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5BUFBfUk9VVEVSX0VWRU5UUyA9IEFQUF9ST1VURVJfRVZFTlRTO1xudmFyIEFwcFJvdXRlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwcFJvdXRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHBSb3V0ZXIob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcFJvdXRlciAnICsgb3B0aW9ucy5uYW1lICsgJyBjcmVhdGVkJywgb3B0aW9ucy5hcHBSb3V0ZXMpO1xuICAgIH1cbiAgICBBcHBSb3V0ZXIucHJvdG90eXBlLm9uUm91dGUgPSBmdW5jdGlvbiAocm91dGVOYW1lLCByb3V0ZVBhdGgsIHJvdXRlQXJncykge1xuICAgICAgICBpZiAoQXBwUm91dGVyLl9maXJzdFJvdXRlVHJpZ2dlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoQVBQX1JPVVRFUl9FVkVOVFMuZmlyc3RSb3V0ZS52YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQXBwUm91dGVyLl9maXJzdFJvdXRlVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFwcFJvdXRlcjtcbn0pKE1hcmlvbmV0dGUuQXBwUm91dGVyKTtcbmV4cG9ydHMuQXBwUm91dGVyID0gQXBwUm91dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm91dGVycy9BcHAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIFNob3dkb3duID0gcmVxdWlyZSgnc2hvd2Rvd24nKTtcbnZhciBtZG93biA9IG5ldyBTaG93ZG93bi5jb252ZXJ0ZXIoKTtcbmV4cG9ydHMuc2VsZWN0b3IgPSAnW2RhdGEtbWRvd25dJztcbmV4cG9ydHMudXBkYXRlTWV0aG9kID0gJ2h0bWwnO1xuZnVuY3Rpb24gb25HZXQodmFsKSB7XG4gICAgcmV0dXJuIG1kb3duLm1ha2VIdG1sKHZhbCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZG93bi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0aWNraXQvbWRvd24uanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0pKCk7XG5leHBvcnRzLkFjdGlvbiA9IEFjdGlvbjtcbnZhciBBY3Rpb25DcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY3Rpb25DcmVhdG9yKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbkNyZWF0b3I7XG59KSgpO1xuZXhwb3J0cy5BY3Rpb25DcmVhdG9yID0gQWN0aW9uQ3JlYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjdGlvbnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L2FjdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvaW50ZXJmYWNlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eCcpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xudmFyIERpc3BhdGNoZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaXNwYXRjaGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVzID0gW107XG4gICAgICAgIHRoaXMucGF5bG9hZFF1ZXVlID0gW107XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5yZWdpc3RlclN0b3JlID0gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHRoaXMuc3RvcmVzLnB1c2goc3RvcmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcihzdG9yZS5kaXNwYXRjaC5iaW5kKHN0b3JlKSk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaFBheWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0gdGhpcy5wYXlsb2FkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc3BhdGNoaW5nOicsIHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5U3RvcmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQYXlsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLm5vdGlmeVN0b3JlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUubm90aWZ5SWZTdGF0ZUNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVQYXlsb2FkID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5wYXlsb2FkUXVldWUucHVzaChwYXlsb2FkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rpc3BhdGNoZXI6IEhhbmRsaW5nJywgcGF5bG9hZCk7XG4gICAgICAgIGlmICghdGhpcy5kaXNwYXRjaGluZylcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQYXlsb2FkKCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVTZXJ2ZXJBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb25zdGFudHMuQUNUSU9OX1NPVVJDRVMuU2VydmVyQWN0aW9uLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlRGV2aWNlQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogY29uc3RhbnRzLkFDVElPTl9TT1VSQ0VTLkRldmljZUFjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bG9hZChwYXlsb2FkKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVZpZXdBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb25zdGFudHMuQUNUSU9OX1NPVVJDRVMuVmlld0FjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bG9hZChwYXlsb2FkKTtcbiAgICB9O1xuICAgIHJldHVybiBEaXNwYXRjaGVyO1xufSkoZmx1eC5EaXNwYXRjaGVyKTtcbmV4cG9ydHMuRGlzcGF0Y2hlciA9IERpc3BhdGNoZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EaXNwYXRjaGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9EaXNwYXRjaGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xudmFyIEV2ZW50ZWRDbGFzcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MnKTtcbnZhciBTdG9yZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN0b3JlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0b3JlKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hUb2tlbiA9IGRpc3BhdGNoZXIucmVnaXN0ZXJTdG9yZSh0aGlzKTtcbiAgICB9XG4gICAgU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhdGVIYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5ub3RpZnlJZlN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVIYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlSGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKGNvbnN0YW50cy5FVkVOVF9UWVBFUy5DaGFuZ2UudmFsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLmFkZENoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oY29uc3RhbnRzLkVWRU5UX1RZUEVTLkNoYW5nZS52YWwsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9mZihjb25zdGFudHMuRVZFTlRfVFlQRVMuQ2hhbmdlLnZhbCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlO1xufSkoRXZlbnRlZENsYXNzLkV2ZW50ZWRDbGFzcyk7XG5leHBvcnRzLlN0b3JlID0gU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdG9yZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvU3RvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBOYXZpZ2F0aW9uQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5hdmlnYXRpb25Db250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5hdmlnYXRpb25Db250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5SXNTdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIE5hdmlnYXRpb25Db250cm9sbGVyLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChyb3V0ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHJvdXRlLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCduYXZpZ2F0ZWQnLCByb3V0ZSk7XG4gICAgfTtcbiAgICBOYXZpZ2F0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q3VycmVudFJvdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZnJhZyA9IEJhY2tib25lLmhpc3RvcnkuZ2V0RnJhZ21lbnQoKTtcbiAgICAgICAgaWYgKF8uaXNFbXB0eShmcmFnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZztcbiAgICAgICAgfVxuICAgIH07XG4gICAgTmF2aWdhdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLnN0YXJ0SGlzdG9yeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChCYWNrYm9uZS5oaXN0b3J5KSB7XG4gICAgICAgICAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5SXNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5hdmlnYXRpb25Db250cm9sbGVyO1xufSkoTWFyaW9uZXR0ZS5Db250cm9sbGVyKTtcbmV4cG9ydHMuTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBOYXZpZ2F0aW9uQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRpb25Db250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL05hdmlnYXRpb25Db250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIFZpZXcgPSByZXF1aXJlKCcuL1ZpZXcnKTtcbnZhciBDaGlsZEhvbGRlclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGlsZEhvbGRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hpbGRIb2xkZXJWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBCYWNrYm9uZS5DaGlsZFZpZXdDb250YWluZXIoKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZpZXcsIGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJpZ2dlck1ldGhvZCgnYmVmb3JlOmFkZDpjaGlsZCcsIHZpZXcpO1xuICAgICAgICAvLyBTdG9yZSB0aGUgY2hpbGQgdmlldyBpdHNlbGYgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgICAgIC8vIHJlbW92ZSBhbmQvb3IgZGVzdHJveSBpdCBsYXRlclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmFkZCh2aWV3KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh2aWV3LCAnZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnZpZXdEZXN0cm95ZWQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkVmlldyh2aWV3LCBpbmRleCk7XG4gICAgICAgIE1hcmlvbmV0dGUudHJpZ2dlck1ldGhvZC5jYWxsKHZpZXcsICdzaG93Jyk7XG4gICAgICAgIHRoaXMudHJpZ2dlck1ldGhvZCgnYWRkOmNoaWxkJywgdmlldyk7XG4gICAgfTtcbiAgICAvLyByZW5kZXIgdGhlIGNoaWxkIHZpZXdcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLnJlbmRlckNoaWxkVmlldyA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaEh0bWwodmlldywgaW5kZXgpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS52aWV3RGVzdHJveWVkID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmUodmlldyk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmF0dGFjaEh0bWwgPSBmdW5jdGlvbiAodmlldywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHZpZXcuZWwpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uY2FsbCgncmVuZGVyJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5jYWxsKCdkZXN0cm95Jyk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENoaWxkSG9sZGVyVmlldztcbn0pKFZpZXcuVmlldyk7XG5leHBvcnRzLkNoaWxkSG9sZGVyVmlldyA9IENoaWxkSG9sZGVyVmlldztcbnZhciBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2VuZXJpY0NoaWxkSG9sZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3KCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIEdlbmVyaWNDaGlsZEhvbGRlclZpZXc7XG59KShDaGlsZEhvbGRlclZpZXcpO1xuZXhwb3J0cy5HZW5lcmljQ2hpbGRIb2xkZXJWaWV3ID0gR2VuZXJpY0NoaWxkSG9sZGVyVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoaWxkSG9sZGVyVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0NoaWxkSG9sZGVyVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIFZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaWV3LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFZpZXcucHJvdG90eXBlLmdldFVpID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy51aVtrZXldO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFZpZXc7XG59KShNYXJpb25ldHRlLlZpZXcpO1xuZXhwb3J0cy5WaWV3ID0gVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgSXRlbVZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJdGVtVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJdGVtVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgSXRlbVZpZXcucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEl0ZW1WaWV3LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBJdGVtVmlldy5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEl0ZW1WaWV3O1xufSkoTWFyaW9uZXR0ZS5JdGVtVmlldyk7XG5leHBvcnRzLkl0ZW1WaWV3ID0gSXRlbVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JdGVtVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0l0ZW1WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTGF5b3V0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGF5b3V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExheW91dChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExheW91dC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMYXlvdXQucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIExheW91dC5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExheW91dDtcbn0pKE1hcmlvbmV0dGUuTGF5b3V0Vmlldyk7XG5leHBvcnRzLkxheW91dCA9IExheW91dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxheW91dC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0xheW91dC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExpc3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpc3Qob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXN0LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIExpc3QucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGlzdDtcbn0pKE1hcmlvbmV0dGUuQ29tcG9zaXRlVmlldyk7XG5leHBvcnRzLkxpc3QgPSBMaXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGlzdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0xpc3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU0X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZVwiXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81Nl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZS1mb3Jtc1wiXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81N19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzcGluXCJcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU4X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImkxOG5leHRcIlxuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTlfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic2hvd2Rvd25cIlxuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNjBfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZmx1eFwiXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG4vKipcbiAqIEluY2x1ZGUgdGhpcyB0ZW1wbGF0ZSBmaWxlIGFmdGVyIGJhY2tib25lLWZvcm1zLmFtZC5qcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZXNcbiAqXG4gKiAnZGF0YS0qJyBhdHRyaWJ1dGVzIGNvbnRyb2wgd2hlcmUgZWxlbWVudHMgYXJlIHBsYWNlZFxuICovXG52YXIgRm9ybSA9IHJlcXVpcmUoJ2JhY2tib25lLWZvcm1zJyk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIEZvcm0udGVtcGxhdGUgPSBfLnRlbXBsYXRlKCc8ZGl2IGRhdGEtZmllbGRzZXRzPjwvZGl2PicpO1xuICAgIEZvcm0uRmllbGRzZXQudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICA8ZmllbGRzZXQgZGF0YS1maWVsZHM+XFxcbiAgICA8JSBpZiAobGVnZW5kKSB7ICU+XFxcbiAgICAgIDxsZWdlbmQ+PCU9IGxlZ2VuZCAlPjwvbGVnZW5kPlxcXG4gICAgPCUgfSAlPlxcXG4gIDwvZmllbGRzZXQ+XFxcbicpO1xuICAgIEZvcm0uRmllbGQudGVtcGxhdGUgPSByZXF1aXJlKCcuL0Zvcm1GaWVsZC5oYnMnKTtcbiAgICBGb3JtLk5lc3RlZEZpZWxkLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgPGRpdiBjbGFzcz1cImZpZWxkLTwlPSBrZXkgJT5cIj5cXFxuICAgIDxkaXYgdGl0bGU9XCI8JT0gdGl0bGUgJT5cIiBjbGFzcz1cImlucHV0LXhsYXJnZVwiPlxcXG4gICAgICA8c3BhbiBkYXRhLWVkaXRvcj48L3NwYW4+XFxcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWlubGluZVwiIGRhdGEtZXJyb3I+PC9kaXY+XFxcbiAgICA8L2Rpdj5cXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCI+PCU9IGhlbHAgJT48L2Rpdj5cXFxuICA8L2Rpdj5cXFxuJyk7XG4gICAgRm9ybS5GaWVsZC5lcnJvckNsYXNzTmFtZSA9ICdGb3JtR3JvdXAtLWhhc0Vycm9yJztcbiAgICBpZiAoRm9ybS5lZGl0b3JzLkxpc3QpIHtcbiAgICAgICAgRm9ybS5lZGl0b3JzLkxpc3QudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICAgIDxkaXYgY2xhc3M9XCJiYmYtbGlzdFwiPlxcXG4gICAgICA8dWwgY2xhc3M9XCJ1bnN0eWxlZCBjbGVhcmZpeFwiIGRhdGEtaXRlbXM+PC91bD5cXFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmJmLWFkZFwiIGRhdGEtYWN0aW9uPVwiYWRkXCI+QWRkPC9idXR0b24+XFxcbiAgICA8L2Rpdj5cXFxuICAnKTtcbiAgICAgICAgRm9ybS5lZGl0b3JzLkxpc3QuSXRlbS50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gICAgPGxpIGNsYXNzPVwiY2xlYXJmaXhcIj5cXFxuICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiIGRhdGEtZWRpdG9yPjwvZGl2PlxcXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBiYmYtZGVsXCIgZGF0YS1hY3Rpb249XCJyZW1vdmVcIj4mdGltZXM7PC9idXR0b24+XFxcbiAgICA8L2xpPlxcXG4gICcpO1xuICAgICAgICBGb3JtLmVkaXRvcnMuTGlzdC5PYmplY3QudGVtcGxhdGUgPSBGb3JtLmVkaXRvcnMuTGlzdC5OZXN0ZWRNb2RlbC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gICAgPGRpdiBjbGFzcz1cImJiZi1saXN0LW1vZGFsXCI+PCU9IHN1bW1hcnkgJT48L2Rpdj5cXFxuICAnKTtcbiAgICB9XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGVzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy90ZW1wbGF0ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEV2ZW50ZWRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRlZENsYXNzKCkge1xuICAgIH1cbiAgICByZXR1cm4gRXZlbnRlZENsYXNzO1xufSkoKTtcbmV4cG9ydHMuRXZlbnRlZENsYXNzID0gRXZlbnRlZENsYXNzO1xuXy5leHRlbmQoRXZlbnRlZENsYXNzLnByb3RvdHlwZSwgQmFja2JvbmUuRXZlbnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV2ZW50ZWRDbGFzcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXI7XG5cbiAgcmV0dXJuIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm1lc3NhZ2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1lc3NhZ2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcIm1lc3NhZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuaGJzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9XFxcIkJ1dHRvbl9faWNvblxcXCI+PGRpdiBjbGFzcz1cXFwiXCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmljb25DbGFzcyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWNvbkNsYXNzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJpY29uQ2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L2Rpdj48L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmljb25DbGFzcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGV4dCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGV4dCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwidGV4dFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmhic1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiXFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2ZpZWxkc1JlZ2lvblxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2J1dHRvbnNSZWdpb25cXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIkZvcm1WaWV3X19kaXNhYmxlXFxcIj48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5oYnNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMyPVwiZnVuY3Rpb25cIjtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkaW5nIGhlYWRpbmctLW5vdGljZSBhbmltYXRlZCBib3VuY2VJblxcXCI+XFxuICAgIDxoMT5cIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaGVhZGVyIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oZWFkZXIgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImhlYWRlclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gxPlxcbiAgICA8cD5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmJvZHkgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJvZHkgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImJvZHlcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvcD5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJOb3RpY2VWaWV3X19idG5zXFxcIj48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyO1xuXG4gIHJldHVybiBcIiAgICA8cCBjbGFzcz1cXFwiRm9ybUdyb3VwX19oZWxwTWVzc2FnZVxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5oZWxwIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oZWxwIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJoZWxwXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3A+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiO1xuXG4gIHJldHVybiBcIjxkaXZcXG4gIGNsYXNzPVxcXCJGb3JtR3JvdXAgRm9ybUdyb3VwLS1cIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMua2V5IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXkgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImtleVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcbiAgPGxhYmVsIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2xhYmVsXFxcIiBmb3I9XFxcIlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuZWRpdG9ySWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmVkaXRvcklkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJlZGl0b3JJZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvbGFiZWw+XFxuICA8c3BhbiBjbGFzcz1cXFwiRm9ybUdyb3VwX19jb250cm9sXFxcIiBkYXRhLWVkaXRvcj48L3NwYW4+XFxuICA8cCBjbGFzcz1cXFwiRm9ybUdyb3VwX19lcnJvck1lc3NhZ2VcXFwiIGRhdGEtZXJyb3I+PC9wPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlbHAgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybUZpZWxkLmhic1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNjhfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaGFuZGxlYmFyc1wiXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=