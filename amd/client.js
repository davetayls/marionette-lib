define("marionette_lib", ["underscore","backbone.marionette","jquery","backbone","handlebars","spin","q","backbone-forms","i18next","showdown","flux"], function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_61__) { return /******/ (function(modules) { // webpackBootstrap
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
	var Marionette = __webpack_require__(3);
	exports.config = __webpack_require__(4);
	function configure(options) {
	    return exports.config.config.configure(options);
	}
	exports.configure = configure;
	;
	exports.behaviors = __webpack_require__(11);
	Marionette.Behaviors.behaviorsLookup = function () {
	    return exports.behaviors;
	};
	exports.components = __webpack_require__(14);
	exports.constants = __webpack_require__(30);
	exports.Exceptions = __webpack_require__(43);
	exports.interfaces = __webpack_require__(44);
	var _Api = __webpack_require__(45);
	var _App = __webpack_require__(20);
	var _Base = __webpack_require__(21);
	var _Component = __webpack_require__(46);
	var _Router = __webpack_require__(47);
	var _Static = __webpack_require__(1);
	var controllers;
	(function (controllers) {
	    controllers.Api = _Api;
	    controllers.App = _App;
	    controllers.Base = _Base;
	    controllers.Component = _Component;
	    controllers.Router = _Router;
	    controllers.Static = _Static;
	})(controllers = exports.controllers || (exports.controllers = {}));
	exports.handlebars = __webpack_require__(48);
	exports.routers = __webpack_require__(52);
	exports.stickit = __webpack_require__(54);
	exports.flux = __webpack_require__(57);
	exports.DebouncedDocContainer = __webpack_require__(64);
	var _whenFetched = __webpack_require__(26);
	exports.whenFetched = _whenFetched.whenFetched;
	exports.navigation = __webpack_require__(65);
	exports.registry = __webpack_require__(22);
	exports.urlUtils = __webpack_require__(67);
	exports.preventSelectionCallout = __webpack_require__(68);
	exports.views = __webpack_require__(36);
	//# sourceMappingURL=client.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(2);
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
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var sync = __webpack_require__(5);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var $ = __webpack_require__(6);
	var Backbone = __webpack_require__(7);
	var _ = __webpack_require__(2);
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
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Marionette = __webpack_require__(3);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var Backbone, Marionette, _, _close, _getEl, _getName, _show;
	
	_ = __webpack_require__(2);
	
	Backbone = __webpack_require__(7);
	
	Marionette = __webpack_require__(3);
	
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Marionette, _;
	
	_ = __webpack_require__(2);
	
	Marionette = __webpack_require__(3);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var _Modifiers = __webpack_require__(12);
	var _Scrollables = __webpack_require__(13);
	exports.Modifiers = _Modifiers.ModifiersBehavior;
	exports.Scrollables = _Scrollables.ScrollablesBehavior;
	//# sourceMappingURL=index.js.map

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
	var Marionette = __webpack_require__(3);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var Marionette = __webpack_require__(3);
	var $ = __webpack_require__(6);
	var globalStateInitialized = false;
	var SCROLLABLE_CLASS = 'Scrollables__container';
	function initGlobalScrollableState() {
	    globalStateInitialized = true;
	    // Disable scroll for the document, we'll handle it ourselves
	    $(document).on("touchmove", function (e) {
	        e.preventDefault();
	    });
	    $(document.body)
	        .addClass('Scrollables--attached')
	        .on("touchstart", "." + SCROLLABLE_CLASS, function (e) {
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
	    })
	        .on("touchmove", "." + SCROLLABLE_CLASS, function (e) {
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var _Alert = __webpack_require__(15);
	var _Loading = __webpack_require__(19);
	exports.Alert = _Alert.AlertComponent;
	exports.AnimatedRegion = __webpack_require__(28);
	exports.Button = __webpack_require__(29);
	exports.FormView = __webpack_require__(32);
	exports.SpinnerView = __webpack_require__(23);
	exports.Loading = _Loading.LoadingController;
	exports.NoticeView = __webpack_require__(41);
	//# sourceMappingURL=index.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var ItemView = __webpack_require__(16);
	var AlertComponent = (function (_super) {
	    __extends(AlertComponent, _super);
	    function AlertComponent(options) {
	        this.name = 'alert';
	        this.template = __webpack_require__(17);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(3);
	var ItemView = (function (_super) {
	    __extends(ItemView, _super);
	    function ItemView(options) {
	        this.behaviors = this.behaviors || {};
	        this.behaviors['Modifiers'] = {};
	        _super.call(this, options);
	    }
	    ItemView.prototype.defaults = function () { };
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(18);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
	    + "\n";
	},"useData":true});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var AppController = __webpack_require__(20);
	var SpinnerView = __webpack_require__(23);
	var whenFetched = __webpack_require__(26);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var BaseController = __webpack_require__(21);
	var clientConfig = __webpack_require__(4);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var registry = __webpack_require__(22);
	var Marionette = __webpack_require__(3);
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
	        var _t = this;
	        this.listenTo(instance, "all", function () {
	            var args = Array.prototype.slice.call(arguments);
	            var rootEvent = args[0];
	            if (prefix) {
	                args[0] = prefix + ":" + rootEvent;
	            }
	            args.push(instance);
	            Marionette.triggerMethod.apply(_t, args);
	        });
	    };
	    return BaseController;
	})(Marionette.Controller);
	exports.BaseController = BaseController;
	//# sourceMappingURL=Base.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(2);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var View = __webpack_require__(24);
	var Spin = __webpack_require__(25);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(3);
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
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Q = __webpack_require__(27);
	var _ = __webpack_require__(2);
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
/* 27 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var Marionette = __webpack_require__(3);
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Backbone = __webpack_require__(7);
	var constants = __webpack_require__(30);
	var ItemView = __webpack_require__(16);
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
	        get: function () { return this.get('name'); },
	        set: function (value) { this.set('name', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "icon", {
	        get: function () { return this.get('icon'); },
	        set: function (value) { this.set('icon', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "text", {
	        get: function () { return this.get('text'); },
	        set: function (value) { this.set('text', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "block", {
	        get: function () { return this.get('block'); },
	        set: function (value) { this.set('block', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "theme", {
	        get: function () { return this.get('theme'); },
	        set: function (value) { this.set('theme', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonModel.prototype, "size", {
	        get: function () { return this.get('size'); },
	        set: function (value) { this.set('size', value); },
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
	        this.template = __webpack_require__(31);
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
	        get: function () { return this.model.text; },
	        set: function (value) { this.model.text = value; },
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
	        this.$el
	            .removeClass('btn-link')
	            .removeClass('Button--' + this.model.theme)
	            .removeClass('Button--' + this.model.size);
	        this.$el.removeClass('btn-block');
	    };
	    Button.prototype.setClassNames = function () {
	        this.$el
	            .addClass('Button--' + this.model.theme)
	            .addClass('Button--' + this.model.size + 'Size');
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../typings/tsd.d.ts"/>
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var StringConstant = (function () {
	    function StringConstant(val) {
	        this.val = val;
	    }
	    StringConstant.prototype.toString = function () { return this.val; };
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(18);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var BackboneForms = __webpack_require__(33);
	var templates = __webpack_require__(34);
	var constants = __webpack_require__(30);
	var views = __webpack_require__(36);
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
	        this.template = __webpack_require__(40);
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
/* 33 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../typings/tsd.d.ts"/>
	/**
	 * Include this template file after backbone-forms.amd.js to override the default templates
	 *
	 * 'data-*' attributes control where elements are placed
	 */
	var Form = __webpack_require__(33);
	var _ = __webpack_require__(2);
	function init() {
	    Form.template = _.template('<div data-fieldsets></div>');
	    Form.Fieldset.template = _.template('\
	  <fieldset data-fields>\
	    <% if (legend) { %>\
	      <legend><%= legend %></legend>\
	    <% } %>\
	  </fieldset>\
	');
	    Form.Field.template = __webpack_require__(35);
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(18);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports.ChildHolderView = __webpack_require__(37);
	exports.View = __webpack_require__(24);
	exports.ItemView = __webpack_require__(16);
	exports.Layout = __webpack_require__(38);
	exports.List = __webpack_require__(39);
	//# sourceMappingURL=index.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Backbone = __webpack_require__(7);
	var Marionette = __webpack_require__(3);
	var View = __webpack_require__(24);
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(3);
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(3);
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(18);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "\n<div class=\"FormView__fieldsRegion\"></div>\n<div class=\"FormView__buttonsRegion\"></div>\n<div class=\"FormView__disable\"></div>\n";
	},"useData":true});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Backbone = __webpack_require__(7);
	var ItemView = __webpack_require__(16);
	var SpinnerView = __webpack_require__(23);
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
	        get: function () { return this.get('header'); },
	        set: function (value) { this.set('header', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "body", {
	        get: function () { return this.get('body'); },
	        set: function (value) { this.set('body', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "buttons", {
	        get: function () { return this.get('buttons'); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "canDismiss", {
	        get: function () { return this.get('canDismiss'); },
	        set: function (value) { this.set('canDismiss', value); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoticeViewModel.prototype, "loading", {
	        get: function () { return this.get('loading'); },
	        set: function (value) { this.set('loading', value); },
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
	        this.template = __webpack_require__(42);
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(18);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "<div class=\"heading heading--notice animated bounceIn\">\n    <h1>"
	    + this.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper)))
	    + "</h1>\n    <p>"
	    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</p>\n</div>\n<div class=\"NoticeView__btns\"></div>\n";
	},"useData":true});

/***/ },
/* 43 */
/***/ function(module, exports) {

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
/* 44 */
/***/ function(module, exports) {

	/// <reference path="../typings/tsd.d.ts" />
	//# sourceMappingURL=interfaces.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var BaseController = __webpack_require__(21);
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var AppController = __webpack_require__(20);
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var BaseController = __webpack_require__(21);
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
	                fn: function () { }
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
	        var attacher = this;
	        actionConfig = this._getActionConfig(actionConfig);
	        var _fn = this._getActionFunction(actionConfig);
	        if (_.isFunction(_fn)) {
	            attacher[actionName] = function () {
	                if (this.getOption('authorizeAnAction').call(this, actionName, actionConfig)) {
	                    try {
	                        return _fn.apply(this, arguments);
	                    }
	                    catch (error) {
	                        if (error.name === 'ActionUnauthorized') {
	                            actionConfig.internalActionError = error;
	                            return this.callActionUnauthorized(actionName, actionConfig);
	                        }
	                        else {
	                            throw error;
	                        }
	                    }
	                }
	                else {
	                    return this.callActionUnauthorized(actionName, actionConfig);
	                }
	            }.bind(this);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports.components = __webpack_require__(49);
	exports.i18next = __webpack_require__(50);
	//# sourceMappingURL=index.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(2);
	var config = __webpack_require__(4);
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var i18next = __webpack_require__(51);
	var _ = __webpack_require__(2);
	var config = __webpack_require__(4);
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
/* 51 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports.App = __webpack_require__(53);
	//# sourceMappingURL=index.js.map

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
	var Marionette = __webpack_require__(3);
	var constants = __webpack_require__(30);
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports.mdown = __webpack_require__(55);
	//# sourceMappingURL=index.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Showdown = __webpack_require__(56);
	var mdown = new Showdown.Converter();
	exports.selector = '[data-mdown]';
	exports.updateMethod = 'html';
	function onGet(val) {
	    return mdown.makeHtml(val);
	}
	//# sourceMappingURL=mdown.js.map

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports.actions = __webpack_require__(58);
	exports.interfaces = __webpack_require__(59);
	exports.Dispatcher = __webpack_require__(60);
	exports.Store = __webpack_require__(62);
	//# sourceMappingURL=index.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

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
/* 59 */
/***/ function(module, exports) {

	//# sourceMappingURL=interfaces.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var flux = __webpack_require__(61);
	var constants = __webpack_require__(30);
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
/* 61 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var constants = __webpack_require__(30);
	var EventedClass = __webpack_require__(63);
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(dispatcher) {
	        _super.call(this);
	        this.dispatcher = dispatcher;
	        this.dispatchToken = dispatcher.registerStore(this);
	    }
	    Store.prototype.dispatch = function (payload) { };
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Backbone = __webpack_require__(7);
	var _ = __webpack_require__(2);
	var EventedClass = (function () {
	    function EventedClass() {
	    }
	    return EventedClass;
	})();
	exports.EventedClass = EventedClass;
	_.extend(EventedClass.prototype, Backbone.Events);
	//# sourceMappingURL=EventedClass.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(2);
	var Exceptions = __webpack_require__(43);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var NavigationController = __webpack_require__(66);
	var navigation = new NavigationController.NavigationController();
	module.exports = navigation;
	//# sourceMappingURL=navigation.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(2);
	var Backbone = __webpack_require__(7);
	var Marionette = __webpack_require__(3);
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../typings/tsd.d.ts' />
	'use strict';
	var _ = __webpack_require__(2);
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
/* 68 */
/***/ function(module, exports) {

	function preventGlobally() {
	    var style = document.documentElement.style;
	    style.webkitTouchCallout = "none";
	    style.webkitUserSelect = "none";
	}
	exports.preventGlobally = preventGlobally;
	//# sourceMappingURL=preventSelectionCallout.js.map

/***/ }
/******/ ])});;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTc3ZWZhMjhhZjg0YTA4ZThhYmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvU3RhdGljLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9iYWNrYm9uZS9zeW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhY2tib25lXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL0xheW91dFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvcnMvU2Nyb2xsYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0l0ZW1WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmhicyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3BpblwiIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvd2hlbkZldGNoZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS1mb3Jtc1wiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtRmllbGQuaGJzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ2hpbGRIb2xkZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybVZpZXcuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGViYXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGViYXJzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvaTE4bmV4dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuZXh0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGlja2l0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGlja2l0L21kb3duLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3dkb3duXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9pbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L0Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmx1eFwiIiwid2VicGFjazovLy8uL3NyYy9mbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvRXZlbnRlZENsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvRGVib3VuY2VkRG9jQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL05hdmlnYXRpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdXJsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvcHJldmVudFNlbGVjdGlvbkNhbGxvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxnRUFBZ0U7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxtQzs7Ozs7O0FDN0lBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxtQzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNkM7Ozs7OztBQ3BJQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsaUJBQWlCO0FBQ3JELDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FB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QTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hELDZCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0QiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzdlZmEyOGFmODRhMDhlOGFiZVxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xuZXhwb3J0cy5jb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9jbGllbnQnKTtcbmZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29uZmlnLmNvbmZpZy5jb25maWd1cmUob3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbmZpZ3VyZSA9IGNvbmZpZ3VyZTtcbjtcbmV4cG9ydHMuYmVoYXZpb3JzID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvaW5kZXgnKTtcbk1hcmlvbmV0dGUuQmVoYXZpb3JzLmJlaGF2aW9yc0xvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5iZWhhdmlvcnM7XG59O1xuZXhwb3J0cy5jb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2luZGV4Jyk7XG5leHBvcnRzLmNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5leHBvcnRzLkV4Y2VwdGlvbnMgPSByZXF1aXJlKCcuL0V4Y2VwdGlvbnMnKTtcbmV4cG9ydHMuaW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4vaW50ZXJmYWNlcycpO1xudmFyIF9BcGkgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FwaScpO1xudmFyIF9BcHAgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FwcCcpO1xudmFyIF9CYXNlID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9CYXNlJyk7XG52YXIgX0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQ29tcG9uZW50Jyk7XG52YXIgX1JvdXRlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUm91dGVyQ29udHJvbGxlcicpO1xudmFyIF9TdGF0aWMgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N0YXRpYycpO1xudmFyIGNvbnRyb2xsZXJzO1xuKGZ1bmN0aW9uIChjb250cm9sbGVycykge1xuICAgIGNvbnRyb2xsZXJzLkFwaSA9IF9BcGk7XG4gICAgY29udHJvbGxlcnMuQXBwID0gX0FwcDtcbiAgICBjb250cm9sbGVycy5CYXNlID0gX0Jhc2U7XG4gICAgY29udHJvbGxlcnMuQ29tcG9uZW50ID0gX0NvbXBvbmVudDtcbiAgICBjb250cm9sbGVycy5Sb3V0ZXIgPSBfUm91dGVyO1xuICAgIGNvbnRyb2xsZXJzLlN0YXRpYyA9IF9TdGF0aWM7XG59KShjb250cm9sbGVycyA9IGV4cG9ydHMuY29udHJvbGxlcnMgfHwgKGV4cG9ydHMuY29udHJvbGxlcnMgPSB7fSkpO1xuZXhwb3J0cy5oYW5kbGViYXJzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2luZGV4Jyk7XG5leHBvcnRzLnJvdXRlcnMgPSByZXF1aXJlKCcuL3JvdXRlcnMvaW5kZXgnKTtcbmV4cG9ydHMuc3RpY2tpdCA9IHJlcXVpcmUoJy4vc3RpY2tpdC9pbmRleCcpO1xuZXhwb3J0cy5mbHV4ID0gcmVxdWlyZSgnLi9mbHV4L2luZGV4Jyk7XG5leHBvcnRzLkRlYm91bmNlZERvY0NvbnRhaW5lciA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL0RlYm91bmNlZERvY0NvbnRhaW5lcicpO1xudmFyIF93aGVuRmV0Y2hlZCA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3doZW5GZXRjaGVkJyk7XG5leHBvcnRzLndoZW5GZXRjaGVkID0gX3doZW5GZXRjaGVkLndoZW5GZXRjaGVkO1xuZXhwb3J0cy5uYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmF2aWdhdGlvbicpO1xuZXhwb3J0cy5yZWdpc3RyeSA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3JlZ2lzdHJ5Jyk7XG5leHBvcnRzLnVybFV0aWxzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdXJsJyk7XG5leHBvcnRzLnByZXZlbnRTZWxlY3Rpb25DYWxsb3V0ID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcHJldmVudFNlbGVjdGlvbkNhbGxvdXQnKTtcbmV4cG9ydHMudmlld3MgPSByZXF1aXJlKCcuL3ZpZXdzL2luZGV4Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBTdGF0aWNDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0aWNDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy50YWdOYW1lID0gJ3NlY3Rpb24nO1xuICAgICAgICB0aGlzLmNsb25lQ29udGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIH1cbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5hdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuY29udGV4dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRlbXBsYXRlRm4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudGVtcGxhdGVGbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGVtcGxhdGUgbm90IGltcGxlbWVudGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmNsYXNzTmFtZSA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIGlmIChoYXNoID09PSB2b2lkIDApIHsgaGFzaCA9IHt9OyB9XG4gICAgICAgIHZhciBjbGFzc2VzO1xuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgbXVzdCBzcGVjaWZ5IGEgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNoW1wiY2xhc3NcIl0pIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBoYXNoW1wiY2xhc3NcIl0uc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IF8ucmVzdWx0KHRoaXMsICdhdHRyaWJ1dGVzJyk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXNbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IF8udW5pb24oY2xhc3NlcywgYXR0cmlidXRlc1tcImNsYXNzXCJdLnNwbGl0KCcgJykpO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsb25lQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBfLmNsb25lKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX2NvbXBvbmVudE5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5fcmVnaW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0Ll9yZWdpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUubWl4aW5IYXNoID0gZnVuY3Rpb24gKGNvbnRleHQsIGhhc2gpIHtcbiAgICAgICAgaWYgKGhhc2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFzaCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0UHJvcHMgPSBfLnJlc3VsdCh0aGlzLCAnY29udGV4dFByb3BlcnRpZXMnKTtcbiAgICAgICAgaWYgKF8uaXNPYmplY3QoY29udGV4dFByb3BzKSkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5S2V5cyA9IF8ua2V5cyhjb250ZXh0UHJvcHMpO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBfLnBpY2soaGFzaCwgcHJvcGVydHlLZXlzKTtcbiAgICAgICAgICAgIHJldHVybiBfLmV4dGVuZChjb250ZXh0LCBjb250ZXh0UHJvcHMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnRUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gdGVtcGxhdGUgb24gdGhpcyBzdGF0aWMgY29udHJvbGxlcicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXMoaGFzaCk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gXy5vbWl0KGF0dHJpYnV0ZXMsICdjbGFzcycpO1xuICAgICAgICAgICAgdmFyIGF0dHIgPSBfLm1hcChhdHRyaWJ1dGVzIHx8IHt9LCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pc1N0cmluZyhoYXNoW2tleV0gfHwgXy5pc0Zpbml0ZShoYXNoW2tleV0pKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGtleSArIFwiPVxcXCJcIiArIGhhc2hba2V5XSArIFwiXFxcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsga2V5ICsgXCI9XFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXR0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyAnICsgYXR0ci5qb2luKCcgJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldElubmVyQm9keSA9IGZ1bmN0aW9uIChjb250ZXh0LCBmbikge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5taXhpbkhhc2godGhpcy5jb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUob3B0aW9ucy5oYXNoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0Ll9fYm9keV9fID0gdGhpcy5nZXRJbm5lckJvZHkodGhpcy5nZXRDaGlsZENvbnRleHQoKSwgb3B0aW9ucy5mbik7XG4gICAgICAgIHRoaXMuY29udGV4dC5hdHRyaWJ1dGVzID0gdGhpcy5nZXRBdHRyaWJ1dGVzKG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlck91dGVySHRtbCh0aGlzLmNvbnRleHQsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb250ZXh0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuY29udGV4dC5hdHRyaWJ1dGVzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyT3V0ZXJIdG1sID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcztcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBfLnJlc3VsdCh0aGlzLCAndGFnTmFtZScpO1xuICAgICAgICByZXR1cm4gW1wiPFwiICsgdGFnTmFtZSwgYXR0cmlidXRlcywgXCIgY2xhc3M9XFxcIlwiICsgY2xhc3NOYW1lICsgXCJcXFwiXCIsIFwiPlxcblwiLCB0aGlzLnJlbmRlckNvbnRlbnRUZW1wbGF0ZShjb250ZXh0KSwgXCI8L1wiICsgdGFnTmFtZSArIFwiPlwiXS5qb2luKCcnKTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlckNvbnRlbnRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHZhciB0bXBsID0gdGhpcy5nZXRDb21wb25lbnRUZW1wbGF0ZSgpO1xuICAgICAgICByZXR1cm4gdG1wbChjb250ZXh0KTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuU3RhdGljQ29udHJvbGxlciA9IFN0YXRpY0NvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0aWMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgc3luYyA9IHJlcXVpcmUoJy4vYmFja2JvbmUvc3luYycpO1xucmVxdWlyZSgnLi9tYXJpb25ldHRlL0xheW91dFZpZXcnKTtcbnJlcXVpcmUoJy4vbWFyaW9uZXR0ZS9SZWdpb24nKTtcbnJlcXVpcmUoJy4vbWFyaW9uZXR0ZS9WaWV3Jyk7XG52YXIgTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uKCkge1xuICAgIH1cbiAgICBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbi5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBvcHRpb25zLmFwcDtcbiAgICAgICAgdGhpcy5oYW5kbGViYXJzID0gb3B0aW9ucy5oYW5kbGViYXJzO1xuICAgICAgICB0aGlzLmRlZmF1bHRSZWdpb24gPSBvcHRpb25zLmRlZmF1bHRSZWdpb247XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1BhdGggPSBvcHRpb25zLmNvbXBvbmVudHNQYXRoO1xuICAgICAgICBpZiAodGhpcy5hcHApIHtcbiAgICAgICAgICAgIHN5bmMuY29uZmlndXJlQmFja2JvbmVTeW5jKHRoaXMuYXBwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uO1xufSkoKTtcbmV4cG9ydHMuTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24gPSBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbjtcbmV4cG9ydHMuY29uZmlnID0gbmV3IE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmZ1bmN0aW9uIGNvbmZpZ3VyZUJhY2tib25lU3luYyhhcHApIHtcbiAgICB2YXIgX3N5bmMgPSBCYWNrYm9uZS5zeW5jO1xuICAgIEJhY2tib25lLnN5bmMgPSBmdW5jdGlvbiAobWV0aG9kLCBlbnRpdHksIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBfLmJpbmQoYmVmb3JlU2VuZCwgZW50aXR5KSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBfLmJpbmQoY29tcGxldGUsIGVudGl0eSlcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZW50aXR5Ll9mZXRjaCAmJiBtZXRob2QgPT09IFwicmVhZFwiKSB7XG4gICAgICAgICAgICBhZGRGZXRjaFByb21pc2UoZW50aXR5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N5bmMobWV0aG9kLCBlbnRpdHksIG9wdGlvbnMpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gYmVmb3JlU2VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihcInN5bmM6c3RhcnRcIiwgdGhpcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKFwic3luYzpzdG9wXCIsIHRoaXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRGZXRjaFByb21pc2UoZW50aXR5LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBkID0gJC5EZWZlcnJlZCgpO1xuICAgICAgICBlbnRpdHkuX2ZldGNoID0gZC5wcm9taXNlKCk7XG4gICAgICAgIHZhciBfc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcbiAgICAgICAgdmFyIF9lcnJvciA9IG9wdGlvbnMuZXJyb3I7XG4gICAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uIChyZXNwLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgX3N1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGQucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3AsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhociA/IHhoci5zdGF0dXMgOiAwLFxuICAgICAgICAgICAgICAgIGZhaWxlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLmVycm9yID0gZnVuY3Rpb24gKHJlc3AsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ2Vycm9yOm9mZmxpbmUnKTtcbiAgICAgICAgICAgICAgICBhcHAudmVudC50cmlnZ2VyKCdmZXRjaDpvZmZsaW5lJywgZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF8uY29udGFpbnMoWzQwMSwgNDAzXSwgcmVzcC5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ3VuYXV0aG9yaXNlZCcpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOnVuYXV0aG9yaXNlZCcsIGVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmZsb29yKHJlc3Auc3RhdHVzIC8gMTAwKSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGVudGl0eS50cmlnZ2VyKCdlcnJvcjpzZXJ2ZXInKTtcbiAgICAgICAgICAgICAgICBhcHAudmVudC50cmlnZ2VyKCdmZXRjaDplcnJvcjpzZXJ2ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9lcnJvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcC5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLmNvbmZpZ3VyZUJhY2tib25lU3luYyA9IGNvbmZpZ3VyZUJhY2tib25lU3luYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5bmMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvYmFja2JvbmUvc3luYy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFja2JvbmVcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExheW91dFZpZXcgPSBNYXJpb25ldHRlLkxheW91dFZpZXc7XG4vKlxuICBfYnVpbGRSZWdpb25zXG4gIC0tLS0tLS0tLS0tLS1cbiAgV2UgbmVlZCB0byBlbnN1cmUgdGhhdCB0aGVyZSBpcyBhbiBlbGVtZW50IG9uIHRoZVxuICBMYXlvdXRWaWV3IHNvIHRoYXQgZ2V0RWwgcmVsYXRpdmUgdG8gdGhlIHBhcmVudEVsXG4gIHdvcmtzIHByb3Blcmx5XG4gKi9cbnZhciBfYnVpbGRSZWdpb25zID0gTGF5b3V0Vmlldy5wcm90b3R5cGUuX2J1aWxkUmVnaW9ucztcbkxheW91dFZpZXcucHJvdG90eXBlLl9idWlsZFJlZ2lvbnMgPSBmdW5jdGlvbiAocmVnaW9ucykge1xuICAgIHRoaXMuX2Vuc3VyZUVsZW1lbnQoKTtcbiAgICByZXR1cm4gX2J1aWxkUmVnaW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvTGF5b3V0Vmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgXywgX2Nsb3NlLCBfZ2V0RWwsIF9nZXROYW1lLCBfc2hvdztcblxuXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xuXG5NYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xuXG5cbi8qXG4gIEFuaW1hdGUgT3V0XG4gIC0tLS0tLS0tLS0tXG4gIEFuaW1hdGUgb3V0IHRoZSBvbGQgdmlldyBiZWZvcmUgYmVpbmcgcmVhZHkgdG8gc2hvd1xuICB0aGUgbmV4dFxuICovXG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2IpIHtcbiAgaWYgKHRoaXMuY3VycmVudFZpZXcgJiYgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KSB7XG4gICAgY29uc29sZS5sb2coJ2FuaW1hdGluZyBvdXQnLCB0aGlzLmN1cnJlbnRWaWV3LCB0aGlzLmVsKTtcbiAgICB0aGlzLnRyaWdnZXJNZXRob2QoJ2JlZm9yZTphbmltYXRpbmc6b3V0Jyk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZpZXcuYW5pbWF0ZU91dChjYik7XG4gIH0gZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgIHJldHVybiBjYi5jYWxsKHRoaXMpO1xuICB9XG59O1xuXG5cbi8qXG4gIEFuaW1hdGVkIEVtcHR5XG4gIC0tLS0tXG4gIFVzZSBhbmltYXRpb24gd2hlbiBlbXB0eWluZyB0aGUgcmVnaW9uIGlmIGl0XG4gIGlzIGF2YWlsYWJsZVxuICovXG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5hbmltYXRlRW1wdHkgPSBmdW5jdGlvbihvcHRpb25zLCBjYikge1xuICByZXR1cm4gdGhpcy5hbmltYXRlT3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLmVtcHR5KCk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgICByZXR1cm4gY2IuY2FsbChfdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkodGhpcykpO1xufTtcblxuXG4vKlxuICBnZXRFbFxuICAtLS0tLVxuICBVcGRhdGUgdGhlIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBjaGVjayBmb3JcbiAgcGFyZW50RWwgb24gdGhlIG9wdGlvbnMgYW5kIGZpbmQgdGhlIHNlbGVjdG9yXG4gIGJhc2VkIG9uIGl0J3MgY2hpbGRyZW5cbiAqL1xuXG5fZ2V0RWwgPSBNYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuZ2V0RWw7XG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5nZXRFbCA9IGZ1bmN0aW9uKGVsKSB7XG4gIHZhciAkZWwsIHBhcmVudEVsO1xuICBpZiAoXy5pc1N0cmluZyhlbCkpIHtcbiAgICBwYXJlbnRFbCA9IF8ucmVzdWx0KHRoaXMub3B0aW9ucywgJ3BhcmVudEVsJyk7XG4gICAgaWYgKHBhcmVudEVsKSB7XG4gICAgICAkZWwgPSBCYWNrYm9uZS4kKHBhcmVudEVsKS5maW5kKGVsKTtcbiAgICAgIGlmICgkZWwubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAkZWw7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfZ2V0RWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9nZXRFbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59O1xuXG5cbi8qXG4gIFNob3cgbmV3IFZpZXdcbiAgLS0tLS0tLS0tLS0tLVxuICBIYW5kbGUgdHJhbnNpdGlvbnMgYmV0d2VlbiBvbGQgdmlldyBhbmQgbmV3IG9uZVxuICB3aXRoIHRoZSBvcHRpb24gdG8gZGlzYWJsZSBhbmltYXRpb25zXG4gKi9cblxuX3Nob3cgPSBNYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuc2hvdztcblxuX2dldE5hbWUgPSBmdW5jdGlvbih2aWV3KSB7XG4gIGlmICh2aWV3KSB7XG4gICAgaWYgKHZpZXcubmFtZSkge1xuICAgICAgcmV0dXJuIHZpZXcubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZpZXcuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdubyB2aWV3JztcbiAgfVxufTtcblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbih2aWV3LCBpbW1lZGlhdGUpIHtcbiAgaWYgKGltbWVkaWF0ZSA9PSBudWxsKSB7XG4gICAgaW1tZWRpYXRlID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5fbmV4dFZpZXcgPSB2aWV3O1xuICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgaWYgKHRoaXMuJGVsICYmIHRoaXMuJGVsWzBdKSB7XG4gICAgICB0aGlzLiRlbFswXS5zY3JvbGxUb3AgPSAwO1xuICAgICAgdGhpcy4kZWxbMF0uc2Nyb2xsTGVmdCA9IDA7XG4gICAgfVxuICAgIHRoaXMuX25leHRWaWV3ID0gbnVsbDtcbiAgICBfc2hvdy5jYWxsKHRoaXMsIHZpZXcpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZygnc2hvd2luZycsIF9nZXROYW1lKHZpZXcpLCB2aWV3LCB0aGlzLmVsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRlT3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoX3RoaXMuJGVsICYmIF90aGlzLiRlbFswXSkge1xuICAgICAgICAgIF90aGlzLiRlbFswXS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgIF90aGlzLiRlbFswXS5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5fbmV4dFZpZXcgPSBudWxsO1xuICAgICAgICBfc2hvdy5jYWxsKF90aGlzLCB2aWV3KTtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdzaG93aW5nJywgX2dldE5hbWUodmlldyksIHZpZXcsIF90aGlzLmVsKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG59O1xuXG5cbi8qXG4gIFRoaXMgd2lsbCBzaG93IHRoZSB2aWV3IGltbWVkaWF0ZWx5IGlmICNnZXRFbCByZXR1cm5zIGFuIGVsZW1lbnRcbiAgb3RoZXJ3aXNlIGl0IHdpbGwgd2FpdCBmb3IgdGhlIHNob3cgZXZlbnQgdG8gZmlyZSBvbiB3YWl0Rm9yVmlld1xuICBiZWZvcmUgc2hvd2luZyB0aGUgdmlld1xuICovXG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5zaG93V2l0aFZpZXcgPSBmdW5jdGlvbih3YWl0Rm9yVmlldywgdmlld1RvU2hvdywgb3B0aW9ucykge1xuICB2YXIgJGVsO1xuICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgIGltbWVkaWF0ZTogZmFsc2UsXG4gICAgd2FpdEZvckV2ZW50OiAnc2hvdydcbiAgfSk7XG4gIGlmIChfLmlzU3RyaW5nKHRoaXMuZWwpKSB7XG4gICAgJGVsID0gdGhpcy5nZXRFbCh0aGlzLmVsKTtcbiAgfSBlbHNlIHtcbiAgICAkZWwgPSB0aGlzLiRlbDtcbiAgfVxuICBpZiAoJGVsLmxlbmd0aCkge1xuICAgIHRoaXMuc2hvdyh2aWV3VG9TaG93LCBvcHRpb25zLmltbWVkaWF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5saXN0ZW5Ub09uY2Uod2FpdEZvclZpZXcsIG9wdGlvbnMud2FpdEZvckV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3codmlld1RvU2hvdywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cbn07XG5cblxuLypcbiAgQ2xvc2VcbiAgLS0tLS1cbiAgVXBkYXRlIHRvIGluY2x1ZGUgbG9nZ2luZyB3aGVuIGEgdmlldyBpcyBjbG9zZWRcbiAqL1xuXG5fY2xvc2UgPSBNYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuY2xvc2U7XG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnY2xvc2luZycsICh0aGlzLmN1cnJlbnRWaWV3ID8gdGhpcy5jdXJyZW50VmlldyA6IHZvaWQgMCksIHRoaXMuZWwpO1xuICByZXR1cm4gX2Nsb3NlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9SZWdpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgTWFyaW9uZXR0ZSwgXztcblxuXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcblxuTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcblxuXy5leHRlbmQoTWFyaW9uZXR0ZS5WaWV3LnByb3RvdHlwZSwge1xuICB0YWdOYW1lOiAnc2VjdGlvbicsXG4gIGNsYXNzTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfSxcbiAgdGVtcGxhdGVIZWxwZXJzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZWxOYW1lOiB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC5uYW1lIDogJydcbiAgICB9O1xuICB9XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX01vZGlmaWVycyA9IHJlcXVpcmUoJy4vTW9kaWZpZXJzJyk7XG52YXIgX1Njcm9sbGFibGVzID0gcmVxdWlyZSgnLi9TY3JvbGxhYmxlcycpO1xuZXhwb3J0cy5Nb2RpZmllcnMgPSBfTW9kaWZpZXJzLk1vZGlmaWVyc0JlaGF2aW9yO1xuZXhwb3J0cy5TY3JvbGxhYmxlcyA9IF9TY3JvbGxhYmxlcy5TY3JvbGxhYmxlc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBNb2RpZmllcnNCZWhhdmlvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vZGlmaWVyc0JlaGF2aW9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1vZGlmaWVyc0JlaGF2aW9yKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiXCIgKyB0aGlzLnZpZXcubmFtZSArIFwiLS1cIiArIG1vZGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUucmVtb3ZlTW9kaWZpZXIgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJcIiArIHRoaXMudmlldy5uYW1lICsgXCItLVwiICsgbW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUudG9nZ2xlTW9kaWZpZXIgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsLmhhc0NsYXNzKFwiXCIgKyB0aGlzLnZpZXcubmFtZSArIFwiLS1cIiArIG1vZGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUub25Nb2RpZmllZCA9IGZ1bmN0aW9uIChtb2RpZmllciwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgc3RhdGU7XG4gICAgICAgIGlmICghdGhpcy52aWV3Lm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBuYW1lIGlzIHJlcXVpcmVkIG9uIHRoaXMgVmlldycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnJlbW92ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnJlbW92ZU1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRvZ2dsZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnRvZ2dsZU1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5hZGRNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LnRyaWdnZXJNZXRob2QoXCJtb2RpZmllZDpcIiArIG1vZGlmaWVyLCB7XG4gICAgICAgICAgICBvbjogc3RhdGVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kaWZpZXJzQmVoYXZpb3I7XG59KShNYXJpb25ldHRlLkJlaGF2aW9yKTtcbmV4cG9ydHMuTW9kaWZpZXJzQmVoYXZpb3IgPSBNb2RpZmllcnNCZWhhdmlvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vZGlmaWVycy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2JlaGF2aW9ycy9Nb2RpZmllcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBnbG9iYWxTdGF0ZUluaXRpYWxpemVkID0gZmFsc2U7XG52YXIgU0NST0xMQUJMRV9DTEFTUyA9ICdTY3JvbGxhYmxlc19fY29udGFpbmVyJztcbmZ1bmN0aW9uIGluaXRHbG9iYWxTY3JvbGxhYmxlU3RhdGUoKSB7XG4gICAgZ2xvYmFsU3RhdGVJbml0aWFsaXplZCA9IHRydWU7XG4gICAgLy8gRGlzYWJsZSBzY3JvbGwgZm9yIHRoZSBkb2N1bWVudCwgd2UnbGwgaGFuZGxlIGl0IG91cnNlbHZlc1xuICAgICQoZG9jdW1lbnQpLm9uKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5hZGRDbGFzcygnU2Nyb2xsYWJsZXMtLWF0dGFjaGVkJylcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydFwiLCBcIi5cIiArIFNDUk9MTEFCTEVfQ0xBU1MsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHNjcm9sbGFibGUgKGNvbnRlbnQgb3ZlcmZsb3dzKSwgdGhlbi4uLlxuICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWlnaHQgIT09IHRoaXMuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgdG9wLCBzY3JvbGwgZG93biBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgYm90dG9tLCBzY3JvbGwgdXAgb25lIHBpeGVsIHRvIGFsbG93IHNjcm9sbGluZyBkb3duXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPT09IHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBzY3JvbGxcbiAgICAgICAgdGhpcy5hbGxvd1VwID0gdGhpcy5zY3JvbGxUb3AgPiAwO1xuICAgICAgICB0aGlzLmFsbG93RG93biA9IHRoaXMuc2Nyb2xsVG9wIDwgKHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQpO1xuICAgICAgICB0aGlzLmxhc3RZID0gZS5vcmlnaW5hbEV2ZW50LnBhZ2VZO1xuICAgIH0pXG4gICAgICAgIC5vbihcInRvdWNobW92ZVwiLCBcIi5cIiArIFNDUk9MTEFCTEVfQ0xBU1MsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgdmFyIHVwID0gZXZlbnQucGFnZVkgPiB0aGlzLmxhc3RZO1xuICAgICAgICB2YXIgZG93biA9ICF1cDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICBpZiAoKHVwICYmIHRoaXMuYWxsb3dVcCkgfHwgKGRvd24gJiYgdGhpcy5hbGxvd0Rvd24pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcCcpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJldmVudCcpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxudmFyIFNjcm9sbGFibGVzQmVoYXZpb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTY3JvbGxhYmxlc0JlaGF2aW9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNjcm9sbGFibGVzQmVoYXZpb3IoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBTY3JvbGxhYmxlc0JlaGF2aW9yLnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vaWYgKCFnbG9iYWxTdGF0ZUluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vICBpbml0R2xvYmFsU2Nyb2xsYWJsZVN0YXRlKCk7XG4gICAgICAgIC8vfVxuICAgICAgICBfLmVhY2godGhpcy5vcHRpb25zLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciAkZWw7XG4gICAgICAgICAgICBpZiAodmFsID09PSAnZWwnKSB7XG4gICAgICAgICAgICAgICAgJGVsID0gX3RoaXMuJGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsID0gX3RoaXMuJCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRlbCAmJiAkZWwubGVuZ3RoKVxuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcyhTQ1JPTExBQkxFX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2Nyb2xsYWJsZXNCZWhhdmlvcjtcbn0pKE1hcmlvbmV0dGUuQmVoYXZpb3IpO1xuZXhwb3J0cy5TY3JvbGxhYmxlc0JlaGF2aW9yID0gU2Nyb2xsYWJsZXNCZWhhdmlvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjcm9sbGFibGVzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYmVoYXZpb3JzL1Njcm9sbGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfQWxlcnQgPSByZXF1aXJlKCcuL2FsZXJ0L0FsZXJ0Jyk7XG52YXIgX0xvYWRpbmcgPSByZXF1aXJlKCcuL0xvYWRpbmdDb21wb25lbnQvTG9hZGluZ0NvbnRyb2xsZXInKTtcbmV4cG9ydHMuQWxlcnQgPSBfQWxlcnQuQWxlcnRDb21wb25lbnQ7XG5leHBvcnRzLkFuaW1hdGVkUmVnaW9uID0gcmVxdWlyZSgnLi9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbicpO1xuZXhwb3J0cy5CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbi9CdXR0b24nKTtcbmV4cG9ydHMuRm9ybVZpZXcgPSByZXF1aXJlKCcuL0Zvcm1WaWV3L0Zvcm1WaWV3Jyk7XG5leHBvcnRzLlNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi9TcGlubmVyVmlldy9TcGlubmVyVmlldycpO1xuZXhwb3J0cy5Mb2FkaW5nID0gX0xvYWRpbmcuTG9hZGluZ0NvbnRyb2xsZXI7XG5leHBvcnRzLk5vdGljZVZpZXcgPSByZXF1aXJlKCcuL05vdGljZVZpZXcvTm90aWNlVmlldycpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBBbGVydENvbXBvbmVudCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFsZXJ0Q29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFsZXJ0Q29tcG9uZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ2FsZXJ0JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vYWxlcnQuaGJzJyk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBBbGVydENvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGVIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5vcHRpb25zLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFsZXJ0Q29tcG9uZW50LnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhbGVydC0nICsgKHRoaXMub3B0aW9ucy5hbGVydFR5cGUgfHwgJ2luZm8nKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWxlcnRDb21wb25lbnQ7XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLkFsZXJ0Q29tcG9uZW50ID0gQWxlcnRDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbGVydC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBJdGVtVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEl0ZW1WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEl0ZW1WaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBJdGVtVmlldy5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEl0ZW1WaWV3LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBJdGVtVmlldy5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEl0ZW1WaWV3O1xufSkoTWFyaW9uZXR0ZS5JdGVtVmlldyk7XG5leHBvcnRzLkl0ZW1WaWV3ID0gSXRlbVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JdGVtVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0l0ZW1WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tZXNzYWdlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tZXNzYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJtZXNzYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lmhic1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaGFuZGxlYmFyc1wiXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi8uLi9jb250cm9sbGVycy9BcHAnKTtcbnZhciBTcGlubmVyVmlldyA9IHJlcXVpcmUoJy4uL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG52YXIgd2hlbkZldGNoZWQgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvd2hlbkZldGNoZWQnKTtcbnZhciBMb2FkaW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRpbmdDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRpbmdDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIF8uZGVmYXVsdHModGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICBsb2FkaW5nVHlwZTogXCJzcGlubmVyXCIsXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBvcHRpb25zLmVudGl0aWVzIHx8IHRoaXMuZ2V0RW50aXRpZXMob3B0aW9ucy52aWV3KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nVmlldyA9IHRoaXMuZ2V0TG9hZGluZ1ZpZXcoKTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyh0aGlzLmxvYWRpbmdWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5tb25pdG9yUmVhZHlTdGF0ZShvcHRpb25zLnZpZXcsIHRoaXMubG9hZGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5nZXRMb2FkaW5nVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24uY3VycmVudFZpZXcuJGVsLmNzcyhcIm9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nVmlldyA9IG5ldyBTcGlubmVyVmlldy5TcGlubmVyVmlldygpO1xuICAgICAgICAgICAgICAgIGxvYWRpbmdWaWV3LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9hZGluZ1R5cGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvYWRpbmdWaWV3O1xuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLm1vbml0b3JSZWFkeVN0YXRlID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX3ZpZXdSZWFkeSA9IGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dFcnJvcihyZWFsVmlldywgbG9hZGluZ1ZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd1JlYWxWaWV3KHJlYWxWaWV3LCBsb2FkaW5nVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUocmVhbFZpZXcsIHRoaXMsIF92aWV3UmVhZHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdoZW5GZXRjaGVkLndoZW5GZXRjaGVkKHRoaXMuZW50aXRpZXMsIF92aWV3UmVhZHkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd0Vycm9yID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICBpZiAocmVhbFZpZXcpIHtcbiAgICAgICAgICAgIHJlYWxWaWV3LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmdWaWV3LnN0b3AoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlcnJvciBoYW5kbGluZSBvbiBsb2FkaW5nIHR5cGUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLnNob3dSZWFsVmlldyA9IGZ1bmN0aW9uIChyZWFsVmlldywgbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24uY3VycmVudFZpZXcuJGVsLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lvbi5jdXJyZW50VmlldyAhPT0gbG9hZGluZ1ZpZXcgJiYgdGhpcy5yZWdpb24uX25leHRWaWV3ICE9PSBsb2FkaW5nVmlldykge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghKCFyZWFsVmlldyB8fCB0aGlzLm9wdGlvbnMuZGVidWcpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cocmVhbFZpZXcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0RW50aXRpZXMgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICByZXR1cm4gXy5jaGFpbih2aWV3KS5waWNrKFwibW9kZWxcIiwgXCJjb2xsZWN0aW9uXCIpLnRvQXJyYXkoKS5jb21wYWN0KCkudmFsdWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBMb2FkaW5nQ29udHJvbGxlcjtcbn0pKEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5leHBvcnRzLkxvYWRpbmdDb250cm9sbGVyID0gTG9hZGluZ0NvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2FkaW5nQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgY2xpZW50Q29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcHBDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcENvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9tYW5hZ2VkUmVnaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlZ2lvbiA9IHRoaXMucmVnaW9uIHx8IG9wdGlvbnMucmVnaW9uIHx8IGNsaWVudENvbmZpZy5jb25maWcuZGVmYXVsdFJlZ2lvbjtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNob3dDb250cm9sbGVyID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgb3B0aW9ucy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgb3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZSA9IGNvbnRyb2xsZXIuZ2V0T3B0aW9uKCdtb25pdG9yUmVhZHlTdGF0ZScpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93KGNvbnRyb2xsZXIuZ2V0TWFpblZpZXcoKSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICAgICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZ2lvbjogdGhpcy5yZWdpb25cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSB2aWV3IGluc3RhbmNlIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpblZpZXcodmlldyk7XG4gICAgICAgIHRoaXMuX21hbmFnZVZpZXcodmlldywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3OiB2aWV3LFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TWFpblZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluVmlldztcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNldE1haW5WaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21haW5WaWV3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFpblZpZXcgPSB2aWV3O1xuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuVG8odmlldywgXCJkZXN0cm95XCIsIHRoaXMuZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLm1hbmFnZVJlZ2lvbiA9IGZ1bmN0aW9uIChyZWdpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmFnZWRSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLl9tYW5hZ2VWaWV3ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMubG9hZGluZykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvYWRpbmcgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uZGVmYXVsdHMob3B0aW9ucy5sb2FkaW5nLCB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0hlYWRlcjogXy5yZXN1bHQodGhpcywgJ2xvYWRpbmdIZWFkZXInKSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nQm9keTogXy5yZXN1bHQodGhpcywgJ2xvYWRpbmdCb2R5JyksXG4gICAgICAgICAgICAgICAgbW9uaXRvclJlYWR5U3RhdGU6IG9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xpZW50Q29uZmlnLmNvbmZpZy5hcHAuZXhlY3V0ZShcInNob3c6bG9hZGluZ1wiLCB2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVnaW9uLnNob3codmlldywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfLmludm9rZSh0aGlzLl9tYW5hZ2VkUmVnaW9ucywgJ2FuaW1hdGVFbXB0eScpO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkUmVnaW9ucyA9IG51bGw7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEFwcENvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFwcENvbnRyb2xsZXIgPSBBcHBDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQXBwLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIHJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JlZ2lzdHJ5Jyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBCYXNlQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhc2VDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJhc2VDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VfaWQgPSBfLnVuaXF1ZUlkKCdjb250cm9sbGVyJyk7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyKHRoaXMsIHRoaXMuX2luc3RhbmNlX2lkKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEJhc2VDb250cm9sbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3lpbmdcIiwgdGhpcyk7XG4gICAgICAgIHJlZ2lzdHJ5LnVucmVnaXN0ZXIodGhpcywgdGhpcy5faW5zdGFuY2VfaWQpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEJhc2VDb250cm9sbGVyLnByb3RvdHlwZS5wcm94eUV2ZW50cyA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgcHJlZml4KSB7XG4gICAgICAgIHZhciBfdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdGVuVG8oaW5zdGFuY2UsIFwiYWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciByb290RXZlbnQgPSBhcmdzWzBdO1xuICAgICAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgICAgIGFyZ3NbMF0gPSBwcmVmaXggKyBcIjpcIiArIHJvb3RFdmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICBNYXJpb25ldHRlLnRyaWdnZXJNZXRob2QuYXBwbHkoX3QsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCYXNlQ29udHJvbGxlcjtcbn0pKE1hcmlvbmV0dGUuQ29udHJvbGxlcik7XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmV4cG9ydHMuX3JlZ2lzdHJ5ID0ge307XG5mdW5jdGlvbiByZWdpc3RlcihpbnN0YW5jZSwgaWQpIHtcbiAgICBleHBvcnRzLl9yZWdpc3RyeVtpZF0gPSBpbnN0YW5jZTtcbn1cbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcbmZ1bmN0aW9uIHVucmVnaXN0ZXIoaW5zdGFuY2UsIGlkKSB7XG4gICAgZGVsZXRlIGV4cG9ydHMuX3JlZ2lzdHJ5W2lkXTtcbn1cbmV4cG9ydHMudW5yZWdpc3RlciA9IHVucmVnaXN0ZXI7XG5mdW5jdGlvbiByZXNldFJlZ2lzdHJ5KCkge1xuICAgIHZhciBvbGRDb3VudCA9IGdldFJlZ2lzdHJ5U2l6ZSgpO1xuICAgIHZhciBjb250cm9sbGVyO1xuICAgIGZvciAodmFyIGtleSBpbiBleHBvcnRzLl9yZWdpc3RyeSkge1xuICAgICAgICBjb250cm9sbGVyID0gZXhwb3J0cy5fcmVnaXN0cnlba2V5XTtcbiAgICAgICAgY29udHJvbGxlci5yZWdpb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB2YXIgcmV0ID0ge1xuICAgICAgICBjb3VudDogZ2V0UmVnaXN0cnlTaXplKCksXG4gICAgICAgIHByZXZpb3VzOiBvbGRDb3VudCxcbiAgICAgICAgbXNnOiBcIlRoZXJlIHdlcmUgXCIgKyBvbGRDb3VudCArIFwiIGNvbnRyb2xsZXJzIGluIHRoZSByZWdpc3RyeSwgdGhlcmUgYXJlIG5vdyBcIiArICh0aGlzLmdldFJlZ2lzdHJ5U2l6ZSgpKVxuICAgIH07XG4gICAgY29uc29sZS5pbmZvKCdSZWdpc3RyeSByZXNldCcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydHMucmVzZXRSZWdpc3RyeSA9IHJlc2V0UmVnaXN0cnk7XG5mdW5jdGlvbiBnZXRSZWdpc3RyeVNpemUoKSB7XG4gICAgcmV0dXJuIF8uc2l6ZShleHBvcnRzLl9yZWdpc3RyeSk7XG59XG5leHBvcnRzLmdldFJlZ2lzdHJ5U2l6ZSA9IGdldFJlZ2lzdHJ5U2l6ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZ2lzdHJ5LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3JlZ2lzdHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIFZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9WaWV3Jyk7XG52YXIgU3BpbiA9IHJlcXVpcmUoJ3NwaW4nKTtcbnZhciBTcGlubmVyVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNwaW5uZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNwaW5uZXJWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1NwaW5uZXJWaWV3JztcbiAgICAgICAgdGhpcy5sb2FkaW5nRGVsYXkgPSAxMDAwO1xuICAgICAgICB0aGlzLmxvYWRpbmdDbGFzcyA9ICdTcGlubmVyVmlldy0tc3Bpbm5pbmcnO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgU3Bpbm5lclZpZXcucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLiRlbC5hZGRDbGFzcyhfdGhpcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZ1NwaW5uZXIgPSBuZXcgU3BpbihTcGlubmVyVmlldy5zcGluT3B0aW9ucyk7XG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nU3Bpbm5lci5zcGluKF90aGlzLiRlbFswXSk7XG4gICAgICAgIH0sIHRoaXMubG9hZGluZ0RlbGF5KTtcbiAgICB9O1xuICAgIFNwaW5uZXJWaWV3LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdTcGlubmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTcGlubmVyLnN0b3AoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNwaW5uZXJWaWV3LnNwaW5PcHRpb25zID0ge1xuICAgICAgICBsaW5lczogMTMsXG4gICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgIHJhZGl1czogNSxcbiAgICAgICAgY29ybmVyczogMSxcbiAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgIHRyYWlsOiA2MCxcbiAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgaHdhY2NlbDogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlNwaW5uZXJWaWV3X19zcGlubmVyIGFuaW1hdGVkIGJvdW5jZUluXCIsXG4gICAgICAgIHpJbmRleDogMmU5LFxuICAgICAgICB0b3A6IFwiMzBweFwiLFxuICAgICAgICBsZWZ0OiBcImF1dG9cIlxuICAgIH07XG4gICAgcmV0dXJuIFNwaW5uZXJWaWV3O1xufSkoVmlldy5WaWV3KTtcbmV4cG9ydHMuU3Bpbm5lclZpZXcgPSBTcGlubmVyVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNwaW5uZXJWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TcGlubmVyVmlldy9TcGlubmVyVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIFZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaWV3LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFZpZXcucHJvdG90eXBlLmdldFVpID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy51aVtrZXldO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFZpZXc7XG59KShNYXJpb25ldHRlLlZpZXcpO1xuZXhwb3J0cy5WaWV3ID0gVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzcGluXCJcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIFEgPSByZXF1aXJlKCdxJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmZ1bmN0aW9uIHdoZW5GZXRjaGVkKGVudGl0aWVzLCBjYWxsYmFjaykge1xuICAgIHZhciBwcm9taXNlcyA9IF8uY2hhaW4oW2VudGl0aWVzXSkuZmxhdHRlbigpLnBsdWNrKFwiX2ZldGNoXCIpLmNvbXBhY3QoKS52YWx1ZSgpO1xuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFEuYWxsKHByb21pc2VzKS5kb25lKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2hlbkZldGNoZWQnLCByZXN1bHRzKTtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5mYWlsZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGVuRmV0Y2hlZCcsIGVudGl0aWVzKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3RoaW5nIGlzIGJlaW5nIGZldGNoZWQnKTtcbiAgICB9XG59XG5leHBvcnRzLndoZW5GZXRjaGVkID0gd2hlbkZldGNoZWQ7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aGVuRmV0Y2hlZC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy93aGVuRmV0Y2hlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjdfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicVwiXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBBbmltYXRlZFJlZ2lvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFuaW1hdGVkUmVnaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGVkUmVnaW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQW5pbWF0ZWRSZWdpb24ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgJiYgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0aW5nIG91dCcsIHRoaXMuY3VycmVudFZpZXcsIHRoaXMuZWwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KGNiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbmltYXRlZFJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZUVtcHR5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lbXB0eSgpO1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRlZFJlZ2lvbjtcbn0pKE1hcmlvbmV0dGUuUmVnaW9uKTtcbmV4cG9ydHMuQW5pbWF0ZWRSZWdpb24gPSBBbmltYXRlZFJlZ2lvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGVkUmVnaW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG52YXIgSXRlbVZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9JdGVtVmlldycpO1xudmFyIEJVVFRPTl9FVkVOVFMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCVVRUT05fRVZFTlRTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJVVFRPTl9FVkVOVFMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBCVVRUT05fRVZFTlRTLm5hdmlnYXRlID0gbmV3IEJVVFRPTl9FVkVOVFMoJ25hdmlnYXRlJyk7XG4gICAgcmV0dXJuIEJVVFRPTl9FVkVOVFM7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5CVVRUT05fRVZFTlRTID0gQlVUVE9OX0VWRU5UUztcbnZhciBCVVRUT05fVEhFTUUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCVVRUT05fVEhFTUUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlVUVE9OX1RIRU1FKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQlVUVE9OX1RIRU1FLmRlZmF1bHQgPSBuZXcgQlVUVE9OX1RIRU1FKCdkZWZhdWx0Jyk7XG4gICAgQlVUVE9OX1RIRU1FLmludmVyc2UgPSBuZXcgQlVUVE9OX1RIRU1FKCdpbnZlcnNlJyk7XG4gICAgQlVUVE9OX1RIRU1FLmFjdGlvbiA9IG5ldyBCVVRUT05fVEhFTUUoJ2FjdGlvbicpO1xuICAgIEJVVFRPTl9USEVNRS5saW5rID0gbmV3IEJVVFRPTl9USEVNRSgnbGluaycpO1xuICAgIEJVVFRPTl9USEVNRS5wcmltYXJ5ID0gbmV3IEJVVFRPTl9USEVNRSgncHJpbWFyeScpO1xuICAgIEJVVFRPTl9USEVNRS5zZWNvbmRhcnkgPSBuZXcgQlVUVE9OX1RIRU1FKCdzZWNvbmRhcnknKTtcbiAgICByZXR1cm4gQlVUVE9OX1RIRU1FO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQlVUVE9OX1RIRU1FID0gQlVUVE9OX1RIRU1FO1xudmFyIEJVVFRPTl9TSVpFID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlVUVE9OX1NJWkUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlVUVE9OX1NJWkUoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBCVVRUT05fU0laRS5kZWZhdWx0ID0gbmV3IEJVVFRPTl9TSVpFKCdkZWZhdWx0Jyk7XG4gICAgQlVUVE9OX1NJWkUuc21hbGwgPSBuZXcgQlVUVE9OX1NJWkUoJ3NtYWxsJyk7XG4gICAgQlVUVE9OX1NJWkUubGFyZ2UgPSBuZXcgQlVUVE9OX1NJWkUoJ2xhcmdlJyk7XG4gICAgcmV0dXJuIEJVVFRPTl9TSVpFO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQlVUVE9OX1NJWkUgPSBCVVRUT05fU0laRTtcbnZhciBCdXR0b25Nb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbk1vZGVsKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZSA9ICduYW1lJztcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEJ1dHRvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGJsb2NrOiB0cnVlLFxuICAgICAgICAgICAgdGhlbWU6IEJVVFRPTl9USEVNRS5kZWZhdWx0LFxuICAgICAgICAgICAgc2l6ZTogQlVUVE9OX1NJWkUuZGVmYXVsdFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnbmFtZScpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnbmFtZScsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJpY29uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnaWNvbicpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnaWNvbicsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgndGV4dCcpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgndGV4dCcsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJibG9ja1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2Jsb2NrJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdibG9jaycsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJ0aGVtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ3RoZW1lJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCd0aGVtZScsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbk1vZGVsLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnc2l6ZScpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnc2l6ZScsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEJ1dHRvbk1vZGVsO1xufSkoQmFja2JvbmUuTW9kZWwpO1xuZXhwb3J0cy5CdXR0b25Nb2RlbCA9IEJ1dHRvbk1vZGVsO1xudmFyIEJ1dHRvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b24ob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbCB8fCBuZXcgQnV0dG9uTW9kZWwodGhpcy5kZWZhdWx0cygpKTtcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubW9kZWwubmFtZSB8fCAnYmFzZS1idXR0b24nO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9CdXR0b24uaGJzJyk7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Ym1pdCkge1xuICAgICAgICAgICAgdGhpcy50YWdOYW1lID0gJ2J1dHRvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhZ05hbWUgPSAnYSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VycyA9IHtcbiAgICAgICAgICAgICdjbGljayc6ICdjbGljaydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCB0aGlzLm5hdmlnYXRlKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zKVxuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldENsYXNzTmFtZXMoKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0J1dHRvbiBidG4gQnV0dG9uLS0nICsgdGhpcy5uYW1lICsgJ0J1dHRvbic7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuZ2V0SWNvbkNsYXNzID0gZnVuY3Rpb24gKGljb25OYW1lKSB7XG4gICAgICAgIHJldHVybiAnSWNvbiBJY29uLS0nICsgaWNvbk5hbWU7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm1vZGVsLnRleHQ7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMubW9kZWwudGV4dCA9IHZhbHVlOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNlcmlhbGl6ZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5tb2RlbC50b0pTT04oKTtcbiAgICAgICAgZGF0YS5pY29uQ2xhc3MgPSB0aGlzLmdldEljb25DbGFzcyh0aGlzLm1vZGVsLmljb24pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUubmF2aWdhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihCVVRUT05fRVZFTlRTLm5hdmlnYXRlLnZhbCwgdGhpcy5uYW1lKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuc2V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudW5zZXRDbGFzc05hbWVzKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmljb24pXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmljb24gPSBvcHRpb25zLmljb247XG4gICAgICAgIGlmIChvcHRpb25zLnRleHQpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmJsb2NrKSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYmxvY2sgPSBvcHRpb25zLmJsb2NrO1xuICAgICAgICBpZiAob3B0aW9ucy50aGVtZSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGhlbWUgPSBvcHRpb25zLnRoZW1lO1xuICAgICAgICBpZiAob3B0aW9ucy5zaXplKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQpXG4gICAgICAgICAgICB0aGlzLiRlbC5hdHRyKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS51bnNldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy4kZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2J0bi1saW5rJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC50aGVtZSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC5zaXplKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2J0bi1ibG9jaycpO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbFxuICAgICAgICAgICAgLmFkZENsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnRoZW1lKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnNpemUgKyAnU2l6ZScpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC50aGVtZSA9PT0gQlVUVE9OX1RIRU1FLmxpbmspIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdidG4tbGluaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYnRuLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCdXR0b247XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJ1dHRvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBTdHJpbmdDb25zdGFudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RyaW5nQ29uc3RhbnQodmFsKSB7XG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgIH1cbiAgICBTdHJpbmdDb25zdGFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbDsgfTtcbiAgICBTdHJpbmdDb25zdGFudC5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpID09PSB2YWx1ZTtcbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LmFsbENvbnN0YW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgYWxsID0gW107XG4gICAgICAgIF8uZWFjaChfLmtleXModGhpcyksIGZ1bmN0aW9uIChwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKHRbcHJvcGVydHlLZXldIGluc3RhbmNlb2YgdCkge1xuICAgICAgICAgICAgICAgIHZhciBjb25zdGFudCA9IHRbcHJvcGVydHlLZXldO1xuICAgICAgICAgICAgICAgIGFsbC5wdXNoKGNvbnN0YW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5mcm9tS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYWxsID0gdGhpcy5hbGxDb25zdGFudHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhbGxbaV0ubWF0Y2hlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQuZnJvbVZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYWxsID0gdGhpcy5hbGxDb25zdGFudHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhbGxbaV0ubWF0Y2hlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN0cmluZ0NvbnN0YW50O1xufSkoKTtcbmV4cG9ydHMuU3RyaW5nQ29uc3RhbnQgPSBTdHJpbmdDb25zdGFudDtcbnZhciBFVkVOVF9UWVBFUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVWRU5UX1RZUEVTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVWRU5UX1RZUEVTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgRVZFTlRfVFlQRVMuQ2hhbmdlID0gbmV3IEVWRU5UX1RZUEVTKCdDaGFuZ2UnKTtcbiAgICByZXR1cm4gRVZFTlRfVFlQRVM7XG59KShTdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkVWRU5UX1RZUEVTID0gRVZFTlRfVFlQRVM7XG52YXIgQUNUSU9OX1NPVVJDRVMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBQ1RJT05fU09VUkNFUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBQ1RJT05fU09VUkNFUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEFDVElPTl9TT1VSQ0VTLlNlcnZlckFjdGlvbiA9IG5ldyBBQ1RJT05fU09VUkNFUygnU2VydmVyQWN0aW9uJyk7XG4gICAgQUNUSU9OX1NPVVJDRVMuVmlld0FjdGlvbiA9IG5ldyBBQ1RJT05fU09VUkNFUygnVmlld0FjdGlvbicpO1xuICAgIEFDVElPTl9TT1VSQ0VTLkRldmljZUFjdGlvbiA9IG5ldyBBQ1RJT05fU09VUkNFUygnRGV2aWNlQWN0aW9uJyk7XG4gICAgcmV0dXJuIEFDVElPTl9TT1VSQ0VTO1xufSkoU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5BQ1RJT05fU09VUkNFUyA9IEFDVElPTl9TT1VSQ0VTO1xudmFyIERPQ19TVEFUVVNFUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERPQ19TVEFUVVNFUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBET0NfU1RBVFVTRVMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBET0NfU1RBVFVTRVMuZW1wdHkgPSBuZXcgRE9DX1NUQVRVU0VTKCdlbXB0eScpO1xuICAgIERPQ19TVEFUVVNFUy5mZXRjaGluZ0Zyb21TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdmZXRjaGluZ0Zyb21TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZmV0Y2hpbmdMb2NhbCA9IG5ldyBET0NfU1RBVFVTRVMoJ2ZldGNoaW5nTG9jYWwnKTtcbiAgICBET0NfU1RBVFVTRVMuZmV0Y2hlZCA9IG5ldyBET0NfU1RBVFVTRVMoJ2ZldGNoZWQnKTtcbiAgICBET0NfU1RBVFVTRVMuY3JlYXRpbmdPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2NyZWF0aW5nT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMudXBkYXRpbmdPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ3VwZGF0aW5nT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRpbmdPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0aW5nT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRlZE9uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRlZE9uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0ZWRMb2NhbCA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0ZWRMb2NhbCcpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGVkID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRlZCcpO1xuICAgIHJldHVybiBET0NfU1RBVFVTRVM7XG59KShTdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkRPQ19TVEFUVVNFUyA9IERPQ19TVEFUVVNFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnN0YW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIjxzcGFuIGNsYXNzPVxcXCJCdXR0b25fX2ljb25cXFwiPjxkaXYgY2xhc3M9XFxcIlwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pY29uQ2xhc3MgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmljb25DbGFzcyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaWNvbkNsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PC9kaXY+PC9zcGFuPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlcjtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pY29uQ2xhc3MgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPHNwYW4gY2xhc3M9XFxcIkJ1dHRvbl9fdGV4dFxcXCI+XCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRleHQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRleHQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaGJzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmVGb3JtcyA9IHJlcXVpcmUoJ2JhY2tib25lLWZvcm1zJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcbnZhciB2aWV3cyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL2luZGV4Jyk7XG52YXIgTGF5b3V0ID0gdmlld3MuTGF5b3V0O1xudmFyIENoaWxkSG9sZGVyVmlldyA9IHZpZXdzLkNoaWxkSG9sZGVyVmlldztcbnRlbXBsYXRlcy5pbml0KCk7XG52YXIgRk9STVZJRVdfRVZFTlRTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRk9STVZJRVdfRVZFTlRTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZPUk1WSUVXX0VWRU5UUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEZPUk1WSUVXX0VWRU5UUy5zdWJtaXR0ZWQgPSBuZXcgRk9STVZJRVdfRVZFTlRTKCdzdWJtaXR0ZWQnKTtcbiAgICByZXR1cm4gRk9STVZJRVdfRVZFTlRTO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuRk9STVZJRVdfRVZFTlRTID0gRk9STVZJRVdfRVZFTlRTO1xudmFyIEZvcm1WaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9ybVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybVZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnRm9ybVZpZXcnO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnZm9ybSc7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHsgcm9sZTogJ2Zvcm0nIH07XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL0Zvcm1WaWV3LmhicycpO1xuICAgICAgICB0aGlzLnJlZ2lvbnMgPSB7XG4gICAgICAgICAgICBmaWVsZHNSZWdpb246ICcuRm9ybVZpZXdfX2ZpZWxkc1JlZ2lvbicsXG4gICAgICAgICAgICBidXR0b25zUmVnaW9uOiAnLkZvcm1WaWV3X19idXR0b25zUmVnaW9uJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhcnNlSWNvblByb3BlcnRpZXMob3B0aW9ucy5zY2hlbWEpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ0Zvcm1TdGFja2VkJyk7XG4gICAgICAgIHRoaXMuZmllbGRzID0gbmV3IEJhY2tib25lRm9ybXMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYnV0dG9uc0hvbGRlciA9IG5ldyBDaGlsZEhvbGRlclZpZXcuR2VuZXJpY0NoaWxkSG9sZGVyVmlldygpO1xuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICAgIH1cbiAgICBGb3JtVmlldy5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5vZmYoKTtcbiAgICAgICAgdGhpcy5maWVsZHMuc3RvcExpc3RlbmluZygpO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IG51bGw7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5vbignc3VibWl0JywgdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZpZWxkc1JlZ2lvbi5zaG93KHRoaXMuZmllbGRzKTtcbiAgICAgICAgdGhpcy5idXR0b25zUmVnaW9uLnNob3codGhpcy5idXR0b25zSG9sZGVyKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5wYXJzZUljb25Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHNjaGVtYSkge1xuICAgICAgICBfLmVhY2goc2NoZW1hLCBmdW5jdGlvbiAoc2NoZW1hSXRlbSkge1xuICAgICAgICAgICAgaWYgKHNjaGVtYUl0ZW0uaWNvbikge1xuICAgICAgICAgICAgICAgIHNjaGVtYUl0ZW0udGl0bGUgPSAnPGkgY2xhc3M9XCJmYSBmYS0nICsgc2NoZW1hSXRlbS5pY29uICsgJ1wiPjwvaT4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5vbkZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoRk9STVZJRVdfRVZFTlRTLnN1Ym1pdHRlZC50b1N0cmluZygpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuZGlzYWJsZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKEZvcm1WaWV3LkRJU0FCTEVEX0NMQVNTKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5lbmFibGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkcy52YWxpZGF0ZSgpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkcy5nZXRWYWx1ZShwcm9wZXJ0eSk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuc2V0VmFsdWUocHJvcGVydGllcyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyA9ICdGb3JtVmlldy0tZGlzYWJsZWQnO1xuICAgIHJldHVybiBGb3JtVmlldztcbn0pKExheW91dC5MYXlvdXQpO1xuZXhwb3J0cy5Gb3JtVmlldyA9IEZvcm1WaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZS1mb3Jtc1wiXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG4vKipcbiAqIEluY2x1ZGUgdGhpcyB0ZW1wbGF0ZSBmaWxlIGFmdGVyIGJhY2tib25lLWZvcm1zLmFtZC5qcyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZXNcbiAqXG4gKiAnZGF0YS0qJyBhdHRyaWJ1dGVzIGNvbnRyb2wgd2hlcmUgZWxlbWVudHMgYXJlIHBsYWNlZFxuICovXG52YXIgRm9ybSA9IHJlcXVpcmUoJ2JhY2tib25lLWZvcm1zJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgRm9ybS50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJzxkaXYgZGF0YS1maWVsZHNldHM+PC9kaXY+Jyk7XG4gICAgRm9ybS5GaWVsZHNldC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gIDxmaWVsZHNldCBkYXRhLWZpZWxkcz5cXFxuICAgIDwlIGlmIChsZWdlbmQpIHsgJT5cXFxuICAgICAgPGxlZ2VuZD48JT0gbGVnZW5kICU+PC9sZWdlbmQ+XFxcbiAgICA8JSB9ICU+XFxcbiAgPC9maWVsZHNldD5cXFxuJyk7XG4gICAgRm9ybS5GaWVsZC50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRm9ybUZpZWxkLmhicycpO1xuICAgIEZvcm0uTmVzdGVkRmllbGQudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICA8ZGl2IGNsYXNzPVwiZmllbGQtPCU9IGtleSAlPlwiPlxcXG4gICAgPGRpdiB0aXRsZT1cIjwlPSB0aXRsZSAlPlwiIGNsYXNzPVwiaW5wdXQteGxhcmdlXCI+XFxcbiAgICAgIDxzcGFuIGRhdGEtZWRpdG9yPjwvc3Bhbj5cXFxuICAgICAgPGRpdiBjbGFzcz1cImhlbHAtaW5saW5lXCIgZGF0YS1lcnJvcj48L2Rpdj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIj48JT0gaGVscCAlPjwvZGl2PlxcXG4gIDwvZGl2PlxcXG4nKTtcbiAgICBGb3JtLkZpZWxkLmVycm9yQ2xhc3NOYW1lID0gJ0Zvcm1Hcm91cC0taGFzRXJyb3InO1xuICAgIGlmIChGb3JtLmVkaXRvcnMuTGlzdCkge1xuICAgICAgICBGb3JtLmVkaXRvcnMuTGlzdC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gICAgPGRpdiBjbGFzcz1cImJiZi1saXN0XCI+XFxcbiAgICAgIDx1bCBjbGFzcz1cInVuc3R5bGVkIGNsZWFyZml4XCIgZGF0YS1pdGVtcz48L3VsPlxcXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBiYmYtYWRkXCIgZGF0YS1hY3Rpb249XCJhZGRcIj5BZGQ8L2J1dHRvbj5cXFxuICAgIDwvZGl2PlxcXG4gICcpO1xuICAgICAgICBGb3JtLmVkaXRvcnMuTGlzdC5JdGVtLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgICA8bGkgY2xhc3M9XCJjbGVhcmZpeFwiPlxcXG4gICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCIgZGF0YS1lZGl0b3I+PC9kaXY+XFxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJiZi1kZWxcIiBkYXRhLWFjdGlvbj1cInJlbW92ZVwiPiZ0aW1lczs8L2J1dHRvbj5cXFxuICAgIDwvbGk+XFxcbiAgJyk7XG4gICAgICAgIEZvcm0uZWRpdG9ycy5MaXN0Lk9iamVjdC50ZW1wbGF0ZSA9IEZvcm0uZWRpdG9ycy5MaXN0Lk5lc3RlZE1vZGVsLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgICA8ZGl2IGNsYXNzPVwiYmJmLWxpc3QtbW9kYWxcIj48JT0gc3VtbWFyeSAlPjwvZGl2PlxcXG4gICcpO1xuICAgIH1cbn1cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L3RlbXBsYXRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiICAgIDxwIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2hlbHBNZXNzYWdlXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmhlbHAgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlbHAgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImhlbHBcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvcD5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMj1cImZ1bmN0aW9uXCI7XG5cbiAgcmV0dXJuIFwiPGRpdlxcbiAgY2xhc3M9XFxcIkZvcm1Hcm91cCBGb3JtR3JvdXAtLVwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5rZXkgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwia2V5XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuICA8bGFiZWwgY2xhc3M9XFxcIkZvcm1Hcm91cF9fbGFiZWxcXFwiIGZvcj1cXFwiXCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5lZGl0b3JJZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZWRpdG9ySWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImVkaXRvcklkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9sYWJlbD5cXG4gIDxzcGFuIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2NvbnRyb2xcXFwiIGRhdGEtZWRpdG9yPjwvc3Bhbj5cXG4gIDxwIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2Vycm9yTWVzc2FnZVxcXCIgZGF0YS1lcnJvcj48L3A+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVscCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtRmllbGQuaGJzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuQ2hpbGRIb2xkZXJWaWV3ID0gcmVxdWlyZSgnLi9DaGlsZEhvbGRlclZpZXcnKTtcbmV4cG9ydHMuVmlldyA9IHJlcXVpcmUoJy4vVmlldycpO1xuZXhwb3J0cy5JdGVtVmlldyA9IHJlcXVpcmUoJy4vSXRlbVZpZXcnKTtcbmV4cG9ydHMuTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbmV4cG9ydHMuTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBWaWV3ID0gcmVxdWlyZSgnLi9WaWV3Jyk7XG52YXIgQ2hpbGRIb2xkZXJWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hpbGRIb2xkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoaWxkSG9sZGVyVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgQmFja2JvbmUuQ2hpbGRWaWV3Q29udGFpbmVyKCk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyaWdnZXJNZXRob2QoJ2JlZm9yZTphZGQ6Y2hpbGQnLCB2aWV3KTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGNoaWxkIHZpZXcgaXRzZWxmIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgICAgICAvLyByZW1vdmUgYW5kL29yIGRlc3Ryb3kgaXQgbGF0ZXJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5hZGQodmlldyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odmlldywgJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy52aWV3RGVzdHJveWVkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZFZpZXcodmlldywgaW5kZXgpO1xuICAgICAgICBNYXJpb25ldHRlLnRyaWdnZXJNZXRob2QuY2FsbCh2aWV3LCAnc2hvdycpO1xuICAgICAgICB0aGlzLnRyaWdnZXJNZXRob2QoJ2FkZDpjaGlsZCcsIHZpZXcpO1xuICAgIH07XG4gICAgLy8gcmVuZGVyIHRoZSBjaGlsZCB2aWV3XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5yZW5kZXJDaGlsZFZpZXcgPSBmdW5jdGlvbiAodmlldywgaW5kZXgpIHtcbiAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hIdG1sKHZpZXcsIGluZGV4KTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUudmlld0Rlc3Ryb3llZCA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucmVtb3ZlKHZpZXcpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5hdHRhY2hIdG1sID0gZnVuY3Rpb24gKHZpZXcsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh2aWV3LmVsKTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmNhbGwoJ3JlbmRlcicpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uY2FsbCgnZGVzdHJveScpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBDaGlsZEhvbGRlclZpZXc7XG59KShWaWV3LlZpZXcpO1xuZXhwb3J0cy5DaGlsZEhvbGRlclZpZXcgPSBDaGlsZEhvbGRlclZpZXc7XG52YXIgR2VuZXJpY0NoaWxkSG9sZGVyVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdlbmVyaWNDaGlsZEhvbGRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2VuZXJpY0NoaWxkSG9sZGVyVmlldygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3O1xufSkoQ2hpbGRIb2xkZXJWaWV3KTtcbmV4cG9ydHMuR2VuZXJpY0NoaWxkSG9sZGVyVmlldyA9IEdlbmVyaWNDaGlsZEhvbGRlclZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGlsZEhvbGRlclZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9DaGlsZEhvbGRlclZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBMYXlvdXQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYXlvdXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGF5b3V0KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGF5b3V0LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIExheW91dC5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgTGF5b3V0LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGF5b3V0O1xufSkoTWFyaW9uZXR0ZS5MYXlvdXRWaWV3KTtcbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGF5b3V0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvTGF5b3V0LmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTGlzdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlzdChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpc3QucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTGlzdC5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMaXN0O1xufSkoTWFyaW9uZXR0ZS5Db21wb3NpdGVWaWV3KTtcbmV4cG9ydHMuTGlzdCA9IExpc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MaXN0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvTGlzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiXFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2ZpZWxkc1JlZ2lvblxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2J1dHRvbnNSZWdpb25cXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIkZvcm1WaWV3X19kaXNhYmxlXFxcIj48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5oYnNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBTcGlubmVyVmlldyA9IHJlcXVpcmUoJy4uL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG52YXIgTm90aWNlVmlld01vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90aWNlVmlld01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdGljZVZpZXdNb2RlbCgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXI6ICcnLFxuICAgICAgICAgICAgYm9keTogJycsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGNhbkRpc21pc3M6IHRydWVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImhlYWRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2hlYWRlcicpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnaGVhZGVyJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJib2R5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnYm9keScpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnYm9keScsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiYnV0dG9uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2J1dHRvbnMnKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiY2FuRGlzbWlzc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2NhbkRpc21pc3MnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ2NhbkRpc21pc3MnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImxvYWRpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdsb2FkaW5nJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdsb2FkaW5nJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm90aWNlVmlld01vZGVsO1xufSkoQmFja2JvbmUuTW9kZWwpO1xuZXhwb3J0cy5Ob3RpY2VWaWV3TW9kZWwgPSBOb3RpY2VWaWV3TW9kZWw7XG52YXIgTm90aWNlVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdGljZVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90aWNlVmlldyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMubmFtZSA9ICdOb3RpY2VWaWV3JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbm90aWNlLmhicycpO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnc2VjdGlvbic7XG4gICAgICAgIHRoaXMudWkgPSB7XG4gICAgICAgICAgICBidXR0b25zOiAnLk5vdGljZVZpZXdfX2J0bnMnXG4gICAgICAgIH07XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5tb2RlbCB8fCBuZXcgTm90aWNlVmlld01vZGVsKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5oZWFkZXIgPSBvcHRpb25zLmhlYWRlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zID0gb3B0aW9ucy5idXR0b25zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxvYWRpbmcgPSBvcHRpb25zLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMuY2FuRGlzbWlzcykpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2FuRGlzbWlzcyA9IG9wdGlvbnMuY2FuRGlzbWlzcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2UnLCB0aGlzLnJlbmRlcik7XG4gICAgfVxuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2xvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldyA9IG5ldyBTcGlubmVyVmlldy5TcGlubmVyVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLl9sb2FkaW5nVmlldy5lbCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbG9hZGluZycpKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuYnV0dG9ucy5lbXB0eSgpO1xuICAgICAgICB0aGlzLm1vZGVsLmdldCgnYnV0dG9ucycpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgYnRuLnJlbmRlcigpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuVG8oYnRuLCAnY2xpY2snLCBfdGhpcy5vbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICAgICAgX3RoaXMudWkuYnV0dG9ucy5hcHBlbmQoYnRuLmVsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5jYW5EaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5nZXQoJ2NhbkRpc21pc3MnKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWwuc2hvdygpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQocHJvcGVydGllcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmRlc3Ryb3lCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBidG4uZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5vbkJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoJ2J1dHRvbjpjbGlja2VkJyk7XG4gICAgfTtcbiAgICByZXR1cm4gTm90aWNlVmlldztcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuTm90aWNlVmlldyA9IE5vdGljZVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpY2VWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L05vdGljZVZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMyPVwiZnVuY3Rpb25cIjtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkaW5nIGhlYWRpbmctLW5vdGljZSBhbmltYXRlZCBib3VuY2VJblxcXCI+XFxuICAgIDxoMT5cIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaGVhZGVyIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oZWFkZXIgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImhlYWRlclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gxPlxcbiAgICA8cD5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmJvZHkgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJvZHkgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImJvZHlcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvcD5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJOb3RpY2VWaWV3X19idG5zXFxcIj48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgRXhjZXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFeGNlcHRpb24oZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0VYQ0VQVElPTicsIHRoaXMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJzdGFja1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3Iuc3RhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAnOiAnICsgdGhpcy5tZXNzYWdlO1xuICAgIH07XG4gICAgcmV0dXJuIEV4Y2VwdGlvbjtcbn0pKCk7XG5leHBvcnRzLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbnZhciBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERvY3VtZW50RXhpc3RzRXhjZXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERvY3VtZW50RXhpc3RzRXhjZXB0aW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIERvY3VtZW50RXhpc3RzRXhjZXB0aW9uO1xufSkoRXhjZXB0aW9uKTtcbmV4cG9ydHMuRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24gPSBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbjtcbnZhciBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdEltcGxlbWVudGVkRXhjZXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdEltcGxlbWVudGVkRXhjZXB0aW9uO1xufSkoRXhjZXB0aW9uKTtcbmV4cG9ydHMuTm90SW1wbGVtZW50ZWRFeGNlcHRpb24gPSBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4Y2VwdGlvbnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9FeGNlcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVyZmFjZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnRlcmZhY2VzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgQXBpQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwaUNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBpQ29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBBcGlDb250cm9sbGVyO1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5BcGlDb250cm9sbGVyID0gQXBpQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwaS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0FwaS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9BcHAnKTtcbnZhciBDb21wb25lbnRDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tcG9uZW50Q29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21wb25lbnRDb250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQ29tcG9uZW50Q29udHJvbGxlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh2aWV3LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghKG9wdGlvbnMucmVnaW9uICYmIHRoaXMuX21haW5WaWV3KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIG5vdCBAc2hvdyB0aGUgbWFpbiB2aWV3LCB1c2UgQHNldE1haW5WaWV3IHdpdGggY29tcG9uZW50cyBhbmQgQHNob3cgZnJvbSB0aGUgYXBwcyBjb250cm9sbGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2hvdy5jYWxsKHRoaXMsIHZpZXcsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcG9uZW50Q29udHJvbGxlcjtcbn0pKEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5leHBvcnRzLkNvbXBvbmVudENvbnRyb2xsZXIgPSBDb21wb25lbnRDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tcG9uZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2UnKTtcbnZhciBSb3V0ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUm91dGVyQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSb3V0ZXJDb250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHVwQWN0aW9ucyhvcHRpb25zLmFjdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hdXRob3JpemVBbkFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFjdGlvblBvbGljeShhY3Rpb25Db25maWcpLmlzQXV0aG9yaXplZChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aW9uVW5hdXRob3JpemVkID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiXCIgKyBhY3Rpb25OYW1lICsgXCIgd2FzIHVuYXV0aG9yaXplZFwiKTtcbiAgICAgICAgZXJyLm5hbWUgPSAnQWN0aW9uVW5hdXRob3JpemVkJztcbiAgICAgICAgZXJyLmFjdGlvbk5hbWUgPSBhY3Rpb25OYW1lO1xuICAgICAgICBlcnIuYWN0aW9uQ29uZmlnID0gYWN0aW9uQ29uZmlnO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5jYWxsQWN0aW9uVW5hdXRob3JpemVkID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZy51bmF1dGhvcml6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnLnVuYXV0aG9yaXplZC5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb24oJ2FjdGlvblVuYXV0aG9yaXplZCcpLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuZGVmYXVsdFBvbGljeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3Rpb25Qb2xpY3koKTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9zZXR1cEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfLmVhY2goYWN0aW9ucywgZnVuY3Rpb24gKGNvbmZpZywga2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5hZGRBY3Rpb24oa2V5LCBjb25maWcpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25Db25maWcgPSBmdW5jdGlvbiAoYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChhY3Rpb25Db25maWcgPT0gbnVsbCkge1xuICAgICAgICAgICAgYWN0aW9uQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7IH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWN0aW9uQ29uZmlnRnJvbUZuKGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uQ29uZmlnRnJvbUZuID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmbjogZm5cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25GdW5jdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25Db25maWcuZm47XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uUG9saWN5ID0gZnVuY3Rpb24gKGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZykgfHwgIWFjdGlvbkNvbmZpZy5wb2xpY3kpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9saWN5ID0gdGhpcy5nZXRPcHRpb24oJ2RlZmF1bHRQb2xpY3knKTtcbiAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oZGVmYXVsdFBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFBvbGljeS5jYWxsKHRoaXMsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFBvbGljeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWcucG9saWN5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIHZhciBhdHRhY2hlciA9IHRoaXM7XG4gICAgICAgIGFjdGlvbkNvbmZpZyA9IHRoaXMuX2dldEFjdGlvbkNvbmZpZyhhY3Rpb25Db25maWcpO1xuICAgICAgICB2YXIgX2ZuID0gdGhpcy5fZ2V0QWN0aW9uRnVuY3Rpb24oYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihfZm4pKSB7XG4gICAgICAgICAgICBhdHRhY2hlclthY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRPcHRpb24oJ2F1dGhvcml6ZUFuQWN0aW9uJykuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0FjdGlvblVuYXV0aG9yaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25Db25maWcuaW50ZXJuYWxBY3Rpb25FcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxBY3Rpb25VbmF1dGhvcml6ZWQoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsQWN0aW9uVW5hdXRob3JpemVkKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm94eWluZyB0aHJvdWdoIGFuIGF1dGhvcml6ZSBtZXRob2QgcmVxdWlyZXMgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUm91dGVyQ29udHJvbGxlcjtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuUm91dGVyQ29udHJvbGxlciA9IFJvdXRlckNvbnRyb2xsZXI7XG52YXIgQWN0aW9uUG9saWN5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWN0aW9uUG9saWN5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjdGlvblBvbGljeShvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBBY3Rpb25Qb2xpY3kucHJvdG90eXBlLmlzQXV0aG9yaXplZCA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0F1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNBdXRob3JpemVkLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uUG9saWN5O1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5BY3Rpb25Qb2xpY3kgPSBBY3Rpb25Qb2xpY3k7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3V0ZXJDb250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvUm91dGVyQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMnKTtcbmV4cG9ydHMuaTE4bmV4dCA9IHJlcXVpcmUoJy4vaTE4bmV4dCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jbGllbnQnKTtcbmZ1bmN0aW9uIGluaXRDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIWNvbmZpZy5jb25maWcuaGFuZGxlYmFycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcmVxdWlyZXMgaGFuZGxlYmFycyB0byBoYXZlIGJlZW4gcGFzc2VkIGluIHRvIGNvbmZpZ3VyZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnRDb250cm9sbGVyKG5hbWUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIENvbnRyb2xsZXIgPSBjb21wb25lbnRzW25hbWVdO1xuICAgICAgICBpZiAoQ29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250cm9sbGVyKHtcbiAgICAgICAgICAgICAgICBtb2RlbDogY29udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBcIiArIG5hbWUgKyBcIiBjb21wb25lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzID09PSB2b2lkIDApIHsgYXR0cmlidXRlcyA9IHt9OyB9XG4gICAgICAgIHZhciBhdHRyID0gXy5tYXAoYXR0cmlidXRlcyB8fCB7fSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyh2YWwgfHwgXy5pc0Zpbml0ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsga2V5ICsgXCI9XFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnICcgKyBhdHRyLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSwgaGFzaCkge1xuICAgICAgICB2YXIgY2xhc3NlcztcbiAgICAgICAgaWYgKGhhc2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFzaCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzc05hbWUgbXVzdCBzcGVjaWZ5IGEgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNoW1wiY2xhc3NcIl0pIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBoYXNoW1wiY2xhc3NcIl0uc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnVuc2hpZnQobmFtZSk7XG4gICAgICAgIHJldHVybiBoYXNoW1wiY2xhc3NcIl0gPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdjJywgZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBnZXRDb21wb25lbnRDb250cm9sbGVyKG5hbWUsIHRoaXMpO1xuICAgICAgICByZXR1cm4gY29udHJvbGxlci5yZW5kZXIob3B0aW9ucyk7XG4gICAgfSk7XG4gICAgY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdpbl9yZWdpb24nLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaW9uc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGZuOiBvcHRpb25zLmZuXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdyZWdpb24nLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29tcG9uZW50UGF0aCA9IFwiXCIgKyB0aGlzLl9jb21wb25lbnROYW1lICsgXCJfX1wiICsgbmFtZTtcbiAgICAgICAgdmFyIGluX3JlZ2lvbiA9IHRoaXMuX3JlZ2lvbnNbbmFtZV07XG4gICAgICAgIHZhciBjb250ZW50ID0gaW5fcmVnaW9uID8gaW5fcmVnaW9uLmZuKHRoaXMpIDogJyc7XG4gICAgICAgIHZhciBoYXNoID0gb3B0aW9ucy5oYXNoIHx8IHt9O1xuICAgICAgICBjbGFzc05hbWUoXCJcIiArIGNvbXBvbmVudFBhdGggKyBcIi1yZWdpb25cIiwgaGFzaCk7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gZ2V0QXR0cmlidXRlcyhoYXNoKTtcbiAgICAgICAgcmV0dXJuIFsnPGRpdicsIGF0dHJpYnV0ZXMsICc+JywgY29udGVudCwgXCI8L2Rpdj5cIl0uam9pbignJyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmluaXRDb21wb25lbnRzID0gaW5pdENvbXBvbmVudHM7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaGFuZGxlYmFycy9jb21wb25lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBpMThuZXh0ID0gcmVxdWlyZSgnaTE4bmV4dCcpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgaGFuZGxlYmFycyA9IGNvbmZpZy5jb25maWcuaGFuZGxlYmFycztcbiAgICAvKipcbiAgICAgKiBHZXQgdHJhbnNsYXRpb24gZm9yIGEgZ2l2ZW4ga2V5LCBwYXNzaW5nIHRoZSBvcHRpb25zIGhhc2ggdG8gaTE4bmV4dFxuICAgICAqIHRvIGFsbG93IGZvciB2YXJpYWJsZSByZXBsYWNlbWVudFxuICAgICAqIHt7ayBoZWFkZXIgbXlWYXI9XCJoZWxsb1wifX1cbiAgICAgKi9cbiAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKFwidFwiLCBmdW5jdGlvbiAoaTE4bl9rZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICB3cmFwV2l0aEtleTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBfLmV4dGVuZChvcHRzLCBvcHRpb25zLmhhc2gpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gaTE4bmV4dC50KGkxOG5fa2V5LCBvcHRzKTtcbiAgICAgICAgdmFyIGF0dHJzID0gW1wiZGF0YS10PVxcXCJcIiArIGkxOG5fa2V5ICsgXCJcXFwiXCJdO1xuICAgICAgICBfLmVhY2gob3B0cywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyh2YWwgfHwgXy5pc0Zpbml0ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRycy5wdXNoKFwiZGF0YS1cIiArIGtleSArIFwiPVxcXCJcIiArIHZhbCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRzWyd3cmFwV2l0aEtleSddKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBcIiArIChhdHRycy5qb2luKCcgJykpICsgXCI+XCIgKyAobmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpKSArIFwiPC9zcGFuPlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBoYW5kbGViYXJzLlNhZmVTdHJpbmcocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0aW9uIGluIGEgYmxvY2sgY29udGV4dFxuICAgICAqL1xuICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJ0clwiLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IGkxOG5leHQuZnVuY3Rpb25zLmV4dGVuZChvcHRpb25zLmhhc2gsIGNvbnRleHQpO1xuICAgICAgICBpZiAob3B0aW9ucy5mbikge1xuICAgICAgICAgICAgb3B0cy5kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmZuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBpMThuZXh0LnQob3B0cy5rZXksIG9wdHMpO1xuICAgICAgICByZXR1cm4gbmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWkxOG5leHQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2kxOG5leHQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUxX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImkxOG5leHRcIlxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLkFwcCA9IHJlcXVpcmUoJy4vQXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBBUFBfUk9VVEVSX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFQUF9ST1VURVJfRVZFTlRTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFQUF9ST1VURVJfRVZFTlRTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQVBQX1JPVVRFUl9FVkVOVFMuZmlyc3RSb3V0ZSA9IG5ldyBBUFBfUk9VVEVSX0VWRU5UUygnZmlyc3RSb3V0ZScpO1xuICAgIHJldHVybiBBUFBfUk9VVEVSX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkFQUF9ST1VURVJfRVZFTlRTID0gQVBQX1JPVVRFUl9FVkVOVFM7XG52YXIgQXBwUm91dGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwUm91dGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcFJvdXRlcihvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZygnQXBwUm91dGVyICcgKyBvcHRpb25zLm5hbWUgKyAnIGNyZWF0ZWQnLCBvcHRpb25zLmFwcFJvdXRlcyk7XG4gICAgfVxuICAgIEFwcFJvdXRlci5wcm90b3R5cGUub25Sb3V0ZSA9IGZ1bmN0aW9uIChyb3V0ZU5hbWUsIHJvdXRlUGF0aCwgcm91dGVBcmdzKSB7XG4gICAgICAgIGlmIChBcHBSb3V0ZXIuX2ZpcnN0Um91dGVUcmlnZ2VyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcihBUFBfUk9VVEVSX0VWRU5UUy5maXJzdFJvdXRlLnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBcHBSb3V0ZXIuX2ZpcnN0Um91dGVUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXBwUm91dGVyO1xufSkoTWFyaW9uZXR0ZS5BcHBSb3V0ZXIpO1xuZXhwb3J0cy5BcHBSb3V0ZXIgPSBBcHBSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb3V0ZXJzL0FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLm1kb3duID0gcmVxdWlyZSgnLi9tZG93bicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGlja2l0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBTaG93ZG93biA9IHJlcXVpcmUoJ3Nob3dkb3duJyk7XG52YXIgbWRvd24gPSBuZXcgU2hvd2Rvd24uQ29udmVydGVyKCk7XG5leHBvcnRzLnNlbGVjdG9yID0gJ1tkYXRhLW1kb3duXSc7XG5leHBvcnRzLnVwZGF0ZU1ldGhvZCA9ICdodG1sJztcbmZ1bmN0aW9uIG9uR2V0KHZhbCkge1xuICAgIHJldHVybiBtZG93bi5tYWtlSHRtbCh2YWwpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWRvd24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGlja2l0L21kb3duLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81Nl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzaG93ZG93blwiXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuZXhwb3J0cy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzJyk7XG5leHBvcnRzLkRpc3BhdGNoZXIgPSByZXF1aXJlKCcuL0Rpc3BhdGNoZXInKTtcbmV4cG9ydHMuU3RvcmUgPSByZXF1aXJlKCcuL1N0b3JlJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0pKCk7XG5leHBvcnRzLkFjdGlvbiA9IEFjdGlvbjtcbnZhciBBY3Rpb25DcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY3Rpb25DcmVhdG9yKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbkNyZWF0b3I7XG59KSgpO1xuZXhwb3J0cy5BY3Rpb25DcmVhdG9yID0gQWN0aW9uQ3JlYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjdGlvbnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L2FjdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvaW50ZXJmYWNlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eCcpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xudmFyIERpc3BhdGNoZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaXNwYXRjaGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVzID0gW107XG4gICAgICAgIHRoaXMucGF5bG9hZFF1ZXVlID0gW107XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5yZWdpc3RlclN0b3JlID0gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHRoaXMuc3RvcmVzLnB1c2goc3RvcmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcihzdG9yZS5kaXNwYXRjaC5iaW5kKHN0b3JlKSk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaFBheWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0gdGhpcy5wYXlsb2FkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc3BhdGNoaW5nOicsIHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5U3RvcmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQYXlsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLm5vdGlmeVN0b3JlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUubm90aWZ5SWZTdGF0ZUNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVQYXlsb2FkID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5wYXlsb2FkUXVldWUucHVzaChwYXlsb2FkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rpc3BhdGNoZXI6IEhhbmRsaW5nJywgcGF5bG9hZCk7XG4gICAgICAgIGlmICghdGhpcy5kaXNwYXRjaGluZylcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQYXlsb2FkKCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVTZXJ2ZXJBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb25zdGFudHMuQUNUSU9OX1NPVVJDRVMuU2VydmVyQWN0aW9uLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlRGV2aWNlQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogY29uc3RhbnRzLkFDVElPTl9TT1VSQ0VTLkRldmljZUFjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bG9hZChwYXlsb2FkKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVZpZXdBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb25zdGFudHMuQUNUSU9OX1NPVVJDRVMuVmlld0FjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bG9hZChwYXlsb2FkKTtcbiAgICB9O1xuICAgIHJldHVybiBEaXNwYXRjaGVyO1xufSkoZmx1eC5EaXNwYXRjaGVyKTtcbmV4cG9ydHMuRGlzcGF0Y2hlciA9IERpc3BhdGNoZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EaXNwYXRjaGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9EaXNwYXRjaGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82MV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmbHV4XCJcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG52YXIgRXZlbnRlZENsYXNzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL0V2ZW50ZWRDbGFzcycpO1xudmFyIFN0b3JlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3RvcmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3RvcmUoZGlzcGF0Y2hlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5kaXNwYXRjaFRva2VuID0gZGlzcGF0Y2hlci5yZWdpc3RlclN0b3JlKHRoaXMpO1xuICAgIH1cbiAgICBTdG9yZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAocGF5bG9hZCkgeyB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhdGVIYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5ub3RpZnlJZlN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVIYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlSGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKGNvbnN0YW50cy5FVkVOVF9UWVBFUy5DaGFuZ2UudmFsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLmFkZENoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oY29uc3RhbnRzLkVWRU5UX1RZUEVTLkNoYW5nZS52YWwsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9mZihjb25zdGFudHMuRVZFTlRfVFlQRVMuQ2hhbmdlLnZhbCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlO1xufSkoRXZlbnRlZENsYXNzLkV2ZW50ZWRDbGFzcyk7XG5leHBvcnRzLlN0b3JlID0gU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdG9yZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvU3RvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEV2ZW50ZWRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRlZENsYXNzKCkge1xuICAgIH1cbiAgICByZXR1cm4gRXZlbnRlZENsYXNzO1xufSkoKTtcbmV4cG9ydHMuRXZlbnRlZENsYXNzID0gRXZlbnRlZENsYXNzO1xuXy5leHRlbmQoRXZlbnRlZENsYXNzLnByb3RvdHlwZSwgQmFja2JvbmUuRXZlbnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV2ZW50ZWRDbGFzcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgRXhjZXB0aW9ucyA9IHJlcXVpcmUoJy4uL0V4Y2VwdGlvbnMnKTtcbnZhciBEZWJvdW5jZWREb2NDb250YWluZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlYm91bmNlZERvY0NvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5kb2NzID0gW107XG4gICAgICAgIHRoaXMuZG9jVGltZVRvTGl2ZSA9IDEwMDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9jcy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuY2xlYXJFeHBpcmVkRG9jcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuY2xlYXJBbGxEb2NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRvY3MubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1dHMgYSBkb2N1bWVudCBpbiB0byB0aGUgYXJyYXkgaWYgaXQgaXMgbm90IHRoZXJlXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGRvYykge1xuICAgICAgICBpZiAoIXRoaXMuYnlJZChkb2MuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3MucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICBkb2M6IGRvYyxcbiAgICAgICAgICAgICAgICBleHBpcmVzOiB0aGlzLmRvY1RpbWVUb0xpdmUgPyBEYXRlLm5vdygpICsgdGhpcy5kb2NUaW1lVG9MaXZlIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9ucy5Eb2N1bWVudEV4aXN0c0V4Y2VwdGlvbihuZXcgRXJyb3IoJ0RvY3VtZW50ICcgKyBkb2MuaWQgKyAnIGFscmVhZHkgZXhpc3RzJykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGVudHJ5IHdpdGggZGV0YWlscyBhYm91dCB0aGUgZG9jIHdpdGggYW4gaWRcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmVudHJ5QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgaXRlbSA9IF8uZmluZFdoZXJlKHRoaXMuZG9jcywgeyBpZDogaWQgfSk7XG4gICAgICAgIGlmIChpdGVtKVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYWxsIHRoZSBkb2NzXG4gICAgICogQHJldHVybnMge0lEZWJvdW5jZWREb2NJdGVtPFQ+W119XG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3MubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmRvYztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNhdmVkIGRvY3VtZW50IGJ5IGl0cyBpZFxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm5zIHtUfVxuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuYnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgaXRlbSA9IF8uZmluZFdoZXJlKHRoaXMuZG9jcywgeyBpZDogaWQgfSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5kb2M7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIGRvYyBpbiB0byB0aGUgc3RvcmUsIGlmIGl0IGV4aXN0c1xuICAgICAqIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VEb2MgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZG9jLmlkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZXJnZURvYyBkb2N1bWVudCBtdXN0IGhhdmUgYSB2YWxpZCBpZCcpO1xuICAgICAgICB2YXIga2V5cyA9IF8ua2V5cyhkb2MpO1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLmVudHJ5QnlJZChkb2MuaWQpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0RvYyA9IGVudHJ5LmRvYztcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgXy5lYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubWVyZ2VEb2NLZXkoa2V5LCBleGlzdGluZ0RvYywgZG9jKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXJnZWQ6IGNoYW5nZWRQcm9wZXJ0aWVzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IGNoYW5nZWRQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgIGRvYzogZXhpc3RpbmdEb2NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1dChkb2MpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXJnZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBrZXlzLFxuICAgICAgICAgICAgICAgIGRvYzogZG9jXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLm1lcmdlRG9jS2V5ID0gZnVuY3Rpb24gKGtleSwgZXhpc3RpbmdEb2MsIGRvYykge1xuICAgICAgICB2YXIgdmFsdWUgPSBkb2Nba2V5XTtcbiAgICAgICAgaWYgKCFfLmlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdEb2Nba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZ0RvY1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VNdWx0aXBsZSA9IGZ1bmN0aW9uIChkb2NzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtZXJnZXMgPSBkb2NzLm1hcChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubWVyZ2VEb2MoZG9jKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXJnZXM7XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VkRG9jQ29udGFpbmVyO1xufSkoKTtcbmV4cG9ydHMuRGVib3VuY2VkRG9jQ29udGFpbmVyID0gRGVib3VuY2VkRG9jQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVib3VuY2VkRG9jQ29udGFpbmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL0RlYm91bmNlZERvY0NvbnRhaW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL05hdmlnYXRpb25Db250cm9sbGVyJyk7XG52YXIgbmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uQ29udHJvbGxlci5OYXZpZ2F0aW9uQ29udHJvbGxlcigpO1xubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9uYXZpZ2F0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOYXZpZ2F0aW9uQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOYXZpZ2F0aW9uQ29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaGlzdG9yeUlzU3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBOYXZpZ2F0aW9uQ29udHJvbGxlci5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAocm91dGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZShyb3V0ZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignbmF2aWdhdGVkJywgcm91dGUpO1xuICAgIH07XG4gICAgTmF2aWdhdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldEN1cnJlbnRSb3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZyYWcgPSBCYWNrYm9uZS5oaXN0b3J5LmdldEZyYWdtZW50KCk7XG4gICAgICAgIGlmIChfLmlzRW1wdHkoZnJhZykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5hdmlnYXRpb25Db250cm9sbGVyLnByb3RvdHlwZS5zdGFydEhpc3RvcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAoQmFja2JvbmUuaGlzdG9yeSkge1xuICAgICAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydChvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUlzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBOYXZpZ2F0aW9uQ29udHJvbGxlcjtcbn0pKE1hcmlvbmV0dGUuQ29udHJvbGxlcik7XG5leHBvcnRzLk5hdmlnYXRpb25Db250cm9sbGVyID0gTmF2aWdhdGlvbkNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OYXZpZ2F0aW9uQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9OYXZpZ2F0aW9uQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi8uLi90eXBpbmdzL3RzZC5kLnRzJyAvPlxuJ3VzZSBzdHJpY3QnO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG4vKipcbiAqIEV4dHJhY3QgYSBxdWVyeSBzdHJpbmcgdmFsdWVcbiAqIEBwYXJhbSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSBrZXlcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBnZXRRdWVyeShzZWFyY2hTdHJpbmcsIGtleSkge1xuICAgIHZhciB2YWx1ZXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoXCImXCIpO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGZ0ID0gdmFsdWVzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKGZ0WzBdID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0cy5nZXRRdWVyeSA9IGdldFF1ZXJ5O1xuLyoqXG4gKiBFeHRyYWN0IHRoZSBzZWFyY2hTdHJpbmcgcXVlcnkgc3RyaW5nIHZhbHVlcyBmcm9tIGEgdXJsXG4gKiBAcGFyYW0gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZWFyY2hTdHJpbmcodXJsKSB7XG4gICAgaWYgKC9cXCMvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcbiAgICB9XG4gICAgaWYgKC9cXD8vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5zZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmc7XG4vKipcbiAqIEdldCB0aGUgY29ycmVjdCBzZXBhcmF0b3IgZm9yIGEgdXJsIGFuZCBhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2VwYXJhdG9yKHVybCkge1xuICAgIGlmICh1cmwpIHtcbiAgICAgICAgaWYgKC9cXD8vLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuICcmJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnPyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcbi8qKlxuICogSm9pbnMgdXJsIHF1ZXJ5IHN0cmluZyB2YWx1ZXNcbiAqIEBwYXJhbSB1cmxzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKCkge1xuICAgIHZhciB1cmxzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdXJsc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIF9tZXJnZSA9IGZ1bmN0aW9uIChtZW1vLCB2YWwpIHtcbiAgICAgICAgcmV0dXJuIG1lbW8gKyAoc2VwYXJhdG9yKG1lbW8pKSArIHZhbDtcbiAgICB9O1xuICAgIHJldHVybiBfLnJlZHVjZSh1cmxzLCBfbWVyZ2UpO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcbi8qKlxuICogSm9pbiB1cmwgcGF0aHNcbiAqIEBwYXJhbSB1cmxzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luUGF0aHMoKSB7XG4gICAgdmFyIHVybHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB1cmxzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX21lcmdlID0gZnVuY3Rpb24gKG1lbW8sIHZhbCkge1xuICAgICAgICByZXR1cm4gbWVtbyArICcvJyArIHZhbDtcbiAgICB9O1xuICAgIHJldHVybiBfLnJlZHVjZSh1cmxzLCBfbWVyZ2UpO1xufVxuZXhwb3J0cy5qb2luUGF0aHMgPSBqb2luUGF0aHM7XG5mdW5jdGlvbiBwYXJhbShvYmosIHNlcGFyYXRvciwgam9pbmVyKSB7XG4gICAgaWYgKHNlcGFyYXRvciA9PT0gdm9pZCAwKSB7IHNlcGFyYXRvciA9ICcmJzsgfVxuICAgIGlmIChqb2luZXIgPT09IHZvaWQgMCkgeyBqb2luZXIgPSAnPSc7IH1cbiAgICBmdW5jdGlvbiBfcGFyYW0obWVtbywgdmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlID0gbWVtbyA/IG1lbW8gKyBzZXBhcmF0b3IgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBrZXkgKyBqb2luZXIgKyB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF8ucmVkdWNlKG9iaiwgX3BhcmFtLCAnJyk7XG59XG5leHBvcnRzLnBhcmFtID0gcGFyYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmwuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvdXJsLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIHByZXZlbnRHbG9iYWxseSgpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gICAgc3R5bGUud2Via2l0VG91Y2hDYWxsb3V0ID0gXCJub25lXCI7XG4gICAgc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xufVxuZXhwb3J0cy5wcmV2ZW50R2xvYmFsbHkgPSBwcmV2ZW50R2xvYmFsbHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dC5qc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9