define("marionette_lib", ["jquery","backbone","underscore","backbone.marionette","handlebars","q","backbone-forms","i18next","showdown","flux"], function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_62__) { return /******/ (function(modules) { // webpackBootstrap
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
	exports.config = __webpack_require__(1);
	function configure(options) {
	    return exports.config.config.configure(options);
	}
	exports.configure = configure;
	;
	var behaviorsLookup = __webpack_require__(10);
	exports.behaviors = behaviorsLookup.behaviors;
	exports.components = __webpack_require__(14);
	exports.constants = __webpack_require__(30);
	exports.Exceptions = __webpack_require__(43);
	exports.interfaces = __webpack_require__(44);
	var _Api = __webpack_require__(45);
	var _App = __webpack_require__(20);
	var _Base = __webpack_require__(21);
	var _Component = __webpack_require__(46);
	var _Router = __webpack_require__(47);
	var _Static = __webpack_require__(48);
	var controllers;
	(function (controllers) {
	    controllers.Api = _Api;
	    controllers.App = _App;
	    controllers.Base = _Base;
	    controllers.Component = _Component;
	    controllers.Router = _Router;
	    controllers.Static = _Static;
	})(controllers = exports.controllers || (exports.controllers = {}));
	exports.handlebars = __webpack_require__(49);
	exports.routers = __webpack_require__(53);
	exports.stickit = __webpack_require__(55);
	exports.flux = __webpack_require__(58);
	exports.DebouncedDocContainer = __webpack_require__(65);
	var _whenFetched = __webpack_require__(26);
	exports.whenFetched = _whenFetched.whenFetched;
	exports.navigation = __webpack_require__(66);
	exports.registry = __webpack_require__(22);
	exports.urlUtils = __webpack_require__(68);
	exports.preventSelectionCallout = __webpack_require__(69);
	exports.views = __webpack_require__(36);
	//# sourceMappingURL=client.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var sync = __webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(9);
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(4);
	var _ = __webpack_require__(5);
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
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Marionette = __webpack_require__(7);
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
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var Backbone, Marionette, _, _close, _getEl, _getName, _show;
	
	_ = __webpack_require__(5);
	
	Backbone = __webpack_require__(4);
	
	Marionette = __webpack_require__(7);
	
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Marionette, _;
	
	_ = __webpack_require__(5);
	
	Marionette = __webpack_require__(7);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Marionette = __webpack_require__(7);
	exports.behaviors = __webpack_require__(11);
	Marionette.Behaviors.behaviorsLookup = function () {
	    return exports.behaviors;
	};
	//# sourceMappingURL=behaviorsLookup.js.map

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
	var Marionette = __webpack_require__(7);
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
	var _ = __webpack_require__(5);
	var Marionette = __webpack_require__(7);
	var $ = __webpack_require__(3);
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
	var Marionette = __webpack_require__(7);
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
	var _ = __webpack_require__(5);
	var BaseController = __webpack_require__(21);
	var clientConfig = __webpack_require__(1);
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
	var _ = __webpack_require__(5);
	var registry = __webpack_require__(22);
	var Marionette = __webpack_require__(7);
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
	var _ = __webpack_require__(5);
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
	var Marionette = __webpack_require__(7);
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
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Copyright (c) 2011-2014 Felix Gnass
	 * Licensed under the MIT license
	 * http://spin.js.org/
	 *
	 * Example:
	    var opts = {
	      lines: 12             // The number of lines to draw
	    , length: 7             // The length of each line
	    , width: 5              // The line thickness
	    , radius: 10            // The radius of the inner circle
	    , scale: 1.0            // Scales overall size of the spinner
	    , corners: 1            // Roundness (0..1)
	    , color: '#000'         // #rgb or #rrggbb
	    , opacity: 1/4          // Opacity of the lines
	    , rotate: 0             // Rotation offset
	    , direction: 1          // 1: clockwise, -1: counterclockwise
	    , speed: 1              // Rounds per second
	    , trail: 100            // Afterglow percentage
	    , fps: 20               // Frames per second when using setTimeout()
	    , zIndex: 2e9           // Use a high z-index by default
	    , className: 'spinner'  // CSS class to assign to the element
	    , top: '50%'            // center vertically
	    , left: '50%'           // center horizontally
	    , shadow: false         // Whether to render a shadow
	    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	    , position: 'absolute'  // Element positioning
	    }
	    var target = document.getElementById('foo')
	    var spinner = new Spinner(opts).spin(target)
	 */
	;(function (root, factory) {
	
	  /* CommonJS */
	  if (typeof module == 'object' && module.exports) module.exports = factory()
	
	  /* AMD module */
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	
	  /* Browser global */
	  else root.Spinner = factory()
	}(this, function () {
	  "use strict"
	
	  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
	    , animations = {} /* Animation rules keyed by their name */
	    , useCssAnimations /* Whether to use CSS animations or setTimeout */
	    , sheet /* A stylesheet to hold the @keyframe or VML rules. */
	
	  /**
	   * Utility function to create elements. If no tag name is given,
	   * a DIV is created. Optionally properties can be passed.
	   */
	  function createEl (tag, prop) {
	    var el = document.createElement(tag || 'div')
	      , n
	
	    for (n in prop) el[n] = prop[n]
	    return el
	  }
	
	  /**
	   * Appends children and returns the parent.
	   */
	  function ins (parent /* child1, child2, ...*/) {
	    for (var i = 1, n = arguments.length; i < n; i++) {
	      parent.appendChild(arguments[i])
	    }
	
	    return parent
	  }
	
	  /**
	   * Creates an opacity keyframe animation rule and returns its name.
	   * Since most mobile Webkits have timing issues with animation-delay,
	   * we create separate rules for each line/segment.
	   */
	  function addAnimation (alpha, trail, i, lines) {
	    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
	      , start = 0.01 + i/lines * 100
	      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
	      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
	      , pre = prefix && '-' + prefix + '-' || ''
	
	    if (!animations[name]) {
	      sheet.insertRule(
	        '@' + pre + 'keyframes ' + name + '{' +
	        '0%{opacity:' + z + '}' +
	        start + '%{opacity:' + alpha + '}' +
	        (start+0.01) + '%{opacity:1}' +
	        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
	        '100%{opacity:' + z + '}' +
	        '}', sheet.cssRules.length)
	
	      animations[name] = 1
	    }
	
	    return name
	  }
	
	  /**
	   * Tries various vendor prefixes and returns the first supported property.
	   */
	  function vendor (el, prop) {
	    var s = el.style
	      , pp
	      , i
	
	    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
	    if (s[prop] !== undefined) return prop
	    for (i = 0; i < prefixes.length; i++) {
	      pp = prefixes[i]+prop
	      if (s[pp] !== undefined) return pp
	    }
	  }
	
	  /**
	   * Sets multiple style properties at once.
	   */
	  function css (el, prop) {
	    for (var n in prop) {
	      el.style[vendor(el, n) || n] = prop[n]
	    }
	
	    return el
	  }
	
	  /**
	   * Fills in default values.
	   */
	  function merge (obj) {
	    for (var i = 1; i < arguments.length; i++) {
	      var def = arguments[i]
	      for (var n in def) {
	        if (obj[n] === undefined) obj[n] = def[n]
	      }
	    }
	    return obj
	  }
	
	  /**
	   * Returns the line color from the given string or array.
	   */
	  function getColor (color, idx) {
	    return typeof color == 'string' ? color : color[idx % color.length]
	  }
	
	  // Built-in defaults
	
	  var defaults = {
	    lines: 12             // The number of lines to draw
	  , length: 7             // The length of each line
	  , width: 5              // The line thickness
	  , radius: 10            // The radius of the inner circle
	  , scale: 1.0            // Scales overall size of the spinner
	  , corners: 1            // Roundness (0..1)
	  , color: '#000'         // #rgb or #rrggbb
	  , opacity: 1/4          // Opacity of the lines
	  , rotate: 0             // Rotation offset
	  , direction: 1          // 1: clockwise, -1: counterclockwise
	  , speed: 1              // Rounds per second
	  , trail: 100            // Afterglow percentage
	  , fps: 20               // Frames per second when using setTimeout()
	  , zIndex: 2e9           // Use a high z-index by default
	  , className: 'spinner'  // CSS class to assign to the element
	  , top: '50%'            // center vertically
	  , left: '50%'           // center horizontally
	  , shadow: false         // Whether to render a shadow
	  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	  , position: 'absolute'  // Element positioning
	  }
	
	  /** The constructor */
	  function Spinner (o) {
	    this.opts = merge(o || {}, Spinner.defaults, defaults)
	  }
	
	  // Global defaults that override the built-ins:
	  Spinner.defaults = {}
	
	  merge(Spinner.prototype, {
	    /**
	     * Adds the spinner to the given target element. If this instance is already
	     * spinning, it is automatically removed from its previous target b calling
	     * stop() internally.
	     */
	    spin: function (target) {
	      this.stop()
	
	      var self = this
	        , o = self.opts
	        , el = self.el = createEl(null, {className: o.className})
	
	      css(el, {
	        position: o.position
	      , width: 0
	      , zIndex: o.zIndex
	      , left: o.left
	      , top: o.top
	      })
	
	      if (target) {
	        target.insertBefore(el, target.firstChild || null)
	      }
	
	      el.setAttribute('role', 'progressbar')
	      self.lines(el, self.opts)
	
	      if (!useCssAnimations) {
	        // No CSS animation support, use setTimeout() instead
	        var i = 0
	          , start = (o.lines - 1) * (1 - o.direction) / 2
	          , alpha
	          , fps = o.fps
	          , f = fps / o.speed
	          , ostep = (1 - o.opacity) / (f * o.trail / 100)
	          , astep = f / o.lines
	
	        ;(function anim () {
	          i++
	          for (var j = 0; j < o.lines; j++) {
	            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)
	
	            self.opacity(el, j * o.direction + start, alpha, o)
	          }
	          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
	        })()
	      }
	      return self
	    }
	
	    /**
	     * Stops and removes the Spinner.
	     */
	  , stop: function () {
	      var el = this.el
	      if (el) {
	        clearTimeout(this.timeout)
	        if (el.parentNode) el.parentNode.removeChild(el)
	        this.el = undefined
	      }
	      return this
	    }
	
	    /**
	     * Internal method that draws the individual lines. Will be overwritten
	     * in VML fallback mode below.
	     */
	  , lines: function (el, o) {
	      var i = 0
	        , start = (o.lines - 1) * (1 - o.direction) / 2
	        , seg
	
	      function fill (color, shadow) {
	        return css(createEl(), {
	          position: 'absolute'
	        , width: o.scale * (o.length + o.width) + 'px'
	        , height: o.scale * o.width + 'px'
	        , background: color
	        , boxShadow: shadow
	        , transformOrigin: 'left'
	        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
	        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
	        })
	      }
	
	      for (; i < o.lines; i++) {
	        seg = css(createEl(), {
	          position: 'absolute'
	        , top: 1 + ~(o.scale * o.width / 2) + 'px'
	        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
	        , opacity: o.opacity
	        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
	        })
	
	        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
	        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
	      }
	      return el
	    }
	
	    /**
	     * Internal method that adjusts the opacity of a single line.
	     * Will be overwritten in VML fallback mode below.
	     */
	  , opacity: function (el, i, val) {
	      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
	    }
	
	  })
	
	
	  function initVML () {
	
	    /* Utility function to create a VML tag */
	    function vml (tag, attr) {
	      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
	    }
	
	    // No CSS transforms but VML support, add a CSS rule for VML elements:
	    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')
	
	    Spinner.prototype.lines = function (el, o) {
	      var r = o.scale * (o.length + o.width)
	        , s = o.scale * 2 * r
	
	      function grp () {
	        return css(
	          vml('group', {
	            coordsize: s + ' ' + s
	          , coordorigin: -r + ' ' + -r
	          })
	        , { width: s, height: s }
	        )
	      }
	
	      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
	        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
	        , i
	
	      function seg (i, dx, filter) {
	        ins(
	          g
	        , ins(
	            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
	          , ins(
	              css(
	                vml('roundrect', {arcsize: o.corners})
	              , { width: r
	                , height: o.scale * o.width
	                , left: o.scale * o.radius
	                , top: -o.scale * o.width >> 1
	                , filter: filter
	                }
	              )
	            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
	            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
	            )
	          )
	        )
	      }
	
	      if (o.shadow)
	        for (i = 1; i <= o.lines; i++) {
	          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
	        }
	
	      for (i = 1; i <= o.lines; i++) seg(i)
	      return ins(el, g)
	    }
	
	    Spinner.prototype.opacity = function (el, i, val, o) {
	      var c = el.firstChild
	      o = o.shadow && o.lines || 0
	      if (c && i + o < c.childNodes.length) {
	        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
	        if (c) c.opacity = val
	      }
	    }
	  }
	
	  if (typeof document !== 'undefined') {
	    sheet = (function () {
	      var el = createEl('style', {type : 'text/css'})
	      ins(document.getElementsByTagName('head')[0], el)
	      return el.sheet || el.styleSheet
	    }())
	
	    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})
	
	    if (!vendor(probe, 'transform') && probe.adj) initVML()
	    else useCssAnimations = vendor(probe, 'animation')
	  }
	
	  return Spinner
	
	}));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Q = __webpack_require__(27);
	var _ = __webpack_require__(5);
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
	var _ = __webpack_require__(5);
	var Marionette = __webpack_require__(7);
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
	var _ = __webpack_require__(5);
	var Backbone = __webpack_require__(4);
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
	ButtonModel.prototype.idAttribute = 'name';
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
	var _ = __webpack_require__(5);
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
	var _ = __webpack_require__(5);
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
	var _ = __webpack_require__(5);
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
	var Backbone = __webpack_require__(4);
	var Marionette = __webpack_require__(7);
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
	var Marionette = __webpack_require__(7);
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
	var Marionette = __webpack_require__(7);
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
	var Backbone = __webpack_require__(4);
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
	var _ = __webpack_require__(5);
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

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(5);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports.components = __webpack_require__(50);
	exports.i18next = __webpack_require__(51);
	//# sourceMappingURL=index.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(5);
	var config = __webpack_require__(1);
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var i18next = __webpack_require__(52);
	var _ = __webpack_require__(5);
	var config = __webpack_require__(1);
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
/* 52 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports.App = __webpack_require__(54);
	//# sourceMappingURL=index.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Marionette = __webpack_require__(7);
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports.mdown = __webpack_require__(56);
	//# sourceMappingURL=index.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Showdown = __webpack_require__(57);
	var mdown = new Showdown.Converter();
	exports.selector = '[data-mdown]';
	exports.updateMethod = 'html';
	function onGet(val) {
	    return mdown.makeHtml(val);
	}
	//# sourceMappingURL=mdown.js.map

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports.actions = __webpack_require__(59);
	exports.interfaces = __webpack_require__(60);
	exports.Dispatcher = __webpack_require__(61);
	exports.Store = __webpack_require__(63);
	//# sourceMappingURL=index.js.map

/***/ },
/* 59 */
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
/* 60 */
/***/ function(module, exports) {

	//# sourceMappingURL=interfaces.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var flux = __webpack_require__(62);
	var constants = __webpack_require__(30);
	var log = console.log.bind ? console.log.bind(console) : console.log;
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
	            log('Dispatching:', payload);
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
	        log('Dispatcher: handle', payload);
	        if (!this.dispatching)
	            this.dispatchPayload();
	    };
	    Dispatcher.prototype.handleServerAction = function (action) {
	        var payload = {
	            source: constants.ACTION_SOURCES.ServerAction,
	            action: action,
	            caller: arguments.callee.caller
	        };
	        this.handlePayload(payload);
	    };
	    Dispatcher.prototype.handleDeviceAction = function (action) {
	        var payload = {
	            source: constants.ACTION_SOURCES.DeviceAction,
	            action: action,
	            caller: arguments.callee.caller
	        };
	        this.handlePayload(payload);
	    };
	    Dispatcher.prototype.handleViewAction = function (action) {
	        var payload = {
	            source: constants.ACTION_SOURCES.ViewAction,
	            action: action,
	            caller: arguments.callee.caller
	        };
	        this.handlePayload(payload);
	    };
	    return Dispatcher;
	})(flux.Dispatcher);
	exports.Dispatcher = Dispatcher;
	//# sourceMappingURL=Dispatcher.js.map

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var constants = __webpack_require__(30);
	var EventedClass = __webpack_require__(64);
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var Backbone = __webpack_require__(4);
	var _ = __webpack_require__(5);
	var EventedClass = (function () {
	    function EventedClass() {
	    }
	    return EventedClass;
	})();
	exports.EventedClass = EventedClass;
	_.extend(EventedClass.prototype, Backbone.Events);
	//# sourceMappingURL=EventedClass.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var _ = __webpack_require__(5);
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var NavigationController = __webpack_require__(67);
	var navigation = new NavigationController.NavigationController();
	module.exports = navigation;
	//# sourceMappingURL=navigation.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var _ = __webpack_require__(5);
	var Backbone = __webpack_require__(4);
	var Marionette = __webpack_require__(7);
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../typings/tsd.d.ts' />
	'use strict';
	var _ = __webpack_require__(5);
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
/* 69 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzU3YTE4NjUyZWQyNjA4NTMwNGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2JhY2tib25lL3N5bmMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFja2JvbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL0xheW91dFZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFja2JvbmUubWFyaW9uZXR0ZVwiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9SZWdpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9iZWhhdmlvcnNMb29rdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3JzL01vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3JzL1Njcm9sbGFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JdGVtVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC5oYnMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFuZGxlYmFyc1wiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdDb21wb25lbnQvTG9hZGluZ0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9WaWV3LmpzIiwid2VicGFjazovLy8uL34vc3Bpbi5qcy9zcGluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvd2hlbkZldGNoZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS1mb3Jtc1wiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtRmllbGQuaGJzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ2hpbGRIb2xkZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybVZpZXcuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlYmFycy9pMThuZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvbWRvd24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvd2Rvd25cIiIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L2ludGVyZmFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvRGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmbHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLGdFQUFnRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsbUM7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDN0RBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQSxnRDs7Ozs7O0FDQUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUtBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx3Qzs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxxQzs7Ozs7O0FDNUNBO0FBQ0Esa0VBQWlFO0FBQ2pFOztBQUVBLGtOQUFpTiwwQkFBMEIsYUFBYTtBQUN4UDtBQUNBLEVBQUMsZ0JBQWdCLEU7Ozs7OztBQ05qQixpRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw4Qzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxnQzs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGlDOzs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esd0M7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpQzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUMsYUFBWSxrQkFBa0I7QUFDOUIsb0JBQW1CLHNCQUFzQjtBQUN6QywyQkFBMEIsVUFBVTtBQUNwQyxrQ0FBaUMsc0JBQXNCO0FBQ3ZELGVBQWMsa0JBQWtCO0FBQ2hDLFdBQVU7O0FBRVY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBeUMsdUJBQXVCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQSwwQkFBeUIsYUFBYTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBLGFBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVULG1FQUFrRSxXQUFXO0FBQzdFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsWUFBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMEIsZ0RBQWdEO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLGdEQUFnRDtBQUN4RTtBQUNBO0FBQ0EsbUNBQWtDLG1CQUFtQjtBQUNyRCxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGdEQUFnRDtBQUMzRSw4QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUEsa0JBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBLE1BQUs7O0FBRUwseUNBQXdDLDhCQUE4Qjs7QUFFdEU7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUN4WEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDOzs7Ozs7QUNyQkEsaUQ7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMkM7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLDBCQUEwQixFQUFFO0FBQ3RELGdDQUErQiwwQkFBMEIsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLDBCQUEwQixFQUFFO0FBQ3RELGdDQUErQiwwQkFBMEIsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQix3QkFBd0IsRUFBRTtBQUNwRCxnQ0FBK0IseUJBQXlCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQ3hMQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esc0M7Ozs7OztBQ3BGQTtBQUNBLGtFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLG1OQUFrTiw0QkFBNEIsYUFBYTtBQUMzUDtBQUNBLEVBQUM7QUFDRDs7QUFFQSw2RkFBNEYscUJBQXFCLCtEQUErRDtBQUNoTDtBQUNBLHlNQUF3TSx1QkFBdUIsYUFBYTtBQUM1TztBQUNBLEVBQUMsZ0JBQWdCLEU7Ozs7OztBQ2RqQjtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxxQzs7Ozs7O0FDdEZBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7OztBQy9DQTtBQUNBLGtFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLDhMQUE2TCx1QkFBdUIsYUFBYTtBQUNqTztBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBLG9MQUFtTCxzQkFBc0IsYUFBYTtBQUN0TjtBQUNBLG1MQUFrTCwyQkFBMkIsYUFBYTtBQUMxTjtBQUNBLDZLQUE0Syx3QkFBd0IsYUFBYTtBQUNqTjtBQUNBLHFGQUFvRixxQkFBcUIsK0RBQStEO0FBQ3hLO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDbkJqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxtQzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGlDOzs7Ozs7QUM5Q0E7QUFDQSxrRUFBaUU7QUFDakU7QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7QUNIakI7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLDJCQUEyQixFQUFFO0FBQ3ZELGdDQUErQiwyQkFBMkIsRUFBRTtBQUM1RDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLDRCQUE0QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSwyQkFBMEIsK0JBQStCLEVBQUU7QUFDM0QsZ0NBQStCLCtCQUErQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSwyQkFBMEIsNEJBQTRCLEVBQUU7QUFDeEQsZ0NBQStCLDRCQUE0QixFQUFFO0FBQzdEO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7O0FDbklBO0FBQ0Esa0VBQWlFO0FBQ2pFOztBQUVBO0FBQ0EsMExBQXlMLHlCQUF5QixhQUFhO0FBQy9OO0FBQ0EsMktBQTBLLHVCQUF1QixhQUFhO0FBQzlNO0FBQ0EsRUFBQyxnQkFBZ0IsRTs7Ozs7O0FDVGpCO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHVDOzs7Ozs7QUN0REE7QUFDQSx1Qzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGdDOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxzQzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw2Qzs7Ozs7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxrQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG1DOzs7Ozs7QUM3SUE7QUFDQTtBQUNBLGtDOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLGlCQUFpQjtBQUNyRCwwQ0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLG9DOzs7Ozs7QUMzQ0EsaUQ7Ozs7OztBQ0FBO0FBQ0Esa0M7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0M7Ozs7OztBQ25DQTtBQUNBLGtDOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQ1JBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLG9DOzs7Ozs7QUNkQSx1Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsdUM7Ozs7OztBQ3RFQSxpRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNENBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGtEOzs7Ozs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Qzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsaUQ7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hELDZCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0QiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3NTdhMTg2NTJlZDI2MDg1MzA0ZlxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmV4cG9ydHMuY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvY2xpZW50Jyk7XG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICAgIHJldHVybiBleHBvcnRzLmNvbmZpZy5jb25maWcuY29uZmlndXJlKG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb25maWd1cmUgPSBjb25maWd1cmU7XG47XG52YXIgYmVoYXZpb3JzTG9va3VwID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvYmVoYXZpb3JzTG9va3VwJyk7XG5leHBvcnRzLmJlaGF2aW9ycyA9IGJlaGF2aW9yc0xvb2t1cC5iZWhhdmlvcnM7XG5leHBvcnRzLmNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5kZXgnKTtcbmV4cG9ydHMuY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmV4cG9ydHMuRXhjZXB0aW9ucyA9IHJlcXVpcmUoJy4vRXhjZXB0aW9ucycpO1xuZXhwb3J0cy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzJyk7XG52YXIgX0FwaSA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQXBpJyk7XG52YXIgX0FwcCA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQXBwJyk7XG52YXIgX0Jhc2UgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Jhc2UnKTtcbnZhciBfQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9Db21wb25lbnQnKTtcbnZhciBfUm91dGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyJyk7XG52YXIgX1N0YXRpYyA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvU3RhdGljJyk7XG52YXIgY29udHJvbGxlcnM7XG4oZnVuY3Rpb24gKGNvbnRyb2xsZXJzKSB7XG4gICAgY29udHJvbGxlcnMuQXBpID0gX0FwaTtcbiAgICBjb250cm9sbGVycy5BcHAgPSBfQXBwO1xuICAgIGNvbnRyb2xsZXJzLkJhc2UgPSBfQmFzZTtcbiAgICBjb250cm9sbGVycy5Db21wb25lbnQgPSBfQ29tcG9uZW50O1xuICAgIGNvbnRyb2xsZXJzLlJvdXRlciA9IF9Sb3V0ZXI7XG4gICAgY29udHJvbGxlcnMuU3RhdGljID0gX1N0YXRpYztcbn0pKGNvbnRyb2xsZXJzID0gZXhwb3J0cy5jb250cm9sbGVycyB8fCAoZXhwb3J0cy5jb250cm9sbGVycyA9IHt9KSk7XG5leHBvcnRzLmhhbmRsZWJhcnMgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvaW5kZXgnKTtcbmV4cG9ydHMucm91dGVycyA9IHJlcXVpcmUoJy4vcm91dGVycy9pbmRleCcpO1xuZXhwb3J0cy5zdGlja2l0ID0gcmVxdWlyZSgnLi9zdGlja2l0L2luZGV4Jyk7XG5leHBvcnRzLmZsdXggPSByZXF1aXJlKCcuL2ZsdXgvaW5kZXgnKTtcbmV4cG9ydHMuRGVib3VuY2VkRG9jQ29udGFpbmVyID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvRGVib3VuY2VkRG9jQ29udGFpbmVyJyk7XG52YXIgX3doZW5GZXRjaGVkID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvd2hlbkZldGNoZWQnKTtcbmV4cG9ydHMud2hlbkZldGNoZWQgPSBfd2hlbkZldGNoZWQud2hlbkZldGNoZWQ7XG5leHBvcnRzLm5hdmlnYXRpb24gPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYXZpZ2F0aW9uJyk7XG5leHBvcnRzLnJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcmVnaXN0cnknKTtcbmV4cG9ydHMudXJsVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy91cmwnKTtcbmV4cG9ydHMucHJldmVudFNlbGVjdGlvbkNhbGxvdXQgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dCcpO1xuZXhwb3J0cy52aWV3cyA9IHJlcXVpcmUoJy4vdmlld3MvaW5kZXgnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBzeW5jID0gcmVxdWlyZSgnLi9iYWNrYm9uZS9zeW5jJyk7XG5yZXF1aXJlKCcuL21hcmlvbmV0dGUvTGF5b3V0VmlldycpO1xucmVxdWlyZSgnLi9tYXJpb25ldHRlL1JlZ2lvbicpO1xucmVxdWlyZSgnLi9tYXJpb25ldHRlL1ZpZXcnKTtcbnZhciBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgfVxuICAgIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uLnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmFwcCA9IG9wdGlvbnMuYXBwO1xuICAgICAgICB0aGlzLmhhbmRsZWJhcnMgPSBvcHRpb25zLmhhbmRsZWJhcnM7XG4gICAgICAgIHRoaXMuZGVmYXVsdFJlZ2lvbiA9IG9wdGlvbnMuZGVmYXVsdFJlZ2lvbjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUGF0aCA9IG9wdGlvbnMuY29tcG9uZW50c1BhdGg7XG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xuICAgICAgICAgICAgc3luYy5jb25maWd1cmVCYWNrYm9uZVN5bmModGhpcy5hcHApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb247XG59KSgpO1xuZXhwb3J0cy5NYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbiA9IE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uO1xuZXhwb3J0cy5jb25maWcgPSBuZXcgTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZnVuY3Rpb24gY29uZmlndXJlQmFja2JvbmVTeW5jKGFwcCkge1xuICAgIHZhciBfc3luYyA9IEJhY2tib25lLnN5bmM7XG4gICAgQmFja2JvbmUuc3luYyA9IGZ1bmN0aW9uIChtZXRob2QsIGVudGl0eSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IF8uYmluZChiZWZvcmVTZW5kLCBlbnRpdHkpLFxuICAgICAgICAgICAgY29tcGxldGU6IF8uYmluZChjb21wbGV0ZSwgZW50aXR5KVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFlbnRpdHkuX2ZldGNoICYmIG1ldGhvZCA9PT0gXCJyZWFkXCIpIHtcbiAgICAgICAgICAgIGFkZEZldGNoUHJvbWlzZShlbnRpdHksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3luYyhtZXRob2QsIGVudGl0eSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBiZWZvcmVTZW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKFwic3luYzpzdGFydFwiLCB0aGlzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoXCJzeW5jOnN0b3BcIiwgdGhpcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEZldGNoUHJvbWlzZShlbnRpdHksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGQgPSAkLkRlZmVycmVkKCk7XG4gICAgICAgIGVudGl0eS5fZmV0Y2ggPSBkLnByb21pc2UoKTtcbiAgICAgICAgdmFyIF9zdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuICAgICAgICB2YXIgX2Vycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3AsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICBfc3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHN0YXR1czogeGhyID8geGhyLnN0YXR1cyA6IDAsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbiAocmVzcCwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcignZXJyb3I6b2ZmbGluZScpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOm9mZmxpbmUnLCBlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoXy5jb250YWlucyhbNDAxLCA0MDNdLCByZXNwLnN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcigndW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICAgICAgICAgYXBwLnZlbnQudHJpZ2dlcignZmV0Y2g6dW5hdXRob3Jpc2VkJywgZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguZmxvb3IocmVzcC5zdGF0dXMgLyAxMDApID09PSA1KSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnRyaWdnZXIoJ2Vycm9yOnNlcnZlcicpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW50LnRyaWdnZXIoJ2ZldGNoOmVycm9yOnNlcnZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBkLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBmYWlsZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuY29uZmlndXJlQmFja2JvbmVTeW5jID0gY29uZmlndXJlQmFja2JvbmVTeW5jO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3luYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9iYWNrYm9uZS9zeW5jLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZVwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwidW5kZXJzY29yZVwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTGF5b3V0VmlldyA9IE1hcmlvbmV0dGUuTGF5b3V0Vmlldztcbi8qXG4gIF9idWlsZFJlZ2lvbnNcbiAgLS0tLS0tLS0tLS0tLVxuICBXZSBuZWVkIHRvIGVuc3VyZSB0aGF0IHRoZXJlIGlzIGFuIGVsZW1lbnQgb24gdGhlXG4gIExheW91dFZpZXcgc28gdGhhdCBnZXRFbCByZWxhdGl2ZSB0byB0aGUgcGFyZW50RWxcbiAgd29ya3MgcHJvcGVybHlcbiAqL1xudmFyIF9idWlsZFJlZ2lvbnMgPSBMYXlvdXRWaWV3LnByb3RvdHlwZS5fYnVpbGRSZWdpb25zO1xuTGF5b3V0Vmlldy5wcm90b3R5cGUuX2J1aWxkUmVnaW9ucyA9IGZ1bmN0aW9uIChyZWdpb25zKSB7XG4gICAgdGhpcy5fZW5zdXJlRWxlbWVudCgpO1xuICAgIHJldHVybiBfYnVpbGRSZWdpb25zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9MYXlvdXRWaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFja2JvbmUubWFyaW9uZXR0ZVwiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEJhY2tib25lLCBNYXJpb25ldHRlLCBfLCBfY2xvc2UsIF9nZXRFbCwgX2dldE5hbWUsIF9zaG93O1xuXG5fID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG5cbk1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG5cblxuLypcbiAgQW5pbWF0ZSBPdXRcbiAgLS0tLS0tLS0tLS1cbiAgQW5pbWF0ZSBvdXQgdGhlIG9sZCB2aWV3IGJlZm9yZSBiZWluZyByZWFkeSB0byBzaG93XG4gIHRoZSBuZXh0XG4gKi9cblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYikge1xuICBpZiAodGhpcy5jdXJyZW50VmlldyAmJiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQpIHtcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW5nIG91dCcsIHRoaXMuY3VycmVudFZpZXcsIHRoaXMuZWwpO1xuICAgIHRoaXMudHJpZ2dlck1ldGhvZCgnYmVmb3JlOmFuaW1hdGluZzpvdXQnKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KGNiKTtcbiAgfSBlbHNlIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgcmV0dXJuIGNiLmNhbGwodGhpcyk7XG4gIH1cbn07XG5cblxuLypcbiAgQW5pbWF0ZWQgRW1wdHlcbiAgLS0tLS1cbiAgVXNlIGFuaW1hdGlvbiB3aGVuIGVtcHR5aW5nIHRoZSByZWdpb24gaWYgaXRcbiAgaXMgYXZhaWxhYmxlXG4gKi9cblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmFuaW1hdGVFbXB0eSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNiKSB7XG4gIHJldHVybiB0aGlzLmFuaW1hdGVPdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuZW1wdHkoKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKF90aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSh0aGlzKSk7XG59O1xuXG5cbi8qXG4gIGdldEVsXG4gIC0tLS0tXG4gIFVwZGF0ZSB0aGUgZGVmYXVsdCBmdW5jdGlvbmFsaXR5IHRvIGNoZWNrIGZvclxuICBwYXJlbnRFbCBvbiB0aGUgb3B0aW9ucyBhbmQgZmluZCB0aGUgc2VsZWN0b3JcbiAgYmFzZWQgb24gaXQncyBjaGlsZHJlblxuICovXG5cbl9nZXRFbCA9IE1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5nZXRFbDtcblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmdldEVsID0gZnVuY3Rpb24oZWwpIHtcbiAgdmFyICRlbCwgcGFyZW50RWw7XG4gIGlmIChfLmlzU3RyaW5nKGVsKSkge1xuICAgIHBhcmVudEVsID0gXy5yZXN1bHQodGhpcy5vcHRpb25zLCAncGFyZW50RWwnKTtcbiAgICBpZiAocGFyZW50RWwpIHtcbiAgICAgICRlbCA9IEJhY2tib25lLiQocGFyZW50RWwpLmZpbmQoZWwpO1xuICAgICAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9nZXRFbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2dldEVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn07XG5cblxuLypcbiAgU2hvdyBuZXcgVmlld1xuICAtLS0tLS0tLS0tLS0tXG4gIEhhbmRsZSB0cmFuc2l0aW9ucyBiZXR3ZWVuIG9sZCB2aWV3IGFuZCBuZXcgb25lXG4gIHdpdGggdGhlIG9wdGlvbiB0byBkaXNhYmxlIGFuaW1hdGlvbnNcbiAqL1xuXG5fc2hvdyA9IE1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5zaG93O1xuXG5fZ2V0TmFtZSA9IGZ1bmN0aW9uKHZpZXcpIHtcbiAgaWYgKHZpZXcpIHtcbiAgICBpZiAodmlldy5uYW1lKSB7XG4gICAgICByZXR1cm4gdmlldy5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmlldy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ25vIHZpZXcnO1xuICB9XG59O1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKHZpZXcsIGltbWVkaWF0ZSkge1xuICBpZiAoaW1tZWRpYXRlID09IG51bGwpIHtcbiAgICBpbW1lZGlhdGUgPSBmYWxzZTtcbiAgfVxuICB0aGlzLl9uZXh0VmlldyA9IHZpZXc7XG4gIGlmIChpbW1lZGlhdGUpIHtcbiAgICBpZiAodGhpcy4kZWwgJiYgdGhpcy4kZWxbMF0pIHtcbiAgICAgIHRoaXMuJGVsWzBdLnNjcm9sbFRvcCA9IDA7XG4gICAgICB0aGlzLiRlbFswXS5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbmV4dFZpZXcgPSBudWxsO1xuICAgIF9zaG93LmNhbGwodGhpcywgdmlldyk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdzaG93aW5nJywgX2dldE5hbWUodmlldyksIHZpZXcsIHRoaXMuZWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGVPdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChfdGhpcy4kZWwgJiYgX3RoaXMuJGVsWzBdKSB7XG4gICAgICAgICAgX3RoaXMuJGVsWzBdLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgX3RoaXMuJGVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9uZXh0VmlldyA9IG51bGw7XG4gICAgICAgIF9zaG93LmNhbGwoX3RoaXMsIHZpZXcpO1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3Nob3dpbmcnLCBfZ2V0TmFtZSh2aWV3KSwgdmlldywgX3RoaXMuZWwpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cbn07XG5cblxuLypcbiAgVGhpcyB3aWxsIHNob3cgdGhlIHZpZXcgaW1tZWRpYXRlbHkgaWYgI2dldEVsIHJldHVybnMgYW4gZWxlbWVudFxuICBvdGhlcndpc2UgaXQgd2lsbCB3YWl0IGZvciB0aGUgc2hvdyBldmVudCB0byBmaXJlIG9uIHdhaXRGb3JWaWV3XG4gIGJlZm9yZSBzaG93aW5nIHRoZSB2aWV3XG4gKi9cblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLnNob3dXaXRoVmlldyA9IGZ1bmN0aW9uKHdhaXRGb3JWaWV3LCB2aWV3VG9TaG93LCBvcHRpb25zKSB7XG4gIHZhciAkZWw7XG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgaW1tZWRpYXRlOiBmYWxzZSxcbiAgICB3YWl0Rm9yRXZlbnQ6ICdzaG93J1xuICB9KTtcbiAgaWYgKF8uaXNTdHJpbmcodGhpcy5lbCkpIHtcbiAgICAkZWwgPSB0aGlzLmdldEVsKHRoaXMuZWwpO1xuICB9IGVsc2Uge1xuICAgICRlbCA9IHRoaXMuJGVsO1xuICB9XG4gIGlmICgkZWwubGVuZ3RoKSB7XG4gICAgdGhpcy5zaG93KHZpZXdUb1Nob3csIG9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxpc3RlblRvT25jZSh3YWl0Rm9yVmlldywgb3B0aW9ucy53YWl0Rm9yRXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvdyh2aWV3VG9TaG93LCBvcHRpb25zLmltbWVkaWF0ZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxufTtcblxuXG4vKlxuICBDbG9zZVxuICAtLS0tLVxuICBVcGRhdGUgdG8gaW5jbHVkZSBsb2dnaW5nIHdoZW4gYSB2aWV3IGlzIGNsb3NlZFxuICovXG5cbl9jbG9zZSA9IE1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5jbG9zZTtcblxuTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdjbG9zaW5nJywgKHRoaXMuY3VycmVudFZpZXcgPyB0aGlzLmN1cnJlbnRWaWV3IDogdm9pZCAwKSwgdGhpcy5lbCk7XG4gIHJldHVybiBfY2xvc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1JlZ2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXJpb25ldHRlLCBfO1xuXG5fID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5NYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xuXG5fLmV4dGVuZChNYXJpb25ldHRlLlZpZXcucHJvdG90eXBlLCB7XG4gIHRhZ05hbWU6ICdzZWN0aW9uJyxcbiAgY2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuICB0ZW1wbGF0ZUhlbHBlcnM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbE5hbWU6IHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLm5hbWUgOiAnJ1xuICAgIH07XG4gIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG5leHBvcnRzLmJlaGF2aW9ycyA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcbk1hcmlvbmV0dGUuQmVoYXZpb3JzLmJlaGF2aW9yc0xvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5iZWhhdmlvcnM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmVoYXZpb3JzTG9va3VwLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYmVoYXZpb3JzL2JlaGF2aW9yc0xvb2t1cC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX01vZGlmaWVycyA9IHJlcXVpcmUoJy4vTW9kaWZpZXJzJyk7XG52YXIgX1Njcm9sbGFibGVzID0gcmVxdWlyZSgnLi9TY3JvbGxhYmxlcycpO1xuZXhwb3J0cy5Nb2RpZmllcnMgPSBfTW9kaWZpZXJzLk1vZGlmaWVyc0JlaGF2aW9yO1xuZXhwb3J0cy5TY3JvbGxhYmxlcyA9IF9TY3JvbGxhYmxlcy5TY3JvbGxhYmxlc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBNb2RpZmllcnNCZWhhdmlvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vZGlmaWVyc0JlaGF2aW9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1vZGlmaWVyc0JlaGF2aW9yKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgTW9kaWZpZXJzQmVoYXZpb3IucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiXCIgKyB0aGlzLnZpZXcubmFtZSArIFwiLS1cIiArIG1vZGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUucmVtb3ZlTW9kaWZpZXIgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJcIiArIHRoaXMudmlldy5uYW1lICsgXCItLVwiICsgbW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUudG9nZ2xlTW9kaWZpZXIgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsLmhhc0NsYXNzKFwiXCIgKyB0aGlzLnZpZXcubmFtZSArIFwiLS1cIiArIG1vZGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUub25Nb2RpZmllZCA9IGZ1bmN0aW9uIChtb2RpZmllciwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgc3RhdGU7XG4gICAgICAgIGlmICghdGhpcy52aWV3Lm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBuYW1lIGlzIHJlcXVpcmVkIG9uIHRoaXMgVmlldycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnJlbW92ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnJlbW92ZU1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRvZ2dsZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnRvZ2dsZU1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5hZGRNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LnRyaWdnZXJNZXRob2QoXCJtb2RpZmllZDpcIiArIG1vZGlmaWVyLCB7XG4gICAgICAgICAgICBvbjogc3RhdGVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kaWZpZXJzQmVoYXZpb3I7XG59KShNYXJpb25ldHRlLkJlaGF2aW9yKTtcbmV4cG9ydHMuTW9kaWZpZXJzQmVoYXZpb3IgPSBNb2RpZmllcnNCZWhhdmlvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vZGlmaWVycy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2JlaGF2aW9ycy9Nb2RpZmllcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBnbG9iYWxTdGF0ZUluaXRpYWxpemVkID0gZmFsc2U7XG52YXIgU0NST0xMQUJMRV9DTEFTUyA9ICdTY3JvbGxhYmxlc19fY29udGFpbmVyJztcbmZ1bmN0aW9uIGluaXRHbG9iYWxTY3JvbGxhYmxlU3RhdGUoKSB7XG4gICAgZ2xvYmFsU3RhdGVJbml0aWFsaXplZCA9IHRydWU7XG4gICAgLy8gRGlzYWJsZSBzY3JvbGwgZm9yIHRoZSBkb2N1bWVudCwgd2UnbGwgaGFuZGxlIGl0IG91cnNlbHZlc1xuICAgICQoZG9jdW1lbnQpLm9uKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5hZGRDbGFzcygnU2Nyb2xsYWJsZXMtLWF0dGFjaGVkJylcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydFwiLCBcIi5cIiArIFNDUk9MTEFCTEVfQ0xBU1MsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHNjcm9sbGFibGUgKGNvbnRlbnQgb3ZlcmZsb3dzKSwgdGhlbi4uLlxuICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWlnaHQgIT09IHRoaXMuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgdG9wLCBzY3JvbGwgZG93biBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgYm90dG9tLCBzY3JvbGwgdXAgb25lIHBpeGVsIHRvIGFsbG93IHNjcm9sbGluZyBkb3duXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPT09IHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBzY3JvbGxcbiAgICAgICAgdGhpcy5hbGxvd1VwID0gdGhpcy5zY3JvbGxUb3AgPiAwO1xuICAgICAgICB0aGlzLmFsbG93RG93biA9IHRoaXMuc2Nyb2xsVG9wIDwgKHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jbGllbnRIZWlnaHQpO1xuICAgICAgICB0aGlzLmxhc3RZID0gZS5vcmlnaW5hbEV2ZW50LnBhZ2VZO1xuICAgIH0pXG4gICAgICAgIC5vbihcInRvdWNobW92ZVwiLCBcIi5cIiArIFNDUk9MTEFCTEVfQ0xBU1MsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgdmFyIHVwID0gZXZlbnQucGFnZVkgPiB0aGlzLmxhc3RZO1xuICAgICAgICB2YXIgZG93biA9ICF1cDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICBpZiAoKHVwICYmIHRoaXMuYWxsb3dVcCkgfHwgKGRvd24gJiYgdGhpcy5hbGxvd0Rvd24pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcCcpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJldmVudCcpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxudmFyIFNjcm9sbGFibGVzQmVoYXZpb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTY3JvbGxhYmxlc0JlaGF2aW9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNjcm9sbGFibGVzQmVoYXZpb3IoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBTY3JvbGxhYmxlc0JlaGF2aW9yLnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vaWYgKCFnbG9iYWxTdGF0ZUluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vICBpbml0R2xvYmFsU2Nyb2xsYWJsZVN0YXRlKCk7XG4gICAgICAgIC8vfVxuICAgICAgICBfLmVhY2godGhpcy5vcHRpb25zLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciAkZWw7XG4gICAgICAgICAgICBpZiAodmFsID09PSAnZWwnKSB7XG4gICAgICAgICAgICAgICAgJGVsID0gX3RoaXMuJGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsID0gX3RoaXMuJCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRlbCAmJiAkZWwubGVuZ3RoKVxuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcyhTQ1JPTExBQkxFX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2Nyb2xsYWJsZXNCZWhhdmlvcjtcbn0pKE1hcmlvbmV0dGUuQmVoYXZpb3IpO1xuZXhwb3J0cy5TY3JvbGxhYmxlc0JlaGF2aW9yID0gU2Nyb2xsYWJsZXNCZWhhdmlvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjcm9sbGFibGVzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYmVoYXZpb3JzL1Njcm9sbGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfQWxlcnQgPSByZXF1aXJlKCcuL2FsZXJ0L0FsZXJ0Jyk7XG52YXIgX0xvYWRpbmcgPSByZXF1aXJlKCcuL0xvYWRpbmdDb21wb25lbnQvTG9hZGluZ0NvbnRyb2xsZXInKTtcbmV4cG9ydHMuQWxlcnQgPSBfQWxlcnQuQWxlcnRDb21wb25lbnQ7XG5leHBvcnRzLkFuaW1hdGVkUmVnaW9uID0gcmVxdWlyZSgnLi9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbicpO1xuZXhwb3J0cy5CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbi9CdXR0b24nKTtcbmV4cG9ydHMuRm9ybVZpZXcgPSByZXF1aXJlKCcuL0Zvcm1WaWV3L0Zvcm1WaWV3Jyk7XG5leHBvcnRzLlNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi9TcGlubmVyVmlldy9TcGlubmVyVmlldycpO1xuZXhwb3J0cy5Mb2FkaW5nID0gX0xvYWRpbmcuTG9hZGluZ0NvbnRyb2xsZXI7XG5leHBvcnRzLk5vdGljZVZpZXcgPSByZXF1aXJlKCcuL05vdGljZVZpZXcvTm90aWNlVmlldycpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBBbGVydENvbXBvbmVudCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFsZXJ0Q29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFsZXJ0Q29tcG9uZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ2FsZXJ0JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vYWxlcnQuaGJzJyk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBBbGVydENvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGVIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5vcHRpb25zLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFsZXJ0Q29tcG9uZW50LnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhbGVydC0nICsgKHRoaXMub3B0aW9ucy5hbGVydFR5cGUgfHwgJ2luZm8nKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWxlcnRDb21wb25lbnQ7XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLkFsZXJ0Q29tcG9uZW50ID0gQWxlcnRDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbGVydC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBJdGVtVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEl0ZW1WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEl0ZW1WaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBJdGVtVmlldy5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEl0ZW1WaWV3LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBJdGVtVmlldy5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEl0ZW1WaWV3O1xufSkoTWFyaW9uZXR0ZS5JdGVtVmlldyk7XG5leHBvcnRzLkl0ZW1WaWV3ID0gSXRlbVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JdGVtVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0l0ZW1WaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tZXNzYWdlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tZXNzYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJtZXNzYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lmhic1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaGFuZGxlYmFyc1wiXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi8uLi9jb250cm9sbGVycy9BcHAnKTtcbnZhciBTcGlubmVyVmlldyA9IHJlcXVpcmUoJy4uL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG52YXIgd2hlbkZldGNoZWQgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvd2hlbkZldGNoZWQnKTtcbnZhciBMb2FkaW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRpbmdDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRpbmdDb250cm9sbGVyKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIF8uZGVmYXVsdHModGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICBsb2FkaW5nVHlwZTogXCJzcGlubmVyXCIsXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBvcHRpb25zLmVudGl0aWVzIHx8IHRoaXMuZ2V0RW50aXRpZXMob3B0aW9ucy52aWV3KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nVmlldyA9IHRoaXMuZ2V0TG9hZGluZ1ZpZXcoKTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyh0aGlzLmxvYWRpbmdWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5tb25pdG9yUmVhZHlTdGF0ZShvcHRpb25zLnZpZXcsIHRoaXMubG9hZGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5nZXRMb2FkaW5nVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24uY3VycmVudFZpZXcuJGVsLmNzcyhcIm9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nVmlldyA9IG5ldyBTcGlubmVyVmlldy5TcGlubmVyVmlldygpO1xuICAgICAgICAgICAgICAgIGxvYWRpbmdWaWV3LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9hZGluZ1R5cGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvYWRpbmdWaWV3O1xuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLm1vbml0b3JSZWFkeVN0YXRlID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX3ZpZXdSZWFkeSA9IGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dFcnJvcihyZWFsVmlldywgbG9hZGluZ1ZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd1JlYWxWaWV3KHJlYWxWaWV3LCBsb2FkaW5nVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGUocmVhbFZpZXcsIHRoaXMsIF92aWV3UmVhZHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdoZW5GZXRjaGVkLndoZW5GZXRjaGVkKHRoaXMuZW50aXRpZXMsIF92aWV3UmVhZHkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd0Vycm9yID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICBpZiAocmVhbFZpZXcpIHtcbiAgICAgICAgICAgIHJlYWxWaWV3LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmdWaWV3LnN0b3AoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlcnJvciBoYW5kbGluZSBvbiBsb2FkaW5nIHR5cGUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLnNob3dSZWFsVmlldyA9IGZ1bmN0aW9uIChyZWFsVmlldywgbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMubG9hZGluZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24uY3VycmVudFZpZXcuJGVsLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwaW5uZXInOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lvbi5jdXJyZW50VmlldyAhPT0gbG9hZGluZ1ZpZXcgJiYgdGhpcy5yZWdpb24uX25leHRWaWV3ICE9PSBsb2FkaW5nVmlldykge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghKCFyZWFsVmlldyB8fCB0aGlzLm9wdGlvbnMuZGVidWcpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cocmVhbFZpZXcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0RW50aXRpZXMgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICByZXR1cm4gXy5jaGFpbih2aWV3KS5waWNrKFwibW9kZWxcIiwgXCJjb2xsZWN0aW9uXCIpLnRvQXJyYXkoKS5jb21wYWN0KCkudmFsdWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBMb2FkaW5nQ29udHJvbGxlcjtcbn0pKEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5leHBvcnRzLkxvYWRpbmdDb250cm9sbGVyID0gTG9hZGluZ0NvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2FkaW5nQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgY2xpZW50Q29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcHBDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcENvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9tYW5hZ2VkUmVnaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlZ2lvbiA9IHRoaXMucmVnaW9uIHx8IG9wdGlvbnMucmVnaW9uIHx8IGNsaWVudENvbmZpZy5jb25maWcuZGVmYXVsdFJlZ2lvbjtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNob3dDb250cm9sbGVyID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgb3B0aW9ucy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgb3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZSA9IGNvbnRyb2xsZXIuZ2V0T3B0aW9uKCdtb25pdG9yUmVhZHlTdGF0ZScpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93KGNvbnRyb2xsZXIuZ2V0TWFpblZpZXcoKSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICAgICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZ2lvbjogdGhpcy5yZWdpb25cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSB2aWV3IGluc3RhbmNlIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpblZpZXcodmlldyk7XG4gICAgICAgIHRoaXMuX21hbmFnZVZpZXcodmlldywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3OiB2aWV3LFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TWFpblZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluVmlldztcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNldE1haW5WaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21haW5WaWV3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFpblZpZXcgPSB2aWV3O1xuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuVG8odmlldywgXCJkZXN0cm95XCIsIHRoaXMuZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLm1hbmFnZVJlZ2lvbiA9IGZ1bmN0aW9uIChyZWdpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmFnZWRSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLl9tYW5hZ2VWaWV3ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMubG9hZGluZykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvYWRpbmcgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uZGVmYXVsdHMob3B0aW9ucy5sb2FkaW5nLCB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0hlYWRlcjogXy5yZXN1bHQodGhpcywgJ2xvYWRpbmdIZWFkZXInKSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nQm9keTogXy5yZXN1bHQodGhpcywgJ2xvYWRpbmdCb2R5JyksXG4gICAgICAgICAgICAgICAgbW9uaXRvclJlYWR5U3RhdGU6IG9wdGlvbnMubW9uaXRvclJlYWR5U3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xpZW50Q29uZmlnLmNvbmZpZy5hcHAuZXhlY3V0ZShcInNob3c6bG9hZGluZ1wiLCB2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVnaW9uLnNob3codmlldywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfLmludm9rZSh0aGlzLl9tYW5hZ2VkUmVnaW9ucywgJ2FuaW1hdGVFbXB0eScpO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkUmVnaW9ucyA9IG51bGw7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEFwcENvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFwcENvbnRyb2xsZXIgPSBBcHBDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQXBwLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgcmVnaXN0cnkgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcmVnaXN0cnknKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQmFzZUNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFzZUNvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZV9pZCA9IF8udW5pcXVlSWQoJ2NvbnRyb2xsZXInKTtcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXIodGhpcywgdGhpcy5faW5zdGFuY2VfaWQpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveWluZ1wiLCB0aGlzKTtcbiAgICAgICAgcmVnaXN0cnkudW5yZWdpc3Rlcih0aGlzLCB0aGlzLl9pbnN0YW5jZV9pZCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlLnByb3h5RXZlbnRzID0gZnVuY3Rpb24gKGluc3RhbmNlLCBwcmVmaXgpIHtcbiAgICAgICAgdmFyIF90ID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5UbyhpbnN0YW5jZSwgXCJhbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIHJvb3RFdmVudCA9IGFyZ3NbMF07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgYXJnc1swXSA9IHByZWZpeCArIFwiOlwiICsgcm9vdEV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJncy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgICAgIE1hcmlvbmV0dGUudHJpZ2dlck1ldGhvZC5hcHBseShfdCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VDb250cm9sbGVyO1xufSkoTWFyaW9uZXR0ZS5Db250cm9sbGVyKTtcbmV4cG9ydHMuQmFzZUNvbnRyb2xsZXIgPSBCYXNlQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2UuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9CYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZXhwb3J0cy5fcmVnaXN0cnkgPSB7fTtcbmZ1bmN0aW9uIHJlZ2lzdGVyKGluc3RhbmNlLCBpZCkge1xuICAgIGV4cG9ydHMuX3JlZ2lzdHJ5W2lkXSA9IGluc3RhbmNlO1xufVxuZXhwb3J0cy5yZWdpc3RlciA9IHJlZ2lzdGVyO1xuZnVuY3Rpb24gdW5yZWdpc3RlcihpbnN0YW5jZSwgaWQpIHtcbiAgICBkZWxldGUgZXhwb3J0cy5fcmVnaXN0cnlbaWRdO1xufVxuZXhwb3J0cy51bnJlZ2lzdGVyID0gdW5yZWdpc3RlcjtcbmZ1bmN0aW9uIHJlc2V0UmVnaXN0cnkoKSB7XG4gICAgdmFyIG9sZENvdW50ID0gZ2V0UmVnaXN0cnlTaXplKCk7XG4gICAgdmFyIGNvbnRyb2xsZXI7XG4gICAgZm9yICh2YXIga2V5IGluIGV4cG9ydHMuX3JlZ2lzdHJ5KSB7XG4gICAgICAgIGNvbnRyb2xsZXIgPSBleHBvcnRzLl9yZWdpc3RyeVtrZXldO1xuICAgICAgICBjb250cm9sbGVyLnJlZ2lvbi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHZhciByZXQgPSB7XG4gICAgICAgIGNvdW50OiBnZXRSZWdpc3RyeVNpemUoKSxcbiAgICAgICAgcHJldmlvdXM6IG9sZENvdW50LFxuICAgICAgICBtc2c6IFwiVGhlcmUgd2VyZSBcIiArIG9sZENvdW50ICsgXCIgY29udHJvbGxlcnMgaW4gdGhlIHJlZ2lzdHJ5LCB0aGVyZSBhcmUgbm93IFwiICsgKHRoaXMuZ2V0UmVnaXN0cnlTaXplKCkpXG4gICAgfTtcbiAgICBjb25zb2xlLmluZm8oJ1JlZ2lzdHJ5IHJlc2V0JywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xufVxuZXhwb3J0cy5yZXNldFJlZ2lzdHJ5ID0gcmVzZXRSZWdpc3RyeTtcbmZ1bmN0aW9uIGdldFJlZ2lzdHJ5U2l6ZSgpIHtcbiAgICByZXR1cm4gXy5zaXplKGV4cG9ydHMuX3JlZ2lzdHJ5KTtcbn1cbmV4cG9ydHMuZ2V0UmVnaXN0cnlTaXplID0gZ2V0UmVnaXN0cnlTaXplO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVnaXN0cnkuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvcmVnaXN0cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgVmlldyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL1ZpZXcnKTtcbnZhciBTcGluID0gcmVxdWlyZSgnc3Bpbi5qcycpO1xudmFyIFNwaW5uZXJWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Bpbm5lclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Bpbm5lclZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnU3Bpbm5lclZpZXcnO1xuICAgICAgICB0aGlzLmxvYWRpbmdEZWxheSA9IDEwMDA7XG4gICAgICAgIHRoaXMubG9hZGluZ0NsYXNzID0gJ1NwaW5uZXJWaWV3LS1zcGlubmluZyc7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBTcGlubmVyVmlldy5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICB9O1xuICAgIFNwaW5uZXJWaWV3LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkaW5nVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuJGVsLmFkZENsYXNzKF90aGlzLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nU3Bpbm5lciA9IG5ldyBTcGluKFNwaW5uZXJWaWV3LnNwaW5PcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmdTcGlubmVyLnNwaW4oX3RoaXMuJGVsWzBdKTtcbiAgICAgICAgfSwgdGhpcy5sb2FkaW5nRGVsYXkpO1xuICAgIH07XG4gICAgU3Bpbm5lclZpZXcucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkaW5nVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMubG9hZGluZ0NsYXNzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Bpbm5lclZpZXcuc3Bpbk9wdGlvbnMgPSB7XG4gICAgICAgIGxpbmVzOiAxMyxcbiAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICB3aWR0aDogMixcbiAgICAgICAgcmFkaXVzOiA1LFxuICAgICAgICBjb3JuZXJzOiAxLFxuICAgICAgICByb3RhdGU6IDAsXG4gICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgdHJhaWw6IDYwLFxuICAgICAgICBzaGFkb3c6IGZhbHNlLFxuICAgICAgICBod2FjY2VsOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IFwiU3Bpbm5lclZpZXdfX3NwaW5uZXIgYW5pbWF0ZWQgYm91bmNlSW5cIixcbiAgICAgICAgekluZGV4OiAyZTksXG4gICAgICAgIHRvcDogXCIzMHB4XCIsXG4gICAgICAgIGxlZnQ6IFwiYXV0b1wiXG4gICAgfTtcbiAgICByZXR1cm4gU3Bpbm5lclZpZXc7XG59KShWaWV3LlZpZXcpO1xuZXhwb3J0cy5TcGlubmVyVmlldyA9IFNwaW5uZXJWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Bpbm5lclZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpZXcucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVmlldy5wcm90b3R5cGUuZ2V0VWkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpW2tleV07XG4gICAgfTtcbiAgICBWaWV3LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBWaWV3LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVmlldztcbn0pKE1hcmlvbmV0dGUuVmlldyk7XG5leHBvcnRzLlZpZXcgPSBWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL1ZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNCBGZWxpeCBHbmFzc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwOi8vc3Bpbi5qcy5vcmcvXG4gKlxuICogRXhhbXBsZTpcbiAgICB2YXIgb3B0cyA9IHtcbiAgICAgIGxpbmVzOiAxMiAgICAgICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGxpbmVzIHRvIGRyYXdcbiAgICAsIGxlbmd0aDogNyAgICAgICAgICAgICAvLyBUaGUgbGVuZ3RoIG9mIGVhY2ggbGluZVxuICAgICwgd2lkdGg6IDUgICAgICAgICAgICAgIC8vIFRoZSBsaW5lIHRoaWNrbmVzc1xuICAgICwgcmFkaXVzOiAxMCAgICAgICAgICAgIC8vIFRoZSByYWRpdXMgb2YgdGhlIGlubmVyIGNpcmNsZVxuICAgICwgc2NhbGU6IDEuMCAgICAgICAgICAgIC8vIFNjYWxlcyBvdmVyYWxsIHNpemUgb2YgdGhlIHNwaW5uZXJcbiAgICAsIGNvcm5lcnM6IDEgICAgICAgICAgICAvLyBSb3VuZG5lc3MgKDAuLjEpXG4gICAgLCBjb2xvcjogJyMwMDAnICAgICAgICAgLy8gI3JnYiBvciAjcnJnZ2JiXG4gICAgLCBvcGFjaXR5OiAxLzQgICAgICAgICAgLy8gT3BhY2l0eSBvZiB0aGUgbGluZXNcbiAgICAsIHJvdGF0ZTogMCAgICAgICAgICAgICAvLyBSb3RhdGlvbiBvZmZzZXRcbiAgICAsIGRpcmVjdGlvbjogMSAgICAgICAgICAvLyAxOiBjbG9ja3dpc2UsIC0xOiBjb3VudGVyY2xvY2t3aXNlXG4gICAgLCBzcGVlZDogMSAgICAgICAgICAgICAgLy8gUm91bmRzIHBlciBzZWNvbmRcbiAgICAsIHRyYWlsOiAxMDAgICAgICAgICAgICAvLyBBZnRlcmdsb3cgcGVyY2VudGFnZVxuICAgICwgZnBzOiAyMCAgICAgICAgICAgICAgIC8vIEZyYW1lcyBwZXIgc2Vjb25kIHdoZW4gdXNpbmcgc2V0VGltZW91dCgpXG4gICAgLCB6SW5kZXg6IDJlOSAgICAgICAgICAgLy8gVXNlIGEgaGlnaCB6LWluZGV4IGJ5IGRlZmF1bHRcbiAgICAsIGNsYXNzTmFtZTogJ3NwaW5uZXInICAvLyBDU1MgY2xhc3MgdG8gYXNzaWduIHRvIHRoZSBlbGVtZW50XG4gICAgLCB0b3A6ICc1MCUnICAgICAgICAgICAgLy8gY2VudGVyIHZlcnRpY2FsbHlcbiAgICAsIGxlZnQ6ICc1MCUnICAgICAgICAgICAvLyBjZW50ZXIgaG9yaXpvbnRhbGx5XG4gICAgLCBzaGFkb3c6IGZhbHNlICAgICAgICAgLy8gV2hldGhlciB0byByZW5kZXIgYSBzaGFkb3dcbiAgICAsIGh3YWNjZWw6IGZhbHNlICAgICAgICAvLyBXaGV0aGVyIHRvIHVzZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gKG1pZ2h0IGJlIGJ1Z2d5KVxuICAgICwgcG9zaXRpb246ICdhYnNvbHV0ZScgIC8vIEVsZW1lbnQgcG9zaXRpb25pbmdcbiAgICB9XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb28nKVxuICAgIHZhciBzcGlubmVyID0gbmV3IFNwaW5uZXIob3B0cykuc3Bpbih0YXJnZXQpXG4gKi9cbjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblxuICAvKiBDb21tb25KUyAqL1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblxuICAvKiBBTUQgbW9kdWxlICovXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZmFjdG9yeSlcblxuICAvKiBCcm93c2VyIGdsb2JhbCAqL1xuICBlbHNlIHJvb3QuU3Bpbm5lciA9IGZhY3RvcnkoKVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiXG5cbiAgdmFyIHByZWZpeGVzID0gWyd3ZWJraXQnLCAnTW96JywgJ21zJywgJ08nXSAvKiBWZW5kb3IgcHJlZml4ZXMgKi9cbiAgICAsIGFuaW1hdGlvbnMgPSB7fSAvKiBBbmltYXRpb24gcnVsZXMga2V5ZWQgYnkgdGhlaXIgbmFtZSAqL1xuICAgICwgdXNlQ3NzQW5pbWF0aW9ucyAvKiBXaGV0aGVyIHRvIHVzZSBDU1MgYW5pbWF0aW9ucyBvciBzZXRUaW1lb3V0ICovXG4gICAgLCBzaGVldCAvKiBBIHN0eWxlc2hlZXQgdG8gaG9sZCB0aGUgQGtleWZyYW1lIG9yIFZNTCBydWxlcy4gKi9cblxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgZWxlbWVudHMuIElmIG5vIHRhZyBuYW1lIGlzIGdpdmVuLFxuICAgKiBhIERJViBpcyBjcmVhdGVkLiBPcHRpb25hbGx5IHByb3BlcnRpZXMgY2FuIGJlIHBhc3NlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsICh0YWcsIHByb3ApIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyB8fCAnZGl2JylcbiAgICAgICwgblxuXG4gICAgZm9yIChuIGluIHByb3ApIGVsW25dID0gcHJvcFtuXVxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgY2hpbGRyZW4gYW5kIHJldHVybnMgdGhlIHBhcmVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGlucyAocGFyZW50IC8qIGNoaWxkMSwgY2hpbGQyLCAuLi4qLykge1xuICAgIGZvciAodmFyIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGFyZ3VtZW50c1tpXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvcGFjaXR5IGtleWZyYW1lIGFuaW1hdGlvbiBydWxlIGFuZCByZXR1cm5zIGl0cyBuYW1lLlxuICAgKiBTaW5jZSBtb3N0IG1vYmlsZSBXZWJraXRzIGhhdmUgdGltaW5nIGlzc3VlcyB3aXRoIGFuaW1hdGlvbi1kZWxheSxcbiAgICogd2UgY3JlYXRlIHNlcGFyYXRlIHJ1bGVzIGZvciBlYWNoIGxpbmUvc2VnbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEFuaW1hdGlvbiAoYWxwaGEsIHRyYWlsLCBpLCBsaW5lcykge1xuICAgIHZhciBuYW1lID0gWydvcGFjaXR5JywgdHJhaWwsIH5+KGFscGhhICogMTAwKSwgaSwgbGluZXNdLmpvaW4oJy0nKVxuICAgICAgLCBzdGFydCA9IDAuMDEgKyBpL2xpbmVzICogMTAwXG4gICAgICAsIHogPSBNYXRoLm1heCgxIC0gKDEtYWxwaGEpIC8gdHJhaWwgKiAoMTAwLXN0YXJ0KSwgYWxwaGEpXG4gICAgICAsIHByZWZpeCA9IHVzZUNzc0FuaW1hdGlvbnMuc3Vic3RyaW5nKDAsIHVzZUNzc0FuaW1hdGlvbnMuaW5kZXhPZignQW5pbWF0aW9uJykpLnRvTG93ZXJDYXNlKClcbiAgICAgICwgcHJlID0gcHJlZml4ICYmICctJyArIHByZWZpeCArICctJyB8fCAnJ1xuXG4gICAgaWYgKCFhbmltYXRpb25zW25hbWVdKSB7XG4gICAgICBzaGVldC5pbnNlcnRSdWxlKFxuICAgICAgICAnQCcgKyBwcmUgKyAna2V5ZnJhbWVzICcgKyBuYW1lICsgJ3snICtcbiAgICAgICAgJzAle29wYWNpdHk6JyArIHogKyAnfScgK1xuICAgICAgICBzdGFydCArICcle29wYWNpdHk6JyArIGFscGhhICsgJ30nICtcbiAgICAgICAgKHN0YXJ0KzAuMDEpICsgJyV7b3BhY2l0eToxfScgK1xuICAgICAgICAoc3RhcnQrdHJhaWwpICUgMTAwICsgJyV7b3BhY2l0eTonICsgYWxwaGEgKyAnfScgK1xuICAgICAgICAnMTAwJXtvcGFjaXR5OicgKyB6ICsgJ30nICtcbiAgICAgICAgJ30nLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpXG5cbiAgICAgIGFuaW1hdGlvbnNbbmFtZV0gPSAxXG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB2YXJpb3VzIHZlbmRvciBwcmVmaXhlcyBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VwcG9ydGVkIHByb3BlcnR5LlxuICAgKi9cbiAgZnVuY3Rpb24gdmVuZG9yIChlbCwgcHJvcCkge1xuICAgIHZhciBzID0gZWwuc3R5bGVcbiAgICAgICwgcHBcbiAgICAgICwgaVxuXG4gICAgcHJvcCA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpXG4gICAgaWYgKHNbcHJvcF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIHByb3BcbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBwID0gcHJlZml4ZXNbaV0rcHJvcFxuICAgICAgaWYgKHNbcHBdICE9PSB1bmRlZmluZWQpIHJldHVybiBwcFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIG11bHRpcGxlIHN0eWxlIHByb3BlcnRpZXMgYXQgb25jZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNzcyAoZWwsIHByb3ApIHtcbiAgICBmb3IgKHZhciBuIGluIHByb3ApIHtcbiAgICAgIGVsLnN0eWxlW3ZlbmRvcihlbCwgbikgfHwgbl0gPSBwcm9wW25dXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaW4gZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZSAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZWYgPSBhcmd1bWVudHNbaV1cbiAgICAgIGZvciAodmFyIG4gaW4gZGVmKSB7XG4gICAgICAgIGlmIChvYmpbbl0gPT09IHVuZGVmaW5lZCkgb2JqW25dID0gZGVmW25dXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsaW5lIGNvbG9yIGZyb20gdGhlIGdpdmVuIHN0cmluZyBvciBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldENvbG9yIChjb2xvciwgaWR4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJyA/IGNvbG9yIDogY29sb3JbaWR4ICUgY29sb3IubGVuZ3RoXVxuICB9XG5cbiAgLy8gQnVpbHQtaW4gZGVmYXVsdHNcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgbGluZXM6IDEyICAgICAgICAgICAgIC8vIFRoZSBudW1iZXIgb2YgbGluZXMgdG8gZHJhd1xuICAsIGxlbmd0aDogNyAgICAgICAgICAgICAvLyBUaGUgbGVuZ3RoIG9mIGVhY2ggbGluZVxuICAsIHdpZHRoOiA1ICAgICAgICAgICAgICAvLyBUaGUgbGluZSB0aGlja25lc3NcbiAgLCByYWRpdXM6IDEwICAgICAgICAgICAgLy8gVGhlIHJhZGl1cyBvZiB0aGUgaW5uZXIgY2lyY2xlXG4gICwgc2NhbGU6IDEuMCAgICAgICAgICAgIC8vIFNjYWxlcyBvdmVyYWxsIHNpemUgb2YgdGhlIHNwaW5uZXJcbiAgLCBjb3JuZXJzOiAxICAgICAgICAgICAgLy8gUm91bmRuZXNzICgwLi4xKVxuICAsIGNvbG9yOiAnIzAwMCcgICAgICAgICAvLyAjcmdiIG9yICNycmdnYmJcbiAgLCBvcGFjaXR5OiAxLzQgICAgICAgICAgLy8gT3BhY2l0eSBvZiB0aGUgbGluZXNcbiAgLCByb3RhdGU6IDAgICAgICAgICAgICAgLy8gUm90YXRpb24gb2Zmc2V0XG4gICwgZGlyZWN0aW9uOiAxICAgICAgICAgIC8vIDE6IGNsb2Nrd2lzZSwgLTE6IGNvdW50ZXJjbG9ja3dpc2VcbiAgLCBzcGVlZDogMSAgICAgICAgICAgICAgLy8gUm91bmRzIHBlciBzZWNvbmRcbiAgLCB0cmFpbDogMTAwICAgICAgICAgICAgLy8gQWZ0ZXJnbG93IHBlcmNlbnRhZ2VcbiAgLCBmcHM6IDIwICAgICAgICAgICAgICAgLy8gRnJhbWVzIHBlciBzZWNvbmQgd2hlbiB1c2luZyBzZXRUaW1lb3V0KClcbiAgLCB6SW5kZXg6IDJlOSAgICAgICAgICAgLy8gVXNlIGEgaGlnaCB6LWluZGV4IGJ5IGRlZmF1bHRcbiAgLCBjbGFzc05hbWU6ICdzcGlubmVyJyAgLy8gQ1NTIGNsYXNzIHRvIGFzc2lnbiB0byB0aGUgZWxlbWVudFxuICAsIHRvcDogJzUwJScgICAgICAgICAgICAvLyBjZW50ZXIgdmVydGljYWxseVxuICAsIGxlZnQ6ICc1MCUnICAgICAgICAgICAvLyBjZW50ZXIgaG9yaXpvbnRhbGx5XG4gICwgc2hhZG93OiBmYWxzZSAgICAgICAgIC8vIFdoZXRoZXIgdG8gcmVuZGVyIGEgc2hhZG93XG4gICwgaHdhY2NlbDogZmFsc2UgICAgICAgIC8vIFdoZXRoZXIgdG8gdXNlIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiAobWlnaHQgYmUgYnVnZ3kpXG4gICwgcG9zaXRpb246ICdhYnNvbHV0ZScgIC8vIEVsZW1lbnQgcG9zaXRpb25pbmdcbiAgfVxuXG4gIC8qKiBUaGUgY29uc3RydWN0b3IgKi9cbiAgZnVuY3Rpb24gU3Bpbm5lciAobykge1xuICAgIHRoaXMub3B0cyA9IG1lcmdlKG8gfHwge30sIFNwaW5uZXIuZGVmYXVsdHMsIGRlZmF1bHRzKVxuICB9XG5cbiAgLy8gR2xvYmFsIGRlZmF1bHRzIHRoYXQgb3ZlcnJpZGUgdGhlIGJ1aWx0LWluczpcbiAgU3Bpbm5lci5kZWZhdWx0cyA9IHt9XG5cbiAgbWVyZ2UoU3Bpbm5lci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBzcGlubmVyIHRvIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudC4gSWYgdGhpcyBpbnN0YW5jZSBpcyBhbHJlYWR5XG4gICAgICogc3Bpbm5pbmcsIGl0IGlzIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGl0cyBwcmV2aW91cyB0YXJnZXQgYiBjYWxsaW5nXG4gICAgICogc3RvcCgpIGludGVybmFsbHkuXG4gICAgICovXG4gICAgc3BpbjogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdGhpcy5zdG9wKClcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgICwgbyA9IHNlbGYub3B0c1xuICAgICAgICAsIGVsID0gc2VsZi5lbCA9IGNyZWF0ZUVsKG51bGwsIHtjbGFzc05hbWU6IG8uY2xhc3NOYW1lfSlcblxuICAgICAgY3NzKGVsLCB7XG4gICAgICAgIHBvc2l0aW9uOiBvLnBvc2l0aW9uXG4gICAgICAsIHdpZHRoOiAwXG4gICAgICAsIHpJbmRleDogby56SW5kZXhcbiAgICAgICwgbGVmdDogby5sZWZ0XG4gICAgICAsIHRvcDogby50b3BcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShlbCwgdGFyZ2V0LmZpcnN0Q2hpbGQgfHwgbnVsbClcbiAgICAgIH1cblxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3Byb2dyZXNzYmFyJylcbiAgICAgIHNlbGYubGluZXMoZWwsIHNlbGYub3B0cylcblxuICAgICAgaWYgKCF1c2VDc3NBbmltYXRpb25zKSB7XG4gICAgICAgIC8vIE5vIENTUyBhbmltYXRpb24gc3VwcG9ydCwgdXNlIHNldFRpbWVvdXQoKSBpbnN0ZWFkXG4gICAgICAgIHZhciBpID0gMFxuICAgICAgICAgICwgc3RhcnQgPSAoby5saW5lcyAtIDEpICogKDEgLSBvLmRpcmVjdGlvbikgLyAyXG4gICAgICAgICAgLCBhbHBoYVxuICAgICAgICAgICwgZnBzID0gby5mcHNcbiAgICAgICAgICAsIGYgPSBmcHMgLyBvLnNwZWVkXG4gICAgICAgICAgLCBvc3RlcCA9ICgxIC0gby5vcGFjaXR5KSAvIChmICogby50cmFpbCAvIDEwMClcbiAgICAgICAgICAsIGFzdGVwID0gZiAvIG8ubGluZXNcblxuICAgICAgICA7KGZ1bmN0aW9uIGFuaW0gKCkge1xuICAgICAgICAgIGkrK1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgby5saW5lczsgaisrKSB7XG4gICAgICAgICAgICBhbHBoYSA9IE1hdGgubWF4KDEgLSAoaSArIChvLmxpbmVzIC0gaikgKiBhc3RlcCkgJSBmICogb3N0ZXAsIG8ub3BhY2l0eSlcblxuICAgICAgICAgICAgc2VsZi5vcGFjaXR5KGVsLCBqICogby5kaXJlY3Rpb24gKyBzdGFydCwgYWxwaGEsIG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYudGltZW91dCA9IHNlbGYuZWwgJiYgc2V0VGltZW91dChhbmltLCB+figxMDAwIC8gZnBzKSlcbiAgICAgICAgfSkoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGZcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyBhbmQgcmVtb3ZlcyB0aGUgU3Bpbm5lci5cbiAgICAgKi9cbiAgLCBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgaWYgKGVsLnBhcmVudE5vZGUpIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gICAgICAgIHRoaXMuZWwgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgZHJhd3MgdGhlIGluZGl2aWR1YWwgbGluZXMuIFdpbGwgYmUgb3ZlcndyaXR0ZW5cbiAgICAgKiBpbiBWTUwgZmFsbGJhY2sgbW9kZSBiZWxvdy5cbiAgICAgKi9cbiAgLCBsaW5lczogZnVuY3Rpb24gKGVsLCBvKSB7XG4gICAgICB2YXIgaSA9IDBcbiAgICAgICAgLCBzdGFydCA9IChvLmxpbmVzIC0gMSkgKiAoMSAtIG8uZGlyZWN0aW9uKSAvIDJcbiAgICAgICAgLCBzZWdcblxuICAgICAgZnVuY3Rpb24gZmlsbCAoY29sb3IsIHNoYWRvdykge1xuICAgICAgICByZXR1cm4gY3NzKGNyZWF0ZUVsKCksIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAsIHdpZHRoOiBvLnNjYWxlICogKG8ubGVuZ3RoICsgby53aWR0aCkgKyAncHgnXG4gICAgICAgICwgaGVpZ2h0OiBvLnNjYWxlICogby53aWR0aCArICdweCdcbiAgICAgICAgLCBiYWNrZ3JvdW5kOiBjb2xvclxuICAgICAgICAsIGJveFNoYWRvdzogc2hhZG93XG4gICAgICAgICwgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCdcbiAgICAgICAgLCB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIH5+KDM2MC9vLmxpbmVzKmkgKyBvLnJvdGF0ZSkgKyAnZGVnKSB0cmFuc2xhdGUoJyArIG8uc2NhbGUqby5yYWRpdXMgKyAncHgnICsgJywwKSdcbiAgICAgICAgLCBib3JkZXJSYWRpdXM6IChvLmNvcm5lcnMgKiBvLnNjYWxlICogby53aWR0aCA+PiAxKSArICdweCdcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGkgPCBvLmxpbmVzOyBpKyspIHtcbiAgICAgICAgc2VnID0gY3NzKGNyZWF0ZUVsKCksIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAsIHRvcDogMSArIH4oby5zY2FsZSAqIG8ud2lkdGggLyAyKSArICdweCdcbiAgICAgICAgLCB0cmFuc2Zvcm06IG8uaHdhY2NlbCA/ICd0cmFuc2xhdGUzZCgwLDAsMCknIDogJydcbiAgICAgICAgLCBvcGFjaXR5OiBvLm9wYWNpdHlcbiAgICAgICAgLCBhbmltYXRpb246IHVzZUNzc0FuaW1hdGlvbnMgJiYgYWRkQW5pbWF0aW9uKG8ub3BhY2l0eSwgby50cmFpbCwgc3RhcnQgKyBpICogby5kaXJlY3Rpb24sIG8ubGluZXMpICsgJyAnICsgMSAvIG8uc3BlZWQgKyAncyBsaW5lYXIgaW5maW5pdGUnXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG8uc2hhZG93KSBpbnMoc2VnLCBjc3MoZmlsbCgnIzAwMCcsICcwIDAgNHB4ICMwMDAnKSwge3RvcDogJzJweCd9KSlcbiAgICAgICAgaW5zKGVsLCBpbnMoc2VnLCBmaWxsKGdldENvbG9yKG8uY29sb3IsIGkpLCAnMCAwIDFweCByZ2JhKDAsMCwwLC4xKScpKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB0aGF0IGFkanVzdHMgdGhlIG9wYWNpdHkgb2YgYSBzaW5nbGUgbGluZS5cbiAgICAgKiBXaWxsIGJlIG92ZXJ3cml0dGVuIGluIFZNTCBmYWxsYmFjayBtb2RlIGJlbG93LlxuICAgICAqL1xuICAsIG9wYWNpdHk6IGZ1bmN0aW9uIChlbCwgaSwgdmFsKSB7XG4gICAgICBpZiAoaSA8IGVsLmNoaWxkTm9kZXMubGVuZ3RoKSBlbC5jaGlsZE5vZGVzW2ldLnN0eWxlLm9wYWNpdHkgPSB2YWxcbiAgICB9XG5cbiAgfSlcblxuXG4gIGZ1bmN0aW9uIGluaXRWTUwgKCkge1xuXG4gICAgLyogVXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYSBWTUwgdGFnICovXG4gICAgZnVuY3Rpb24gdm1sICh0YWcsIGF0dHIpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbCgnPCcgKyB0YWcgKyAnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInNwaW4tdm1sXCI+JywgYXR0cilcbiAgICB9XG5cbiAgICAvLyBObyBDU1MgdHJhbnNmb3JtcyBidXQgVk1MIHN1cHBvcnQsIGFkZCBhIENTUyBydWxlIGZvciBWTUwgZWxlbWVudHM6XG4gICAgc2hlZXQuYWRkUnVsZSgnLnNwaW4tdm1sJywgJ2JlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpJylcblxuICAgIFNwaW5uZXIucHJvdG90eXBlLmxpbmVzID0gZnVuY3Rpb24gKGVsLCBvKSB7XG4gICAgICB2YXIgciA9IG8uc2NhbGUgKiAoby5sZW5ndGggKyBvLndpZHRoKVxuICAgICAgICAsIHMgPSBvLnNjYWxlICogMiAqIHJcblxuICAgICAgZnVuY3Rpb24gZ3JwICgpIHtcbiAgICAgICAgcmV0dXJuIGNzcyhcbiAgICAgICAgICB2bWwoJ2dyb3VwJywge1xuICAgICAgICAgICAgY29vcmRzaXplOiBzICsgJyAnICsgc1xuICAgICAgICAgICwgY29vcmRvcmlnaW46IC1yICsgJyAnICsgLXJcbiAgICAgICAgICB9KVxuICAgICAgICAsIHsgd2lkdGg6IHMsIGhlaWdodDogcyB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdmFyIG1hcmdpbiA9IC0oby53aWR0aCArIG8ubGVuZ3RoKSAqIG8uc2NhbGUgKiAyICsgJ3B4J1xuICAgICAgICAsIGcgPSBjc3MoZ3JwKCksIHtwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiBtYXJnaW4sIGxlZnQ6IG1hcmdpbn0pXG4gICAgICAgICwgaVxuXG4gICAgICBmdW5jdGlvbiBzZWcgKGksIGR4LCBmaWx0ZXIpIHtcbiAgICAgICAgaW5zKFxuICAgICAgICAgIGdcbiAgICAgICAgLCBpbnMoXG4gICAgICAgICAgICBjc3MoZ3JwKCksIHtyb3RhdGlvbjogMzYwIC8gby5saW5lcyAqIGkgKyAnZGVnJywgbGVmdDogfn5keH0pXG4gICAgICAgICAgLCBpbnMoXG4gICAgICAgICAgICAgIGNzcyhcbiAgICAgICAgICAgICAgICB2bWwoJ3JvdW5kcmVjdCcsIHthcmNzaXplOiBvLmNvcm5lcnN9KVxuICAgICAgICAgICAgICAsIHsgd2lkdGg6IHJcbiAgICAgICAgICAgICAgICAsIGhlaWdodDogby5zY2FsZSAqIG8ud2lkdGhcbiAgICAgICAgICAgICAgICAsIGxlZnQ6IG8uc2NhbGUgKiBvLnJhZGl1c1xuICAgICAgICAgICAgICAgICwgdG9wOiAtby5zY2FsZSAqIG8ud2lkdGggPj4gMVxuICAgICAgICAgICAgICAgICwgZmlsdGVyOiBmaWx0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgdm1sKCdmaWxsJywge2NvbG9yOiBnZXRDb2xvcihvLmNvbG9yLCBpKSwgb3BhY2l0eTogby5vcGFjaXR5fSlcbiAgICAgICAgICAgICwgdm1sKCdzdHJva2UnLCB7b3BhY2l0eTogMH0pIC8vIHRyYW5zcGFyZW50IHN0cm9rZSB0byBmaXggY29sb3IgYmxlZWRpbmcgdXBvbiBvcGFjaXR5IGNoYW5nZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoby5zaGFkb3cpXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gby5saW5lczsgaSsrKSB7XG4gICAgICAgICAgc2VnKGksIC0yLCAncHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJsdXIocGl4ZWxyYWRpdXM9MixtYWtlc2hhZG93PTEsc2hhZG93b3BhY2l0eT0uMyknKVxuICAgICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPD0gby5saW5lczsgaSsrKSBzZWcoaSlcbiAgICAgIHJldHVybiBpbnMoZWwsIGcpXG4gICAgfVxuXG4gICAgU3Bpbm5lci5wcm90b3R5cGUub3BhY2l0eSA9IGZ1bmN0aW9uIChlbCwgaSwgdmFsLCBvKSB7XG4gICAgICB2YXIgYyA9IGVsLmZpcnN0Q2hpbGRcbiAgICAgIG8gPSBvLnNoYWRvdyAmJiBvLmxpbmVzIHx8IDBcbiAgICAgIGlmIChjICYmIGkgKyBvIDwgYy5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBjID0gYy5jaGlsZE5vZGVzW2kgKyBvXTsgYyA9IGMgJiYgYy5maXJzdENoaWxkOyBjID0gYyAmJiBjLmZpcnN0Q2hpbGRcbiAgICAgICAgaWYgKGMpIGMub3BhY2l0eSA9IHZhbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2hlZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gY3JlYXRlRWwoJ3N0eWxlJywge3R5cGUgOiAndGV4dC9jc3MnfSlcbiAgICAgIGlucyhkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLCBlbClcbiAgICAgIHJldHVybiBlbC5zaGVldCB8fCBlbC5zdHlsZVNoZWV0XG4gICAgfSgpKVxuXG4gICAgdmFyIHByb2JlID0gY3NzKGNyZWF0ZUVsKCdncm91cCcpLCB7YmVoYXZpb3I6ICd1cmwoI2RlZmF1bHQjVk1MKSd9KVxuXG4gICAgaWYgKCF2ZW5kb3IocHJvYmUsICd0cmFuc2Zvcm0nKSAmJiBwcm9iZS5hZGopIGluaXRWTUwoKVxuICAgIGVsc2UgdXNlQ3NzQW5pbWF0aW9ucyA9IHZlbmRvcihwcm9iZSwgJ2FuaW1hdGlvbicpXG4gIH1cblxuICByZXR1cm4gU3Bpbm5lclxuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zcGluLmpzL3NwaW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIFEgPSByZXF1aXJlKCdxJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbmZ1bmN0aW9uIHdoZW5GZXRjaGVkKGVudGl0aWVzLCBjYWxsYmFjaykge1xuICAgIHZhciBwcm9taXNlcyA9IF8uY2hhaW4oW2VudGl0aWVzXSkuZmxhdHRlbigpLnBsdWNrKFwiX2ZldGNoXCIpLmNvbXBhY3QoKS52YWx1ZSgpO1xuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFEuYWxsKHByb21pc2VzKS5kb25lKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2hlbkZldGNoZWQnLCByZXN1bHRzKTtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5mYWlsZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGVuRmV0Y2hlZCcsIGVudGl0aWVzKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3RoaW5nIGlzIGJlaW5nIGZldGNoZWQnKTtcbiAgICB9XG59XG5leHBvcnRzLndoZW5GZXRjaGVkID0gd2hlbkZldGNoZWQ7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aGVuRmV0Y2hlZC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy93aGVuRmV0Y2hlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjdfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicVwiXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBBbmltYXRlZFJlZ2lvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFuaW1hdGVkUmVnaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGVkUmVnaW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQW5pbWF0ZWRSZWdpb24ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgJiYgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0aW5nIG91dCcsIHRoaXMuY3VycmVudFZpZXcsIHRoaXMuZWwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5hbmltYXRlT3V0KGNiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbmltYXRlZFJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZUVtcHR5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lbXB0eSgpO1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRlZFJlZ2lvbjtcbn0pKE1hcmlvbmV0dGUuUmVnaW9uKTtcbmV4cG9ydHMuQW5pbWF0ZWRSZWdpb24gPSBBbmltYXRlZFJlZ2lvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGVkUmVnaW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFJlZ2lvbi9BbmltYXRlZFJlZ2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcbnZhciBJdGVtVmlldyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL0l0ZW1WaWV3Jyk7XG52YXIgQlVUVE9OX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJVVFRPTl9FVkVOVFMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlVUVE9OX0VWRU5UUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEJVVFRPTl9FVkVOVFMubmF2aWdhdGUgPSBuZXcgQlVUVE9OX0VWRU5UUygnbmF2aWdhdGUnKTtcbiAgICByZXR1cm4gQlVUVE9OX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkJVVFRPTl9FVkVOVFMgPSBCVVRUT05fRVZFTlRTO1xudmFyIEJVVFRPTl9USEVNRSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJVVFRPTl9USEVNRSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCVVRUT05fVEhFTUUoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBCVVRUT05fVEhFTUUuZGVmYXVsdCA9IG5ldyBCVVRUT05fVEhFTUUoJ2RlZmF1bHQnKTtcbiAgICBCVVRUT05fVEhFTUUuaW52ZXJzZSA9IG5ldyBCVVRUT05fVEhFTUUoJ2ludmVyc2UnKTtcbiAgICBCVVRUT05fVEhFTUUuYWN0aW9uID0gbmV3IEJVVFRPTl9USEVNRSgnYWN0aW9uJyk7XG4gICAgQlVUVE9OX1RIRU1FLmxpbmsgPSBuZXcgQlVUVE9OX1RIRU1FKCdsaW5rJyk7XG4gICAgQlVUVE9OX1RIRU1FLnByaW1hcnkgPSBuZXcgQlVUVE9OX1RIRU1FKCdwcmltYXJ5Jyk7XG4gICAgQlVUVE9OX1RIRU1FLnNlY29uZGFyeSA9IG5ldyBCVVRUT05fVEhFTUUoJ3NlY29uZGFyeScpO1xuICAgIHJldHVybiBCVVRUT05fVEhFTUU7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5CVVRUT05fVEhFTUUgPSBCVVRUT05fVEhFTUU7XG52YXIgQlVUVE9OX1NJWkUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCVVRUT05fU0laRSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCVVRUT05fU0laRSgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEJVVFRPTl9TSVpFLmRlZmF1bHQgPSBuZXcgQlVUVE9OX1NJWkUoJ2RlZmF1bHQnKTtcbiAgICBCVVRUT05fU0laRS5zbWFsbCA9IG5ldyBCVVRUT05fU0laRSgnc21hbGwnKTtcbiAgICBCVVRUT05fU0laRS5sYXJnZSA9IG5ldyBCVVRUT05fU0laRSgnbGFyZ2UnKTtcbiAgICByZXR1cm4gQlVUVE9OX1NJWkU7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5CVVRUT05fU0laRSA9IEJVVFRPTl9TSVpFO1xudmFyIEJ1dHRvbk1vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uTW9kZWwoYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmlkQXR0cmlidXRlID0gJ25hbWUnO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgICB0aGVtZTogQlVUVE9OX1RIRU1FLmRlZmF1bHQsXG4gICAgICAgICAgICBzaXplOiBCVVRUT05fU0laRS5kZWZhdWx0XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCduYW1lJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCduYW1lJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcImljb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdpY29uJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdpY29uJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCd0ZXh0Jyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCd0ZXh0JywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcImJsb2NrXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnYmxvY2snKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ2Jsb2NrJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcInRoZW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgndGhlbWUnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ3RoZW1lJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uTW9kZWwucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdzaXplJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdzaXplJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uTW9kZWw7XG59KShCYWNrYm9uZS5Nb2RlbCk7XG5leHBvcnRzLkJ1dHRvbk1vZGVsID0gQnV0dG9uTW9kZWw7XG5CdXR0b25Nb2RlbC5wcm90b3R5cGUuaWRBdHRyaWJ1dGUgPSAnbmFtZSc7XG52YXIgQnV0dG9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsIHx8IG5ldyBCdXR0b25Nb2RlbCh0aGlzLmRlZmF1bHRzKCkpO1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5tb2RlbC5uYW1lIHx8ICdiYXNlLWJ1dHRvbic7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL0J1dHRvbi5oYnMnKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0KSB7XG4gICAgICAgICAgICB0aGlzLnRhZ05hbWUgPSAnYnV0dG9uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFnTmFtZSA9ICdhJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXJzID0ge1xuICAgICAgICAgICAgJ2NsaWNrJzogJ2NsaWNrJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIHRoaXMubmF2aWdhdGUpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lcygpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnQnV0dG9uIGJ0biBCdXR0b24tLScgKyB0aGlzLm5hbWUgKyAnQnV0dG9uJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5nZXRJY29uQ2xhc3MgPSBmdW5jdGlvbiAoaWNvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdJY29uIEljb24tLScgKyBpY29uTmFtZTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubW9kZWwudGV4dDsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5tb2RlbC50ZXh0ID0gdmFsdWU7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuc2VyaWFsaXplRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm1vZGVsLnRvSlNPTigpO1xuICAgICAgICBkYXRhLmljb25DbGFzcyA9IHRoaXMuZ2V0SWNvbkNsYXNzKHRoaXMubW9kZWwuaWNvbik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS5uYXZpZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEJVVFRPTl9FVkVOVFMubmF2aWdhdGUudmFsLCB0aGlzLm5hbWUpO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy51bnNldENsYXNzTmFtZXMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbilcbiAgICAgICAgICAgIHRoaXMubW9kZWwuaWNvbiA9IG9wdGlvbnMuaWNvbjtcbiAgICAgICAgaWYgKG9wdGlvbnMudGV4dClcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMuYmxvY2spKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5ibG9jayA9IG9wdGlvbnMuYmxvY2s7XG4gICAgICAgIGlmIChvcHRpb25zLnRoZW1lKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC50aGVtZSA9IG9wdGlvbnMudGhlbWU7XG4gICAgICAgIGlmIChvcHRpb25zLnNpemUpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNpemUgPSBvcHRpb25zLnNpemU7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Ym1pdClcbiAgICAgICAgICAgIHRoaXMuJGVsLmF0dHIoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnVuc2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRlbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWxcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYnRuLWxpbmsnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnRoZW1lKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdCdXR0b24tLScgKyB0aGlzLm1vZGVsLnNpemUpO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnYnRuLWJsb2NrJyk7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwudGhlbWUpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwuc2l6ZSArICdTaXplJyk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLnRoZW1lID09PSBCVVRUT05fVEhFTUUubGluaykge1xuICAgICAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2J0bi1saW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW9kZWwuYmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdidG4tYmxvY2snKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnV0dG9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIFN0cmluZ0NvbnN0YW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHJpbmdDb25zdGFudCh2YWwpIHtcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XG4gICAgfVxuICAgIFN0cmluZ0NvbnN0YW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudmFsOyB9O1xuICAgIFN0cmluZ0NvbnN0YW50LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgPT09IHZhbHVlO1xuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQuYWxsQ29uc3RhbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBhbGwgPSBbXTtcbiAgICAgICAgXy5lYWNoKF8ua2V5cyh0aGlzKSwgZnVuY3Rpb24gKHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAodFtwcm9wZXJ0eUtleV0gaW5zdGFuY2VvZiB0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0YW50ID0gdFtwcm9wZXJ0eUtleV07XG4gICAgICAgICAgICAgICAgYWxsLnB1c2goY29uc3RhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LmZyb21LZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBhbGwgPSB0aGlzLmFsbENvbnN0YW50cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFsbFtpXS5tYXRjaGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5mcm9tVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBhbGwgPSB0aGlzLmFsbENvbnN0YW50cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFsbFtpXS5tYXRjaGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3RyaW5nQ29uc3RhbnQ7XG59KSgpO1xuZXhwb3J0cy5TdHJpbmdDb25zdGFudCA9IFN0cmluZ0NvbnN0YW50O1xudmFyIEVWRU5UX1RZUEVTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRVZFTlRfVFlQRVMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRVZFTlRfVFlQRVMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBFVkVOVF9UWVBFUy5DaGFuZ2UgPSBuZXcgRVZFTlRfVFlQRVMoJ0NoYW5nZScpO1xuICAgIHJldHVybiBFVkVOVF9UWVBFUztcbn0pKFN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuRVZFTlRfVFlQRVMgPSBFVkVOVF9UWVBFUztcbnZhciBBQ1RJT05fU09VUkNFUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFDVElPTl9TT1VSQ0VTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFDVElPTl9TT1VSQ0VTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQUNUSU9OX1NPVVJDRVMuU2VydmVyQWN0aW9uID0gbmV3IEFDVElPTl9TT1VSQ0VTKCdTZXJ2ZXJBY3Rpb24nKTtcbiAgICBBQ1RJT05fU09VUkNFUy5WaWV3QWN0aW9uID0gbmV3IEFDVElPTl9TT1VSQ0VTKCdWaWV3QWN0aW9uJyk7XG4gICAgQUNUSU9OX1NPVVJDRVMuRGV2aWNlQWN0aW9uID0gbmV3IEFDVElPTl9TT1VSQ0VTKCdEZXZpY2VBY3Rpb24nKTtcbiAgICByZXR1cm4gQUNUSU9OX1NPVVJDRVM7XG59KShTdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkFDVElPTl9TT1VSQ0VTID0gQUNUSU9OX1NPVVJDRVM7XG52YXIgRE9DX1NUQVRVU0VTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRE9DX1NUQVRVU0VTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERPQ19TVEFUVVNFUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIERPQ19TVEFUVVNFUy5lbXB0eSA9IG5ldyBET0NfU1RBVFVTRVMoJ2VtcHR5Jyk7XG4gICAgRE9DX1NUQVRVU0VTLmZldGNoaW5nRnJvbVNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2ZldGNoaW5nRnJvbVNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5mZXRjaGluZ0xvY2FsID0gbmV3IERPQ19TVEFUVVNFUygnZmV0Y2hpbmdMb2NhbCcpO1xuICAgIERPQ19TVEFUVVNFUy5mZXRjaGVkID0gbmV3IERPQ19TVEFUVVNFUygnZmV0Y2hlZCcpO1xuICAgIERPQ19TVEFUVVNFUy5jcmVhdGluZ09uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnY3JlYXRpbmdPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy51cGRhdGluZ09uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygndXBkYXRpbmdPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGluZ09uU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRpbmdPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGVkT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGVkT25TZXJ2ZXInKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRlZExvY2FsID0gbmV3IERPQ19TVEFUVVNFUygnZGVsZXRlZExvY2FsJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0ZWQgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGVkJyk7XG4gICAgcmV0dXJuIERPQ19TVEFUVVNFUztcbn0pKFN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuRE9DX1NUQVRVU0VTID0gRE9DX1NUQVRVU0VTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uc3RhbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9XFxcIkJ1dHRvbl9faWNvblxcXCI+PGRpdiBjbGFzcz1cXFwiXCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmljb25DbGFzcyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWNvbkNsYXNzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJpY29uQ2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L2Rpdj48L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmljb25DbGFzcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8c3BhbiBjbGFzcz1cXFwiQnV0dG9uX190ZXh0XFxcIj5cIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGV4dCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGV4dCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwidGV4dFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5oYnNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZUZvcm1zID0gcmVxdWlyZSgnYmFja2JvbmUtZm9ybXMnKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xudmFyIHZpZXdzID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvaW5kZXgnKTtcbnZhciBMYXlvdXQgPSB2aWV3cy5MYXlvdXQ7XG52YXIgQ2hpbGRIb2xkZXJWaWV3ID0gdmlld3MuQ2hpbGRIb2xkZXJWaWV3O1xudGVtcGxhdGVzLmluaXQoKTtcbnZhciBGT1JNVklFV19FVkVOVFMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGT1JNVklFV19FVkVOVFMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRk9STVZJRVdfRVZFTlRTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgRk9STVZJRVdfRVZFTlRTLnN1Ym1pdHRlZCA9IG5ldyBGT1JNVklFV19FVkVOVFMoJ3N1Ym1pdHRlZCcpO1xuICAgIHJldHVybiBGT1JNVklFV19FVkVOVFM7XG59KShjb25zdGFudHMuU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5GT1JNVklFV19FVkVOVFMgPSBGT1JNVklFV19FVkVOVFM7XG52YXIgRm9ybVZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdGb3JtVmlldyc7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdmb3JtJztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyByb2xlOiAnZm9ybScgfTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRm9ybVZpZXcuaGJzJyk7XG4gICAgICAgIHRoaXMucmVnaW9ucyA9IHtcbiAgICAgICAgICAgIGZpZWxkc1JlZ2lvbjogJy5Gb3JtVmlld19fZmllbGRzUmVnaW9uJyxcbiAgICAgICAgICAgIGJ1dHRvbnNSZWdpb246ICcuRm9ybVZpZXdfX2J1dHRvbnNSZWdpb24nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFyc2VJY29uUHJvcGVydGllcyhvcHRpb25zLnNjaGVtYSk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnRm9ybVN0YWNrZWQnKTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBuZXcgQmFja2JvbmVGb3JtcyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5idXR0b25zSG9sZGVyID0gbmV3IENoaWxkSG9sZGVyVmlldy5HZW5lcmljQ2hpbGRIb2xkZXJWaWV3KCk7XG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLm9mZigpO1xuICAgICAgICB0aGlzLmZpZWxkcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICAgIHRoaXMuZmllbGRzID0gbnVsbDtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLm9uKCdzdWJtaXQnLCB0aGlzLm9uRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZmllbGRzUmVnaW9uLnNob3codGhpcy5maWVsZHMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNSZWdpb24uc2hvdyh0aGlzLmJ1dHRvbnNIb2xkZXIpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnBhcnNlSWNvblByb3BlcnRpZXMgPSBmdW5jdGlvbiAoc2NoZW1hKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEsIGZ1bmN0aW9uIChzY2hlbWFJdGVtKSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1hSXRlbS5pY29uKSB7XG4gICAgICAgICAgICAgICAgc2NoZW1hSXRlbS50aXRsZSA9ICc8aSBjbGFzcz1cImZhIGZhLScgKyBzY2hlbWFJdGVtLmljb24gKyAnXCI+PC9pPic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLm9uRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihGT1JNVklFV19FVkVOVFMuc3VibWl0dGVkLnRvU3RyaW5nKCkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5kaXNhYmxlRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLmVuYWJsZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKEZvcm1WaWV3LkRJU0FCTEVEX0NMQVNTKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRzLnZhbGlkYXRlKCk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRzLmdldFZhbHVlKHByb3BlcnR5KTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkcy5zZXRWYWx1ZShwcm9wZXJ0aWVzKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LkRJU0FCTEVEX0NMQVNTID0gJ0Zvcm1WaWV3LS1kaXNhYmxlZCc7XG4gICAgcmV0dXJuIEZvcm1WaWV3O1xufSkoTGF5b3V0LkxheW91dCk7XG5leHBvcnRzLkZvcm1WaWV3ID0gRm9ybVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybVZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMzX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhY2tib25lLWZvcm1zXCJcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbi8qKlxuICogSW5jbHVkZSB0aGlzIHRlbXBsYXRlIGZpbGUgYWZ0ZXIgYmFja2JvbmUtZm9ybXMuYW1kLmpzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRlbXBsYXRlc1xuICpcbiAqICdkYXRhLSonIGF0dHJpYnV0ZXMgY29udHJvbCB3aGVyZSBlbGVtZW50cyBhcmUgcGxhY2VkXG4gKi9cbnZhciBGb3JtID0gcmVxdWlyZSgnYmFja2JvbmUtZm9ybXMnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBGb3JtLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnPGRpdiBkYXRhLWZpZWxkc2V0cz48L2Rpdj4nKTtcbiAgICBGb3JtLkZpZWxkc2V0LnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgPGZpZWxkc2V0IGRhdGEtZmllbGRzPlxcXG4gICAgPCUgaWYgKGxlZ2VuZCkgeyAlPlxcXG4gICAgICA8bGVnZW5kPjwlPSBsZWdlbmQgJT48L2xlZ2VuZD5cXFxuICAgIDwlIH0gJT5cXFxuICA8L2ZpZWxkc2V0PlxcXG4nKTtcbiAgICBGb3JtLkZpZWxkLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9Gb3JtRmllbGQuaGJzJyk7XG4gICAgRm9ybS5OZXN0ZWRGaWVsZC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gIDxkaXYgY2xhc3M9XCJmaWVsZC08JT0ga2V5ICU+XCI+XFxcbiAgICA8ZGl2IHRpdGxlPVwiPCU9IHRpdGxlICU+XCIgY2xhc3M9XCJpbnB1dC14bGFyZ2VcIj5cXFxuICAgICAgPHNwYW4gZGF0YS1lZGl0b3I+PC9zcGFuPlxcXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVscC1pbmxpbmVcIiBkYXRhLWVycm9yPjwvZGl2PlxcXG4gICAgPC9kaXY+XFxcbiAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiPjwlPSBoZWxwICU+PC9kaXY+XFxcbiAgPC9kaXY+XFxcbicpO1xuICAgIEZvcm0uRmllbGQuZXJyb3JDbGFzc05hbWUgPSAnRm9ybUdyb3VwLS1oYXNFcnJvcic7XG4gICAgaWYgKEZvcm0uZWRpdG9ycy5MaXN0KSB7XG4gICAgICAgIEZvcm0uZWRpdG9ycy5MaXN0LnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgICA8ZGl2IGNsYXNzPVwiYmJmLWxpc3RcIj5cXFxuICAgICAgPHVsIGNsYXNzPVwidW5zdHlsZWQgY2xlYXJmaXhcIiBkYXRhLWl0ZW1zPjwvdWw+XFxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJiZi1hZGRcIiBkYXRhLWFjdGlvbj1cImFkZFwiPkFkZDwvYnV0dG9uPlxcXG4gICAgPC9kaXY+XFxcbiAgJyk7XG4gICAgICAgIEZvcm0uZWRpdG9ycy5MaXN0Lkl0ZW0udGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICAgIDxsaSBjbGFzcz1cImNsZWFyZml4XCI+XFxcbiAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIiBkYXRhLWVkaXRvcj48L2Rpdj5cXFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmJmLWRlbFwiIGRhdGEtYWN0aW9uPVwicmVtb3ZlXCI+JnRpbWVzOzwvYnV0dG9uPlxcXG4gICAgPC9saT5cXFxuICAnKTtcbiAgICAgICAgRm9ybS5lZGl0b3JzLkxpc3QuT2JqZWN0LnRlbXBsYXRlID0gRm9ybS5lZGl0b3JzLkxpc3QuTmVzdGVkTW9kZWwudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICAgIDxkaXYgY2xhc3M9XCJiYmYtbGlzdC1tb2RhbFwiPjwlPSBzdW1tYXJ5ICU+PC9kaXY+XFxcbiAgJyk7XG4gICAgfVxufVxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvdGVtcGxhdGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlcjtcblxuICByZXR1cm4gXCIgICAgPHAgY2xhc3M9XFxcIkZvcm1Hcm91cF9faGVscE1lc3NhZ2VcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaGVscCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVscCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaGVscFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9wPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMyPVwiZnVuY3Rpb25cIjtcblxuICByZXR1cm4gXCI8ZGl2XFxuICBjbGFzcz1cXFwiRm9ybUdyb3VwIEZvcm1Hcm91cC0tXCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmtleSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJrZXlcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiRm9ybUdyb3VwX19sYWJlbFxcXCIgZm9yPVxcXCJcIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmVkaXRvcklkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5lZGl0b3JJZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiZWRpdG9ySWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2xhYmVsPlxcbiAgPHNwYW4gY2xhc3M9XFxcIkZvcm1Hcm91cF9fY29udHJvbFxcXCIgZGF0YS1lZGl0b3I+PC9zcGFuPlxcbiAgPHAgY2xhc3M9XFxcIkZvcm1Hcm91cF9fZXJyb3JNZXNzYWdlXFxcIiBkYXRhLWVycm9yPjwvcD5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oZWxwIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1GaWVsZC5oYnNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5DaGlsZEhvbGRlclZpZXcgPSByZXF1aXJlKCcuL0NoaWxkSG9sZGVyVmlldycpO1xuZXhwb3J0cy5WaWV3ID0gcmVxdWlyZSgnLi9WaWV3Jyk7XG5leHBvcnRzLkl0ZW1WaWV3ID0gcmVxdWlyZSgnLi9JdGVtVmlldycpO1xuZXhwb3J0cy5MYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xuZXhwb3J0cy5MaXN0ID0gcmVxdWlyZSgnLi9MaXN0Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIFZpZXcgPSByZXF1aXJlKCcuL1ZpZXcnKTtcbnZhciBDaGlsZEhvbGRlclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGlsZEhvbGRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hpbGRIb2xkZXJWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBCYWNrYm9uZS5DaGlsZFZpZXdDb250YWluZXIoKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZpZXcsIGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJpZ2dlck1ldGhvZCgnYmVmb3JlOmFkZDpjaGlsZCcsIHZpZXcpO1xuICAgICAgICAvLyBTdG9yZSB0aGUgY2hpbGQgdmlldyBpdHNlbGYgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgICAgIC8vIHJlbW92ZSBhbmQvb3IgZGVzdHJveSBpdCBsYXRlclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmFkZCh2aWV3KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh2aWV3LCAnZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnZpZXdEZXN0cm95ZWQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkVmlldyh2aWV3LCBpbmRleCk7XG4gICAgICAgIE1hcmlvbmV0dGUudHJpZ2dlck1ldGhvZC5jYWxsKHZpZXcsICdzaG93Jyk7XG4gICAgICAgIHRoaXMudHJpZ2dlck1ldGhvZCgnYWRkOmNoaWxkJywgdmlldyk7XG4gICAgfTtcbiAgICAvLyByZW5kZXIgdGhlIGNoaWxkIHZpZXdcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLnJlbmRlckNoaWxkVmlldyA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaEh0bWwodmlldywgaW5kZXgpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS52aWV3RGVzdHJveWVkID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmUodmlldyk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmF0dGFjaEh0bWwgPSBmdW5jdGlvbiAodmlldywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHZpZXcuZWwpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uY2FsbCgncmVuZGVyJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5jYWxsKCdkZXN0cm95Jyk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgIH07XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENoaWxkSG9sZGVyVmlldztcbn0pKFZpZXcuVmlldyk7XG5leHBvcnRzLkNoaWxkSG9sZGVyVmlldyA9IENoaWxkSG9sZGVyVmlldztcbnZhciBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2VuZXJpY0NoaWxkSG9sZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3KCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIEdlbmVyaWNDaGlsZEhvbGRlclZpZXc7XG59KShDaGlsZEhvbGRlclZpZXcpO1xuZXhwb3J0cy5HZW5lcmljQ2hpbGRIb2xkZXJWaWV3ID0gR2VuZXJpY0NoaWxkSG9sZGVyVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoaWxkSG9sZGVyVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0NoaWxkSG9sZGVyVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExheW91dCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExheW91dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYXlvdXQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYXlvdXQucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTGF5b3V0LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBMYXlvdXQucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMYXlvdXQ7XG59KShNYXJpb25ldHRlLkxheW91dFZpZXcpO1xuZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MYXlvdXQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9MYXlvdXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBMaXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGlzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMaXN0KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGlzdC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMaXN0LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExpc3Q7XG59KShNYXJpb25ldHRlLkNvbXBvc2l0ZVZpZXcpO1xuZXhwb3J0cy5MaXN0ID0gTGlzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxpc3QuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9MaXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fZmllbGRzUmVnaW9uXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fYnV0dG9uc1JlZ2lvblxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiRm9ybVZpZXdfX2Rpc2FibGVcXFwiPjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L0Zvcm1WaWV3Lmhic1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgSXRlbVZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9JdGVtVmlldycpO1xudmFyIFNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi4vU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcnKTtcbnZhciBOb3RpY2VWaWV3TW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RpY2VWaWV3TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90aWNlVmlld01vZGVsKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgTm90aWNlVmlld01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcjogJycsXG4gICAgICAgICAgICBib2R5OiAnJyxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgICAgICAgY2FuRGlzbWlzczogdHJ1ZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiaGVhZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnaGVhZGVyJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdoZWFkZXInLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImJvZHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdib2R5Jyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdib2R5JywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJidXR0b25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnYnV0dG9ucycpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJjYW5EaXNtaXNzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnY2FuRGlzbWlzcycpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnY2FuRGlzbWlzcycsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwibG9hZGluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2xvYWRpbmcnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ2xvYWRpbmcnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBOb3RpY2VWaWV3TW9kZWw7XG59KShCYWNrYm9uZS5Nb2RlbCk7XG5leHBvcnRzLk5vdGljZVZpZXdNb2RlbCA9IE5vdGljZVZpZXdNb2RlbDtcbnZhciBOb3RpY2VWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90aWNlVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RpY2VWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5uYW1lID0gJ05vdGljZVZpZXcnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9ub3RpY2UuaGJzJyk7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdzZWN0aW9uJztcbiAgICAgICAgdGhpcy51aSA9IHtcbiAgICAgICAgICAgIGJ1dHRvbnM6ICcuTm90aWNlVmlld19fYnRucydcbiAgICAgICAgfTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLm1vZGVsIHx8IG5ldyBOb3RpY2VWaWV3TW9kZWwoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5idXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMgPSBvcHRpb25zLmJ1dHRvbnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNCb29sZWFuKG9wdGlvbnMubG9hZGluZykpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZGluZyA9IG9wdGlvbnMubG9hZGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5jYW5EaXNtaXNzKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5jYW5EaXNtaXNzID0gb3B0aW9ucy5jYW5EaXNtaXNzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZScsIHRoaXMucmVuZGVyKTtcbiAgICB9XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5fbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdWaWV3ID0gbmV3IFNwaW5uZXJWaWV3LlNwaW5uZXJWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuX2xvYWRpbmdWaWV3LmVsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdWaWV3LnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nVmlldy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aS5idXR0b25zLmVtcHR5KCk7XG4gICAgICAgIHRoaXMubW9kZWwuZ2V0KCdidXR0b25zJykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBidG4ucmVuZGVyKCk7XG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5UbyhidG4sICdjbGljaycsIF90aGlzLm9uQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgICAgICBfdGhpcy51aS5idXR0b25zLmFwcGVuZChidG4uZWwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLmNhbkRpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmdldCgnY2FuRGlzbWlzcycpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICBpZiAodGhpcy5fbG9hZGluZ1ZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nVmlldy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5zaG93KCk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICB0aGlzLm1vZGVsLnNldChwcm9wZXJ0aWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuZGVzdHJveUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICAgIGJ0bi5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbnMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLm9uQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcignYnV0dG9uOmNsaWNrZWQnKTtcbiAgICB9O1xuICAgIHJldHVybiBOb3RpY2VWaWV3O1xufSkoSXRlbVZpZXcuSXRlbVZpZXcpO1xuZXhwb3J0cy5Ob3RpY2VWaWV3ID0gTm90aWNlVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGljZVZpZXcuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvZGF2ZXRheWxzL3Byb2plY3RzL2RhdmV0YXlscy9tYXJpb25ldHRlX2xpYi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImhlYWRpbmcgaGVhZGluZy0tbm90aWNlIGFuaW1hdGVkIGJvdW5jZUluXFxcIj5cXG4gICAgPGgxPlwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5oZWFkZXIgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlYWRlciA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaGVhZGVyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDE+XFxuICAgIDxwPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYm9keSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYm9keSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiYm9keVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9wPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIk5vdGljZVZpZXdfX2J0bnNcXFwiPjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvbm90aWNlLmhic1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBFeGNlcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV4Y2VwdGlvbihlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIGNvbnNvbGUud2FybignRVhDRVBUSU9OJywgdGhpcyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24ucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24ucHJvdG90eXBlLCBcIm1lc3NhZ2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24ucHJvdG90eXBlLCBcInN0YWNrXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvci5zdGFjaztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRXhjZXB0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICc6ICcgKyB0aGlzLm1lc3NhZ2U7XG4gICAgfTtcbiAgICByZXR1cm4gRXhjZXB0aW9uO1xufSkoKTtcbmV4cG9ydHMuRXhjZXB0aW9uID0gRXhjZXB0aW9uO1xudmFyIERvY3VtZW50RXhpc3RzRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gRG9jdW1lbnRFeGlzdHNFeGNlcHRpb247XG59KShFeGNlcHRpb24pO1xuZXhwb3J0cy5Eb2N1bWVudEV4aXN0c0V4Y2VwdGlvbiA9IERvY3VtZW50RXhpc3RzRXhjZXB0aW9uO1xudmFyIE5vdEltcGxlbWVudGVkRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90SW1wbGVtZW50ZWRFeGNlcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gTm90SW1wbGVtZW50ZWRFeGNlcHRpb247XG59KShFeGNlcHRpb24pO1xuZXhwb3J0cy5Ob3RJbXBsZW1lbnRlZEV4Y2VwdGlvbiA9IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXhjZXB0aW9ucy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL0V4Y2VwdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ludGVyZmFjZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2UnKTtcbnZhciBBcGlDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBpQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcGlDb250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIEFwaUNvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFwaUNvbnRyb2xsZXIgPSBBcGlDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBpLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvQXBpLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0FwcCcpO1xudmFyIENvbXBvbmVudENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21wb25lbnRDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbXBvbmVudENvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHZpZXcsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCEob3B0aW9ucy5yZWdpb24gJiYgdGhpcy5fbWFpblZpZXcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgbm90IEBzaG93IHRoZSBtYWluIHZpZXcsIHVzZSBAc2V0TWFpblZpZXcgd2l0aCBjb21wb25lbnRzIGFuZCBAc2hvdyBmcm9tIHRoZSBhcHBzIGNvbnRyb2xsZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zaG93LmNhbGwodGhpcywgdmlldywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb21wb25lbnRDb250cm9sbGVyO1xufSkoQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcbmV4cG9ydHMuQ29tcG9uZW50Q29udHJvbGxlciA9IENvbXBvbmVudENvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb25lbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9Db21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZScpO1xudmFyIFJvdXRlckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSb3V0ZXJDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJvdXRlckNvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5fc2V0dXBBY3Rpb25zKG9wdGlvbnMuYWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmF1dGhvcml6ZUFuQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWN0aW9uUG9saWN5KGFjdGlvbkNvbmZpZykuaXNBdXRob3JpemVkKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hY3Rpb25VbmF1dGhvcml6ZWQgPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJcIiArIGFjdGlvbk5hbWUgKyBcIiB3YXMgdW5hdXRob3JpemVkXCIpO1xuICAgICAgICBlcnIubmFtZSA9ICdBY3Rpb25VbmF1dGhvcml6ZWQnO1xuICAgICAgICBlcnIuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XG4gICAgICAgIGVyci5hY3Rpb25Db25maWcgPSBhY3Rpb25Db25maWc7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmNhbGxBY3Rpb25VbmF1dGhvcml6ZWQgPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnLnVuYXV0aG9yaXplZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWcudW5hdXRob3JpemVkLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbignYWN0aW9uVW5hdXRob3JpemVkJykuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kZWZhdWx0UG9saWN5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFjdGlvblBvbGljeSgpO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX3NldHVwQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF8uZWFjaChhY3Rpb25zLCBmdW5jdGlvbiAoY29uZmlnLCBrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLmFkZEFjdGlvbihrZXksIGNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvbkNvbmZpZyA9IGZ1bmN0aW9uIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKGFjdGlvbkNvbmZpZyA9PSBudWxsKSB7XG4gICAgICAgICAgICBhY3Rpb25Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRBY3Rpb25Db25maWdGcm9tRm4oYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25Db25maWdGcm9tRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZuOiBmblxuICAgICAgICB9O1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvbkZ1bmN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFjdGlvbkNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25Db25maWc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZy5mbjtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLl9nZXRBY3Rpb25Qb2xpY3kgPSBmdW5jdGlvbiAoYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnKSB8fCAhYWN0aW9uQ29uZmlnLnBvbGljeSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb2xpY3kgPSB0aGlzLmdldE9wdGlvbignZGVmYXVsdFBvbGljeScpO1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihkZWZhdWx0UG9saWN5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0UG9saWN5LmNhbGwodGhpcywgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0UG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZy5wb2xpY3k7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgdmFyIGF0dGFjaGVyID0gdGhpcztcbiAgICAgICAgYWN0aW9uQ29uZmlnID0gdGhpcy5fZ2V0QWN0aW9uQ29uZmlnKGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIHZhciBfZm4gPSB0aGlzLl9nZXRBY3Rpb25GdW5jdGlvbihhY3Rpb25Db25maWcpO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKF9mbikpIHtcbiAgICAgICAgICAgIGF0dGFjaGVyW2FjdGlvbk5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldE9wdGlvbignYXV0aG9yaXplQW5BY3Rpb24nKS5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQWN0aW9uVW5hdXRob3JpemVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkNvbmZpZy5pbnRlcm5hbEFjdGlvbkVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEFjdGlvblVuYXV0aG9yaXplZChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxBY3Rpb25VbmF1dGhvcml6ZWQoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3h5aW5nIHRocm91Z2ggYW4gYXV0aG9yaXplIG1ldGhvZCByZXF1aXJlcyBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSb3V0ZXJDb250cm9sbGVyO1xufSkoQmFzZUNvbnRyb2xsZXIuQmFzZUNvbnRyb2xsZXIpO1xuZXhwb3J0cy5Sb3V0ZXJDb250cm9sbGVyID0gUm91dGVyQ29udHJvbGxlcjtcbnZhciBBY3Rpb25Qb2xpY3kgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY3Rpb25Qb2xpY3ksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uUG9saWN5KG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFjdGlvblBvbGljeS5wcm90b3R5cGUuaXNBdXRob3JpemVkID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQXV0aG9yaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0F1dGhvcml6ZWQuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb25Qb2xpY3k7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLkFjdGlvblBvbGljeSA9IEFjdGlvblBvbGljeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlckNvbnRyb2xsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIFN0YXRpY0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRpY0NvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnc2VjdGlvbic7XG4gICAgICAgIHRoaXMuY2xvbmVDb250ZXh0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgfVxuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5jb250ZXh0UHJvcGVydGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGVtcGxhdGVGbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0ZW1wbGF0ZSBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuY2xhc3NOYW1lID0gZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgaWYgKGhhc2ggPT09IHZvaWQgMCkgeyBoYXNoID0ge307IH1cbiAgICAgICAgdmFyIGNsYXNzZXM7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBtdXN0IHNwZWNpZnkgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2hbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGhhc2hbXCJjbGFzc1wiXS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gXy5yZXN1bHQodGhpcywgJ2F0dHJpYnV0ZXMnKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlc1tcImNsYXNzXCJdKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gXy51bmlvbihjbGFzc2VzLCBhdHRyaWJ1dGVzW1wiY2xhc3NcIl0uc3BsaXQoJyAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMubmFtZSk7XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvbmVDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF8uY2xvbmUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fY29tcG9uZW50TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0Ll9yZWdpb25zID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5taXhpbkhhc2ggPSBmdW5jdGlvbiAoY29udGV4dCwgaGFzaCkge1xuICAgICAgICBpZiAoaGFzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYXNoID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHRQcm9wcyA9IF8ucmVzdWx0KHRoaXMsICdjb250ZXh0UHJvcGVydGllcycpO1xuICAgICAgICBpZiAoXy5pc09iamVjdChjb250ZXh0UHJvcHMpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHlLZXlzID0gXy5rZXlzKGNvbnRleHRQcm9wcyk7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IF8ucGljayhoYXNoLCBwcm9wZXJ0eUtleXMpO1xuICAgICAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKGNvbnRleHQsIGNvbnRleHRQcm9wcywgcHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbXBvbmVudFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyB0ZW1wbGF0ZSBvbiB0aGlzIHN0YXRpYyBjb250cm9sbGVyJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlcyhoYXNoKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfLm9taXQoYXR0cmlidXRlcywgJ2NsYXNzJyk7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IF8ubWFwKGF0dHJpYnV0ZXMgfHwge30sIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKGhhc2hba2V5XSB8fCBfLmlzRmluaXRlKGhhc2hba2V5XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsga2V5ICsgXCI9XFxcIlwiICsgaGFzaFtrZXldICsgXCJcXFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcodmFsIHx8IF8uaXNGaW5pdGUodmFsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnICcgKyBhdHRyLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5uZXJCb2R5ID0gZnVuY3Rpb24gKGNvbnRleHQsIGZuKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLm1peGluSGFzaCh0aGlzLmNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShvcHRpb25zLmhhc2gpO1xuICAgICAgICB0aGlzLmNvbnRleHQuX19ib2R5X18gPSB0aGlzLmdldElubmVyQm9keSh0aGlzLmdldENoaWxkQ29udGV4dCgpLCBvcHRpb25zLmZuKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmF0dHJpYnV0ZXMgPSB0aGlzLmdldEF0dHJpYnV0ZXMob3B0aW9ucy5oYXNoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyT3V0ZXJIdG1sKHRoaXMuY29udGV4dCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnRleHQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdGhpcy5jb250ZXh0LmF0dHJpYnV0ZXNcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXJPdXRlckh0bWwgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IF8ucmVzdWx0KHRoaXMsICd0YWdOYW1lJyk7XG4gICAgICAgIHJldHVybiBbXCI8XCIgKyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBcIiBjbGFzcz1cXFwiXCIgKyBjbGFzc05hbWUgKyBcIlxcXCJcIiwgXCI+XFxuXCIsIHRoaXMucmVuZGVyQ29udGVudFRlbXBsYXRlKGNvbnRleHQpLCBcIjwvXCIgKyB0YWdOYW1lICsgXCI+XCJdLmpvaW4oJycpO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyQ29udGVudFRlbXBsYXRlID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHRtcGwgPSB0aGlzLmdldENvbXBvbmVudFRlbXBsYXRlKCk7XG4gICAgICAgIHJldHVybiB0bXBsKGNvbnRleHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YXRpY0NvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5TdGF0aWNDb250cm9sbGVyID0gU3RhdGljQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXRpYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL1N0YXRpYy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMnKTtcbmV4cG9ydHMuaTE4bmV4dCA9IHJlcXVpcmUoJy4vaTE4bmV4dCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jbGllbnQnKTtcbmZ1bmN0aW9uIGluaXRDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIWNvbmZpZy5jb25maWcuaGFuZGxlYmFycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcmVxdWlyZXMgaGFuZGxlYmFycyB0byBoYXZlIGJlZW4gcGFzc2VkIGluIHRvIGNvbmZpZ3VyZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnRDb250cm9sbGVyKG5hbWUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIENvbnRyb2xsZXIgPSBjb21wb25lbnRzW25hbWVdO1xuICAgICAgICBpZiAoQ29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250cm9sbGVyKHtcbiAgICAgICAgICAgICAgICBtb2RlbDogY29udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBcIiArIG5hbWUgKyBcIiBjb21wb25lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzID09PSB2b2lkIDApIHsgYXR0cmlidXRlcyA9IHt9OyB9XG4gICAgICAgIHZhciBhdHRyID0gXy5tYXAoYXR0cmlidXRlcyB8fCB7fSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyh2YWwgfHwgXy5pc0Zpbml0ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsga2V5ICsgXCI9XFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnICcgKyBhdHRyLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSwgaGFzaCkge1xuICAgICAgICB2YXIgY2xhc3NlcztcbiAgICAgICAgaWYgKGhhc2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFzaCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzc05hbWUgbXVzdCBzcGVjaWZ5IGEgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNoW1wiY2xhc3NcIl0pIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBoYXNoW1wiY2xhc3NcIl0uc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnVuc2hpZnQobmFtZSk7XG4gICAgICAgIHJldHVybiBoYXNoW1wiY2xhc3NcIl0gPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdjJywgZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBnZXRDb21wb25lbnRDb250cm9sbGVyKG5hbWUsIHRoaXMpO1xuICAgICAgICByZXR1cm4gY29udHJvbGxlci5yZW5kZXIob3B0aW9ucyk7XG4gICAgfSk7XG4gICAgY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdpbl9yZWdpb24nLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaW9uc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGZuOiBvcHRpb25zLmZuXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdyZWdpb24nLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29tcG9uZW50UGF0aCA9IFwiXCIgKyB0aGlzLl9jb21wb25lbnROYW1lICsgXCJfX1wiICsgbmFtZTtcbiAgICAgICAgdmFyIGluX3JlZ2lvbiA9IHRoaXMuX3JlZ2lvbnNbbmFtZV07XG4gICAgICAgIHZhciBjb250ZW50ID0gaW5fcmVnaW9uID8gaW5fcmVnaW9uLmZuKHRoaXMpIDogJyc7XG4gICAgICAgIHZhciBoYXNoID0gb3B0aW9ucy5oYXNoIHx8IHt9O1xuICAgICAgICBjbGFzc05hbWUoXCJcIiArIGNvbXBvbmVudFBhdGggKyBcIi1yZWdpb25cIiwgaGFzaCk7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gZ2V0QXR0cmlidXRlcyhoYXNoKTtcbiAgICAgICAgcmV0dXJuIFsnPGRpdicsIGF0dHJpYnV0ZXMsICc+JywgY29udGVudCwgXCI8L2Rpdj5cIl0uam9pbignJyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmluaXRDb21wb25lbnRzID0gaW5pdENvbXBvbmVudHM7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaGFuZGxlYmFycy9jb21wb25lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBpMThuZXh0ID0gcmVxdWlyZSgnaTE4bmV4dCcpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgaGFuZGxlYmFycyA9IGNvbmZpZy5jb25maWcuaGFuZGxlYmFycztcbiAgICAvKipcbiAgICAgKiBHZXQgdHJhbnNsYXRpb24gZm9yIGEgZ2l2ZW4ga2V5LCBwYXNzaW5nIHRoZSBvcHRpb25zIGhhc2ggdG8gaTE4bmV4dFxuICAgICAqIHRvIGFsbG93IGZvciB2YXJpYWJsZSByZXBsYWNlbWVudFxuICAgICAqIHt7ayBoZWFkZXIgbXlWYXI9XCJoZWxsb1wifX1cbiAgICAgKi9cbiAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKFwidFwiLCBmdW5jdGlvbiAoaTE4bl9rZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICB3cmFwV2l0aEtleTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBfLmV4dGVuZChvcHRzLCBvcHRpb25zLmhhc2gpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gaTE4bmV4dC50KGkxOG5fa2V5LCBvcHRzKTtcbiAgICAgICAgdmFyIGF0dHJzID0gW1wiZGF0YS10PVxcXCJcIiArIGkxOG5fa2V5ICsgXCJcXFwiXCJdO1xuICAgICAgICBfLmVhY2gob3B0cywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyh2YWwgfHwgXy5pc0Zpbml0ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRycy5wdXNoKFwiZGF0YS1cIiArIGtleSArIFwiPVxcXCJcIiArIHZhbCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRzWyd3cmFwV2l0aEtleSddKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBcIiArIChhdHRycy5qb2luKCcgJykpICsgXCI+XCIgKyAobmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpKSArIFwiPC9zcGFuPlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBoYW5kbGViYXJzLlNhZmVTdHJpbmcocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0aW9uIGluIGEgYmxvY2sgY29udGV4dFxuICAgICAqL1xuICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJ0clwiLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IGkxOG5leHQuZnVuY3Rpb25zLmV4dGVuZChvcHRpb25zLmhhc2gsIGNvbnRleHQpO1xuICAgICAgICBpZiAob3B0aW9ucy5mbikge1xuICAgICAgICAgICAgb3B0cy5kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmZuKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBpMThuZXh0LnQob3B0cy5rZXksIG9wdHMpO1xuICAgICAgICByZXR1cm4gbmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWkxOG5leHQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2kxOG5leHQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUyX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImkxOG5leHRcIlxuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLkFwcCA9IHJlcXVpcmUoJy4vQXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBBUFBfUk9VVEVSX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFQUF9ST1VURVJfRVZFTlRTLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFQUF9ST1VURVJfRVZFTlRTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQVBQX1JPVVRFUl9FVkVOVFMuZmlyc3RSb3V0ZSA9IG5ldyBBUFBfUk9VVEVSX0VWRU5UUygnZmlyc3RSb3V0ZScpO1xuICAgIHJldHVybiBBUFBfUk9VVEVSX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkFQUF9ST1VURVJfRVZFTlRTID0gQVBQX1JPVVRFUl9FVkVOVFM7XG52YXIgQXBwUm91dGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwUm91dGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcFJvdXRlcihvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZygnQXBwUm91dGVyICcgKyBvcHRpb25zLm5hbWUgKyAnIGNyZWF0ZWQnLCBvcHRpb25zLmFwcFJvdXRlcyk7XG4gICAgfVxuICAgIEFwcFJvdXRlci5wcm90b3R5cGUub25Sb3V0ZSA9IGZ1bmN0aW9uIChyb3V0ZU5hbWUsIHJvdXRlUGF0aCwgcm91dGVBcmdzKSB7XG4gICAgICAgIGlmIChBcHBSb3V0ZXIuX2ZpcnN0Um91dGVUcmlnZ2VyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcihBUFBfUk9VVEVSX0VWRU5UUy5maXJzdFJvdXRlLnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBcHBSb3V0ZXIuX2ZpcnN0Um91dGVUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXBwUm91dGVyO1xufSkoTWFyaW9uZXR0ZS5BcHBSb3V0ZXIpO1xuZXhwb3J0cy5BcHBSb3V0ZXIgPSBBcHBSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb3V0ZXJzL0FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLm1kb3duID0gcmVxdWlyZSgnLi9tZG93bicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGlja2l0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBTaG93ZG93biA9IHJlcXVpcmUoJ3Nob3dkb3duJyk7XG52YXIgbWRvd24gPSBuZXcgU2hvd2Rvd24uQ29udmVydGVyKCk7XG5leHBvcnRzLnNlbGVjdG9yID0gJ1tkYXRhLW1kb3duXSc7XG5leHBvcnRzLnVwZGF0ZU1ldGhvZCA9ICdodG1sJztcbmZ1bmN0aW9uIG9uR2V0KHZhbCkge1xuICAgIHJldHVybiBtZG93bi5tYWtlSHRtbCh2YWwpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWRvd24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGlja2l0L21kb3duLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81N19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzaG93ZG93blwiXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuZXhwb3J0cy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzJyk7XG5leHBvcnRzLkRpc3BhdGNoZXIgPSByZXF1aXJlKCcuL0Rpc3BhdGNoZXInKTtcbmV4cG9ydHMuU3RvcmUgPSByZXF1aXJlKCcuL1N0b3JlJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0pKCk7XG5leHBvcnRzLkFjdGlvbiA9IEFjdGlvbjtcbnZhciBBY3Rpb25DcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY3Rpb25DcmVhdG9yKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbkNyZWF0b3I7XG59KSgpO1xuZXhwb3J0cy5BY3Rpb25DcmVhdG9yID0gQWN0aW9uQ3JlYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjdGlvbnMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L2FjdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvaW50ZXJmYWNlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eCcpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xudmFyIGxvZyA9IGNvbnNvbGUubG9nLmJpbmQgPyBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpIDogY29uc29sZS5sb2c7XG52YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BhdGNoZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXlsb2FkUXVldWUgPSBbXTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnJlZ2lzdGVyU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMucHVzaChzdG9yZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUpKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoUGF5bG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB0aGlzLnBheWxvYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICAgICAgICBsb2coJ0Rpc3BhdGNoaW5nOicsIHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5U3RvcmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQYXlsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLm5vdGlmeVN0b3JlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUubm90aWZ5SWZTdGF0ZUNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVQYXlsb2FkID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5wYXlsb2FkUXVldWUucHVzaChwYXlsb2FkKTtcbiAgICAgICAgbG9nKCdEaXNwYXRjaGVyOiBoYW5kbGUnLCBwYXlsb2FkKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc3BhdGNoaW5nKVxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFBheWxvYWQoKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVNlcnZlckFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGNvbnN0YW50cy5BQ1RJT05fU09VUkNFUy5TZXJ2ZXJBY3Rpb24sXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGNhbGxlcjogYXJndW1lbnRzLmNhbGxlZS5jYWxsZXJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlRGV2aWNlQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogY29uc3RhbnRzLkFDVElPTl9TT1VSQ0VTLkRldmljZUFjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgY2FsbGVyOiBhcmd1bWVudHMuY2FsbGVlLmNhbGxlclxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBheWxvYWQocGF5bG9hZCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVWaWV3QWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogY29uc3RhbnRzLkFDVElPTl9TT1VSQ0VTLlZpZXdBY3Rpb24sXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGNhbGxlcjogYXJndW1lbnRzLmNhbGxlZS5jYWxsZXJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgcmV0dXJuIERpc3BhdGNoZXI7XG59KShmbHV4LkRpc3BhdGNoZXIpO1xuZXhwb3J0cy5EaXNwYXRjaGVyID0gRGlzcGF0Y2hlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpc3BhdGNoZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L0Rpc3BhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzYyX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZsdXhcIlxuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBFdmVudGVkQ2xhc3MgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvRXZlbnRlZENsYXNzJyk7XG52YXIgU3RvcmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdG9yZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdG9yZShkaXNwYXRjaGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoVG9rZW4gPSBkaXNwYXRjaGVyLnJlZ2lzdGVyU3RvcmUodGhpcyk7XG4gICAgfVxuICAgIFN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7IH07XG4gICAgU3RvcmUucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLm5vdGlmeUlmU3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZUhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVIYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoY29uc3RhbnRzLkVWRU5UX1RZUEVTLkNoYW5nZS52YWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUuYWRkQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihjb25zdGFudHMuRVZFTlRfVFlQRVMuQ2hhbmdlLnZhbCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLnJlbW92ZUNoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2ZmKGNvbnN0YW50cy5FVkVOVF9UWVBFUy5DaGFuZ2UudmFsLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmU7XG59KShFdmVudGVkQ2xhc3MuRXZlbnRlZENsYXNzKTtcbmV4cG9ydHMuU3RvcmUgPSBTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0b3JlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9TdG9yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgRXZlbnRlZENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudGVkQ2xhc3MoKSB7XG4gICAgfVxuICAgIHJldHVybiBFdmVudGVkQ2xhc3M7XG59KSgpO1xuZXhwb3J0cy5FdmVudGVkQ2xhc3MgPSBFdmVudGVkQ2xhc3M7XG5fLmV4dGVuZChFdmVudGVkQ2xhc3MucHJvdG90eXBlLCBCYWNrYm9uZS5FdmVudHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnRlZENsYXNzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL0V2ZW50ZWRDbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBFeGNlcHRpb25zID0gcmVxdWlyZSgnLi4vRXhjZXB0aW9ucycpO1xudmFyIERlYm91bmNlZERvY0NvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VkRG9jQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICAgICAgdGhpcy5kb2NUaW1lVG9MaXZlID0gMTAwMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2NzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5jbGVhckV4cGlyZWREb2NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5jbGVhckFsbERvY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9jcy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHV0cyBhIGRvY3VtZW50IGluIHRvIHRoZSBhcnJheSBpZiBpdCBpcyBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIGlmICghdGhpcy5ieUlkKGRvYy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICAgIGRvYzogZG9jLFxuICAgICAgICAgICAgICAgIGV4cGlyZXM6IHRoaXMuZG9jVGltZVRvTGl2ZSA/IERhdGUubm93KCkgKyB0aGlzLmRvY1RpbWVUb0xpdmUgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb25zLkRvY3VtZW50RXhpc3RzRXhjZXB0aW9uKG5ldyBFcnJvcignRG9jdW1lbnQgJyArIGRvYy5pZCArICcgYWxyZWFkeSBleGlzdHMnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW50cnkgd2l0aCBkZXRhaWxzIGFib3V0IHRoZSBkb2Mgd2l0aCBhbiBpZFxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuZW50cnlCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gXy5maW5kV2hlcmUodGhpcy5kb2NzLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgaWYgKGl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbGwgdGhlIGRvY3NcbiAgICAgKiBAcmV0dXJucyB7SURlYm91bmNlZERvY0l0ZW08VD5bXX1cbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZG9jO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2F2ZWQgZG9jdW1lbnQgYnkgaXRzIGlkXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5ieUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gXy5maW5kV2hlcmUodGhpcy5kb2NzLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmRvYztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgZG9jIGluIHRvIHRoZSBzdG9yZSwgaWYgaXQgZXhpc3RzXG4gICAgICogb3RoZXJ3aXNlIGFkZHMgaXRcbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZURvYyA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFkb2MuaWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21lcmdlRG9jIGRvY3VtZW50IG11c3QgaGF2ZSBhIHZhbGlkIGlkJyk7XG4gICAgICAgIHZhciBrZXlzID0gXy5rZXlzKGRvYyk7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuZW50cnlCeUlkKGRvYy5pZCk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nRG9jID0gZW50cnkuZG9jO1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICBfLmVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5tZXJnZURvY0tleShrZXksIGV4aXN0aW5nRG9jLCBkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lcmdlZDogY2hhbmdlZFByb3BlcnRpZXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllczogY2hhbmdlZFByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgZG9jOiBleGlzdGluZ0RvY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHV0KGRvYyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lcmdlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IGtleXMsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VEb2NLZXkgPSBmdW5jdGlvbiAoa2V5LCBleGlzdGluZ0RvYywgZG9jKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRvY1trZXldO1xuICAgICAgICBpZiAoIV8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0RvY1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nRG9jW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZU11bHRpcGxlID0gZnVuY3Rpb24gKGRvY3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1lcmdlcyA9IGRvY3MubWFwKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tZXJnZURvYyhkb2MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlcztcbiAgICB9O1xuICAgIHJldHVybiBEZWJvdW5jZWREb2NDb250YWluZXI7XG59KSgpO1xuZXhwb3J0cy5EZWJvdW5jZWREb2NDb250YWluZXIgPSBEZWJvdW5jZWREb2NDb250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWJvdW5jZWREb2NDb250YWluZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvRGVib3VuY2VkRG9jQ29udGFpbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBOYXZpZ2F0aW9uQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvbkNvbnRyb2xsZXInKTtcbnZhciBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyLk5hdmlnYXRpb25Db250cm9sbGVyKCk7XG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZpZ2F0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBOYXZpZ2F0aW9uQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5hdmlnYXRpb25Db250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5hdmlnYXRpb25Db250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5SXNTdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIE5hdmlnYXRpb25Db250cm9sbGVyLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChyb3V0ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHJvdXRlLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCduYXZpZ2F0ZWQnLCByb3V0ZSk7XG4gICAgfTtcbiAgICBOYXZpZ2F0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q3VycmVudFJvdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZnJhZyA9IEJhY2tib25lLmhpc3RvcnkuZ2V0RnJhZ21lbnQoKTtcbiAgICAgICAgaWYgKF8uaXNFbXB0eShmcmFnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZztcbiAgICAgICAgfVxuICAgIH07XG4gICAgTmF2aWdhdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLnN0YXJ0SGlzdG9yeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChCYWNrYm9uZS5oaXN0b3J5KSB7XG4gICAgICAgICAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5SXNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5hdmlnYXRpb25Db250cm9sbGVyO1xufSkoTWFyaW9uZXR0ZS5Db250cm9sbGVyKTtcbmV4cG9ydHMuTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBOYXZpZ2F0aW9uQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRpb25Db250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL05hdmlnYXRpb25Db250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uL3R5cGluZ3MvdHNkLmQudHMnIC8+XG4ndXNlIHN0cmljdCc7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbi8qKlxuICogRXh0cmFjdCBhIHF1ZXJ5IHN0cmluZyB2YWx1ZVxuICogQHBhcmFtIHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIGtleVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGdldFF1ZXJ5KHNlYXJjaFN0cmluZywga2V5KSB7XG4gICAgdmFyIHZhbHVlcyA9IHNlYXJjaFN0cmluZy5zcGxpdChcIiZcIik7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZnQgPSB2YWx1ZXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICBpZiAoZnRbMF0gPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ0WzFdO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLmdldFF1ZXJ5ID0gZ2V0UXVlcnk7XG4vKipcbiAqIEV4dHJhY3QgdGhlIHNlYXJjaFN0cmluZyBxdWVyeSBzdHJpbmcgdmFsdWVzIGZyb20gYSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNlYXJjaFN0cmluZyh1cmwpIHtcbiAgICBpZiAoL1xcIy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuICAgIH1cbiAgICBpZiAoL1xcPy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLnNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZztcbi8qKlxuICogR2V0IHRoZSBjb3JyZWN0IHNlcGFyYXRvciBmb3IgYSB1cmwgYW5kIGEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZXBhcmF0b3IodXJsKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgICBpZiAoL1xcPy8udGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICc/JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuLyoqXG4gKiBKb2lucyB1cmwgcXVlcnkgc3RyaW5nIHZhbHVlc1xuICogQHBhcmFtIHVybHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW4oKSB7XG4gICAgdmFyIHVybHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB1cmxzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX21lcmdlID0gZnVuY3Rpb24gKG1lbW8sIHZhbCkge1xuICAgICAgICByZXR1cm4gbWVtbyArIChzZXBhcmF0b3IobWVtbykpICsgdmFsO1xuICAgIH07XG4gICAgcmV0dXJuIF8ucmVkdWNlKHVybHMsIF9tZXJnZSk7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuLyoqXG4gKiBKb2luIHVybCBwYXRoc1xuICogQHBhcmFtIHVybHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5QYXRocygpIHtcbiAgICB2YXIgdXJscyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHVybHNbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBfbWVyZ2UgPSBmdW5jdGlvbiAobWVtbywgdmFsKSB7XG4gICAgICAgIHJldHVybiBtZW1vICsgJy8nICsgdmFsO1xuICAgIH07XG4gICAgcmV0dXJuIF8ucmVkdWNlKHVybHMsIF9tZXJnZSk7XG59XG5leHBvcnRzLmpvaW5QYXRocyA9IGpvaW5QYXRocztcbmZ1bmN0aW9uIHBhcmFtKG9iaiwgc2VwYXJhdG9yLCBqb2luZXIpIHtcbiAgICBpZiAoc2VwYXJhdG9yID09PSB2b2lkIDApIHsgc2VwYXJhdG9yID0gJyYnOyB9XG4gICAgaWYgKGpvaW5lciA9PT0gdm9pZCAwKSB7IGpvaW5lciA9ICc9JzsgfVxuICAgIGZ1bmN0aW9uIF9wYXJhbShtZW1vLCB2YWwsIGtleSkge1xuICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmUgPSBtZW1vID8gbWVtbyArIHNlcGFyYXRvciA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIHByZSArIGtleSArIGpvaW5lciArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXy5yZWR1Y2Uob2JqLCBfcGFyYW0sICcnKTtcbn1cbmV4cG9ydHMucGFyYW0gPSBwYXJhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy91cmwuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gcHJldmVudEdsb2JhbGx5KCkge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgICBzdHlsZS53ZWJraXRUb3VjaENhbGxvdXQgPSBcIm5vbmVcIjtcbiAgICBzdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJub25lXCI7XG59XG5leHBvcnRzLnByZXZlbnRHbG9iYWxseSA9IHByZXZlbnRHbG9iYWxseTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=