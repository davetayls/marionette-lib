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
	var sync = __webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
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

	var _Modifiers = __webpack_require__(27);
	var _Scrollables = __webpack_require__(28);
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
	    function ButtonModel() {
	        _super.apply(this, arguments);
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
	    /**
	     * Get translation for a given key, passing the options hash to i18next
	     * to allow for variable replacement
	     * {{k header myVar="hello"}}
	     */
	    config.config.handlebars.registerHelper("t", function (i18n_key, options) {
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
	            return "<span " + (attrs.join(' ')) + ">" + (new Handlebars.SafeString(result)) + "</span>";
	        }
	        else {
	            return new Handlebars.SafeString(result);
	        }
	    });
	    /**
	     * Translation in a block context
	     */
	    config.config.handlebars.registerHelper("tr", function (context, options) {
	        var opts = i18next.functions.extend(options.hash, context);
	        if (options.fn) {
	            opts.defaultValue = options.fn(context);
	        }
	        var result = i18next.t(opts.key, opts);
	        return new Handlebars.SafeString(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDliOTllNWY3OGRlZWQxN2IxNGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9FeGNlcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy93aGVuRmV0Y2hlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicVwiIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvU2Nyb2xsYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9iYWNrYm9uZS9zeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9MYXlvdXRWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9SZWdpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlYmFycy9jb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGViYXJzL2kxOG5leHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGlja2l0L21kb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW50ZXJmYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9EaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NoaWxkSG9sZGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhY2tib25lLWZvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3BpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG93ZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZsdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybUZpZWxkLmhicyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxnRUFBZ0U7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7OztBQzNDQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxtQzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUN0RkE7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsdUM7Ozs7OztBQ3REQTtBQUNBLHVDOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsaUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDZDOzs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQzdJQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0ZBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrRDs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hELDZCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7O0FDTEEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx3Qzs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFLQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxtQzs7Ozs7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxxQzs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esd0M7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHVDOzs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxpQkFBaUI7QUFDckQsMENBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1Qzs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0Esb0M7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGdDOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG9DOzs7Ozs7QUNkQSx1Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHVDOzs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGlEOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw0Qzs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGlDOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHFDOzs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpQzs7Ozs7O0FDOUNBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDOzs7Ozs7QUNWQTtBQUNBLGtFQUFpRTtBQUNqRTs7QUFFQSxrTkFBaU4sMEJBQTBCLGFBQWE7QUFDeFA7QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNOakI7QUFDQSxrRUFBaUU7QUFDakU7O0FBRUE7QUFDQSxtTkFBa04sNEJBQTRCLGFBQWE7QUFDM1A7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEsNkZBQTRGLHFCQUFxQiwrREFBK0Q7QUFDaEwseU1BQXdNLHVCQUF1QixhQUFhO0FBQzVPO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDYmpCO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDSGpCO0FBQ0Esa0VBQWlFO0FBQ2pFOztBQUVBO0FBQ0EsMExBQXlMLHlCQUF5QixhQUFhO0FBQy9OO0FBQ0EsMktBQTBLLHVCQUF1QixhQUFhO0FBQzlNO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDVGpCO0FBQ0Esa0VBQWlFO0FBQ2pFOztBQUVBO0FBQ0EsOExBQTZMLHVCQUF1QixhQUFhO0FBQ2pPO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0Esb0xBQW1MLHNCQUFzQixhQUFhO0FBQ3ROO0FBQ0EsbUxBQWtMLDJCQUEyQixhQUFhO0FBQzFOO0FBQ0EsNktBQTRLLHdCQUF3QixhQUFhO0FBQ2pOO0FBQ0EscUZBQW9GLHFCQUFxQiwrREFBK0Q7QUFDeEs7QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNuQmpCLGlEIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDliOTllNWY3OGRlZWQxN2IxNGJcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbmV4cG9ydHMuY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvY2xpZW50Jyk7XG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICAgIHJldHVybiBleHBvcnRzLmNvbmZpZy5jb25maWcuY29uZmlndXJlKG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb25maWd1cmUgPSBjb25maWd1cmU7XG47XG5leHBvcnRzLmJlaGF2aW9ycyA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL2luZGV4Jyk7XG5NYXJpb25ldHRlLkJlaGF2aW9ycy5iZWhhdmlvcnNMb29rdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuYmVoYXZpb3JzO1xufTtcbmV4cG9ydHMuY29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmRleCcpO1xuZXhwb3J0cy5jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuZXhwb3J0cy5FeGNlcHRpb25zID0gcmVxdWlyZSgnLi9FeGNlcHRpb25zJyk7XG5leHBvcnRzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMnKTtcbnZhciBfQXBpID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9BcGknKTtcbnZhciBfQXBwID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9BcHAnKTtcbnZhciBfQmFzZSA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQmFzZScpO1xudmFyIF9Db21wb25lbnQgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0NvbXBvbmVudCcpO1xudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1JvdXRlckNvbnRyb2xsZXInKTtcbnZhciBfU3RhdGljID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9TdGF0aWMnKTtcbnZhciBjb250cm9sbGVycztcbihmdW5jdGlvbiAoY29udHJvbGxlcnMpIHtcbiAgICBjb250cm9sbGVycy5BcGkgPSBfQXBpO1xuICAgIGNvbnRyb2xsZXJzLkFwcCA9IF9BcHA7XG4gICAgY29udHJvbGxlcnMuQmFzZSA9IF9CYXNlO1xuICAgIGNvbnRyb2xsZXJzLkNvbXBvbmVudCA9IF9Db21wb25lbnQ7XG4gICAgY29udHJvbGxlcnMuUm91dGVyID0gX1JvdXRlcjtcbiAgICBjb250cm9sbGVycy5TdGF0aWMgPSBfU3RhdGljO1xufSkoY29udHJvbGxlcnMgPSBleHBvcnRzLmNvbnRyb2xsZXJzIHx8IChleHBvcnRzLmNvbnRyb2xsZXJzID0ge30pKTtcbmV4cG9ydHMuaGFuZGxlYmFycyA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9pbmRleCcpO1xuZXhwb3J0cy5yb3V0ZXJzID0gcmVxdWlyZSgnLi9yb3V0ZXJzL2luZGV4Jyk7XG5leHBvcnRzLnN0aWNraXQgPSByZXF1aXJlKCcuL3N0aWNraXQvaW5kZXgnKTtcbmV4cG9ydHMuZmx1eCA9IHJlcXVpcmUoJy4vZmx1eC9pbmRleCcpO1xuZXhwb3J0cy5EZWJvdW5jZWREb2NDb250YWluZXIgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXInKTtcbnZhciBfd2hlbkZldGNoZWQgPSByZXF1aXJlKCcuL3V0aWxpdGllcy93aGVuRmV0Y2hlZCcpO1xuZXhwb3J0cy53aGVuRmV0Y2hlZCA9IF93aGVuRmV0Y2hlZC53aGVuRmV0Y2hlZDtcbmV4cG9ydHMubmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hdmlnYXRpb24nKTtcbmV4cG9ydHMucmVnaXN0cnkgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yZWdpc3RyeScpO1xuZXhwb3J0cy51cmxVdGlscyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3VybCcpO1xuZXhwb3J0cy5wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dCA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0Jyk7XG5leHBvcnRzLnZpZXdzID0gcmVxdWlyZSgnLi92aWV3cy9pbmRleCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFja2JvbmUubWFyaW9uZXR0ZVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIHN5bmMgPSByZXF1aXJlKCcuL2JhY2tib25lL3N5bmMnKTtcbnJlcXVpcmUoJy4vbWFyaW9uZXR0ZS9MYXlvdXRWaWV3Jyk7XG5yZXF1aXJlKCcuL21hcmlvbmV0dGUvUmVnaW9uJyk7XG5yZXF1aXJlKCcuL21hcmlvbmV0dGUvVmlldycpO1xudmFyIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbigpIHtcbiAgICB9XG4gICAgTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24ucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYXBwID0gb3B0aW9ucy5hcHA7XG4gICAgICAgIHRoaXMuaGFuZGxlYmFycyA9IG9wdGlvbnMuaGFuZGxlYmFycztcbiAgICAgICAgdGhpcy5kZWZhdWx0UmVnaW9uID0gb3B0aW9ucy5kZWZhdWx0UmVnaW9uO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNQYXRoID0gb3B0aW9ucy5jb21wb25lbnRzUGF0aDtcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XG4gICAgICAgICAgICBzeW5jLmNvbmZpZ3VyZUJhY2tib25lU3luYyh0aGlzLmFwcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbjtcbn0pKCk7XG5leHBvcnRzLk1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uID0gTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb247XG5leHBvcnRzLmNvbmZpZyA9IG5ldyBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfTW9kaWZpZXJzID0gcmVxdWlyZSgnLi9Nb2RpZmllcnMnKTtcbnZhciBfU2Nyb2xsYWJsZXMgPSByZXF1aXJlKCcuL1Njcm9sbGFibGVzJyk7XG5leHBvcnRzLk1vZGlmaWVycyA9IF9Nb2RpZmllcnMuTW9kaWZpZXJzQmVoYXZpb3I7XG5leHBvcnRzLlNjcm9sbGFibGVzID0gX1Njcm9sbGFibGVzLlNjcm9sbGFibGVzQmVoYXZpb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2JlaGF2aW9ycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfQWxlcnQgPSByZXF1aXJlKCcuL2FsZXJ0L0FsZXJ0Jyk7XG52YXIgX0xvYWRpbmcgPSByZXF1aXJlKCcuL0xvYWRpbmdDb21wb25lbnQvTG9hZGluZ0NvbnRyb2xsZXInKTtcbmV4cG9ydHMuQWxlcnQgPSBfQWxlcnQuQWxlcnRDb21wb25lbnQ7XG5leHBvcnRzLkFuaW1hdGVkUmVnaW9uID0gcmVxdWlyZSgnLi9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbicpO1xuZXhwb3J0cy5CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbi9CdXR0b24nKTtcbmV4cG9ydHMuRm9ybVZpZXcgPSByZXF1aXJlKCcuL0Zvcm1WaWV3L0Zvcm1WaWV3Jyk7XG5leHBvcnRzLlNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi9TcGlubmVyVmlldy9TcGlubmVyVmlldycpO1xuZXhwb3J0cy5Mb2FkaW5nID0gX0xvYWRpbmcuTG9hZGluZ0NvbnRyb2xsZXI7XG5leHBvcnRzLk5vdGljZVZpZXcgPSByZXF1aXJlKCcuL05vdGljZVZpZXcvTm90aWNlVmlldycpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgU3RyaW5nQ29uc3RhbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0cmluZ0NvbnN0YW50KHZhbCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG4gICAgU3RyaW5nQ29uc3RhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWw7XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpID09PSB2YWx1ZTtcbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LmFsbENvbnN0YW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgYWxsID0gW107XG4gICAgICAgIF8uZWFjaChfLmtleXModGhpcyksIGZ1bmN0aW9uIChwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKHRbcHJvcGVydHlLZXldIGluc3RhbmNlb2YgdCkge1xuICAgICAgICAgICAgICAgIHZhciBjb25zdGFudCA9IHRbcHJvcGVydHlLZXldO1xuICAgICAgICAgICAgICAgIGFsbC5wdXNoKGNvbnN0YW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5mcm9tS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYWxsID0gdGhpcy5hbGxDb25zdGFudHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhbGxbaV0ubWF0Y2hlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQuZnJvbVZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYWxsID0gdGhpcy5hbGxDb25zdGFudHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhbGxbaV0ubWF0Y2hlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN0cmluZ0NvbnN0YW50O1xufSkoKTtcbmV4cG9ydHMuU3RyaW5nQ29uc3RhbnQgPSBTdHJpbmdDb25zdGFudDtcbnZhciBFVkVOVF9UWVBFUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVWRU5UX1RZUEVTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVWRU5UX1RZUEVTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgRVZFTlRfVFlQRVMuQ2hhbmdlID0gbmV3IEVWRU5UX1RZUEVTKCdDaGFuZ2UnKTtcbiAgICByZXR1cm4gRVZFTlRfVFlQRVM7XG59KShTdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkVWRU5UX1RZUEVTID0gRVZFTlRfVFlQRVM7XG52YXIgQUNUSU9OX1NPVVJDRVMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBQ1RJT05fU09VUkNFUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBQ1RJT05fU09VUkNFUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEFDVElPTl9TT1VSQ0VTLlNlcnZlckFjdGlvbiA9IG5ldyBBQ1RJT05fU09VUkNFUygnU2VydmVyQWN0aW9uJyk7XG4gICAgQUNUSU9OX1NPVVJDRVMuVmlld0FjdGlvbiA9IG5ldyBBQ1RJT05fU09VUkNFUygnVmlld0FjdGlvbicpO1xuICAgIEFDVElPTl9TT1VSQ0VTLkRldmljZUFjdGlvbiA9IG5ldyBBQ1RJT05fU09VUkNFUygnRGV2aWNlQWN0aW9uJyk7XG4gICAgcmV0dXJuIEFDVElPTl9TT1VSQ0VTO1xufSkoU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5BQ1RJT05fU09VUkNFUyA9IEFDVElPTl9TT1VSQ0VTO1xudmFyIERPQ19TVEFUVVNFUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERPQ19TVEFUVVNFUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBET0NfU1RBVFVTRVMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBET0NfU1RBVFVTRVMuZW1wdHkgPSBuZXcgRE9DX1NUQVRVU0VTKCdlbXB0eScpO1xuICAgIERPQ19TVEFUVVNFUy5mZXRjaGluZ0Zyb21TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdmZXRjaGluZ0Zyb21TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZmV0Y2hpbmdMb2NhbCA9IG5ldyBET0NfU1RBVFVTRVMoJ2ZldGNoaW5nTG9jYWwnKTtcbiAgICBET0NfU1RBVFVTRVMuZmV0Y2hlZCA9IG5ldyBET0NfU1RBVFVTRVMoJ2ZldGNoZWQnKTtcbiAgICBET0NfU1RBVFVTRVMuY3JlYXRpbmdPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2NyZWF0aW5nT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMudXBkYXRpbmdPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ3VwZGF0aW5nT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRpbmdPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0aW5nT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRlZE9uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRlZE9uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0ZWRMb2NhbCA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0ZWRMb2NhbCcpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGVkID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRlZCcpO1xuICAgIHJldHVybiBET0NfU1RBVFVTRVM7XG59KShTdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkRPQ19TVEFUVVNFUyA9IERPQ19TVEFUVVNFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnN0YW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEV4Y2VwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXhjZXB0aW9uKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgY29uc29sZS53YXJuKCdFWENFUFRJT04nLCB0aGlzKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwibWVzc2FnZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwic3RhY2tcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yLnN0YWNrO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgJzogJyArIHRoaXMubWVzc2FnZTtcbiAgICB9O1xuICAgIHJldHVybiBFeGNlcHRpb247XG59KSgpO1xuZXhwb3J0cy5FeGNlcHRpb24gPSBFeGNlcHRpb247XG52YXIgRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbjtcbn0pKEV4Y2VwdGlvbik7XG5leHBvcnRzLkRvY3VtZW50RXhpc3RzRXhjZXB0aW9uID0gRG9jdW1lbnRFeGlzdHNFeGNlcHRpb247XG52YXIgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbjtcbn0pKEV4Y2VwdGlvbik7XG5leHBvcnRzLk5vdEltcGxlbWVudGVkRXhjZXB0aW9uID0gTm90SW1wbGVtZW50ZWRFeGNlcHRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FeGNlcHRpb25zLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvRXhjZXB0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVyZmFjZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnRlcmZhY2VzLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2UnKTtcbnZhciBBcGlDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBpQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcGlDb250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIEFwaUNvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFwaUNvbnRyb2xsZXIgPSBBcGlDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBpLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQXBpLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZScpO1xudmFyIGNsaWVudENvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jbGllbnQnKTtcbnZhciBBcHBDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHBDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5fbWFuYWdlZFJlZ2lvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZWdpb24gPSB0aGlzLnJlZ2lvbiB8fCBvcHRpb25zLnJlZ2lvbiB8fCBjbGllbnRDb25maWcuY29uZmlnLmRlZmF1bHRSZWdpb247XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5zaG93Q29udHJvbGxlciA9IGZ1bmN0aW9uIChjb250cm9sbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIG9wdGlvbnMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIG9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUgPSBjb250cm9sbGVyLmdldE9wdGlvbignbW9uaXRvclJlYWR5U3RhdGUnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyhjb250cm9sbGVyLmdldE1haW5WaWV3KCksIG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh2aWV3LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgICAgICAgbG9hZGluZzogbnVsbCxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogZmFsc2UsXG4gICAgICAgICAgICByZWdpb246IHRoaXMucmVnaW9uXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXZpZXcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgdmlldyBpbnN0YW5jZSBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5WaWV3KHZpZXcpO1xuICAgICAgICB0aGlzLl9tYW5hZ2VWaWV3KHZpZXcsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlldzogdmlldyxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLmdldE1haW5WaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpblZpZXc7XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5zZXRNYWluVmlldyA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIGlmICh0aGlzLl9tYWluVmlldykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21haW5WaWV3ID0gdmlldztcbiAgICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlblRvKHZpZXcsIFwiZGVzdHJveVwiLCB0aGlzLmRlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5tYW5hZ2VSZWdpb24gPSBmdW5jdGlvbiAocmVnaW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hZ2VkUmVnaW9ucy5wdXNoKHJlZ2lvbik7XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5fbWFuYWdlVmlldyA9IGZ1bmN0aW9uICh2aWV3LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmxvYWRpbmcpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2FkaW5nID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmRlZmF1bHRzKG9wdGlvbnMubG9hZGluZywge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdIZWFkZXI6IF8ucmVzdWx0KHRoaXMsICdsb2FkaW5nSGVhZGVyJyksXG4gICAgICAgICAgICAgICAgbG9hZGluZ0JvZHk6IF8ucmVzdWx0KHRoaXMsICdsb2FkaW5nQm9keScpLFxuICAgICAgICAgICAgICAgIG1vbml0b3JSZWFkeVN0YXRlOiBvcHRpb25zLm1vbml0b3JSZWFkeVN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy5jb25maWcuYXBwLmV4ZWN1dGUoXCJzaG93OmxvYWRpbmdcIiwgdmlldywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLnJlZ2lvbi5zaG93KHZpZXcsIG9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXy5pbnZva2UodGhpcy5fbWFuYWdlZFJlZ2lvbnMsICdhbmltYXRlRW1wdHknKTtcbiAgICAgICAgdGhpcy5fbWFuYWdlZFJlZ2lvbnMgPSBudWxsO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHBDb250cm9sbGVyO1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5BcHBDb250cm9sbGVyID0gQXBwQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwcC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIHJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JlZ2lzdHJ5Jyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBCYXNlQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhc2VDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJhc2VDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VfaWQgPSBfLnVuaXF1ZUlkKCdjb250cm9sbGVyJyk7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyKHRoaXMsIHRoaXMuX2luc3RhbmNlX2lkKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEJhc2VDb250cm9sbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3lpbmdcIiwgdGhpcyk7XG4gICAgICAgIHJlZ2lzdHJ5LnVucmVnaXN0ZXIodGhpcywgdGhpcy5faW5zdGFuY2VfaWQpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEJhc2VDb250cm9sbGVyLnByb3RvdHlwZS5wcm94eUV2ZW50cyA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgcHJlZml4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdGVuVG8oaW5zdGFuY2UsIFwiYWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciByb290RXZlbnQgPSBhcmdzWzBdO1xuICAgICAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgICAgIGFyZ3NbMF0gPSBwcmVmaXggKyBcIjpcIiArIHJvb3RFdmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICBNYXJpb25ldHRlLnRyaWdnZXJNZXRob2QuYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCYXNlQ29udHJvbGxlcjtcbn0pKE1hcmlvbmV0dGUuQ29udHJvbGxlcik7XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9BcHAnKTtcbnZhciBDb21wb25lbnRDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tcG9uZW50Q29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21wb25lbnRDb250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQ29tcG9uZW50Q29udHJvbGxlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh2aWV3LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghKG9wdGlvbnMucmVnaW9uICYmIHRoaXMuX21haW5WaWV3KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIG5vdCBAc2hvdyB0aGUgbWFpbiB2aWV3LCB1c2UgQHNldE1haW5WaWV3IHdpdGggY29tcG9uZW50cyBhbmQgQHNob3cgZnJvbSB0aGUgYXBwcyBjb250cm9sbGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2hvdy5jYWxsKHRoaXMsIHZpZXcsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcG9uZW50Q29udHJvbGxlcjtcbn0pKEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5leHBvcnRzLkNvbXBvbmVudENvbnRyb2xsZXIgPSBDb21wb25lbnRDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tcG9uZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2UnKTtcbnZhciBSb3V0ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUm91dGVyQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSb3V0ZXJDb250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHVwQWN0aW9ucyhvcHRpb25zLmFjdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hdXRob3JpemVBbkFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFjdGlvblBvbGljeShhY3Rpb25Db25maWcpLmlzQXV0aG9yaXplZChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aW9uVW5hdXRob3JpemVkID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiXCIgKyBhY3Rpb25OYW1lICsgXCIgd2FzIHVuYXV0aG9yaXplZFwiKTtcbiAgICAgICAgZXJyLm5hbWUgPSAnQWN0aW9uVW5hdXRob3JpemVkJztcbiAgICAgICAgZXJyLmFjdGlvbk5hbWUgPSBhY3Rpb25OYW1lO1xuICAgICAgICBlcnIuYWN0aW9uQ29uZmlnID0gYWN0aW9uQ29uZmlnO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5jYWxsQWN0aW9uVW5hdXRob3JpemVkID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZy51bmF1dGhvcml6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnLnVuYXV0aG9yaXplZC5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb24oJ2FjdGlvblVuYXV0aG9yaXplZCcpLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuZGVmYXVsdFBvbGljeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3Rpb25Qb2xpY3koKTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9zZXR1cEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfLmVhY2goYWN0aW9ucywgZnVuY3Rpb24gKGNvbmZpZywga2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5hZGRBY3Rpb24oa2V5LCBjb25maWcpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25Db25maWcgPSBmdW5jdGlvbiAoYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChhY3Rpb25Db25maWcgPT0gbnVsbCkge1xuICAgICAgICAgICAgYWN0aW9uQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRBY3Rpb25Db25maWdGcm9tRm4oYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25Db25maWdGcm9tRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZuOiBmblxuICAgICAgICB9O1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvbkZ1bmN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZy5mbjtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25Qb2xpY3kgPSBmdW5jdGlvbiAoYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnKSB8fCAhYWN0aW9uQ29uZmlnLnBvbGljeSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb2xpY3kgPSB0aGlzLmdldE9wdGlvbignZGVmYXVsdFBvbGljeScpO1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihkZWZhdWx0UG9saWN5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0UG9saWN5LmNhbGwodGhpcywgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0UG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZy5wb2xpY3k7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGF0dGFjaGVyID0gdGhpcztcbiAgICAgICAgYWN0aW9uQ29uZmlnID0gdGhpcy5fZ2V0QWN0aW9uQ29uZmlnKGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIHZhciBfZm4gPSB0aGlzLl9nZXRBY3Rpb25GdW5jdGlvbihhY3Rpb25Db25maWcpO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKF9mbikpIHtcbiAgICAgICAgICAgIGF0dGFjaGVyW2FjdGlvbk5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5nZXRPcHRpb24oJ2F1dGhvcml6ZUFuQWN0aW9uJykuY2FsbChfdGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mbi5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQWN0aW9uVW5hdXRob3JpemVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkNvbmZpZy5pbnRlcm5hbEFjdGlvbkVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxBY3Rpb25VbmF1dGhvcml6ZWQoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FsbEFjdGlvblVuYXV0aG9yaXplZChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3h5aW5nIHRocm91Z2ggYW4gYXV0aG9yaXplIG1ldGhvZCByZXF1aXJlcyBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSb3V0ZXJDb250cm9sbGVyO1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5Sb3V0ZXJDb250cm9sbGVyID0gUm91dGVyQ29udHJvbGxlcjtcbnZhciBBY3Rpb25Qb2xpY3kgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY3Rpb25Qb2xpY3ksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uUG9saWN5KG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFjdGlvblBvbGljeS5wcm90b3R5cGUuaXNBdXRob3JpemVkID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQXV0aG9yaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0F1dGhvcml6ZWQuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb25Qb2xpY3k7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFjdGlvblBvbGljeSA9IEFjdGlvblBvbGljeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlckNvbnRyb2xsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIFN0YXRpY0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRpY0NvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnc2VjdGlvbic7XG4gICAgICAgIHRoaXMuY2xvbmVDb250ZXh0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgfVxuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5jb250ZXh0UHJvcGVydGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGVtcGxhdGVGbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0ZW1wbGF0ZSBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuY2xhc3NOYW1lID0gZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgaWYgKGhhc2ggPT09IHZvaWQgMCkgeyBoYXNoID0ge307IH1cbiAgICAgICAgdmFyIGNsYXNzZXM7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBtdXN0IHNwZWNpZnkgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2hbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGhhc2hbXCJjbGFzc1wiXS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gXy5yZXN1bHQodGhpcywgJ2F0dHJpYnV0ZXMnKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlc1tcImNsYXNzXCJdKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gXy51bmlvbihjbGFzc2VzLCBhdHRyaWJ1dGVzW1wiY2xhc3NcIl0uc3BsaXQoJyAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMubmFtZSk7XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvbmVDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF8uY2xvbmUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fY29tcG9uZW50TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0Ll9yZWdpb25zID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5taXhpbkhhc2ggPSBmdW5jdGlvbiAoY29udGV4dCwgaGFzaCkge1xuICAgICAgICBpZiAoaGFzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYXNoID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHRQcm9wcyA9IF8ucmVzdWx0KHRoaXMsICdjb250ZXh0UHJvcGVydGllcycpO1xuICAgICAgICBpZiAoXy5pc09iamVjdChjb250ZXh0UHJvcHMpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHlLZXlzID0gXy5rZXlzKGNvbnRleHRQcm9wcyk7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IF8ucGljayhoYXNoLCBwcm9wZXJ0eUtleXMpO1xuICAgICAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKGNvbnRleHQsIGNvbnRleHRQcm9wcywgcHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbXBvbmVudFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyB0ZW1wbGF0ZSBvbiB0aGlzIHN0YXRpYyBjb250cm9sbGVyJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlcyhoYXNoKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfLm9taXQoYXR0cmlidXRlcywgJ2NsYXNzJyk7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IF8ubWFwKGF0dHJpYnV0ZXMgfHwge30sIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKGhhc2hba2V5XSB8fCBfLmlzRmluaXRlKGhhc2hba2V5XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsga2V5ICsgXCI9XFxcIlwiICsgaGFzaFtrZXldICsgXCJcXFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcodmFsIHx8IF8uaXNGaW5pdGUodmFsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnICcgKyBhdHRyLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5uZXJCb2R5ID0gZnVuY3Rpb24gKGNvbnRleHQsIGZuKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLm1peGluSGFzaCh0aGlzLmNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShvcHRpb25zLmhhc2gpO1xuICAgICAgICB0aGlzLmNvbnRleHQuX19ib2R5X18gPSB0aGlzLmdldElubmVyQm9keSh0aGlzLmdldENoaWxkQ29udGV4dCgpLCBvcHRpb25zLmZuKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmF0dHJpYnV0ZXMgPSB0aGlzLmdldEF0dHJpYnV0ZXMob3B0aW9ucy5oYXNoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyT3V0ZXJIdG1sKHRoaXMuY29udGV4dCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnRleHQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdGhpcy5jb250ZXh0LmF0dHJpYnV0ZXNcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXJPdXRlckh0bWwgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IF8ucmVzdWx0KHRoaXMsICd0YWdOYW1lJyk7XG4gICAgICAgIHJldHVybiBbXCI8XCIgKyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBcIiBjbGFzcz1cXFwiXCIgKyBjbGFzc05hbWUgKyBcIlxcXCJcIiwgXCI+XFxuXCIsIHRoaXMucmVuZGVyQ29udGVudFRlbXBsYXRlKGNvbnRleHQpLCBcIjwvXCIgKyB0YWdOYW1lICsgXCI+XCJdLmpvaW4oJycpO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyQ29udGVudFRlbXBsYXRlID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHRtcGwgPSB0aGlzLmdldENvbXBvbmVudFRlbXBsYXRlKCk7XG4gICAgICAgIHJldHVybiB0bXBsKGNvbnRleHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YXRpY0NvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5TdGF0aWNDb250cm9sbGVyID0gU3RhdGljQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXRpYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL1N0YXRpYy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMnKTtcbmV4cG9ydHMuaTE4bmV4dCA9IHJlcXVpcmUoJy4vaTE4bmV4dCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuQXBwID0gcmVxdWlyZSgnLi9BcHAnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm91dGVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLm1kb3duID0gcmVxdWlyZSgnLi9tZG93bicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGlja2l0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuZXhwb3J0cy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzJyk7XG5leHBvcnRzLkRpc3BhdGNoZXIgPSByZXF1aXJlKCcuL0Rpc3BhdGNoZXInKTtcbmV4cG9ydHMuU3RvcmUgPSByZXF1aXJlKCcuL1N0b3JlJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgRXhjZXB0aW9ucyA9IHJlcXVpcmUoJy4uL0V4Y2VwdGlvbnMnKTtcbnZhciBEZWJvdW5jZWREb2NDb250YWluZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlYm91bmNlZERvY0NvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5kb2NzID0gW107XG4gICAgICAgIHRoaXMuZG9jVGltZVRvTGl2ZSA9IDEwMDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9jcy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuY2xlYXJFeHBpcmVkRG9jcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuY2xlYXJBbGxEb2NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRvY3MubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1dHMgYSBkb2N1bWVudCBpbiB0byB0aGUgYXJyYXkgaWYgaXQgaXMgbm90IHRoZXJlXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGRvYykge1xuICAgICAgICBpZiAoIXRoaXMuYnlJZChkb2MuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3MucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICBkb2M6IGRvYyxcbiAgICAgICAgICAgICAgICBleHBpcmVzOiB0aGlzLmRvY1RpbWVUb0xpdmUgPyBEYXRlLm5vdygpICsgdGhpcy5kb2NUaW1lVG9MaXZlIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9ucy5Eb2N1bWVudEV4aXN0c0V4Y2VwdGlvbihuZXcgRXJyb3IoJ0RvY3VtZW50ICcgKyBkb2MuaWQgKyAnIGFscmVhZHkgZXhpc3RzJykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGVudHJ5IHdpdGggZGV0YWlscyBhYm91dCB0aGUgZG9jIHdpdGggYW4gaWRcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmVudHJ5QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgaXRlbSA9IF8uZmluZFdoZXJlKHRoaXMuZG9jcywgeyBpZDogaWQgfSk7XG4gICAgICAgIGlmIChpdGVtKVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYWxsIHRoZSBkb2NzXG4gICAgICogQHJldHVybnMge0lEZWJvdW5jZWREb2NJdGVtPFQ+W119XG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3MubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmRvYztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNhdmVkIGRvY3VtZW50IGJ5IGl0cyBpZFxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm5zIHtUfVxuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuYnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgaXRlbSA9IF8uZmluZFdoZXJlKHRoaXMuZG9jcywgeyBpZDogaWQgfSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5kb2M7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIGRvYyBpbiB0byB0aGUgc3RvcmUsIGlmIGl0IGV4aXN0c1xuICAgICAqIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VEb2MgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZG9jLmlkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZXJnZURvYyBkb2N1bWVudCBtdXN0IGhhdmUgYSB2YWxpZCBpZCcpO1xuICAgICAgICB2YXIga2V5cyA9IF8ua2V5cyhkb2MpO1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLmVudHJ5QnlJZChkb2MuaWQpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0RvYyA9IGVudHJ5LmRvYztcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgXy5lYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubWVyZ2VEb2NLZXkoa2V5LCBleGlzdGluZ0RvYywgZG9jKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXJnZWQ6IGNoYW5nZWRQcm9wZXJ0aWVzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IGNoYW5nZWRQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgIGRvYzogZXhpc3RpbmdEb2NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1dChkb2MpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXJnZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBrZXlzLFxuICAgICAgICAgICAgICAgIGRvYzogZG9jXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLm1lcmdlRG9jS2V5ID0gZnVuY3Rpb24gKGtleSwgZXhpc3RpbmdEb2MsIGRvYykge1xuICAgICAgICB2YXIgdmFsdWUgPSBkb2Nba2V5XTtcbiAgICAgICAgaWYgKCFfLmlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdEb2Nba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZ0RvY1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VNdWx0aXBsZSA9IGZ1bmN0aW9uIChkb2NzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtZXJnZXMgPSBkb2NzLm1hcChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubWVyZ2VEb2MoZG9jKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXJnZXM7XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VkRG9jQ29udGFpbmVyO1xufSkoKTtcbmV4cG9ydHMuRGVib3VuY2VkRG9jQ29udGFpbmVyID0gRGVib3VuY2VkRG9jQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVib3VuY2VkRG9jQ29udGFpbmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL0RlYm91bmNlZERvY0NvbnRhaW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgUSA9IHJlcXVpcmUoJ3EnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZnVuY3Rpb24gd2hlbkZldGNoZWQoZW50aXRpZXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHByb21pc2VzID0gXy5jaGFpbihbZW50aXRpZXNdKS5mbGF0dGVuKCkucGx1Y2soXCJfZmV0Y2hcIikuY29tcGFjdCgpLnZhbHVlKCk7XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gUS5hbGwocHJvbWlzZXMpLmRvbmUoZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aGVuRmV0Y2hlZCcsIHJlc3VsdHMpO1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmZhaWxlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9ycyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3doZW5GZXRjaGVkJywgZW50aXRpZXMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgaXMgYmVpbmcgZmV0Y2hlZCcpO1xuICAgIH1cbn1cbmV4cG9ydHMud2hlbkZldGNoZWQgPSB3aGVuRmV0Y2hlZDtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdoZW5GZXRjaGVkLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3doZW5GZXRjaGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBOYXZpZ2F0aW9uQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvbkNvbnRyb2xsZXInKTtcbnZhciBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyLk5hdmlnYXRpb25Db250cm9sbGVyKCk7XG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZpZ2F0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5leHBvcnRzLl9yZWdpc3RyeSA9IHt9O1xuZnVuY3Rpb24gcmVnaXN0ZXIoaW5zdGFuY2UsIGlkKSB7XG4gICAgZXhwb3J0cy5fcmVnaXN0cnlbaWRdID0gaW5zdGFuY2U7XG59XG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXI7XG5mdW5jdGlvbiB1bnJlZ2lzdGVyKGluc3RhbmNlLCBpZCkge1xuICAgIGRlbGV0ZSBleHBvcnRzLl9yZWdpc3RyeVtpZF07XG59XG5leHBvcnRzLnVucmVnaXN0ZXIgPSB1bnJlZ2lzdGVyO1xuZnVuY3Rpb24gcmVzZXRSZWdpc3RyeSgpIHtcbiAgICB2YXIgb2xkQ291bnQgPSBnZXRSZWdpc3RyeVNpemUoKTtcbiAgICB2YXIgY29udHJvbGxlcjtcbiAgICBmb3IgKHZhciBrZXkgaW4gZXhwb3J0cy5fcmVnaXN0cnkpIHtcbiAgICAgICAgY29udHJvbGxlciA9IGV4cG9ydHMuX3JlZ2lzdHJ5W2tleV07XG4gICAgICAgIGNvbnRyb2xsZXIucmVnaW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgY291bnQ6IGdldFJlZ2lzdHJ5U2l6ZSgpLFxuICAgICAgICBwcmV2aW91czogb2xkQ291bnQsXG4gICAgICAgIG1zZzogXCJUaGVyZSB3ZXJlIFwiICsgb2xkQ291bnQgKyBcIiBjb250cm9sbGVycyBpbiB0aGUgcmVnaXN0cnksIHRoZXJlIGFyZSBub3cgXCIgKyAodGhpcy5nZXRSZWdpc3RyeVNpemUoKSlcbiAgICB9O1xuICAgIGNvbnNvbGUuaW5mbygnUmVnaXN0cnkgcmVzZXQnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG59XG5leHBvcnRzLnJlc2V0UmVnaXN0cnkgPSByZXNldFJlZ2lzdHJ5O1xuZnVuY3Rpb24gZ2V0UmVnaXN0cnlTaXplKCkge1xuICAgIHJldHVybiBfLnNpemUoZXhwb3J0cy5fcmVnaXN0cnkpO1xufVxuZXhwb3J0cy5nZXRSZWdpc3RyeVNpemUgPSBnZXRSZWdpc3RyeVNpemU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWdpc3RyeS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9yZWdpc3RyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi8uLi90eXBpbmdzL3RzZC5kLnRzJyAvPlxuJ3VzZSBzdHJpY3QnO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG4vKipcbiAqIEV4dHJhY3QgYSBxdWVyeSBzdHJpbmcgdmFsdWVcbiAqIEBwYXJhbSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSBrZXlcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBnZXRRdWVyeShzZWFyY2hTdHJpbmcsIGtleSkge1xuICAgIHZhciB2YWx1ZXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoXCImXCIpO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGZ0ID0gdmFsdWVzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKGZ0WzBdID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0cy5nZXRRdWVyeSA9IGdldFF1ZXJ5O1xuLyoqXG4gKiBFeHRyYWN0IHRoZSBzZWFyY2hTdHJpbmcgcXVlcnkgc3RyaW5nIHZhbHVlcyBmcm9tIGEgdXJsXG4gKiBAcGFyYW0gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZWFyY2hTdHJpbmcodXJsKSB7XG4gICAgaWYgKC9cXCMvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcbiAgICB9XG4gICAgaWYgKC9cXD8vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5zZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmc7XG4vKipcbiAqIEdldCB0aGUgY29ycmVjdCBzZXBhcmF0b3IgZm9yIGEgdXJsIGFuZCBhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2VwYXJhdG9yKHVybCkge1xuICAgIGlmICh1cmwpIHtcbiAgICAgICAgaWYgKC9cXD8vLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuICcmJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnPyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcbi8qKlxuICogSm9pbnMgdXJsIHF1ZXJ5IHN0cmluZyB2YWx1ZXNcbiAqIEBwYXJhbSB1cmxzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKCkge1xuICAgIHZhciB1cmxzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdXJsc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIF9tZXJnZSA9IGZ1bmN0aW9uIChtZW1vLCB2YWwpIHtcbiAgICAgICAgcmV0dXJuIG1lbW8gKyAoc2VwYXJhdG9yKG1lbW8pKSArIHZhbDtcbiAgICB9O1xuICAgIHJldHVybiBfLnJlZHVjZSh1cmxzLCBfbWVyZ2UpO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcbi8qKlxuICogSm9pbiB1cmwgcGF0aHNcbiAqIEBwYXJhbSB1cmxzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luUGF0aHMoKSB7XG4gICAgdmFyIHVybHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB1cmxzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX21lcmdlID0gZnVuY3Rpb24gKG1lbW8sIHZhbCkge1xuICAgICAgICByZXR1cm4gbWVtbyArICcvJyArIHZhbDtcbiAgICB9O1xuICAgIHJldHVybiBfLnJlZHVjZSh1cmxzLCBfbWVyZ2UpO1xufVxuZXhwb3J0cy5qb2luUGF0aHMgPSBqb2luUGF0aHM7XG5mdW5jdGlvbiBwYXJhbShvYmosIHNlcGFyYXRvciwgam9pbmVyKSB7XG4gICAgaWYgKHNlcGFyYXRvciA9PT0gdm9pZCAwKSB7IHNlcGFyYXRvciA9ICcmJzsgfVxuICAgIGlmIChqb2luZXIgPT09IHZvaWQgMCkgeyBqb2luZXIgPSAnPSc7IH1cbiAgICBmdW5jdGlvbiBfcGFyYW0obWVtbywgdmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlID0gbWVtbyA/IG1lbW8gKyBzZXBhcmF0b3IgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBrZXkgKyBqb2luZXIgKyB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF8ucmVkdWNlKG9iaiwgX3BhcmFtLCAnJyk7XG59XG5leHBvcnRzLnBhcmFtID0gcGFyYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmwuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvdXJsLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIHByZXZlbnRHbG9iYWxseSgpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gICAgc3R5bGUud2Via2l0VG91Y2hDYWxsb3V0ID0gXCJub25lXCI7XG4gICAgc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xufVxuZXhwb3J0cy5wcmV2ZW50R2xvYmFsbHkgPSBwcmV2ZW50R2xvYmFsbHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLkNoaWxkSG9sZGVyVmlldyA9IHJlcXVpcmUoJy4vQ2hpbGRIb2xkZXJWaWV3Jyk7XG5leHBvcnRzLlZpZXcgPSByZXF1aXJlKCcuL1ZpZXcnKTtcbmV4cG9ydHMuSXRlbVZpZXcgPSByZXF1aXJlKCcuL0l0ZW1WaWV3Jyk7XG5leHBvcnRzLkxheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG5leHBvcnRzLkxpc3QgPSByZXF1aXJlKCcuL0xpc3QnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI1X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInVuZGVyc2NvcmVcIlxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjZfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicVwiXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTW9kaWZpZXJzQmVoYXZpb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNb2RpZmllcnNCZWhhdmlvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNb2RpZmllcnNCZWhhdmlvcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcyhcIlwiICsgdGhpcy52aWV3Lm5hbWUgKyBcIi0tXCIgKyBtb2RpZmllcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLnJlbW92ZU1vZGlmaWVyID0gZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKFwiXCIgKyB0aGlzLnZpZXcubmFtZSArIFwiLS1cIiArIG1vZGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLnRvZ2dsZU1vZGlmaWVyID0gZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbC5oYXNDbGFzcyhcIlwiICsgdGhpcy52aWV3Lm5hbWUgKyBcIi0tXCIgKyBtb2RpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZU1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLm9uTW9kaWZpZWQgPSBmdW5jdGlvbiAobW9kaWZpZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIHN0YXRlO1xuICAgICAgICBpZiAoIXRoaXMudmlldy5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbmFtZSBpcyByZXF1aXJlZCBvbiB0aGlzIFZpZXcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5yZW1vdmVNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50b2dnbGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy50b2dnbGVNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuYWRkTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy50cmlnZ2VyTWV0aG9kKFwibW9kaWZpZWQ6XCIgKyBtb2RpZmllciwge1xuICAgICAgICAgICAgb246IHN0YXRlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1vZGlmaWVyc0JlaGF2aW9yO1xufSkoTWFyaW9uZXR0ZS5CZWhhdmlvcik7XG5leHBvcnRzLk1vZGlmaWVyc0JlaGF2aW9yID0gTW9kaWZpZXJzQmVoYXZpb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2RpZmllcnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvTW9kaWZpZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgZ2xvYmFsU3RhdGVJbml0aWFsaXplZCA9IGZhbHNlO1xudmFyIFNDUk9MTEFCTEVfQ0xBU1MgPSAnU2Nyb2xsYWJsZXNfX2NvbnRhaW5lcic7XG5mdW5jdGlvbiBpbml0R2xvYmFsU2Nyb2xsYWJsZVN0YXRlKCkge1xuICAgIGdsb2JhbFN0YXRlSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIC8vIERpc2FibGUgc2Nyb2xsIGZvciB0aGUgZG9jdW1lbnQsIHdlJ2xsIGhhbmRsZSBpdCBvdXJzZWx2ZXNcbiAgICAkKGRvY3VtZW50KS5vbihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnU2Nyb2xsYWJsZXMtLWF0dGFjaGVkJykub24oXCJ0b3VjaHN0YXJ0XCIsIFwiLlwiICsgU0NST0xMQUJMRV9DTEFTUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSAoY29udGVudCBvdmVyZmxvd3MpLCB0aGVuLi4uXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlaWdodCAhPT0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSB0b3AsIHNjcm9sbCBkb3duIG9uZSBwaXhlbCB0byBhbGxvdyBzY3JvbGxpbmcgdXBcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBib3R0b20sIHNjcm9sbCB1cCBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA9PT0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIHNjcm9sbFxuICAgICAgICB0aGlzLmFsbG93VXAgPSB0aGlzLnNjcm9sbFRvcCA+IDA7XG4gICAgICAgIHRoaXMuYWxsb3dEb3duID0gdGhpcy5zY3JvbGxUb3AgPCAodGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMubGFzdFkgPSBlLm9yaWdpbmFsRXZlbnQucGFnZVk7XG4gICAgfSkub24oXCJ0b3VjaG1vdmVcIiwgXCIuXCIgKyBTQ1JPTExBQkxFX0NMQVNTLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgIHZhciB1cCA9IGV2ZW50LnBhZ2VZID4gdGhpcy5sYXN0WTtcbiAgICAgICAgdmFyIGRvd24gPSAhdXA7XG4gICAgICAgIHRoaXMubGFzdFkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgaWYgKCh1cCAmJiB0aGlzLmFsbG93VXApIHx8IChkb3duICYmIHRoaXMuYWxsb3dEb3duKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3AnKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByZXZlbnQnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBTY3JvbGxhYmxlc0JlaGF2aW9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2Nyb2xsYWJsZXNCZWhhdmlvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTY3JvbGxhYmxlc0JlaGF2aW9yKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgU2Nyb2xsYWJsZXNCZWhhdmlvci5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvL2lmICghZ2xvYmFsU3RhdGVJbml0aWFsaXplZCkge1xuICAgICAgICAvLyAgaW5pdEdsb2JhbFNjcm9sbGFibGVTdGF0ZSgpO1xuICAgICAgICAvL31cbiAgICAgICAgXy5lYWNoKHRoaXMub3B0aW9ucywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICB2YXIgJGVsO1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gJ2VsJykge1xuICAgICAgICAgICAgICAgICRlbCA9IF90aGlzLiRlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbCA9IF90aGlzLiQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkZWwgJiYgJGVsLmxlbmd0aClcbiAgICAgICAgICAgICAgICAkZWwuYWRkQ2xhc3MoU0NST0xMQUJMRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNjcm9sbGFibGVzQmVoYXZpb3I7XG59KShNYXJpb25ldHRlLkJlaGF2aW9yKTtcbmV4cG9ydHMuU2Nyb2xsYWJsZXNCZWhhdmlvciA9IFNjcm9sbGFibGVzQmVoYXZpb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY3JvbGxhYmxlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2JlaGF2aW9ycy9TY3JvbGxhYmxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZnVuY3Rpb24gY29uZmlndXJlQmFja2JvbmVTeW5jKGFwcCkge1xuICAgIHZhciBfc3luYyA9IEJhY2tib25lLnN5bmM7XG4gICAgQmFja2JvbmUuc3luYyA9IGZ1bmN0aW9uIChtZXRob2QsIGVudGl0eSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IF8uYmluZChiZWZvcmVTZW5kLCBlbnRpdHkpLFxuICAgICAgICAgICAgY29tcGxldGU6IF8uYmluZChjb21wbGV0ZSwgZW50aXR5KVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFlbnRpdHkuX2ZldGNoICYmIG1ldGhvZCA9PT0gXCJyZWFkXCIpIHtcbiAgICAgICAgICAgIGFkZEZldGNoUHJvbWlzZShlbnRpdHksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3luYyhtZXRob2QsIGVudGl0eSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBiZWZvcmVTZW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKFwic3luYzpzdGFydFwiLCB0aGlzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoXCJzeW5jOnN0b3BcIiwgdGhpcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEZldGNoUHJvbWlzZShlbnRpdHksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGQgPSAkLkRlZmVycmVkKCk7XG4gICAgICAgIGVudGl0eS5fZmV0Y2ggPSBkLnByb21pc2UoKTtcbiAgICAgICAgdmFyIF9zdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuICAgICAgICB2YXIgX2Vycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3AsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICBfc3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHN0YXR1czogeGhyID8geGhyLnN0YXR1cyA6IDAsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbiAocmVzcCwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcignZXJyb3I6b2ZmbGluZScpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOm9mZmxpbmUnLCBlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoXy5jb250YWlucyhbNDAxLCA0MDNdLCByZXNwLnN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcigndW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICAgICAgICAgYXBwLnZlbnQudHJpZ2dlcignZmV0Y2g6dW5hdXRob3Jpc2VkJywgZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguZmxvb3IocmVzcC5zdGF0dXMgLyAxMDApID09PSA1KSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ2Vycm9yOnNlcnZlcicpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOmVycm9yOnNlcnZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBkLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBmYWlsZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuY29uZmlndXJlQmFja2JvbmVTeW5jID0gY29uZmlndXJlQmFja2JvbmVTeW5jO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3luYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9iYWNrYm9uZS9zeW5jLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExheW91dFZpZXcgPSBNYXJpb25ldHRlLkxheW91dFZpZXc7XG4vKlxuICBfYnVpbGRSZWdpb25zXG4gIC0tLS0tLS0tLS0tLS1cbiAgV2UgbmVlZCB0byBlbnN1cmUgdGhhdCB0aGVyZSBpcyBhbiBlbGVtZW50IG9uIHRoZVxuICBMYXlvdXRWaWV3IHNvIHRoYXQgZ2V0RWwgcmVsYXRpdmUgdG8gdGhlIHBhcmVudEVsXG4gIHdvcmtzIHByb3Blcmx5XG4gKi9cbnZhciBfYnVpbGRSZWdpb25zID0gTGF5b3V0Vmlldy5wcm90b3R5cGUuX2J1aWxkUmVnaW9ucztcbkxheW91dFZpZXcucHJvdG90eXBlLl9idWlsZFJlZ2lvbnMgPSBmdW5jdGlvbiAocmVnaW9ucykge1xuICAgIHRoaXMuX2Vuc3VyZUVsZW1lbnQoKTtcbiAgICByZXR1cm4gX2J1aWxkUmVnaW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvTGF5b3V0Vmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgQmFja2JvbmUsIE1hcmlvbmV0dGUsIF8sIF9jbG9zZSwgX2dldEVsLCBfZ2V0TmFtZSwgX3Nob3c7XG5cbl8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcblxuTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcblxuXG4vKlxuICBBbmltYXRlIE91dFxuICAtLS0tLS0tLS0tLVxuICBBbmltYXRlIG91dCB0aGUgb2xkIHZpZXcgYmVmb3JlIGJlaW5nIHJlYWR5IHRvIHNob3dcbiAgdGhlIG5leHRcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNiKSB7XG4gIGlmICh0aGlzLmN1cnJlbnRWaWV3ICYmIHRoaXMuY3VycmVudFZpZXcuYW5pbWF0ZU91dCkge1xuICAgIGNvbnNvbGUubG9nKCdhbmltYXRpbmcgb3V0JywgdGhpcy5jdXJyZW50VmlldywgdGhpcy5lbCk7XG4gICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdiZWZvcmU6YW5pbWF0aW5nOm91dCcpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQoY2IpO1xuICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgfVxufTtcblxuXG4vKlxuICBBbmltYXRlZCBFbXB0eVxuICAtLS0tLVxuICBVc2UgYW5pbWF0aW9uIHdoZW4gZW1wdHlpbmcgdGhlIHJlZ2lvbiBpZiBpdFxuICBpcyBhdmFpbGFibGVcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZUVtcHR5ID0gZnVuY3Rpb24ob3B0aW9ucywgY2IpIHtcbiAgcmV0dXJuIHRoaXMuYW5pbWF0ZU91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5lbXB0eSgpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwoX3RoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKHRoaXMpKTtcbn07XG5cblxuLypcbiAgZ2V0RWxcbiAgLS0tLS1cbiAgVXBkYXRlIHRoZSBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gY2hlY2sgZm9yXG4gIHBhcmVudEVsIG9uIHRoZSBvcHRpb25zIGFuZCBmaW5kIHRoZSBzZWxlY3RvclxuICBiYXNlZCBvbiBpdCdzIGNoaWxkcmVuXG4gKi9cblxuX2dldEVsID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmdldEVsO1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuZ2V0RWwgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgJGVsLCBwYXJlbnRFbDtcbiAgaWYgKF8uaXNTdHJpbmcoZWwpKSB7XG4gICAgcGFyZW50RWwgPSBfLnJlc3VsdCh0aGlzLm9wdGlvbnMsICdwYXJlbnRFbCcpO1xuICAgIGlmIChwYXJlbnRFbCkge1xuICAgICAgJGVsID0gQmFja2JvbmUuJChwYXJlbnRFbCkuZmluZChlbCk7XG4gICAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2dldEVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBfZ2V0RWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufTtcblxuXG4vKlxuICBTaG93IG5ldyBWaWV3XG4gIC0tLS0tLS0tLS0tLS1cbiAgSGFuZGxlIHRyYW5zaXRpb25zIGJldHdlZW4gb2xkIHZpZXcgYW5kIG5ldyBvbmVcbiAgd2l0aCB0aGUgb3B0aW9uIHRvIGRpc2FibGUgYW5pbWF0aW9uc1xuICovXG5cbl9zaG93ID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLnNob3c7XG5cbl9nZXROYW1lID0gZnVuY3Rpb24odmlldykge1xuICBpZiAodmlldykge1xuICAgIGlmICh2aWV3Lm5hbWUpIHtcbiAgICAgIHJldHVybiB2aWV3Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2aWV3LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbm8gdmlldyc7XG4gIH1cbn07XG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24odmlldywgaW1tZWRpYXRlKSB7XG4gIGlmIChpbW1lZGlhdGUgPT0gbnVsbCkge1xuICAgIGltbWVkaWF0ZSA9IGZhbHNlO1xuICB9XG4gIHRoaXMuX25leHRWaWV3ID0gdmlldztcbiAgaWYgKGltbWVkaWF0ZSkge1xuICAgIGlmICh0aGlzLiRlbCAmJiB0aGlzLiRlbFswXSkge1xuICAgICAgdGhpcy4kZWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgIHRoaXMuJGVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9uZXh0VmlldyA9IG51bGw7XG4gICAgX3Nob3cuY2FsbCh0aGlzLCB2aWV3KTtcbiAgICByZXR1cm4gY29uc29sZS5sb2coJ3Nob3dpbmcnLCBfZ2V0TmFtZSh2aWV3KSwgdmlldywgdGhpcy5lbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0ZU91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLiRlbCAmJiBfdGhpcy4kZWxbMF0pIHtcbiAgICAgICAgICBfdGhpcy4kZWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICBfdGhpcy4kZWxbMF0uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX25leHRWaWV3ID0gbnVsbDtcbiAgICAgICAgX3Nob3cuY2FsbChfdGhpcywgdmlldyk7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnc2hvd2luZycsIF9nZXROYW1lKHZpZXcpLCB2aWV3LCBfdGhpcy5lbCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxufTtcblxuXG4vKlxuICBUaGlzIHdpbGwgc2hvdyB0aGUgdmlldyBpbW1lZGlhdGVseSBpZiAjZ2V0RWwgcmV0dXJucyBhbiBlbGVtZW50XG4gIG90aGVyd2lzZSBpdCB3aWxsIHdhaXQgZm9yIHRoZSBzaG93IGV2ZW50IHRvIGZpcmUgb24gd2FpdEZvclZpZXdcbiAgYmVmb3JlIHNob3dpbmcgdGhlIHZpZXdcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuc2hvd1dpdGhWaWV3ID0gZnVuY3Rpb24od2FpdEZvclZpZXcsIHZpZXdUb1Nob3csIG9wdGlvbnMpIHtcbiAgdmFyICRlbDtcbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAgIHdhaXRGb3JFdmVudDogJ3Nob3cnXG4gIH0pO1xuICBpZiAoXy5pc1N0cmluZyh0aGlzLmVsKSkge1xuICAgICRlbCA9IHRoaXMuZ2V0RWwodGhpcy5lbCk7XG4gIH0gZWxzZSB7XG4gICAgJGVsID0gdGhpcy4kZWw7XG4gIH1cbiAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICB0aGlzLnNob3codmlld1RvU2hvdywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGlzdGVuVG9PbmNlKHdhaXRGb3JWaWV3LCBvcHRpb25zLndhaXRGb3JFdmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93KHZpZXdUb1Nob3csIG9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG59O1xuXG5cbi8qXG4gIENsb3NlXG4gIC0tLS0tXG4gIFVwZGF0ZSB0byBpbmNsdWRlIGxvZ2dpbmcgd2hlbiBhIHZpZXcgaXMgY2xvc2VkXG4gKi9cblxuX2Nsb3NlID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmNsb3NlO1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2Nsb3NpbmcnLCAodGhpcy5jdXJyZW50VmlldyA/IHRoaXMuY3VycmVudFZpZXcgOiB2b2lkIDApLCB0aGlzLmVsKTtcbiAgcmV0dXJuIF9jbG9zZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvUmVnaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXJpb25ldHRlLCBfO1xuXG5fID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5NYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xuXG5fLmV4dGVuZChNYXJpb25ldHRlLlZpZXcucHJvdG90eXBlLCB7XG4gIHRhZ05hbWU6ICdzZWN0aW9uJyxcbiAgY2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuICB0ZW1wbGF0ZUhlbHBlcnM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbE5hbWU6IHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLm5hbWUgOiAnJ1xuICAgIH07XG4gIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBBbGVydENvbXBvbmVudCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFsZXJ0Q29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFsZXJ0Q29tcG9uZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ2FsZXJ0JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vYWxlcnQuaGJzJyk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBBbGVydENvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGVIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5vcHRpb25zLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFsZXJ0Q29tcG9uZW50LnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhbGVydC0nICsgKHRoaXMub3B0aW9ucy5hbGVydFR5cGUgfHwgJ2luZm8nKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWxlcnRDb21wb25lbnQ7XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLkFsZXJ0Q29tcG9uZW50ID0gQWxlcnRDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbGVydC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uLy4uL2NvbnRyb2xsZXJzL0FwcCcpO1xudmFyIFNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi4vU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcnKTtcbnZhciB3aGVuRmV0Y2hlZCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy93aGVuRmV0Y2hlZCcpO1xudmFyIExvYWRpbmdDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGluZ0NvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGluZ0NvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgXy5kZWZhdWx0cyh0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgIGxvYWRpbmdUeXBlOiBcInNwaW5uZXJcIixcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG9wdGlvbnMuZW50aXRpZXMgfHwgdGhpcy5nZXRFbnRpdGllcyhvcHRpb25zLnZpZXcpO1xuICAgICAgICB0aGlzLmxvYWRpbmdWaWV3ID0gdGhpcy5nZXRMb2FkaW5nVmlldygpO1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nVmlldykge1xuICAgICAgICAgICAgdGhpcy5zaG93KHRoaXMubG9hZGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLm1vbml0b3JSZWFkeVN0YXRlKG9wdGlvbnMudmlldywgdGhpcy5sb2FkaW5nVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLmdldExvYWRpbmdWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbi5jdXJyZW50Vmlldy4kZWwuY3NzKFwib3BhY2l0eVwiLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmdWaWV3ID0gbmV3IFNwaW5uZXJWaWV3LlNwaW5uZXJWaWV3KCk7XG4gICAgICAgICAgICAgICAgbG9hZGluZ1ZpZXcuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2FkaW5nVHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGluZ1ZpZXc7XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUubW9uaXRvclJlYWR5U3RhdGUgPSBmdW5jdGlvbiAocmVhbFZpZXcsIGxvYWRpbmdWaWV3KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfdmlld1JlYWR5ID0gZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgICAgICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd0Vycm9yKHJlYWxWaWV3LCBsb2FkaW5nVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zaG93UmVhbFZpZXcocmVhbFZpZXcsIGxvYWRpbmdWaWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZShyZWFsVmlldywgdGhpcywgX3ZpZXdSZWFkeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2hlbkZldGNoZWQud2hlbkZldGNoZWQodGhpcy5lbnRpdGllcywgX3ZpZXdSZWFkeSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5zaG93RXJyb3IgPSBmdW5jdGlvbiAocmVhbFZpZXcsIGxvYWRpbmdWaWV3KSB7XG4gICAgICAgIGlmIChyZWFsVmlldykge1xuICAgICAgICAgICAgcmVhbFZpZXcuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmxvYWRpbmdUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzcGlubmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVycm9yIGhhbmRsaW5lIG9uIGxvYWRpbmcgdHlwZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd1JlYWxWaWV3ID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbi5jdXJyZW50Vmlldy4kZWwucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVnaW9uLmN1cnJlbnRWaWV3ICE9PSBsb2FkaW5nVmlldyAmJiB0aGlzLnJlZ2lvbi5fbmV4dFZpZXcgIT09IGxvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxWaWV3LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoIXJlYWxWaWV3IHx8IHRoaXMub3B0aW9ucy5kZWJ1ZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhyZWFsVmlldyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5nZXRFbnRpdGllcyA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIHJldHVybiBfLmNoYWluKHZpZXcpLnBpY2soXCJtb2RlbFwiLCBcImNvbGxlY3Rpb25cIikudG9BcnJheSgpLmNvbXBhY3QoKS52YWx1ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIExvYWRpbmdDb250cm9sbGVyO1xufSkoQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcbmV4cG9ydHMuTG9hZGluZ0NvbnRyb2xsZXIgPSBMb2FkaW5nQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvYWRpbmdDb250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nQ29tcG9uZW50L0xvYWRpbmdDb250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBBbmltYXRlZFJlZ2lvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFuaW1hdGVkUmVnaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGVkUmVnaW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQW5pbWF0ZWRSZWdpb24ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgJiYgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0aW5nIG91dCcsIHRoaXMuY3VycmVudFZpZXcsIHRoaXMuZWwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KGNiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbmltYXRlZFJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZUVtcHR5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lbXB0eSgpO1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRlZFJlZ2lvbjtcbn0pKE1hcmlvbmV0dGUuUmVnaW9uKTtcbmV4cG9ydHMuQW5pbWF0ZWRSZWdpb24gPSBBbmltYXRlZFJlZ2lvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGVkUmVnaW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG52YXIgSXRlbVZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9JdGVtVmlldycpO1xudmFyIEJVVFRPTl9FVkVOVFMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCVVRUT05fRVZFTlRTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJVVFRPTl9FVkVOVFMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBCVVRUT05fRVZFTlRTLm5hdmlnYXRlID0gbmV3IEJVVFRPTl9FVkVOVFMoJ25hdmlnYXRlJyk7XG4gICAgcmV0dXJuIEJVVFRPTl9FVkVOVFM7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5CVVRUT05fRVZFTlRTID0gQlVUVE9OX0VWRU5UUztcbnZhciBCVVRUT05fVEhFTUUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCVVRUT05fVEhFTUUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlVUVE9OX1RIRU1FKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQlVUVE9OX1RIRU1FLmRlZmF1bHQgPSBuZXcgQlVUVE9OX1RIRU1FKCdkZWZhdWx0Jyk7XG4gICAgQlVUVE9OX1RIRU1FLmludmVyc2UgPSBuZXcgQlVUVE9OX1RIRU1FKCdpbnZlcnNlJyk7XG4gICAgQlVUVE9OX1RIRU1FLmFjdGlvbiA9IG5ldyBCVVRUT05fVEhFTUUoJ2FjdGlvbicpO1xuICAgIEJVVFRPTl9USEVNRS5saW5rID0gbmV3IEJVVFRPTl9USEVNRSgnbGluaycpO1xuICAgIEJVVFRPTl9USEVNRS5wcmltYXJ5ID0gbmV3IEJVVFRPTl9USEVNRSgncHJpbWFyeScpO1xuICAgIEJVVFRPTl9USEVNRS5zZWNvbmRhcnkgPSBuZXcgQlVUVE9OX1RIRU1FKCdzZWNvbmRhcnknKTtcbiAgICByZXR1cm4gQlVUVE9OX1RIRU1FO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQlVUVE9OX1RIRU1FID0gQlVUVE9OX1RIRU1FO1xudmFyIEJVVFRPTl9TSVpFID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlVUVE9OX1NJWkUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlVUVE9OX1NJWkUoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBCVVRUT05fU0laRS5kZWZhdWx0ID0gbmV3IEJVVFRPTl9TSVpFKCdkZWZhdWx0Jyk7XG4gICAgQlVUVE9OX1NJWkUuc21hbGwgPSBuZXcgQlVUVE9OX1NJWkUoJ3NtYWxsJyk7XG4gICAgQlVUVE9OX1NJWkUubGFyZ2UgPSBuZXcgQlVUVE9OX1NJWkUoJ2xhcmdlJyk7XG4gICAgcmV0dXJuIEJVVFRPTl9TSVpFO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQlVUVE9OX1NJWkUgPSBCVVRUT05fU0laRTtcbnZhciBCdXR0b25Nb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbk1vZGVsKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgICB0aGVtZTogQlVUVE9OX1RIRU1FLmRlZmF1bHQsXG4gICAgICAgICAgICBzaXplOiBCVVRUT05fU0laRS5kZWZhdWx0XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnbmFtZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ25hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwiaWNvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdpY29uJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnaWNvbicsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3RleHQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0JywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcImJsb2NrXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Jsb2NrJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnYmxvY2snLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwidGhlbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgndGhlbWUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0aGVtZScsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NpemUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdzaXplJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uTW9kZWw7XG59KShCYWNrYm9uZS5Nb2RlbCk7XG5leHBvcnRzLkJ1dHRvbk1vZGVsID0gQnV0dG9uTW9kZWw7XG52YXIgQnV0dG9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsIHx8IG5ldyBCdXR0b25Nb2RlbCh0aGlzLmRlZmF1bHRzKCkpO1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5tb2RlbC5uYW1lIHx8ICdiYXNlLWJ1dHRvbic7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL0J1dHRvbi5oYnMnKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0KSB7XG4gICAgICAgICAgICB0aGlzLnRhZ05hbWUgPSAnYnV0dG9uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFnTmFtZSA9ICdhJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXJzID0ge1xuICAgICAgICAgICAgJ2NsaWNrJzogJ2NsaWNrJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHRoaXMubmF2aWdhdGUpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lcygpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnQnV0dG9uIGJ0biBCdXR0b24tLScgKyB0aGlzLm5hbWUgKyAnQnV0dG9uJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5nZXRJY29uQ2xhc3MgPSBmdW5jdGlvbiAoaWNvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdJY29uIEljb24tLScgKyBpY29uTmFtZTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXJpYWxpemVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMubW9kZWwudG9KU09OKCk7XG4gICAgICAgIGRhdGEuaWNvbkNsYXNzID0gdGhpcy5nZXRJY29uQ2xhc3ModGhpcy5tb2RlbC5pY29uKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoQlVUVE9OX0VWRU5UUy5uYXZpZ2F0ZS52YWwsIHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNldFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLnVuc2V0Q2xhc3NOYW1lcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5pY29uKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5pY29uID0gb3B0aW9ucy5pY29uO1xuICAgICAgICBpZiAob3B0aW9ucy50ZXh0KVxuICAgICAgICAgICAgdGhpcy5tb2RlbC50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5ibG9jaykpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJsb2NrID0gb3B0aW9ucy5ibG9jaztcbiAgICAgICAgaWYgKG9wdGlvbnMudGhlbWUpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRoZW1lID0gb3B0aW9ucy50aGVtZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2l6ZSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0KVxuICAgICAgICAgICAgdGhpcy4kZWwuYXR0cigndHlwZScsICdzdWJtaXQnKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUudW5zZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuJGVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnYnRuLWxpbmsnKS5yZW1vdmVDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC50aGVtZSkucmVtb3ZlQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwuc2l6ZSk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdidG4tYmxvY2snKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuc2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwudGhlbWUpLmFkZENsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnNpemUgKyAnU2l6ZScpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC50aGVtZSA9PT0gQlVUVE9OX1RIRU1FLmxpbmspIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdidG4tbGluaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYnRuLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCdXR0b247XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJ1dHRvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lRm9ybXMgPSByZXF1aXJlKCdiYWNrYm9uZS1mb3JtcycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG52YXIgdmlld3MgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9pbmRleCcpO1xudmFyIExheW91dCA9IHZpZXdzLkxheW91dDtcbnZhciBDaGlsZEhvbGRlclZpZXcgPSB2aWV3cy5DaGlsZEhvbGRlclZpZXc7XG50ZW1wbGF0ZXMuaW5pdCgpO1xudmFyIEZvcm1WaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9ybVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybVZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnRm9ybVZpZXcnO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnZm9ybSc7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHsgcm9sZTogJ2Zvcm0nIH07XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL0Zvcm1WaWV3LmhicycpO1xuICAgICAgICB0aGlzLnJlZ2lvbnMgPSB7XG4gICAgICAgICAgICBmaWVsZHNSZWdpb246ICcuRm9ybVZpZXdfX2ZpZWxkc1JlZ2lvbicsXG4gICAgICAgICAgICBidXR0b25zUmVnaW9uOiAnLkZvcm1WaWV3X19idXR0b25zUmVnaW9uJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhcnNlSWNvblByb3BlcnRpZXMob3B0aW9ucy5zY2hlbWEpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ0Zvcm1TdGFja2VkJyk7XG4gICAgICAgIHRoaXMuZmllbGRzID0gbmV3IEJhY2tib25lRm9ybXMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYnV0dG9uc0hvbGRlciA9IG5ldyBDaGlsZEhvbGRlclZpZXcuR2VuZXJpY0NoaWxkSG9sZGVyVmlldygpO1xuICAgIH1cbiAgICBGb3JtVmlldy5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZpZWxkcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICAgIHRoaXMuZmllbGRzID0gbnVsbDtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZmllbGRzUmVnaW9uLnNob3codGhpcy5maWVsZHMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNSZWdpb24uc2hvdyh0aGlzLmJ1dHRvbnNIb2xkZXIpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnBhcnNlSWNvblByb3BlcnRpZXMgPSBmdW5jdGlvbiAoc2NoZW1hKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEsIGZ1bmN0aW9uIChzY2hlbWFJdGVtKSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1hSXRlbS5pY29uKSB7XG4gICAgICAgICAgICAgICAgc2NoZW1hSXRlbS50aXRsZSA9ICc8aSBjbGFzcz1cImZhIGZhLScgKyBzY2hlbWFJdGVtLmljb24gKyAnXCI+PC9pPic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLmRpc2FibGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcyhGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuZW5hYmxlRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMudmFsaWRhdGUoKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuZ2V0VmFsdWUocHJvcGVydHkpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRzLnNldFZhbHVlKHByb3BlcnRpZXMpO1xuICAgIH07XG4gICAgRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MgPSAnRm9ybVZpZXctLWRpc2FibGVkJztcbiAgICByZXR1cm4gRm9ybVZpZXc7XG59KShMYXlvdXQuTGF5b3V0KTtcbmV4cG9ydHMuRm9ybVZpZXcgPSBGb3JtVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvVmlldycpO1xudmFyIFNwaW4gPSByZXF1aXJlKCdzcGluJyk7XG52YXIgU3Bpbm5lclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTcGlubmVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTcGlubmVyVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdTcGlubmVyVmlldyc7XG4gICAgICAgIHRoaXMubG9hZGluZ0RlbGF5ID0gMTAwMDtcbiAgICAgICAgdGhpcy5sb2FkaW5nQ2xhc3MgPSAnU3Bpbm5lclZpZXctLXNwaW5uaW5nJztcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIFNwaW5uZXJWaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH07XG4gICAgU3Bpbm5lclZpZXcucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy4kZWwuYWRkQ2xhc3MoX3RoaXMubG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmdTcGlubmVyID0gbmV3IFNwaW4oU3Bpbm5lclZpZXcuc3Bpbk9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZ1NwaW5uZXIuc3BpbihfdGhpcy4kZWxbMF0pO1xuICAgICAgICB9LCB0aGlzLmxvYWRpbmdEZWxheSk7XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nU3Bpbm5lcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3Bpbm5lci5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5zcGluT3B0aW9ucyA9IHtcbiAgICAgICAgbGluZXM6IDEzLFxuICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIHdpZHRoOiAyLFxuICAgICAgICByYWRpdXM6IDUsXG4gICAgICAgIGNvcm5lcnM6IDEsXG4gICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICB0cmFpbDogNjAsXG4gICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgIGh3YWNjZWw6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogXCJTcGlubmVyVmlld19fc3Bpbm5lciBhbmltYXRlZCBib3VuY2VJblwiLFxuICAgICAgICB6SW5kZXg6IDJlOSxcbiAgICAgICAgdG9wOiBcIjMwcHhcIixcbiAgICAgICAgbGVmdDogXCJhdXRvXCJcbiAgICB9O1xuICAgIHJldHVybiBTcGlubmVyVmlldztcbn0pKFZpZXcuVmlldyk7XG5leHBvcnRzLlNwaW5uZXJWaWV3ID0gU3Bpbm5lclZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TcGlubmVyVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBTcGlubmVyVmlldyA9IHJlcXVpcmUoJy4uL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG52YXIgTm90aWNlVmlld01vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90aWNlVmlld01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdGljZVZpZXdNb2RlbCgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXI6ICcnLFxuICAgICAgICAgICAgYm9keTogJycsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGNhbkRpc21pc3M6IHRydWVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImhlYWRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdoZWFkZXInKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdoZWFkZXInLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImJvZHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnYm9keScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2JvZHknLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImJ1dHRvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnYnV0dG9ucycpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJjYW5EaXNtaXNzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2NhbkRpc21pc3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjYW5EaXNtaXNzJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJsb2FkaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdsb2FkaW5nJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm90aWNlVmlld01vZGVsO1xufSkoQmFja2JvbmUuTW9kZWwpO1xuZXhwb3J0cy5Ob3RpY2VWaWV3TW9kZWwgPSBOb3RpY2VWaWV3TW9kZWw7XG52YXIgTm90aWNlVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdGljZVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90aWNlVmlldyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMubmFtZSA9ICdOb3RpY2VWaWV3JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbm90aWNlLmhicycpO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnc2VjdGlvbic7XG4gICAgICAgIHRoaXMudWkgPSB7XG4gICAgICAgICAgICBidXR0b25zOiAnLk5vdGljZVZpZXdfX2J0bnMnXG4gICAgICAgIH07XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5tb2RlbCB8fCBuZXcgTm90aWNlVmlld01vZGVsKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5oZWFkZXIgPSBvcHRpb25zLmhlYWRlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zID0gb3B0aW9ucy5idXR0b25zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxvYWRpbmcgPSBvcHRpb25zLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMuY2FuRGlzbWlzcykpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2FuRGlzbWlzcyA9IG9wdGlvbnMuY2FuRGlzbWlzcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2UnLCB0aGlzLnJlbmRlcik7XG4gICAgfVxuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2xvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldyA9IG5ldyBTcGlubmVyVmlldy5TcGlubmVyVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLl9sb2FkaW5nVmlldy5lbCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbG9hZGluZycpKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuYnV0dG9ucy5lbXB0eSgpO1xuICAgICAgICB0aGlzLm1vZGVsLmdldCgnYnV0dG9ucycpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgYnRuLnJlbmRlcigpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuVG8oYnRuLCAnY2xpY2snLCBfdGhpcy5vbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICAgICAgX3RoaXMudWkuYnV0dG9ucy5hcHBlbmQoYnRuLmVsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5jYW5EaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXQoJ2NhbkRpc21pc3MnKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWwuc2hvdygpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQocHJvcGVydGllcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmRlc3Ryb3lCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBidG4uZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5vbkJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoJ2J1dHRvbjpjbGlja2VkJyk7XG4gICAgfTtcbiAgICByZXR1cm4gTm90aWNlVmlldztcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuTm90aWNlVmlldyA9IE5vdGljZVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpY2VWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L05vdGljZVZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xuZnVuY3Rpb24gaW5pdENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICAgIGlmICghY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyByZXF1aXJlcyBoYW5kbGViYXJzIHRvIGhhdmUgYmVlbiBwYXNzZWQgaW4gdG8gY29uZmlndXJlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudENvbnRyb2xsZXIobmFtZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgQ29udHJvbGxlciA9IGNvbXBvbmVudHNbbmFtZV07XG4gICAgICAgIGlmIChDb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xsZXIoe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBjb250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIFwiICsgbmFtZSArIFwiIGNvbXBvbmVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgPT09IHZvaWQgMCkgeyBhdHRyaWJ1dGVzID0ge307IH1cbiAgICAgICAgdmFyIGF0dHIgPSBfLm1hcChhdHRyaWJ1dGVzIHx8IHt9LCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcgJyArIGF0dHIuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsYXNzTmFtZShuYW1lLCBoYXNoKSB7XG4gICAgICAgIHZhciBjbGFzc2VzO1xuICAgICAgICBpZiAoaGFzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYXNoID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsYXNzTmFtZSBtdXN0IHNwZWNpZnkgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2hbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGhhc2hbXCJjbGFzc1wiXS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMudW5zaGlmdChuYW1lKTtcbiAgICAgICAgcmV0dXJuIGhhc2hbXCJjbGFzc1wiXSA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2MnLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IGdldENvbXBvbmVudENvbnRyb2xsZXIobmFtZSwgdGhpcyk7XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLnJlbmRlcihvcHRpb25zKTtcbiAgICB9KTtcbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2luX3JlZ2lvbicsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgZm46IG9wdGlvbnMuZm5cbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ3JlZ2lvbicsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRQYXRoID0gXCJcIiArIHRoaXMuX2NvbXBvbmVudE5hbWUgKyBcIl9fXCIgKyBuYW1lO1xuICAgICAgICB2YXIgaW5fcmVnaW9uID0gdGhpcy5fcmVnaW9uc1tuYW1lXTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBpbl9yZWdpb24gPyBpbl9yZWdpb24uZm4odGhpcykgOiAnJztcbiAgICAgICAgdmFyIGhhc2ggPSBvcHRpb25zLmhhc2ggfHwge307XG4gICAgICAgIGNsYXNzTmFtZShcIlwiICsgY29tcG9uZW50UGF0aCArIFwiLXJlZ2lvblwiLCBoYXNoKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBnZXRBdHRyaWJ1dGVzKGhhc2gpO1xuICAgICAgICByZXR1cm4gWyc8ZGl2JywgYXR0cmlidXRlcywgJz4nLCBjb250ZW50LCBcIjwvZGl2PlwiXS5qb2luKCcnKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaW5pdENvbXBvbmVudHMgPSBpbml0Q29tcG9uZW50cztcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudHMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2NvbXBvbmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIGkxOG5leHQgPSByZXF1aXJlKCdpMThuZXh0Jyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY2xpZW50Jyk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8qKlxuICAgICAqIEdldCB0cmFuc2xhdGlvbiBmb3IgYSBnaXZlbiBrZXksIHBhc3NpbmcgdGhlIG9wdGlvbnMgaGFzaCB0byBpMThuZXh0XG4gICAgICogdG8gYWxsb3cgZm9yIHZhcmlhYmxlIHJlcGxhY2VtZW50XG4gICAgICoge3trIGhlYWRlciBteVZhcj1cImhlbGxvXCJ9fVxuICAgICAqL1xuICAgIGNvbmZpZy5jb25maWcuaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcInRcIiwgZnVuY3Rpb24gKGkxOG5fa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgd3JhcFdpdGhLZXk6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgXy5leHRlbmQob3B0cywgb3B0aW9ucy5oYXNoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGkxOG5leHQudChpMThuX2tleSwgb3B0cyk7XG4gICAgICAgIHZhciBhdHRycyA9IFtcImRhdGEtdD1cXFwiXCIgKyBpMThuX2tleSArIFwiXFxcIlwiXTtcbiAgICAgICAgXy5lYWNoKG9wdHMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcodmFsIHx8IF8uaXNGaW5pdGUodmFsKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cnMucHVzaChcImRhdGEtXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0c1snd3JhcFdpdGhLZXknXSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gXCIgKyAoYXR0cnMuam9pbignICcpKSArIFwiPlwiICsgKG5ldyBIYW5kbGViYXJzLlNhZmVTdHJpbmcocmVzdWx0KSkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSGFuZGxlYmFycy5TYWZlU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGlvbiBpbiBhIGJsb2NrIGNvbnRleHRcbiAgICAgKi9cbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJ0clwiLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IGkxOG5leHQuZnVuY3Rpb25zLmV4dGVuZChvcHRpb25zLmhhc2gsIGNvbnRleHQpO1xuICAgICAgICBpZiAob3B0aW9ucy5mbikge1xuICAgICAgICAgICAgb3B0cy5kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmZuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBpMThuZXh0LnQob3B0cy5rZXksIG9wdHMpO1xuICAgICAgICByZXR1cm4gbmV3IEhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWkxOG5leHQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2kxOG5leHQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBBUFBfUk9VVEVSX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFQUF9ST1VURVJfRVZFTlRTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFQUF9ST1VURVJfRVZFTlRTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQVBQX1JPVVRFUl9FVkVOVFMuZmlyc3RSb3V0ZSA9IG5ldyBBUFBfUk9VVEVSX0VWRU5UUygnZmlyc3RSb3V0ZScpO1xuICAgIHJldHVybiBBUFBfUk9VVEVSX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkFQUF9ST1VURVJfRVZFTlRTID0gQVBQX1JPVVRFUl9FVkVOVFM7XG52YXIgQXBwUm91dGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwUm91dGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcFJvdXRlcihvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZygnQXBwUm91dGVyICcgKyBvcHRpb25zLm5hbWUgKyAnIGNyZWF0ZWQnLCBvcHRpb25zLmFwcFJvdXRlcyk7XG4gICAgfVxuICAgIEFwcFJvdXRlci5wcm90b3R5cGUub25Sb3V0ZSA9IGZ1bmN0aW9uIChyb3V0ZU5hbWUsIHJvdXRlUGF0aCwgcm91dGVBcmdzKSB7XG4gICAgICAgIGlmIChBcHBSb3V0ZXIuX2ZpcnN0Um91dGVUcmlnZ2VyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcihBUFBfUk9VVEVSX0VWRU5UUy5maXJzdFJvdXRlLnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBcHBSb3V0ZXIuX2ZpcnN0Um91dGVUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXBwUm91dGVyO1xufSkoTWFyaW9uZXR0ZS5BcHBSb3V0ZXIpO1xuZXhwb3J0cy5BcHBSb3V0ZXIgPSBBcHBSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb3V0ZXJzL0FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgU2hvd2Rvd24gPSByZXF1aXJlKCdzaG93ZG93bicpO1xudmFyIG1kb3duID0gbmV3IFNob3dkb3duLmNvbnZlcnRlcigpO1xuZXhwb3J0cy5zZWxlY3RvciA9ICdbZGF0YS1tZG93bl0nO1xuZXhwb3J0cy51cGRhdGVNZXRob2QgPSAnaHRtbCc7XG5mdW5jdGlvbiBvbkdldCh2YWwpIHtcbiAgICByZXR1cm4gbWRvd24ubWFrZUh0bWwodmFsKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1kb3duLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RpY2tpdC9tZG93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgQWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY3Rpb24odHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uO1xufSkoKTtcbmV4cG9ydHMuQWN0aW9uID0gQWN0aW9uO1xudmFyIEFjdGlvbkNyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFjdGlvbkNyZWF0b3IoZGlzcGF0Y2hlcikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uQ3JlYXRvcjtcbn0pKCk7XG5leHBvcnRzLkFjdGlvbkNyZWF0b3IgPSBBY3Rpb25DcmVhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWN0aW9ucy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvYWN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcmZhY2VzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9pbnRlcmZhY2VzLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIGZsdXggPSByZXF1aXJlKCdmbHV4Jyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG52YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BhdGNoZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXlsb2FkUXVldWUgPSBbXTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnJlZ2lzdGVyU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMucHVzaChzdG9yZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUpKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoUGF5bG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB0aGlzLnBheWxvYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzcGF0Y2hpbmc6JywgcGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlTdG9yZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFBheWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUubm90aWZ5U3RvcmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5ub3RpZnlJZlN0YXRlQ2hhbmdlZCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVBheWxvYWQgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB0aGlzLnBheWxvYWRRdWV1ZS5wdXNoKHBheWxvYWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnRGlzcGF0Y2hlcjogSGFuZGxpbmcnLCBwYXlsb2FkKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc3BhdGNoaW5nKVxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFBheWxvYWQoKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVNlcnZlckFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGNvbnN0YW50cy5BQ1RJT05fU09VUkNFUy5TZXJ2ZXJBY3Rpb24sXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBheWxvYWQocGF5bG9hZCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVEZXZpY2VBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb25zdGFudHMuQUNUSU9OX1NPVVJDRVMuRGV2aWNlQWN0aW9uLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlVmlld0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGNvbnN0YW50cy5BQ1RJT05fU09VUkNFUy5WaWV3QWN0aW9uLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgcmV0dXJuIERpc3BhdGNoZXI7XG59KShmbHV4LkRpc3BhdGNoZXIpO1xuZXhwb3J0cy5EaXNwYXRjaGVyID0gRGlzcGF0Y2hlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpc3BhdGNoZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L0Rpc3BhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG52YXIgRXZlbnRlZENsYXNzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL0V2ZW50ZWRDbGFzcycpO1xudmFyIFN0b3JlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3RvcmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3RvcmUoZGlzcGF0Y2hlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5kaXNwYXRjaFRva2VuID0gZGlzcGF0Y2hlci5yZWdpc3RlclN0b3JlKHRoaXMpO1xuICAgIH1cbiAgICBTdG9yZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLm5vdGlmeUlmU3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZUhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVIYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoY29uc3RhbnRzLkVWRU5UX1RZUEVTLkNoYW5nZS52YWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUuYWRkQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihjb25zdGFudHMuRVZFTlRfVFlQRVMuQ2hhbmdlLnZhbCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLnJlbW92ZUNoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2ZmKGNvbnN0YW50cy5FVkVOVF9UWVBFUy5DaGFuZ2UudmFsLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmU7XG59KShFdmVudGVkQ2xhc3MuRXZlbnRlZENsYXNzKTtcbmV4cG9ydHMuU3RvcmUgPSBTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0b3JlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9TdG9yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIE5hdmlnYXRpb25Db250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTmF2aWdhdGlvbkNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTmF2aWdhdGlvbkNvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmhpc3RvcnlJc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgTmF2aWdhdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLnRvID0gZnVuY3Rpb24gKHJvdXRlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUocm91dGUsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ25hdmlnYXRlZCcsIHJvdXRlKTtcbiAgICB9O1xuICAgIE5hdmlnYXRpb25Db250cm9sbGVyLnByb3RvdHlwZS5nZXRDdXJyZW50Um91dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmcmFnID0gQmFja2JvbmUuaGlzdG9yeS5nZXRGcmFnbWVudCgpO1xuICAgICAgICBpZiAoXy5pc0VtcHR5KGZyYWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOYXZpZ2F0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuc3RhcnRIaXN0b3J5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKEJhY2tib25lLmhpc3RvcnkpIHtcbiAgICAgICAgICAgIEJhY2tib25lLmhpc3Rvcnkuc3RhcnQob3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnlJc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTmF2aWdhdGlvbkNvbnRyb2xsZXI7XG59KShNYXJpb25ldHRlLkNvbnRyb2xsZXIpO1xuZXhwb3J0cy5OYXZpZ2F0aW9uQ29udHJvbGxlciA9IE5hdmlnYXRpb25Db250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF2aWdhdGlvbkNvbnRyb2xsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgVmlldyA9IHJlcXVpcmUoJy4vVmlldycpO1xudmFyIENoaWxkSG9sZGVyVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoaWxkSG9sZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGlsZEhvbGRlclZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IEJhY2tib25lLkNoaWxkVmlld0NvbnRhaW5lcigpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmlldywgaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdiZWZvcmU6YWRkOmNoaWxkJywgdmlldyk7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBjaGlsZCB2aWV3IGl0c2VsZiBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAgICAgLy8gcmVtb3ZlIGFuZC9vciBkZXN0cm95IGl0IGxhdGVyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uYWRkKHZpZXcpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHZpZXcsICdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudmlld0Rlc3Ryb3llZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRWaWV3KHZpZXcsIGluZGV4KTtcbiAgICAgICAgTWFyaW9uZXR0ZS50cmlnZ2VyTWV0aG9kLmNhbGwodmlldywgJ3Nob3cnKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdhZGQ6Y2hpbGQnLCB2aWV3KTtcbiAgICB9O1xuICAgIC8vIHJlbmRlciB0aGUgY2hpbGQgdmlld1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUucmVuZGVyQ2hpbGRWaWV3ID0gZnVuY3Rpb24gKHZpZXcsIGluZGV4KSB7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoSHRtbCh2aWV3LCBpbmRleCk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLnZpZXdEZXN0cm95ZWQgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZSh2aWV3KTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuYXR0YWNoSHRtbCA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodmlldy5lbCk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5jYWxsKCdyZW5kZXInKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmNhbGwoJ2Rlc3Ryb3knKTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hpbGRIb2xkZXJWaWV3O1xufSkoVmlldy5WaWV3KTtcbmV4cG9ydHMuQ2hpbGRIb2xkZXJWaWV3ID0gQ2hpbGRIb2xkZXJWaWV3O1xudmFyIEdlbmVyaWNDaGlsZEhvbGRlclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHZW5lcmljQ2hpbGRIb2xkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdlbmVyaWNDaGlsZEhvbGRlclZpZXcoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gR2VuZXJpY0NoaWxkSG9sZGVyVmlldztcbn0pKENoaWxkSG9sZGVyVmlldyk7XG5leHBvcnRzLkdlbmVyaWNDaGlsZEhvbGRlclZpZXcgPSBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hpbGRIb2xkZXJWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvQ2hpbGRIb2xkZXJWaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpZXcucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVmlldy5wcm90b3R5cGUuZ2V0VWkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpW2tleV07XG4gICAgfTtcbiAgICBWaWV3LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBWaWV3LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVmlldztcbn0pKE1hcmlvbmV0dGUuVmlldyk7XG5leHBvcnRzLlZpZXcgPSBWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL1ZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBJdGVtVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEl0ZW1WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEl0ZW1WaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBJdGVtVmlldy5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSXRlbVZpZXcucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSXRlbVZpZXcucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSXRlbVZpZXc7XG59KShNYXJpb25ldHRlLkl0ZW1WaWV3KTtcbmV4cG9ydHMuSXRlbVZpZXcgPSBJdGVtVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUl0ZW1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvSXRlbVZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBMYXlvdXQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYXlvdXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGF5b3V0KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGF5b3V0LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIExheW91dC5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgTGF5b3V0LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGF5b3V0O1xufSkoTWFyaW9uZXR0ZS5MYXlvdXRWaWV3KTtcbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGF5b3V0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvTGF5b3V0LmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTGlzdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlzdChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpc3QucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTGlzdC5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMaXN0O1xufSkoTWFyaW9uZXR0ZS5Db21wb3NpdGVWaWV3KTtcbmV4cG9ydHMuTGlzdCA9IExpc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MaXN0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvTGlzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTRfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU1X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhY2tib25lXCJcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU2X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhY2tib25lLWZvcm1zXCJcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU3X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNwaW5cIlxuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNThfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaTE4bmV4dFwiXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81OV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzaG93ZG93blwiXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82MF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmbHV4XCJcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbi8qKlxuICogSW5jbHVkZSB0aGlzIHRlbXBsYXRlIGZpbGUgYWZ0ZXIgYmFja2JvbmUtZm9ybXMuYW1kLmpzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRlbXBsYXRlc1xuICpcbiAqICdkYXRhLSonIGF0dHJpYnV0ZXMgY29udHJvbCB3aGVyZSBlbGVtZW50cyBhcmUgcGxhY2VkXG4gKi9cbnZhciBGb3JtID0gcmVxdWlyZSgnYmFja2JvbmUtZm9ybXMnKTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgRm9ybS50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJzxkaXYgZGF0YS1maWVsZHNldHM+PC9kaXY+Jyk7XG4gICAgRm9ybS5GaWVsZHNldC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gIDxmaWVsZHNldCBkYXRhLWZpZWxkcz5cXFxuICAgIDwlIGlmIChsZWdlbmQpIHsgJT5cXFxuICAgICAgPGxlZ2VuZD48JT0gbGVnZW5kICU+PC9sZWdlbmQ+XFxcbiAgICA8JSB9ICU+XFxcbiAgPC9maWVsZHNldD5cXFxuJyk7XG4gICAgRm9ybS5GaWVsZC50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRm9ybUZpZWxkLmhicycpO1xuICAgIEZvcm0uTmVzdGVkRmllbGQudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICA8ZGl2IGNsYXNzPVwiZmllbGQtPCU9IGtleSAlPlwiPlxcXG4gICAgPGRpdiB0aXRsZT1cIjwlPSB0aXRsZSAlPlwiIGNsYXNzPVwiaW5wdXQteGxhcmdlXCI+XFxcbiAgICAgIDxzcGFuIGRhdGEtZWRpdG9yPjwvc3Bhbj5cXFxuICAgICAgPGRpdiBjbGFzcz1cImhlbHAtaW5saW5lXCIgZGF0YS1lcnJvcj48L2Rpdj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIj48JT0gaGVscCAlPjwvZGl2PlxcXG4gIDwvZGl2PlxcXG4nKTtcbiAgICBGb3JtLkZpZWxkLmVycm9yQ2xhc3NOYW1lID0gJ0Zvcm1Hcm91cC0taGFzRXJyb3InO1xuICAgIGlmIChGb3JtLmVkaXRvcnMuTGlzdCkge1xuICAgICAgICBGb3JtLmVkaXRvcnMuTGlzdC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gICAgPGRpdiBjbGFzcz1cImJiZi1saXN0XCI+XFxcbiAgICAgIDx1bCBjbGFzcz1cInVuc3R5bGVkIGNsZWFyZml4XCIgZGF0YS1pdGVtcz48L3VsPlxcXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBiYmYtYWRkXCIgZGF0YS1hY3Rpb249XCJhZGRcIj5BZGQ8L2J1dHRvbj5cXFxuICAgIDwvZGl2PlxcXG4gICcpO1xuICAgICAgICBGb3JtLmVkaXRvcnMuTGlzdC5JdGVtLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgICA8bGkgY2xhc3M9XCJjbGVhcmZpeFwiPlxcXG4gICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCIgZGF0YS1lZGl0b3I+PC9kaXY+XFxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJiZi1kZWxcIiBkYXRhLWFjdGlvbj1cInJlbW92ZVwiPiZ0aW1lczs8L2J1dHRvbj5cXFxuICAgIDwvbGk+XFxcbiAgJyk7XG4gICAgICAgIEZvcm0uZWRpdG9ycy5MaXN0Lk9iamVjdC50ZW1wbGF0ZSA9IEZvcm0uZWRpdG9ycy5MaXN0Lk5lc3RlZE1vZGVsLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgICA8ZGl2IGNsYXNzPVwiYmJmLWxpc3QtbW9kYWxcIj48JT0gc3VtbWFyeSAlPjwvZGl2PlxcXG4gICcpO1xuICAgIH1cbn1cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L3RlbXBsYXRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgRXZlbnRlZENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudGVkQ2xhc3MoKSB7XG4gICAgfVxuICAgIHJldHVybiBFdmVudGVkQ2xhc3M7XG59KSgpO1xuZXhwb3J0cy5FdmVudGVkQ2xhc3MgPSBFdmVudGVkQ2xhc3M7XG5fLmV4dGVuZChFdmVudGVkQ2xhc3MucHJvdG90eXBlLCBCYWNrYm9uZS5FdmVudHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnRlZENsYXNzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL0V2ZW50ZWRDbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubWVzc2FnZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWVzc2FnZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwibWVzc2FnZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC5oYnNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gXCI8c3BhbiBjbGFzcz1cXFwiQnV0dG9uX19pY29uXFxcIj48ZGl2IGNsYXNzPVxcXCJcIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWNvbkNsYXNzIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pY29uQ2xhc3MgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImljb25DbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvZGl2Pjwvc3Bhbj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXI7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWNvbkNsYXNzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50ZXh0IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50ZXh0IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJ0ZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaGJzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fZmllbGRzUmVnaW9uXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fYnV0dG9uc1JlZ2lvblxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2Rpc2FibGVcXFwiPjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3Lmhic1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImhlYWRpbmcgaGVhZGluZy0tbm90aWNlIGFuaW1hdGVkIGJvdW5jZUluXFxcIj5cXG4gICAgPGgxPlwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5oZWFkZXIgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlYWRlciA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaGVhZGVyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDE+XFxuICAgIDxwPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYm9keSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYm9keSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiYm9keVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9wPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIk5vdGljZVZpZXdfX2J0bnNcXFwiPjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvbm90aWNlLmhic1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiICAgIDxwIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2hlbHBNZXNzYWdlXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmhlbHAgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlbHAgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImhlbHBcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvcD5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMj1cImZ1bmN0aW9uXCI7XG5cbiAgcmV0dXJuIFwiPGRpdlxcbiAgY2xhc3M9XFxcIkZvcm1Hcm91cCBGb3JtR3JvdXAtLVwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5rZXkgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwia2V5XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuICA8bGFiZWwgY2xhc3M9XFxcIkZvcm1Hcm91cF9fbGFiZWxcXFwiIGZvcj1cXFwiXCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5lZGl0b3JJZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZWRpdG9ySWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImVkaXRvcklkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9sYWJlbD5cXG4gIDxzcGFuIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2NvbnRyb2xcXFwiIGRhdGEtZWRpdG9yPjwvc3Bhbj5cXG4gIDxwIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2Vycm9yTWVzc2FnZVxcXCIgZGF0YS1lcnJvcj48L3A+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVscCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtRmllbGQuaGJzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82OF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCJcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==