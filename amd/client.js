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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTNhMjEyZDc3NGRkODAyYjIxMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2JhY2tib25lL3N5bmMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFja2JvbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL0xheW91dFZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFja2JvbmUubWFyaW9uZXR0ZVwiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvbWFyaW9uZXR0ZS9SZWdpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9iZWhhdmlvcnNMb29rdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3JzL01vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3JzL1Njcm9sbGFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JdGVtVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC5oYnMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFuZGxlYmFyc1wiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdDb21wb25lbnQvTG9hZGluZ0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9WaWV3LmpzIiwid2VicGFjazovLy8uL34vc3Bpbi5qcy9zcGluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvd2hlbkZldGNoZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWNrYm9uZS1mb3Jtc1wiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WaWV3L3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtRmllbGQuaGJzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ2hpbGRIb2xkZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybVZpZXcuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGljZVZpZXcvTm90aWNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpY2VWaWV3L25vdGljZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Sb3V0ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZWJhcnMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlYmFycy9pMThuZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0aWNraXQvbWRvd24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvd2Rvd25cIiIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmx1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9mbHV4L2ludGVyZmFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvRGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmbHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZsdXgvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9FdmVudGVkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLGdFQUFnRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsbUM7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7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QSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLDBCQUEwQixFQUFFO0FBQ3RELGdDQUErQiwwQkFBMEIsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLDBCQUEwQixFQUFFO0FBQ3RELGdDQUErQiwwQkFBMEIsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGdDQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNkM7Ozs7OztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxtQzs7Ozs7O0FDN0lBO0FBQ0E7QUFDQSxrQzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpRDs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQsNkJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0M7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRCIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUzYTIxMmQ3NzRkZDgwMmIyMTFhXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuZXhwb3J0cy5jb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9jbGllbnQnKTtcbmZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29uZmlnLmNvbmZpZy5jb25maWd1cmUob3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbmZpZ3VyZSA9IGNvbmZpZ3VyZTtcbjtcbnZhciBiZWhhdmlvcnNMb29rdXAgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9iZWhhdmlvcnNMb29rdXAnKTtcbmV4cG9ydHMuYmVoYXZpb3JzID0gYmVoYXZpb3JzTG9va3VwLmJlaGF2aW9ycztcbmV4cG9ydHMuY29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmRleCcpO1xuZXhwb3J0cy5jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuZXhwb3J0cy5FeGNlcHRpb25zID0gcmVxdWlyZSgnLi9FeGNlcHRpb25zJyk7XG5leHBvcnRzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMnKTtcbnZhciBfQXBpID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9BcGknKTtcbnZhciBfQXBwID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9BcHAnKTtcbnZhciBfQmFzZSA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQmFzZScpO1xudmFyIF9Db21wb25lbnQgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0NvbXBvbmVudCcpO1xudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1JvdXRlckNvbnRyb2xsZXInKTtcbnZhciBfU3RhdGljID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9TdGF0aWMnKTtcbnZhciBjb250cm9sbGVycztcbihmdW5jdGlvbiAoY29udHJvbGxlcnMpIHtcbiAgICBjb250cm9sbGVycy5BcGkgPSBfQXBpO1xuICAgIGNvbnRyb2xsZXJzLkFwcCA9IF9BcHA7XG4gICAgY29udHJvbGxlcnMuQmFzZSA9IF9CYXNlO1xuICAgIGNvbnRyb2xsZXJzLkNvbXBvbmVudCA9IF9Db21wb25lbnQ7XG4gICAgY29udHJvbGxlcnMuUm91dGVyID0gX1JvdXRlcjtcbiAgICBjb250cm9sbGVycy5TdGF0aWMgPSBfU3RhdGljO1xufSkoY29udHJvbGxlcnMgPSBleHBvcnRzLmNvbnRyb2xsZXJzIHx8IChleHBvcnRzLmNvbnRyb2xsZXJzID0ge30pKTtcbmV4cG9ydHMuaGFuZGxlYmFycyA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9pbmRleCcpO1xuZXhwb3J0cy5yb3V0ZXJzID0gcmVxdWlyZSgnLi9yb3V0ZXJzL2luZGV4Jyk7XG5leHBvcnRzLnN0aWNraXQgPSByZXF1aXJlKCcuL3N0aWNraXQvaW5kZXgnKTtcbmV4cG9ydHMuZmx1eCA9IHJlcXVpcmUoJy4vZmx1eC9pbmRleCcpO1xuZXhwb3J0cy5EZWJvdW5jZWREb2NDb250YWluZXIgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9EZWJvdW5jZWREb2NDb250YWluZXInKTtcbnZhciBfd2hlbkZldGNoZWQgPSByZXF1aXJlKCcuL3V0aWxpdGllcy93aGVuRmV0Y2hlZCcpO1xuZXhwb3J0cy53aGVuRmV0Y2hlZCA9IF93aGVuRmV0Y2hlZC53aGVuRmV0Y2hlZDtcbmV4cG9ydHMubmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hdmlnYXRpb24nKTtcbmV4cG9ydHMucmVnaXN0cnkgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yZWdpc3RyeScpO1xuZXhwb3J0cy51cmxVdGlscyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3VybCcpO1xuZXhwb3J0cy5wcmV2ZW50U2VsZWN0aW9uQ2FsbG91dCA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0Jyk7XG5leHBvcnRzLnZpZXdzID0gcmVxdWlyZSgnLi92aWV3cy9pbmRleCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIHN5bmMgPSByZXF1aXJlKCcuL2JhY2tib25lL3N5bmMnKTtcbnJlcXVpcmUoJy4vbWFyaW9uZXR0ZS9MYXlvdXRWaWV3Jyk7XG5yZXF1aXJlKCcuL21hcmlvbmV0dGUvUmVnaW9uJyk7XG5yZXF1aXJlKCcuL21hcmlvbmV0dGUvVmlldycpO1xudmFyIE1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbigpIHtcbiAgICB9XG4gICAgTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb24ucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYXBwID0gb3B0aW9ucy5hcHA7XG4gICAgICAgIHRoaXMuaGFuZGxlYmFycyA9IG9wdGlvbnMuaGFuZGxlYmFycztcbiAgICAgICAgdGhpcy5kZWZhdWx0UmVnaW9uID0gb3B0aW9ucy5kZWZhdWx0UmVnaW9uO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNQYXRoID0gb3B0aW9ucy5jb21wb25lbnRzUGF0aDtcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XG4gICAgICAgICAgICBzeW5jLmNvbmZpZ3VyZUJhY2tib25lU3luYyh0aGlzLmFwcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbjtcbn0pKCk7XG5leHBvcnRzLk1hcmlvbmV0dGVMaWJDb25maWd1cmF0aW9uID0gTWFyaW9uZXR0ZUxpYkNvbmZpZ3VyYXRpb247XG5leHBvcnRzLmNvbmZpZyA9IG5ldyBNYXJpb25ldHRlTGliQ29uZmlndXJhdGlvbigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5mdW5jdGlvbiBjb25maWd1cmVCYWNrYm9uZVN5bmMoYXBwKSB7XG4gICAgdmFyIF9zeW5jID0gQmFja2JvbmUuc3luYztcbiAgICBCYWNrYm9uZS5zeW5jID0gZnVuY3Rpb24gKG1ldGhvZCwgZW50aXR5LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogXy5iaW5kKGJlZm9yZVNlbmQsIGVudGl0eSksXG4gICAgICAgICAgICBjb21wbGV0ZTogXy5iaW5kKGNvbXBsZXRlLCBlbnRpdHkpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWVudGl0eS5fZmV0Y2ggJiYgbWV0aG9kID09PSBcInJlYWRcIikge1xuICAgICAgICAgICAgYWRkRmV0Y2hQcm9taXNlKGVudGl0eSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zeW5jKG1ldGhvZCwgZW50aXR5LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGJlZm9yZVNlbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoXCJzeW5jOnN0YXJ0XCIsIHRoaXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihcInN5bmM6c3RvcFwiLCB0aGlzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkRmV0Y2hQcm9taXNlKGVudGl0eSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZCA9ICQuRGVmZXJyZWQoKTtcbiAgICAgICAgZW50aXR5Ll9mZXRjaCA9IGQucHJvbWlzZSgpO1xuICAgICAgICB2YXIgX3N1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3M7XG4gICAgICAgIHZhciBfZXJyb3IgPSBvcHRpb25zLmVycm9yO1xuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzcCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgIF9zdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBkLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIgPyB4aHIuc3RhdHVzIDogMCxcbiAgICAgICAgICAgICAgICBmYWlsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy5lcnJvciA9IGZ1bmN0aW9uIChyZXNwLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGVudGl0eS50cmlnZ2VyKCdlcnJvcjpvZmZsaW5lJyk7XG4gICAgICAgICAgICAgICAgYXBwLnZlbnQudHJpZ2dlcignZmV0Y2g6b2ZmbGluZScsIGVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfLmNvbnRhaW5zKFs0MDEsIDQwM10sIHJlc3Auc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgIGVudGl0eS50cmlnZ2VyKCd1bmF1dGhvcmlzZWQnKTtcbiAgICAgICAgICAgICAgICBhcHAudmVudC50cmlnZ2VyKCdmZXRjaDp1bmF1dGhvcmlzZWQnLCBlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5mbG9vcihyZXNwLnN0YXR1cyAvIDEwMCkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkudHJpZ2dlcignZXJyb3I6c2VydmVyJyk7XG4gICAgICAgICAgICAgICAgYXBwLnZlbnQudHJpZ2dlcignZmV0Y2g6ZXJyb3I6c2VydmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZXJyb3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGQucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3AsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3Auc3RhdHVzLFxuICAgICAgICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5jb25maWd1cmVCYWNrYm9uZVN5bmMgPSBjb25maWd1cmVCYWNrYm9uZVN5bmM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeW5jLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL2JhY2tib25lL3N5bmMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhY2tib25lXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBMYXlvdXRWaWV3ID0gTWFyaW9uZXR0ZS5MYXlvdXRWaWV3O1xuLypcbiAgX2J1aWxkUmVnaW9uc1xuICAtLS0tLS0tLS0tLS0tXG4gIFdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlcmUgaXMgYW4gZWxlbWVudCBvbiB0aGVcbiAgTGF5b3V0VmlldyBzbyB0aGF0IGdldEVsIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRFbFxuICB3b3JrcyBwcm9wZXJseVxuICovXG52YXIgX2J1aWxkUmVnaW9ucyA9IExheW91dFZpZXcucHJvdG90eXBlLl9idWlsZFJlZ2lvbnM7XG5MYXlvdXRWaWV3LnByb3RvdHlwZS5fYnVpbGRSZWdpb25zID0gZnVuY3Rpb24gKHJlZ2lvbnMpIHtcbiAgICB0aGlzLl9lbnN1cmVFbGVtZW50KCk7XG4gICAgcmV0dXJuIF9idWlsZFJlZ2lvbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL0xheW91dFZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWNrYm9uZS5tYXJpb25ldHRlXCJcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgQmFja2JvbmUsIE1hcmlvbmV0dGUsIF8sIF9jbG9zZSwgX2dldEVsLCBfZ2V0TmFtZSwgX3Nob3c7XG5cbl8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcblxuTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcblxuXG4vKlxuICBBbmltYXRlIE91dFxuICAtLS0tLS0tLS0tLVxuICBBbmltYXRlIG91dCB0aGUgb2xkIHZpZXcgYmVmb3JlIGJlaW5nIHJlYWR5IHRvIHNob3dcbiAgdGhlIG5leHRcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNiKSB7XG4gIGlmICh0aGlzLmN1cnJlbnRWaWV3ICYmIHRoaXMuY3VycmVudFZpZXcuYW5pbWF0ZU91dCkge1xuICAgIGNvbnNvbGUubG9nKCdhbmltYXRpbmcgb3V0JywgdGhpcy5jdXJyZW50VmlldywgdGhpcy5lbCk7XG4gICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdiZWZvcmU6YW5pbWF0aW5nOm91dCcpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQoY2IpO1xuICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICByZXR1cm4gY2IuY2FsbCh0aGlzKTtcbiAgfVxufTtcblxuXG4vKlxuICBBbmltYXRlZCBFbXB0eVxuICAtLS0tLVxuICBVc2UgYW5pbWF0aW9uIHdoZW4gZW1wdHlpbmcgdGhlIHJlZ2lvbiBpZiBpdFxuICBpcyBhdmFpbGFibGVcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZUVtcHR5ID0gZnVuY3Rpb24ob3B0aW9ucywgY2IpIHtcbiAgcmV0dXJuIHRoaXMuYW5pbWF0ZU91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5lbXB0eSgpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwoX3RoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKHRoaXMpKTtcbn07XG5cblxuLypcbiAgZ2V0RWxcbiAgLS0tLS1cbiAgVXBkYXRlIHRoZSBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gY2hlY2sgZm9yXG4gIHBhcmVudEVsIG9uIHRoZSBvcHRpb25zIGFuZCBmaW5kIHRoZSBzZWxlY3RvclxuICBiYXNlZCBvbiBpdCdzIGNoaWxkcmVuXG4gKi9cblxuX2dldEVsID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmdldEVsO1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuZ2V0RWwgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgJGVsLCBwYXJlbnRFbDtcbiAgaWYgKF8uaXNTdHJpbmcoZWwpKSB7XG4gICAgcGFyZW50RWwgPSBfLnJlc3VsdCh0aGlzLm9wdGlvbnMsICdwYXJlbnRFbCcpO1xuICAgIGlmIChwYXJlbnRFbCkge1xuICAgICAgJGVsID0gQmFja2JvbmUuJChwYXJlbnRFbCkuZmluZChlbCk7XG4gICAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2dldEVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBfZ2V0RWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufTtcblxuXG4vKlxuICBTaG93IG5ldyBWaWV3XG4gIC0tLS0tLS0tLS0tLS1cbiAgSGFuZGxlIHRyYW5zaXRpb25zIGJldHdlZW4gb2xkIHZpZXcgYW5kIG5ldyBvbmVcbiAgd2l0aCB0aGUgb3B0aW9uIHRvIGRpc2FibGUgYW5pbWF0aW9uc1xuICovXG5cbl9zaG93ID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLnNob3c7XG5cbl9nZXROYW1lID0gZnVuY3Rpb24odmlldykge1xuICBpZiAodmlldykge1xuICAgIGlmICh2aWV3Lm5hbWUpIHtcbiAgICAgIHJldHVybiB2aWV3Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2aWV3LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbm8gdmlldyc7XG4gIH1cbn07XG5cbk1hcmlvbmV0dGUuUmVnaW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24odmlldywgaW1tZWRpYXRlKSB7XG4gIGlmIChpbW1lZGlhdGUgPT0gbnVsbCkge1xuICAgIGltbWVkaWF0ZSA9IGZhbHNlO1xuICB9XG4gIHRoaXMuX25leHRWaWV3ID0gdmlldztcbiAgaWYgKGltbWVkaWF0ZSkge1xuICAgIGlmICh0aGlzLiRlbCAmJiB0aGlzLiRlbFswXSkge1xuICAgICAgdGhpcy4kZWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgIHRoaXMuJGVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9uZXh0VmlldyA9IG51bGw7XG4gICAgX3Nob3cuY2FsbCh0aGlzLCB2aWV3KTtcbiAgICByZXR1cm4gY29uc29sZS5sb2coJ3Nob3dpbmcnLCBfZ2V0TmFtZSh2aWV3KSwgdmlldywgdGhpcy5lbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0ZU91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLiRlbCAmJiBfdGhpcy4kZWxbMF0pIHtcbiAgICAgICAgICBfdGhpcy4kZWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICBfdGhpcy4kZWxbMF0uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX25leHRWaWV3ID0gbnVsbDtcbiAgICAgICAgX3Nob3cuY2FsbChfdGhpcywgdmlldyk7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnc2hvd2luZycsIF9nZXROYW1lKHZpZXcpLCB2aWV3LCBfdGhpcy5lbCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxufTtcblxuXG4vKlxuICBUaGlzIHdpbGwgc2hvdyB0aGUgdmlldyBpbW1lZGlhdGVseSBpZiAjZ2V0RWwgcmV0dXJucyBhbiBlbGVtZW50XG4gIG90aGVyd2lzZSBpdCB3aWxsIHdhaXQgZm9yIHRoZSBzaG93IGV2ZW50IHRvIGZpcmUgb24gd2FpdEZvclZpZXdcbiAgYmVmb3JlIHNob3dpbmcgdGhlIHZpZXdcbiAqL1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuc2hvd1dpdGhWaWV3ID0gZnVuY3Rpb24od2FpdEZvclZpZXcsIHZpZXdUb1Nob3csIG9wdGlvbnMpIHtcbiAgdmFyICRlbDtcbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAgIHdhaXRGb3JFdmVudDogJ3Nob3cnXG4gIH0pO1xuICBpZiAoXy5pc1N0cmluZyh0aGlzLmVsKSkge1xuICAgICRlbCA9IHRoaXMuZ2V0RWwodGhpcy5lbCk7XG4gIH0gZWxzZSB7XG4gICAgJGVsID0gdGhpcy4kZWw7XG4gIH1cbiAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICB0aGlzLnNob3codmlld1RvU2hvdywgb3B0aW9ucy5pbW1lZGlhdGUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGlzdGVuVG9PbmNlKHdhaXRGb3JWaWV3LCBvcHRpb25zLndhaXRGb3JFdmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93KHZpZXdUb1Nob3csIG9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG59O1xuXG5cbi8qXG4gIENsb3NlXG4gIC0tLS0tXG4gIFVwZGF0ZSB0byBpbmNsdWRlIGxvZ2dpbmcgd2hlbiBhIHZpZXcgaXMgY2xvc2VkXG4gKi9cblxuX2Nsb3NlID0gTWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmNsb3NlO1xuXG5NYXJpb25ldHRlLlJlZ2lvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2Nsb3NpbmcnLCAodGhpcy5jdXJyZW50VmlldyA/IHRoaXMuY3VycmVudFZpZXcgOiB2b2lkIDApLCB0aGlzLmVsKTtcbiAgcmV0dXJuIF9jbG9zZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29uZmlnL21hcmlvbmV0dGUvUmVnaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIE1hcmlvbmV0dGUsIF87XG5cbl8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbk1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG5cbl8uZXh0ZW5kKE1hcmlvbmV0dGUuVmlldy5wcm90b3R5cGUsIHtcbiAgdGFnTmFtZTogJ3NlY3Rpb24nLFxuICBjbGFzc05hbWU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG4gIHRlbXBsYXRlSGVscGVyczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsTmFtZTogdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwubmFtZSA6ICcnXG4gICAgfTtcbiAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbmZpZy9tYXJpb25ldHRlL1ZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbmV4cG9ydHMuYmVoYXZpb3JzID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuTWFyaW9uZXR0ZS5CZWhhdmlvcnMuYmVoYXZpb3JzTG9va3VwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBleHBvcnRzLmJlaGF2aW9ycztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZWhhdmlvcnNMb29rdXAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvYmVoYXZpb3JzTG9va3VwLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfTW9kaWZpZXJzID0gcmVxdWlyZSgnLi9Nb2RpZmllcnMnKTtcbnZhciBfU2Nyb2xsYWJsZXMgPSByZXF1aXJlKCcuL1Njcm9sbGFibGVzJyk7XG5leHBvcnRzLk1vZGlmaWVycyA9IF9Nb2RpZmllcnMuTW9kaWZpZXJzQmVoYXZpb3I7XG5leHBvcnRzLlNjcm9sbGFibGVzID0gX1Njcm9sbGFibGVzLlNjcm9sbGFibGVzQmVoYXZpb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2JlaGF2aW9ycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIE1vZGlmaWVyc0JlaGF2aW9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW9kaWZpZXJzQmVoYXZpb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTW9kaWZpZXJzQmVoYXZpb3IoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBNb2RpZmllcnNCZWhhdmlvci5wcm90b3R5cGUuYWRkTW9kaWZpZXIgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJcIiArIHRoaXMudmlldy5uYW1lICsgXCItLVwiICsgbW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS5yZW1vdmVNb2RpZmllciA9IGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhcIlwiICsgdGhpcy52aWV3Lm5hbWUgKyBcIi0tXCIgKyBtb2RpZmllcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS50b2dnbGVNb2RpZmllciA9IGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICBpZiAodGhpcy4kZWwuaGFzQ2xhc3MoXCJcIiArIHRoaXMudmlldy5uYW1lICsgXCItLVwiICsgbW9kaWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRNb2RpZmllcihtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGlmaWVyc0JlaGF2aW9yLnByb3RvdHlwZS5vbk1vZGlmaWVkID0gZnVuY3Rpb24gKG1vZGlmaWVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBzdGF0ZTtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5hbWUgaXMgcmVxdWlyZWQgb24gdGhpcyBWaWV3Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMucmVtb3ZlTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudG9nZ2xlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMudG9nZ2xlTW9kaWZpZXIobW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmFkZE1vZGlmaWVyKG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcudHJpZ2dlck1ldGhvZChcIm1vZGlmaWVkOlwiICsgbW9kaWZpZXIsIHtcbiAgICAgICAgICAgIG9uOiBzdGF0ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNb2RpZmllcnNCZWhhdmlvcjtcbn0pKE1hcmlvbmV0dGUuQmVoYXZpb3IpO1xuZXhwb3J0cy5Nb2RpZmllcnNCZWhhdmlvciA9IE1vZGlmaWVyc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9kaWZpZXJzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYmVoYXZpb3JzL01vZGlmaWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGdsb2JhbFN0YXRlSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbnZhciBTQ1JPTExBQkxFX0NMQVNTID0gJ1Njcm9sbGFibGVzX19jb250YWluZXInO1xuZnVuY3Rpb24gaW5pdEdsb2JhbFNjcm9sbGFibGVTdGF0ZSgpIHtcbiAgICBnbG9iYWxTdGF0ZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAvLyBEaXNhYmxlIHNjcm9sbCBmb3IgdGhlIGRvY3VtZW50LCB3ZSdsbCBoYW5kbGUgaXQgb3Vyc2VsdmVzXG4gICAgJChkb2N1bWVudCkub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmFkZENsYXNzKCdTY3JvbGxhYmxlcy0tYXR0YWNoZWQnKVxuICAgICAgICAub24oXCJ0b3VjaHN0YXJ0XCIsIFwiLlwiICsgU0NST0xMQUJMRV9DTEFTUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSAoY29udGVudCBvdmVyZmxvd3MpLCB0aGVuLi4uXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlaWdodCAhPT0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSB0b3AsIHNjcm9sbCBkb3duIG9uZSBwaXhlbCB0byBhbGxvdyBzY3JvbGxpbmcgdXBcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBib3R0b20sIHNjcm9sbCB1cCBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA9PT0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIHNjcm9sbFxuICAgICAgICB0aGlzLmFsbG93VXAgPSB0aGlzLnNjcm9sbFRvcCA+IDA7XG4gICAgICAgIHRoaXMuYWxsb3dEb3duID0gdGhpcy5zY3JvbGxUb3AgPCAodGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMubGFzdFkgPSBlLm9yaWdpbmFsRXZlbnQucGFnZVk7XG4gICAgfSlcbiAgICAgICAgLm9uKFwidG91Y2htb3ZlXCIsIFwiLlwiICsgU0NST0xMQUJMRV9DTEFTUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICB2YXIgdXAgPSBldmVudC5wYWdlWSA+IHRoaXMubGFzdFk7XG4gICAgICAgIHZhciBkb3duID0gIXVwO1xuICAgICAgICB0aGlzLmxhc3RZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIGlmICgodXAgJiYgdGhpcy5hbGxvd1VwKSB8fCAoZG93biAmJiB0aGlzLmFsbG93RG93bikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wJyk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcmV2ZW50Jyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG52YXIgU2Nyb2xsYWJsZXNCZWhhdmlvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjcm9sbGFibGVzQmVoYXZpb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2Nyb2xsYWJsZXNCZWhhdmlvcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFNjcm9sbGFibGVzQmVoYXZpb3IucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy9pZiAoIWdsb2JhbFN0YXRlSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gIGluaXRHbG9iYWxTY3JvbGxhYmxlU3RhdGUoKTtcbiAgICAgICAgLy99XG4gICAgICAgIF8uZWFjaCh0aGlzLm9wdGlvbnMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgdmFyICRlbDtcbiAgICAgICAgICAgIGlmICh2YWwgPT09ICdlbCcpIHtcbiAgICAgICAgICAgICAgICAkZWwgPSBfdGhpcy4kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwgPSBfdGhpcy4kKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGVsICYmICRlbC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKFNDUk9MTEFCTEVfQ0xBU1MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTY3JvbGxhYmxlc0JlaGF2aW9yO1xufSkoTWFyaW9uZXR0ZS5CZWhhdmlvcik7XG5leHBvcnRzLlNjcm9sbGFibGVzQmVoYXZpb3IgPSBTY3JvbGxhYmxlc0JlaGF2aW9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2Nyb2xsYWJsZXMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9iZWhhdmlvcnMvU2Nyb2xsYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9BbGVydCA9IHJlcXVpcmUoJy4vYWxlcnQvQWxlcnQnKTtcbnZhciBfTG9hZGluZyA9IHJlcXVpcmUoJy4vTG9hZGluZ0NvbXBvbmVudC9Mb2FkaW5nQ29udHJvbGxlcicpO1xuZXhwb3J0cy5BbGVydCA9IF9BbGVydC5BbGVydENvbXBvbmVudDtcbmV4cG9ydHMuQW5pbWF0ZWRSZWdpb24gPSByZXF1aXJlKCcuL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uJyk7XG5leHBvcnRzLkJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uL0J1dHRvbicpO1xuZXhwb3J0cy5Gb3JtVmlldyA9IHJlcXVpcmUoJy4vRm9ybVZpZXcvRm9ybVZpZXcnKTtcbmV4cG9ydHMuU3Bpbm5lclZpZXcgPSByZXF1aXJlKCcuL1NwaW5uZXJWaWV3L1NwaW5uZXJWaWV3Jyk7XG5leHBvcnRzLkxvYWRpbmcgPSBfTG9hZGluZy5Mb2FkaW5nQ29udHJvbGxlcjtcbmV4cG9ydHMuTm90aWNlVmlldyA9IHJlcXVpcmUoJy4vTm90aWNlVmlldy9Ob3RpY2VWaWV3Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgSXRlbVZpZXcgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9JdGVtVmlldycpO1xudmFyIEFsZXJ0Q29tcG9uZW50ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWxlcnRDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWxlcnRDb21wb25lbnQob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnYWxlcnQnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9hbGVydC5oYnMnKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEFsZXJ0Q29tcG9uZW50LnByb3RvdHlwZS50ZW1wbGF0ZUhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm9wdGlvbnMubWVzc2FnZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgQWxlcnRDb21wb25lbnQucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2FsZXJ0LScgKyAodGhpcy5vcHRpb25zLmFsZXJ0VHlwZSB8fCAnaW5mbycpKTtcbiAgICB9O1xuICAgIHJldHVybiBBbGVydENvbXBvbmVudDtcbn0pKEl0ZW1WaWV3Lkl0ZW1WaWV3KTtcbmV4cG9ydHMuQWxlcnRDb21wb25lbnQgPSBBbGVydENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFsZXJ0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hbGVydC9BbGVydC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIEl0ZW1WaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSXRlbVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSXRlbVZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSXRlbVZpZXcucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSXRlbVZpZXcucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIEl0ZW1WaWV3LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSXRlbVZpZXc7XG59KShNYXJpb25ldHRlLkl0ZW1WaWV3KTtcbmV4cG9ydHMuSXRlbVZpZXcgPSBJdGVtVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUl0ZW1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvSXRlbVZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXI7XG5cbiAgcmV0dXJuIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm1lc3NhZ2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1lc3NhZ2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcIm1lc3NhZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuaGJzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCJcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uLy4uL2NvbnRyb2xsZXJzL0FwcCcpO1xudmFyIFNwaW5uZXJWaWV3ID0gcmVxdWlyZSgnLi4vU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcnKTtcbnZhciB3aGVuRmV0Y2hlZCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy93aGVuRmV0Y2hlZCcpO1xudmFyIExvYWRpbmdDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGluZ0NvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGluZ0NvbnRyb2xsZXIob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgXy5kZWZhdWx0cyh0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgIGxvYWRpbmdUeXBlOiBcInNwaW5uZXJcIixcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG9wdGlvbnMuZW50aXRpZXMgfHwgdGhpcy5nZXRFbnRpdGllcyhvcHRpb25zLnZpZXcpO1xuICAgICAgICB0aGlzLmxvYWRpbmdWaWV3ID0gdGhpcy5nZXRMb2FkaW5nVmlldygpO1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nVmlldykge1xuICAgICAgICAgICAgdGhpcy5zaG93KHRoaXMubG9hZGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLm1vbml0b3JSZWFkeVN0YXRlKG9wdGlvbnMudmlldywgdGhpcy5sb2FkaW5nVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9hZGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLmdldExvYWRpbmdWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbi5jdXJyZW50Vmlldy4kZWwuY3NzKFwib3BhY2l0eVwiLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmdWaWV3ID0gbmV3IFNwaW5uZXJWaWV3LlNwaW5uZXJWaWV3KCk7XG4gICAgICAgICAgICAgICAgbG9hZGluZ1ZpZXcuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2FkaW5nVHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGluZ1ZpZXc7XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUubW9uaXRvclJlYWR5U3RhdGUgPSBmdW5jdGlvbiAocmVhbFZpZXcsIGxvYWRpbmdWaWV3KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfdmlld1JlYWR5ID0gZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgICAgICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd0Vycm9yKHJlYWxWaWV3LCBsb2FkaW5nVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zaG93UmVhbFZpZXcocmVhbFZpZXcsIGxvYWRpbmdWaWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZShyZWFsVmlldywgdGhpcywgX3ZpZXdSZWFkeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2hlbkZldGNoZWQud2hlbkZldGNoZWQodGhpcy5lbnRpdGllcywgX3ZpZXdSZWFkeSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5zaG93RXJyb3IgPSBmdW5jdGlvbiAocmVhbFZpZXcsIGxvYWRpbmdWaWV3KSB7XG4gICAgICAgIGlmIChyZWFsVmlldykge1xuICAgICAgICAgICAgcmVhbFZpZXcuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmxvYWRpbmdUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzcGlubmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGluZ1ZpZXcuc3RvcCgpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVycm9yIGhhbmRsaW5lIG9uIGxvYWRpbmcgdHlwZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2FkaW5nQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd1JlYWxWaWV3ID0gZnVuY3Rpb24gKHJlYWxWaWV3LCBsb2FkaW5nVmlldykge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5sb2FkaW5nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbi5jdXJyZW50Vmlldy4kZWwucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Bpbm5lcic6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVnaW9uLmN1cnJlbnRWaWV3ICE9PSBsb2FkaW5nVmlldyAmJiB0aGlzLnJlZ2lvbi5fbmV4dFZpZXcgIT09IGxvYWRpbmdWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxWaWV3LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoIXJlYWxWaWV3IHx8IHRoaXMub3B0aW9ucy5kZWJ1ZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhyZWFsVmlldyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmdDb250cm9sbGVyLnByb3RvdHlwZS5nZXRFbnRpdGllcyA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIHJldHVybiBfLmNoYWluKHZpZXcpLnBpY2soXCJtb2RlbFwiLCBcImNvbGxlY3Rpb25cIikudG9BcnJheSgpLmNvbXBhY3QoKS52YWx1ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIExvYWRpbmdDb250cm9sbGVyO1xufSkoQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcbmV4cG9ydHMuTG9hZGluZ0NvbnRyb2xsZXIgPSBMb2FkaW5nQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvYWRpbmdDb250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nQ29tcG9uZW50L0xvYWRpbmdDb250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2UnKTtcbnZhciBjbGllbnRDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY2xpZW50Jyk7XG52YXIgQXBwQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwcENvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX21hbmFnZWRSZWdpb25zID0gW107XG4gICAgICAgIHRoaXMucmVnaW9uID0gdGhpcy5yZWdpb24gfHwgb3B0aW9ucy5yZWdpb24gfHwgY2xpZW50Q29uZmlnLmNvbmZpZy5kZWZhdWx0UmVnaW9uO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoY29udHJvbGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICBvcHRpb25zLm1vbml0b3JSZWFkeVN0YXRlID0gY29udHJvbGxlci5nZXRPcHRpb24oJ21vbml0b3JSZWFkeVN0YXRlJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3coY29udHJvbGxlci5nZXRNYWluVmlldygpLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodmlldywgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICAgICAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVnaW9uOiB0aGlzLnJlZ2lvblxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIHZpZXcgaW5zdGFuY2UgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNYWluVmlldyh2aWV3KTtcbiAgICAgICAgdGhpcy5fbWFuYWdlVmlldyh2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXc6IHZpZXcsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcHBDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNYWluVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5WaWV3O1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuc2V0TWFpblZpZXcgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICBpZiAodGhpcy5fbWFpblZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYWluVmlldyA9IHZpZXc7XG4gICAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5Ubyh2aWV3LCBcImRlc3Ryb3lcIiwgdGhpcy5kZXN0cm95KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUubWFuYWdlUmVnaW9uID0gZnVuY3Rpb24gKHJlZ2lvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYWdlZFJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgIH07XG4gICAgQXBwQ29udHJvbGxlci5wcm90b3R5cGUuX21hbmFnZVZpZXcgPSBmdW5jdGlvbiAodmlldywgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5sb2FkaW5nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9hZGluZyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLmxvYWRpbmcsIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nSGVhZGVyOiBfLnJlc3VsdCh0aGlzLCAnbG9hZGluZ0hlYWRlcicpLFxuICAgICAgICAgICAgICAgIGxvYWRpbmdCb2R5OiBfLnJlc3VsdCh0aGlzLCAnbG9hZGluZ0JvZHknKSxcbiAgICAgICAgICAgICAgICBtb25pdG9yUmVhZHlTdGF0ZTogb3B0aW9ucy5tb25pdG9yUmVhZHlTdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjbGllbnRDb25maWcuY29uZmlnLmFwcC5leGVjdXRlKFwic2hvdzpsb2FkaW5nXCIsIHZpZXcsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5yZWdpb24uc2hvdyh2aWV3LCBvcHRpb25zLmltbWVkaWF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcENvbnRyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF8uaW52b2tlKHRoaXMuX21hbmFnZWRSZWdpb25zLCAnYW5pbWF0ZUVtcHR5Jyk7XG4gICAgICAgIHRoaXMuX21hbmFnZWRSZWdpb25zID0gbnVsbDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwQ29udHJvbGxlcjtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuQXBwQ29udHJvbGxlciA9IEFwcENvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9BcHAuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciByZWdpc3RyeSA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yZWdpc3RyeScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgQmFzZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYXNlQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCYXNlQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlX2lkID0gXy51bmlxdWVJZCgnY29udHJvbGxlcicpO1xuICAgICAgICByZWdpc3RyeS5yZWdpc3Rlcih0aGlzLCB0aGlzLl9pbnN0YW5jZV9pZCk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBCYXNlQ29udHJvbGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXN0cm95aW5nXCIsIHRoaXMpO1xuICAgICAgICByZWdpc3RyeS51bnJlZ2lzdGVyKHRoaXMsIHRoaXMuX2luc3RhbmNlX2lkKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBCYXNlQ29udHJvbGxlci5wcm90b3R5cGUucHJveHlFdmVudHMgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIHByZWZpeCkge1xuICAgICAgICB2YXIgX3QgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlblRvKGluc3RhbmNlLCBcImFsbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgcm9vdEV2ZW50ID0gYXJnc1swXTtcbiAgICAgICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICBhcmdzWzBdID0gcHJlZml4ICsgXCI6XCIgKyByb290RXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAgICAgTWFyaW9uZXR0ZS50cmlnZ2VyTWV0aG9kLmFwcGx5KF90LCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFzZUNvbnRyb2xsZXI7XG59KShNYXJpb25ldHRlLkNvbnRyb2xsZXIpO1xuZXhwb3J0cy5CYXNlQ29udHJvbGxlciA9IEJhc2VDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0Jhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5leHBvcnRzLl9yZWdpc3RyeSA9IHt9O1xuZnVuY3Rpb24gcmVnaXN0ZXIoaW5zdGFuY2UsIGlkKSB7XG4gICAgZXhwb3J0cy5fcmVnaXN0cnlbaWRdID0gaW5zdGFuY2U7XG59XG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXI7XG5mdW5jdGlvbiB1bnJlZ2lzdGVyKGluc3RhbmNlLCBpZCkge1xuICAgIGRlbGV0ZSBleHBvcnRzLl9yZWdpc3RyeVtpZF07XG59XG5leHBvcnRzLnVucmVnaXN0ZXIgPSB1bnJlZ2lzdGVyO1xuZnVuY3Rpb24gcmVzZXRSZWdpc3RyeSgpIHtcbiAgICB2YXIgb2xkQ291bnQgPSBnZXRSZWdpc3RyeVNpemUoKTtcbiAgICB2YXIgY29udHJvbGxlcjtcbiAgICBmb3IgKHZhciBrZXkgaW4gZXhwb3J0cy5fcmVnaXN0cnkpIHtcbiAgICAgICAgY29udHJvbGxlciA9IGV4cG9ydHMuX3JlZ2lzdHJ5W2tleV07XG4gICAgICAgIGNvbnRyb2xsZXIucmVnaW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgY291bnQ6IGdldFJlZ2lzdHJ5U2l6ZSgpLFxuICAgICAgICBwcmV2aW91czogb2xkQ291bnQsXG4gICAgICAgIG1zZzogXCJUaGVyZSB3ZXJlIFwiICsgb2xkQ291bnQgKyBcIiBjb250cm9sbGVycyBpbiB0aGUgcmVnaXN0cnksIHRoZXJlIGFyZSBub3cgXCIgKyAodGhpcy5nZXRSZWdpc3RyeVNpemUoKSlcbiAgICB9O1xuICAgIGNvbnNvbGUuaW5mbygnUmVnaXN0cnkgcmVzZXQnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG59XG5leHBvcnRzLnJlc2V0UmVnaXN0cnkgPSByZXNldFJlZ2lzdHJ5O1xuZnVuY3Rpb24gZ2V0UmVnaXN0cnlTaXplKCkge1xuICAgIHJldHVybiBfLnNpemUoZXhwb3J0cy5fcmVnaXN0cnkpO1xufVxuZXhwb3J0cy5nZXRSZWdpc3RyeVNpemUgPSBnZXRSZWdpc3RyeVNpemU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWdpc3RyeS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy9yZWdpc3RyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvVmlldycpO1xudmFyIFNwaW4gPSByZXF1aXJlKCdzcGluLmpzJyk7XG52YXIgU3Bpbm5lclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTcGlubmVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTcGlubmVyVmlldyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdTcGlubmVyVmlldyc7XG4gICAgICAgIHRoaXMubG9hZGluZ0RlbGF5ID0gMTAwMDtcbiAgICAgICAgdGhpcy5sb2FkaW5nQ2xhc3MgPSAnU3Bpbm5lclZpZXctLXNwaW5uaW5nJztcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIFNwaW5uZXJWaWV3LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH07XG4gICAgU3Bpbm5lclZpZXcucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy4kZWwuYWRkQ2xhc3MoX3RoaXMubG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmdTcGlubmVyID0gbmV3IFNwaW4oU3Bpbm5lclZpZXcuc3Bpbk9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZ1NwaW5uZXIuc3BpbihfdGhpcy4kZWxbMF0pO1xuICAgICAgICB9LCB0aGlzLmxvYWRpbmdEZWxheSk7XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nU3Bpbm5lcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3Bpbm5lci5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucmVtb3ZlQ2xhc3ModGhpcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTcGlubmVyVmlldy5zcGluT3B0aW9ucyA9IHtcbiAgICAgICAgbGluZXM6IDEzLFxuICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIHdpZHRoOiAyLFxuICAgICAgICByYWRpdXM6IDUsXG4gICAgICAgIGNvcm5lcnM6IDEsXG4gICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICB0cmFpbDogNjAsXG4gICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgIGh3YWNjZWw6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogXCJTcGlubmVyVmlld19fc3Bpbm5lciBhbmltYXRlZCBib3VuY2VJblwiLFxuICAgICAgICB6SW5kZXg6IDJlOSxcbiAgICAgICAgdG9wOiBcIjMwcHhcIixcbiAgICAgICAgbGVmdDogXCJhdXRvXCJcbiAgICB9O1xuICAgIHJldHVybiBTcGlubmVyVmlldztcbn0pKFZpZXcuVmlldyk7XG5leHBvcnRzLlNwaW5uZXJWaWV3ID0gU3Bpbm5lclZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TcGlubmVyVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lclZpZXcvU3Bpbm5lclZpZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSB0aGlzLmJlaGF2aW9ycyB8fCB7fTtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnNbJ01vZGlmaWVycyddID0ge307XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmlldy5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBWaWV3LnByb3RvdHlwZS5nZXRVaSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlba2V5XTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLnNob3dWaWV3ID0gZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgaWYgKHNob3cgPT09IHZvaWQgMCkgeyBzaG93ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiRlbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWaWV3O1xufSkoTWFyaW9uZXR0ZS5WaWV3KTtcbmV4cG9ydHMuVmlldyA9IFZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDE0IEZlbGl4IEduYXNzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9zcGluLmpzLm9yZy9cbiAqXG4gKiBFeGFtcGxlOlxuICAgIHZhciBvcHRzID0ge1xuICAgICAgbGluZXM6IDEyICAgICAgICAgICAgIC8vIFRoZSBudW1iZXIgb2YgbGluZXMgdG8gZHJhd1xuICAgICwgbGVuZ3RoOiA3ICAgICAgICAgICAgIC8vIFRoZSBsZW5ndGggb2YgZWFjaCBsaW5lXG4gICAgLCB3aWR0aDogNSAgICAgICAgICAgICAgLy8gVGhlIGxpbmUgdGhpY2tuZXNzXG4gICAgLCByYWRpdXM6IDEwICAgICAgICAgICAgLy8gVGhlIHJhZGl1cyBvZiB0aGUgaW5uZXIgY2lyY2xlXG4gICAgLCBzY2FsZTogMS4wICAgICAgICAgICAgLy8gU2NhbGVzIG92ZXJhbGwgc2l6ZSBvZiB0aGUgc3Bpbm5lclxuICAgICwgY29ybmVyczogMSAgICAgICAgICAgIC8vIFJvdW5kbmVzcyAoMC4uMSlcbiAgICAsIGNvbG9yOiAnIzAwMCcgICAgICAgICAvLyAjcmdiIG9yICNycmdnYmJcbiAgICAsIG9wYWNpdHk6IDEvNCAgICAgICAgICAvLyBPcGFjaXR5IG9mIHRoZSBsaW5lc1xuICAgICwgcm90YXRlOiAwICAgICAgICAgICAgIC8vIFJvdGF0aW9uIG9mZnNldFxuICAgICwgZGlyZWN0aW9uOiAxICAgICAgICAgIC8vIDE6IGNsb2Nrd2lzZSwgLTE6IGNvdW50ZXJjbG9ja3dpc2VcbiAgICAsIHNwZWVkOiAxICAgICAgICAgICAgICAvLyBSb3VuZHMgcGVyIHNlY29uZFxuICAgICwgdHJhaWw6IDEwMCAgICAgICAgICAgIC8vIEFmdGVyZ2xvdyBwZXJjZW50YWdlXG4gICAgLCBmcHM6IDIwICAgICAgICAgICAgICAgLy8gRnJhbWVzIHBlciBzZWNvbmQgd2hlbiB1c2luZyBzZXRUaW1lb3V0KClcbiAgICAsIHpJbmRleDogMmU5ICAgICAgICAgICAvLyBVc2UgYSBoaWdoIHotaW5kZXggYnkgZGVmYXVsdFxuICAgICwgY2xhc3NOYW1lOiAnc3Bpbm5lcicgIC8vIENTUyBjbGFzcyB0byBhc3NpZ24gdG8gdGhlIGVsZW1lbnRcbiAgICAsIHRvcDogJzUwJScgICAgICAgICAgICAvLyBjZW50ZXIgdmVydGljYWxseVxuICAgICwgbGVmdDogJzUwJScgICAgICAgICAgIC8vIGNlbnRlciBob3Jpem9udGFsbHlcbiAgICAsIHNoYWRvdzogZmFsc2UgICAgICAgICAvLyBXaGV0aGVyIHRvIHJlbmRlciBhIHNoYWRvd1xuICAgICwgaHdhY2NlbDogZmFsc2UgICAgICAgIC8vIFdoZXRoZXIgdG8gdXNlIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiAobWlnaHQgYmUgYnVnZ3kpXG4gICAgLCBwb3NpdGlvbjogJ2Fic29sdXRlJyAgLy8gRWxlbWVudCBwb3NpdGlvbmluZ1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbycpXG4gICAgdmFyIHNwaW5uZXIgPSBuZXcgU3Bpbm5lcihvcHRzKS5zcGluKHRhcmdldClcbiAqL1xuOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXG4gIC8qIENvbW1vbkpTICovXG4gIGlmICh0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuXG4gIC8qIEFNRCBtb2R1bGUgKi9cbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShmYWN0b3J5KVxuXG4gIC8qIEJyb3dzZXIgZ2xvYmFsICovXG4gIGVsc2Ugcm9vdC5TcGlubmVyID0gZmFjdG9yeSgpXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCJcblxuICB2YXIgcHJlZml4ZXMgPSBbJ3dlYmtpdCcsICdNb3onLCAnbXMnLCAnTyddIC8qIFZlbmRvciBwcmVmaXhlcyAqL1xuICAgICwgYW5pbWF0aW9ucyA9IHt9IC8qIEFuaW1hdGlvbiBydWxlcyBrZXllZCBieSB0aGVpciBuYW1lICovXG4gICAgLCB1c2VDc3NBbmltYXRpb25zIC8qIFdoZXRoZXIgdG8gdXNlIENTUyBhbmltYXRpb25zIG9yIHNldFRpbWVvdXQgKi9cbiAgICAsIHNoZWV0IC8qIEEgc3R5bGVzaGVldCB0byBob2xkIHRoZSBAa2V5ZnJhbWUgb3IgVk1MIHJ1bGVzLiAqL1xuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBlbGVtZW50cy4gSWYgbm8gdGFnIG5hbWUgaXMgZ2l2ZW4sXG4gICAqIGEgRElWIGlzIGNyZWF0ZWQuIE9wdGlvbmFsbHkgcHJvcGVydGllcyBjYW4gYmUgcGFzc2VkLlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlRWwgKHRhZywgcHJvcCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnIHx8ICdkaXYnKVxuICAgICAgLCBuXG5cbiAgICBmb3IgKG4gaW4gcHJvcCkgZWxbbl0gPSBwcm9wW25dXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBjaGlsZHJlbiBhbmQgcmV0dXJucyB0aGUgcGFyZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zIChwYXJlbnQgLyogY2hpbGQxLCBjaGlsZDIsIC4uLiovKSB7XG4gICAgZm9yICh2YXIgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJndW1lbnRzW2ldKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9wYWNpdHkga2V5ZnJhbWUgYW5pbWF0aW9uIHJ1bGUgYW5kIHJldHVybnMgaXRzIG5hbWUuXG4gICAqIFNpbmNlIG1vc3QgbW9iaWxlIFdlYmtpdHMgaGF2ZSB0aW1pbmcgaXNzdWVzIHdpdGggYW5pbWF0aW9uLWRlbGF5LFxuICAgKiB3ZSBjcmVhdGUgc2VwYXJhdGUgcnVsZXMgZm9yIGVhY2ggbGluZS9zZWdtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uIChhbHBoYSwgdHJhaWwsIGksIGxpbmVzKSB7XG4gICAgdmFyIG5hbWUgPSBbJ29wYWNpdHknLCB0cmFpbCwgfn4oYWxwaGEgKiAxMDApLCBpLCBsaW5lc10uam9pbignLScpXG4gICAgICAsIHN0YXJ0ID0gMC4wMSArIGkvbGluZXMgKiAxMDBcbiAgICAgICwgeiA9IE1hdGgubWF4KDEgLSAoMS1hbHBoYSkgLyB0cmFpbCAqICgxMDAtc3RhcnQpLCBhbHBoYSlcbiAgICAgICwgcHJlZml4ID0gdXNlQ3NzQW5pbWF0aW9ucy5zdWJzdHJpbmcoMCwgdXNlQ3NzQW5pbWF0aW9ucy5pbmRleE9mKCdBbmltYXRpb24nKSkudG9Mb3dlckNhc2UoKVxuICAgICAgLCBwcmUgPSBwcmVmaXggJiYgJy0nICsgcHJlZml4ICsgJy0nIHx8ICcnXG5cbiAgICBpZiAoIWFuaW1hdGlvbnNbbmFtZV0pIHtcbiAgICAgIHNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICdAJyArIHByZSArICdrZXlmcmFtZXMgJyArIG5hbWUgKyAneycgK1xuICAgICAgICAnMCV7b3BhY2l0eTonICsgeiArICd9JyArXG4gICAgICAgIHN0YXJ0ICsgJyV7b3BhY2l0eTonICsgYWxwaGEgKyAnfScgK1xuICAgICAgICAoc3RhcnQrMC4wMSkgKyAnJXtvcGFjaXR5OjF9JyArXG4gICAgICAgIChzdGFydCt0cmFpbCkgJSAxMDAgKyAnJXtvcGFjaXR5OicgKyBhbHBoYSArICd9JyArXG4gICAgICAgICcxMDAle29wYWNpdHk6JyArIHogKyAnfScgK1xuICAgICAgICAnfScsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aClcblxuICAgICAgYW5pbWF0aW9uc1tuYW1lXSA9IDFcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHZhcmlvdXMgdmVuZG9yIHByZWZpeGVzIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBzdXBwb3J0ZWQgcHJvcGVydHkuXG4gICAqL1xuICBmdW5jdGlvbiB2ZW5kb3IgKGVsLCBwcm9wKSB7XG4gICAgdmFyIHMgPSBlbC5zdHlsZVxuICAgICAgLCBwcFxuICAgICAgLCBpXG5cbiAgICBwcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSlcbiAgICBpZiAoc1twcm9wXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcHJvcFxuICAgIGZvciAoaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHAgPSBwcmVmaXhlc1tpXStwcm9wXG4gICAgICBpZiAoc1twcF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIHBwXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbXVsdGlwbGUgc3R5bGUgcHJvcGVydGllcyBhdCBvbmNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY3NzIChlbCwgcHJvcCkge1xuICAgIGZvciAodmFyIG4gaW4gcHJvcCkge1xuICAgICAgZWwuc3R5bGVbdmVuZG9yKGVsLCBuKSB8fCBuXSA9IHByb3Bbbl1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBpbiBkZWZhdWx0IHZhbHVlcy5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlZiA9IGFyZ3VtZW50c1tpXVxuICAgICAgZm9yICh2YXIgbiBpbiBkZWYpIHtcbiAgICAgICAgaWYgKG9ialtuXSA9PT0gdW5kZWZpbmVkKSBvYmpbbl0gPSBkZWZbbl1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpbmUgY29sb3IgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFycmF5LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q29sb3IgKGNvbG9yLCBpZHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbG9yID09ICdzdHJpbmcnID8gY29sb3IgOiBjb2xvcltpZHggJSBjb2xvci5sZW5ndGhdXG4gIH1cblxuICAvLyBCdWlsdC1pbiBkZWZhdWx0c1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBsaW5lczogMTIgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiBsaW5lcyB0byBkcmF3XG4gICwgbGVuZ3RoOiA3ICAgICAgICAgICAgIC8vIFRoZSBsZW5ndGggb2YgZWFjaCBsaW5lXG4gICwgd2lkdGg6IDUgICAgICAgICAgICAgIC8vIFRoZSBsaW5lIHRoaWNrbmVzc1xuICAsIHJhZGl1czogMTAgICAgICAgICAgICAvLyBUaGUgcmFkaXVzIG9mIHRoZSBpbm5lciBjaXJjbGVcbiAgLCBzY2FsZTogMS4wICAgICAgICAgICAgLy8gU2NhbGVzIG92ZXJhbGwgc2l6ZSBvZiB0aGUgc3Bpbm5lclxuICAsIGNvcm5lcnM6IDEgICAgICAgICAgICAvLyBSb3VuZG5lc3MgKDAuLjEpXG4gICwgY29sb3I6ICcjMDAwJyAgICAgICAgIC8vICNyZ2Igb3IgI3JyZ2diYlxuICAsIG9wYWNpdHk6IDEvNCAgICAgICAgICAvLyBPcGFjaXR5IG9mIHRoZSBsaW5lc1xuICAsIHJvdGF0ZTogMCAgICAgICAgICAgICAvLyBSb3RhdGlvbiBvZmZzZXRcbiAgLCBkaXJlY3Rpb246IDEgICAgICAgICAgLy8gMTogY2xvY2t3aXNlLCAtMTogY291bnRlcmNsb2Nrd2lzZVxuICAsIHNwZWVkOiAxICAgICAgICAgICAgICAvLyBSb3VuZHMgcGVyIHNlY29uZFxuICAsIHRyYWlsOiAxMDAgICAgICAgICAgICAvLyBBZnRlcmdsb3cgcGVyY2VudGFnZVxuICAsIGZwczogMjAgICAgICAgICAgICAgICAvLyBGcmFtZXMgcGVyIHNlY29uZCB3aGVuIHVzaW5nIHNldFRpbWVvdXQoKVxuICAsIHpJbmRleDogMmU5ICAgICAgICAgICAvLyBVc2UgYSBoaWdoIHotaW5kZXggYnkgZGVmYXVsdFxuICAsIGNsYXNzTmFtZTogJ3NwaW5uZXInICAvLyBDU1MgY2xhc3MgdG8gYXNzaWduIHRvIHRoZSBlbGVtZW50XG4gICwgdG9wOiAnNTAlJyAgICAgICAgICAgIC8vIGNlbnRlciB2ZXJ0aWNhbGx5XG4gICwgbGVmdDogJzUwJScgICAgICAgICAgIC8vIGNlbnRlciBob3Jpem9udGFsbHlcbiAgLCBzaGFkb3c6IGZhbHNlICAgICAgICAgLy8gV2hldGhlciB0byByZW5kZXIgYSBzaGFkb3dcbiAgLCBod2FjY2VsOiBmYWxzZSAgICAgICAgLy8gV2hldGhlciB0byB1c2UgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIChtaWdodCBiZSBidWdneSlcbiAgLCBwb3NpdGlvbjogJ2Fic29sdXRlJyAgLy8gRWxlbWVudCBwb3NpdGlvbmluZ1xuICB9XG5cbiAgLyoqIFRoZSBjb25zdHJ1Y3RvciAqL1xuICBmdW5jdGlvbiBTcGlubmVyIChvKSB7XG4gICAgdGhpcy5vcHRzID0gbWVyZ2UobyB8fCB7fSwgU3Bpbm5lci5kZWZhdWx0cywgZGVmYXVsdHMpXG4gIH1cblxuICAvLyBHbG9iYWwgZGVmYXVsdHMgdGhhdCBvdmVycmlkZSB0aGUgYnVpbHQtaW5zOlxuICBTcGlubmVyLmRlZmF1bHRzID0ge31cblxuICBtZXJnZShTcGlubmVyLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHNwaW5uZXIgdG8gdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50LiBJZiB0aGlzIGluc3RhbmNlIGlzIGFscmVhZHlcbiAgICAgKiBzcGlubmluZywgaXQgaXMgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gaXRzIHByZXZpb3VzIHRhcmdldCBiIGNhbGxpbmdcbiAgICAgKiBzdG9wKCkgaW50ZXJuYWxseS5cbiAgICAgKi9cbiAgICBzcGluOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLnN0b3AoKVxuXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgLCBvID0gc2VsZi5vcHRzXG4gICAgICAgICwgZWwgPSBzZWxmLmVsID0gY3JlYXRlRWwobnVsbCwge2NsYXNzTmFtZTogby5jbGFzc05hbWV9KVxuXG4gICAgICBjc3MoZWwsIHtcbiAgICAgICAgcG9zaXRpb246IG8ucG9zaXRpb25cbiAgICAgICwgd2lkdGg6IDBcbiAgICAgICwgekluZGV4OiBvLnpJbmRleFxuICAgICAgLCBsZWZ0OiBvLmxlZnRcbiAgICAgICwgdG9wOiBvLnRvcFxuICAgICAgfSlcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQuZmlyc3RDaGlsZCB8fCBudWxsKVxuICAgICAgfVxuXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJvZ3Jlc3NiYXInKVxuICAgICAgc2VsZi5saW5lcyhlbCwgc2VsZi5vcHRzKVxuXG4gICAgICBpZiAoIXVzZUNzc0FuaW1hdGlvbnMpIHtcbiAgICAgICAgLy8gTm8gQ1NTIGFuaW1hdGlvbiBzdXBwb3J0LCB1c2Ugc2V0VGltZW91dCgpIGluc3RlYWRcbiAgICAgICAgdmFyIGkgPSAwXG4gICAgICAgICAgLCBzdGFydCA9IChvLmxpbmVzIC0gMSkgKiAoMSAtIG8uZGlyZWN0aW9uKSAvIDJcbiAgICAgICAgICAsIGFscGhhXG4gICAgICAgICAgLCBmcHMgPSBvLmZwc1xuICAgICAgICAgICwgZiA9IGZwcyAvIG8uc3BlZWRcbiAgICAgICAgICAsIG9zdGVwID0gKDEgLSBvLm9wYWNpdHkpIC8gKGYgKiBvLnRyYWlsIC8gMTAwKVxuICAgICAgICAgICwgYXN0ZXAgPSBmIC8gby5saW5lc1xuXG4gICAgICAgIDsoZnVuY3Rpb24gYW5pbSAoKSB7XG4gICAgICAgICAgaSsrXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvLmxpbmVzOyBqKyspIHtcbiAgICAgICAgICAgIGFscGhhID0gTWF0aC5tYXgoMSAtIChpICsgKG8ubGluZXMgLSBqKSAqIGFzdGVwKSAlIGYgKiBvc3RlcCwgby5vcGFjaXR5KVxuXG4gICAgICAgICAgICBzZWxmLm9wYWNpdHkoZWwsIGogKiBvLmRpcmVjdGlvbiArIHN0YXJ0LCBhbHBoYSwgbylcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi5lbCAmJiBzZXRUaW1lb3V0KGFuaW0sIH5+KDEwMDAgLyBmcHMpKVxuICAgICAgICB9KSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGFuZCByZW1vdmVzIHRoZSBTcGlubmVyLlxuICAgICAqL1xuICAsIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSkgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbiAgICAgICAgdGhpcy5lbCA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdGhhdCBkcmF3cyB0aGUgaW5kaXZpZHVhbCBsaW5lcy4gV2lsbCBiZSBvdmVyd3JpdHRlblxuICAgICAqIGluIFZNTCBmYWxsYmFjayBtb2RlIGJlbG93LlxuICAgICAqL1xuICAsIGxpbmVzOiBmdW5jdGlvbiAoZWwsIG8pIHtcbiAgICAgIHZhciBpID0gMFxuICAgICAgICAsIHN0YXJ0ID0gKG8ubGluZXMgLSAxKSAqICgxIC0gby5kaXJlY3Rpb24pIC8gMlxuICAgICAgICAsIHNlZ1xuXG4gICAgICBmdW5jdGlvbiBmaWxsIChjb2xvciwgc2hhZG93KSB7XG4gICAgICAgIHJldHVybiBjc3MoY3JlYXRlRWwoKSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICwgd2lkdGg6IG8uc2NhbGUgKiAoby5sZW5ndGggKyBvLndpZHRoKSArICdweCdcbiAgICAgICAgLCBoZWlnaHQ6IG8uc2NhbGUgKiBvLndpZHRoICsgJ3B4J1xuICAgICAgICAsIGJhY2tncm91bmQ6IGNvbG9yXG4gICAgICAgICwgYm94U2hhZG93OiBzaGFkb3dcbiAgICAgICAgLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0J1xuICAgICAgICAsIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgfn4oMzYwL28ubGluZXMqaSArIG8ucm90YXRlKSArICdkZWcpIHRyYW5zbGF0ZSgnICsgby5zY2FsZSpvLnJhZGl1cyArICdweCcgKyAnLDApJ1xuICAgICAgICAsIGJvcmRlclJhZGl1czogKG8uY29ybmVycyAqIG8uc2NhbGUgKiBvLndpZHRoID4+IDEpICsgJ3B4J1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaSA8IG8ubGluZXM7IGkrKykge1xuICAgICAgICBzZWcgPSBjc3MoY3JlYXRlRWwoKSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICwgdG9wOiAxICsgfihvLnNjYWxlICogby53aWR0aCAvIDIpICsgJ3B4J1xuICAgICAgICAsIHRyYW5zZm9ybTogby5od2FjY2VsID8gJ3RyYW5zbGF0ZTNkKDAsMCwwKScgOiAnJ1xuICAgICAgICAsIG9wYWNpdHk6IG8ub3BhY2l0eVxuICAgICAgICAsIGFuaW1hdGlvbjogdXNlQ3NzQW5pbWF0aW9ucyAmJiBhZGRBbmltYXRpb24oby5vcGFjaXR5LCBvLnRyYWlsLCBzdGFydCArIGkgKiBvLmRpcmVjdGlvbiwgby5saW5lcykgKyAnICcgKyAxIC8gby5zcGVlZCArICdzIGxpbmVhciBpbmZpbml0ZSdcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoby5zaGFkb3cpIGlucyhzZWcsIGNzcyhmaWxsKCcjMDAwJywgJzAgMCA0cHggIzAwMCcpLCB7dG9wOiAnMnB4J30pKVxuICAgICAgICBpbnMoZWwsIGlucyhzZWcsIGZpbGwoZ2V0Q29sb3Ioby5jb2xvciwgaSksICcwIDAgMXB4IHJnYmEoMCwwLDAsLjEpJykpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgYWRqdXN0cyB0aGUgb3BhY2l0eSBvZiBhIHNpbmdsZSBsaW5lLlxuICAgICAqIFdpbGwgYmUgb3ZlcndyaXR0ZW4gaW4gVk1MIGZhbGxiYWNrIG1vZGUgYmVsb3cuXG4gICAgICovXG4gICwgb3BhY2l0eTogZnVuY3Rpb24gKGVsLCBpLCB2YWwpIHtcbiAgICAgIGlmIChpIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGgpIGVsLmNoaWxkTm9kZXNbaV0uc3R5bGUub3BhY2l0eSA9IHZhbFxuICAgIH1cblxuICB9KVxuXG5cbiAgZnVuY3Rpb24gaW5pdFZNTCAoKSB7XG5cbiAgICAvKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFZNTCB0YWcgKi9cbiAgICBmdW5jdGlvbiB2bWwgKHRhZywgYXR0cikge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsKCc8JyArIHRhZyArICcgeG1sbnM9XCJ1cm46c2NoZW1hcy1taWNyb3NvZnQuY29tOnZtbFwiIGNsYXNzPVwic3Bpbi12bWxcIj4nLCBhdHRyKVxuICAgIH1cblxuICAgIC8vIE5vIENTUyB0cmFuc2Zvcm1zIGJ1dCBWTUwgc3VwcG9ydCwgYWRkIGEgQ1NTIHJ1bGUgZm9yIFZNTCBlbGVtZW50czpcbiAgICBzaGVldC5hZGRSdWxlKCcuc3Bpbi12bWwnLCAnYmVoYXZpb3I6dXJsKCNkZWZhdWx0I1ZNTCknKVxuXG4gICAgU3Bpbm5lci5wcm90b3R5cGUubGluZXMgPSBmdW5jdGlvbiAoZWwsIG8pIHtcbiAgICAgIHZhciByID0gby5zY2FsZSAqIChvLmxlbmd0aCArIG8ud2lkdGgpXG4gICAgICAgICwgcyA9IG8uc2NhbGUgKiAyICogclxuXG4gICAgICBmdW5jdGlvbiBncnAgKCkge1xuICAgICAgICByZXR1cm4gY3NzKFxuICAgICAgICAgIHZtbCgnZ3JvdXAnLCB7XG4gICAgICAgICAgICBjb29yZHNpemU6IHMgKyAnICcgKyBzXG4gICAgICAgICAgLCBjb29yZG9yaWdpbjogLXIgKyAnICcgKyAtclxuICAgICAgICAgIH0pXG4gICAgICAgICwgeyB3aWR0aDogcywgaGVpZ2h0OiBzIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB2YXIgbWFyZ2luID0gLShvLndpZHRoICsgby5sZW5ndGgpICogby5zY2FsZSAqIDIgKyAncHgnXG4gICAgICAgICwgZyA9IGNzcyhncnAoKSwge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IG1hcmdpbiwgbGVmdDogbWFyZ2lufSlcbiAgICAgICAgLCBpXG5cbiAgICAgIGZ1bmN0aW9uIHNlZyAoaSwgZHgsIGZpbHRlcikge1xuICAgICAgICBpbnMoXG4gICAgICAgICAgZ1xuICAgICAgICAsIGlucyhcbiAgICAgICAgICAgIGNzcyhncnAoKSwge3JvdGF0aW9uOiAzNjAgLyBvLmxpbmVzICogaSArICdkZWcnLCBsZWZ0OiB+fmR4fSlcbiAgICAgICAgICAsIGlucyhcbiAgICAgICAgICAgICAgY3NzKFxuICAgICAgICAgICAgICAgIHZtbCgncm91bmRyZWN0Jywge2FyY3NpemU6IG8uY29ybmVyc30pXG4gICAgICAgICAgICAgICwgeyB3aWR0aDogclxuICAgICAgICAgICAgICAgICwgaGVpZ2h0OiBvLnNjYWxlICogby53aWR0aFxuICAgICAgICAgICAgICAgICwgbGVmdDogby5zY2FsZSAqIG8ucmFkaXVzXG4gICAgICAgICAgICAgICAgLCB0b3A6IC1vLnNjYWxlICogby53aWR0aCA+PiAxXG4gICAgICAgICAgICAgICAgLCBmaWx0ZXI6IGZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCB2bWwoJ2ZpbGwnLCB7Y29sb3I6IGdldENvbG9yKG8uY29sb3IsIGkpLCBvcGFjaXR5OiBvLm9wYWNpdHl9KVxuICAgICAgICAgICAgLCB2bWwoJ3N0cm9rZScsIHtvcGFjaXR5OiAwfSkgLy8gdHJhbnNwYXJlbnQgc3Ryb2tlIHRvIGZpeCBjb2xvciBibGVlZGluZyB1cG9uIG9wYWNpdHkgY2hhbmdlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNoYWRvdylcbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSBvLmxpbmVzOyBpKyspIHtcbiAgICAgICAgICBzZWcoaSwgLTIsICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmx1cihwaXhlbHJhZGl1cz0yLG1ha2VzaGFkb3c9MSxzaGFkb3dvcGFjaXR5PS4zKScpXG4gICAgICAgIH1cblxuICAgICAgZm9yIChpID0gMTsgaSA8PSBvLmxpbmVzOyBpKyspIHNlZyhpKVxuICAgICAgcmV0dXJuIGlucyhlbCwgZylcbiAgICB9XG5cbiAgICBTcGlubmVyLnByb3RvdHlwZS5vcGFjaXR5ID0gZnVuY3Rpb24gKGVsLCBpLCB2YWwsIG8pIHtcbiAgICAgIHZhciBjID0gZWwuZmlyc3RDaGlsZFxuICAgICAgbyA9IG8uc2hhZG93ICYmIG8ubGluZXMgfHwgMFxuICAgICAgaWYgKGMgJiYgaSArIG8gPCBjLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGMgPSBjLmNoaWxkTm9kZXNbaSArIG9dOyBjID0gYyAmJiBjLmZpcnN0Q2hpbGQ7IGMgPSBjICYmIGMuZmlyc3RDaGlsZFxuICAgICAgICBpZiAoYykgYy5vcGFjaXR5ID0gdmFsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzaGVldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBjcmVhdGVFbCgnc3R5bGUnLCB7dHlwZSA6ICd0ZXh0L2Nzcyd9KVxuICAgICAgaW5zKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sIGVsKVxuICAgICAgcmV0dXJuIGVsLnNoZWV0IHx8IGVsLnN0eWxlU2hlZXRcbiAgICB9KCkpXG5cbiAgICB2YXIgcHJvYmUgPSBjc3MoY3JlYXRlRWwoJ2dyb3VwJyksIHtiZWhhdmlvcjogJ3VybCgjZGVmYXVsdCNWTUwpJ30pXG5cbiAgICBpZiAoIXZlbmRvcihwcm9iZSwgJ3RyYW5zZm9ybScpICYmIHByb2JlLmFkaikgaW5pdFZNTCgpXG4gICAgZWxzZSB1c2VDc3NBbmltYXRpb25zID0gdmVuZG9yKHByb2JlLCAnYW5pbWF0aW9uJylcbiAgfVxuXG4gIHJldHVybiBTcGlubmVyXG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NwaW4uanMvc3Bpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgUSA9IHJlcXVpcmUoJ3EnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuZnVuY3Rpb24gd2hlbkZldGNoZWQoZW50aXRpZXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHByb21pc2VzID0gXy5jaGFpbihbZW50aXRpZXNdKS5mbGF0dGVuKCkucGx1Y2soXCJfZmV0Y2hcIikuY29tcGFjdCgpLnZhbHVlKCk7XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gUS5hbGwocHJvbWlzZXMpLmRvbmUoZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aGVuRmV0Y2hlZCcsIHJlc3VsdHMpO1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmZhaWxlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9ycyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3doZW5GZXRjaGVkJywgZW50aXRpZXMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgaXMgYmVpbmcgZmV0Y2hlZCcpO1xuICAgIH1cbn1cbmV4cG9ydHMud2hlbkZldGNoZWQgPSB3aGVuRmV0Y2hlZDtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdoZW5GZXRjaGVkLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3doZW5GZXRjaGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yN19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJxXCJcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIEFuaW1hdGVkUmVnaW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0ZWRSZWdpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0ZWRSZWdpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBbmltYXRlZFJlZ2lvbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmlldyAmJiB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbmltYXRpbmcgb3V0JywgdGhpcy5jdXJyZW50VmlldywgdGhpcy5lbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LmFuaW1hdGVPdXQoY2IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjYikpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFuaW1hdGVkUmVnaW9uLnByb3RvdHlwZS5hbmltYXRlRW1wdHkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hbmltYXRlT3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmVtcHR5KCk7XG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGVkUmVnaW9uO1xufSkoTWFyaW9uZXR0ZS5SZWdpb24pO1xuZXhwb3J0cy5BbmltYXRlZFJlZ2lvbiA9IEFuaW1hdGVkUmVnaW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QW5pbWF0ZWRSZWdpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkUmVnaW9uL0FuaW1hdGVkUmVnaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xudmFyIEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vLi4vdmlld3MvSXRlbVZpZXcnKTtcbnZhciBCVVRUT05fRVZFTlRTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlVUVE9OX0VWRU5UUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCVVRUT05fRVZFTlRTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQlVUVE9OX0VWRU5UUy5uYXZpZ2F0ZSA9IG5ldyBCVVRUT05fRVZFTlRTKCduYXZpZ2F0ZScpO1xuICAgIHJldHVybiBCVVRUT05fRVZFTlRTO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQlVUVE9OX0VWRU5UUyA9IEJVVFRPTl9FVkVOVFM7XG52YXIgQlVUVE9OX1RIRU1FID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlVUVE9OX1RIRU1FLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJVVFRPTl9USEVNRSgpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEJVVFRPTl9USEVNRS5kZWZhdWx0ID0gbmV3IEJVVFRPTl9USEVNRSgnZGVmYXVsdCcpO1xuICAgIEJVVFRPTl9USEVNRS5pbnZlcnNlID0gbmV3IEJVVFRPTl9USEVNRSgnaW52ZXJzZScpO1xuICAgIEJVVFRPTl9USEVNRS5hY3Rpb24gPSBuZXcgQlVUVE9OX1RIRU1FKCdhY3Rpb24nKTtcbiAgICBCVVRUT05fVEhFTUUubGluayA9IG5ldyBCVVRUT05fVEhFTUUoJ2xpbmsnKTtcbiAgICBCVVRUT05fVEhFTUUucHJpbWFyeSA9IG5ldyBCVVRUT05fVEhFTUUoJ3ByaW1hcnknKTtcbiAgICBCVVRUT05fVEhFTUUuc2Vjb25kYXJ5ID0gbmV3IEJVVFRPTl9USEVNRSgnc2Vjb25kYXJ5Jyk7XG4gICAgcmV0dXJuIEJVVFRPTl9USEVNRTtcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkJVVFRPTl9USEVNRSA9IEJVVFRPTl9USEVNRTtcbnZhciBCVVRUT05fU0laRSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJVVFRPTl9TSVpFLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJVVFRPTl9TSVpFKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQlVUVE9OX1NJWkUuZGVmYXVsdCA9IG5ldyBCVVRUT05fU0laRSgnZGVmYXVsdCcpO1xuICAgIEJVVFRPTl9TSVpFLnNtYWxsID0gbmV3IEJVVFRPTl9TSVpFKCdzbWFsbCcpO1xuICAgIEJVVFRPTl9TSVpFLmxhcmdlID0gbmV3IEJVVFRPTl9TSVpFKCdsYXJnZScpO1xuICAgIHJldHVybiBCVVRUT05fU0laRTtcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkJVVFRPTl9TSVpFID0gQlVUVE9OX1NJWkU7XG52YXIgQnV0dG9uTW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b25Nb2RlbChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGUgPSAnbmFtZSc7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBCdXR0b25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBibG9jazogdHJ1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBCVVRUT05fVEhFTUUuZGVmYXVsdCxcbiAgICAgICAgICAgIHNpemU6IEJVVFRPTl9TSVpFLmRlZmF1bHRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ25hbWUnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ25hbWUnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwiaWNvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2ljb24nKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ2ljb24nLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ3RleHQnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ3RleHQnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwiYmxvY2tcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdibG9jaycpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnYmxvY2snLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwidGhlbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCd0aGVtZScpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgndGhlbWUnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25Nb2RlbC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ3NpemUnKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ3NpemUnLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBCdXR0b25Nb2RlbDtcbn0pKEJhY2tib25lLk1vZGVsKTtcbmV4cG9ydHMuQnV0dG9uTW9kZWwgPSBCdXR0b25Nb2RlbDtcbnZhciBCdXR0b24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWwgfHwgbmV3IEJ1dHRvbk1vZGVsKHRoaXMuZGVmYXVsdHMoKSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLm1vZGVsLm5hbWUgfHwgJ2Jhc2UtYnV0dG9uJztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vQnV0dG9uLmhicycpO1xuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFnTmFtZSA9ICdidXR0b24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWdOYW1lID0gJ2EnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSB7XG4gICAgICAgICAgICAnY2xpY2snOiAnY2xpY2snXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgdGhpcy5uYXZpZ2F0ZSk7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucylcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc05hbWVzKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdCdXR0b24gYnRuIEJ1dHRvbi0tJyArIHRoaXMubmFtZSArICdCdXR0b24nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b24ucHJvdG90eXBlLmdldEljb25DbGFzcyA9IGZ1bmN0aW9uIChpY29uTmFtZSkge1xuICAgICAgICByZXR1cm4gJ0ljb24gSWNvbi0tJyArIGljb25OYW1lO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5tb2RlbC50ZXh0OyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLm1vZGVsLnRleHQgPSB2YWx1ZTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXJpYWxpemVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMubW9kZWwudG9KU09OKCk7XG4gICAgICAgIGRhdGEuaWNvbkNsYXNzID0gdGhpcy5nZXRJY29uQ2xhc3ModGhpcy5tb2RlbC5pY29uKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoQlVUVE9OX0VWRU5UUy5uYXZpZ2F0ZS52YWwsIHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNldFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLnVuc2V0Q2xhc3NOYW1lcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5pY29uKVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5pY29uID0gb3B0aW9ucy5pY29uO1xuICAgICAgICBpZiAob3B0aW9ucy50ZXh0KVxuICAgICAgICAgICAgdGhpcy5tb2RlbC50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5ibG9jaykpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJsb2NrID0gb3B0aW9ucy5ibG9jaztcbiAgICAgICAgaWYgKG9wdGlvbnMudGhlbWUpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRoZW1lID0gb3B0aW9ucy50aGVtZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2l6ZSlcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0KVxuICAgICAgICAgICAgdGhpcy4kZWwuYXR0cigndHlwZScsICdzdWJtaXQnKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUudW5zZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuJGVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiRlbFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdidG4tbGluaycpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwudGhlbWUpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ0J1dHRvbi0tJyArIHRoaXMubW9kZWwuc2l6ZSk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdidG4tYmxvY2snKTtcbiAgICB9O1xuICAgIEJ1dHRvbi5wcm90b3R5cGUuc2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWxcbiAgICAgICAgICAgIC5hZGRDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC50aGVtZSlcbiAgICAgICAgICAgIC5hZGRDbGFzcygnQnV0dG9uLS0nICsgdGhpcy5tb2RlbC5zaXplICsgJ1NpemUnKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwudGhlbWUgPT09IEJVVFRPTl9USEVNRS5saW5rKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYnRuLWxpbmsnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb2RlbC5ibG9jaykge1xuICAgICAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2J0bi1ibG9jaycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQnV0dG9uO1xufSkoSXRlbVZpZXcuSXRlbVZpZXcpO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CdXR0b24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgU3RyaW5nQ29uc3RhbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0cmluZ0NvbnN0YW50KHZhbCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG4gICAgU3RyaW5nQ29uc3RhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52YWw7IH07XG4gICAgU3RyaW5nQ29uc3RhbnQucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSA9PT0gdmFsdWU7XG4gICAgfTtcbiAgICBTdHJpbmdDb25zdGFudC5hbGxDb25zdGFudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGFsbCA9IFtdO1xuICAgICAgICBfLmVhY2goXy5rZXlzKHRoaXMpLCBmdW5jdGlvbiAocHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICh0W3Byb3BlcnR5S2V5XSBpbnN0YW5jZW9mIHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RhbnQgPSB0W3Byb3BlcnR5S2V5XTtcbiAgICAgICAgICAgICAgICBhbGwucHVzaChjb25zdGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH07XG4gICAgU3RyaW5nQ29uc3RhbnQuZnJvbUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuYWxsQ29uc3RhbnRzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYWxsW2ldLm1hdGNoZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0cmluZ0NvbnN0YW50LmZyb21WYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuYWxsQ29uc3RhbnRzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYWxsW2ldLm1hdGNoZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdHJpbmdDb25zdGFudDtcbn0pKCk7XG5leHBvcnRzLlN0cmluZ0NvbnN0YW50ID0gU3RyaW5nQ29uc3RhbnQ7XG52YXIgRVZFTlRfVFlQRVMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFVkVOVF9UWVBFUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFVkVOVF9UWVBFUygpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIEVWRU5UX1RZUEVTLkNoYW5nZSA9IG5ldyBFVkVOVF9UWVBFUygnQ2hhbmdlJyk7XG4gICAgcmV0dXJuIEVWRU5UX1RZUEVTO1xufSkoU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5FVkVOVF9UWVBFUyA9IEVWRU5UX1RZUEVTO1xudmFyIEFDVElPTl9TT1VSQ0VTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQUNUSU9OX1NPVVJDRVMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQUNUSU9OX1NPVVJDRVMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBQ1RJT05fU09VUkNFUy5TZXJ2ZXJBY3Rpb24gPSBuZXcgQUNUSU9OX1NPVVJDRVMoJ1NlcnZlckFjdGlvbicpO1xuICAgIEFDVElPTl9TT1VSQ0VTLlZpZXdBY3Rpb24gPSBuZXcgQUNUSU9OX1NPVVJDRVMoJ1ZpZXdBY3Rpb24nKTtcbiAgICBBQ1RJT05fU09VUkNFUy5EZXZpY2VBY3Rpb24gPSBuZXcgQUNUSU9OX1NPVVJDRVMoJ0RldmljZUFjdGlvbicpO1xuICAgIHJldHVybiBBQ1RJT05fU09VUkNFUztcbn0pKFN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQUNUSU9OX1NPVVJDRVMgPSBBQ1RJT05fU09VUkNFUztcbnZhciBET0NfU1RBVFVTRVMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhET0NfU1RBVFVTRVMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRE9DX1NUQVRVU0VTKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgRE9DX1NUQVRVU0VTLmVtcHR5ID0gbmV3IERPQ19TVEFUVVNFUygnZW1wdHknKTtcbiAgICBET0NfU1RBVFVTRVMuZmV0Y2hpbmdGcm9tU2VydmVyID0gbmV3IERPQ19TVEFUVVNFUygnZmV0Y2hpbmdGcm9tU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmZldGNoaW5nTG9jYWwgPSBuZXcgRE9DX1NUQVRVU0VTKCdmZXRjaGluZ0xvY2FsJyk7XG4gICAgRE9DX1NUQVRVU0VTLmZldGNoZWQgPSBuZXcgRE9DX1NUQVRVU0VTKCdmZXRjaGVkJyk7XG4gICAgRE9DX1NUQVRVU0VTLmNyZWF0aW5nT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdjcmVhdGluZ09uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLnVwZGF0aW5nT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCd1cGRhdGluZ09uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0aW5nT25TZXJ2ZXIgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGluZ09uU2VydmVyJyk7XG4gICAgRE9DX1NUQVRVU0VTLmRlbGV0ZWRPblNlcnZlciA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0ZWRPblNlcnZlcicpO1xuICAgIERPQ19TVEFUVVNFUy5kZWxldGVkTG9jYWwgPSBuZXcgRE9DX1NUQVRVU0VTKCdkZWxldGVkTG9jYWwnKTtcbiAgICBET0NfU1RBVFVTRVMuZGVsZXRlZCA9IG5ldyBET0NfU1RBVFVTRVMoJ2RlbGV0ZWQnKTtcbiAgICByZXR1cm4gRE9DX1NUQVRVU0VTO1xufSkoU3RyaW5nQ29uc3RhbnQpO1xuZXhwb3J0cy5ET0NfU1RBVFVTRVMgPSBET0NfU1RBVFVTRVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb25zdGFudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gXCI8c3BhbiBjbGFzcz1cXFwiQnV0dG9uX19pY29uXFxcIj48ZGl2IGNsYXNzPVxcXCJcIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWNvbkNsYXNzIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pY29uQ2xhc3MgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImljb25DbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvZGl2Pjwvc3Bhbj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXI7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWNvbkNsYXNzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjxzcGFuIGNsYXNzPVxcXCJCdXR0b25fX3RleHRcXFwiPlwiXG4gICAgKyB0aGlzLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50ZXh0IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50ZXh0IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJ0ZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmhic1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lRm9ybXMgPSByZXF1aXJlKCdiYWNrYm9uZS1mb3JtcycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG52YXIgdmlld3MgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9pbmRleCcpO1xudmFyIExheW91dCA9IHZpZXdzLkxheW91dDtcbnZhciBDaGlsZEhvbGRlclZpZXcgPSB2aWV3cy5DaGlsZEhvbGRlclZpZXc7XG50ZW1wbGF0ZXMuaW5pdCgpO1xudmFyIEZPUk1WSUVXX0VWRU5UUyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZPUk1WSUVXX0VWRU5UUywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGT1JNVklFV19FVkVOVFMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBGT1JNVklFV19FVkVOVFMuc3VibWl0dGVkID0gbmV3IEZPUk1WSUVXX0VWRU5UUygnc3VibWl0dGVkJyk7XG4gICAgcmV0dXJuIEZPUk1WSUVXX0VWRU5UUztcbn0pKGNvbnN0YW50cy5TdHJpbmdDb25zdGFudCk7XG5leHBvcnRzLkZPUk1WSUVXX0VWRU5UUyA9IEZPUk1WSUVXX0VWRU5UUztcbnZhciBGb3JtVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1WaWV3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0Zvcm1WaWV3JztcbiAgICAgICAgdGhpcy50YWdOYW1lID0gJ2Zvcm0nO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7IHJvbGU6ICdmb3JtJyB9O1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVxdWlyZSgnLi9Gb3JtVmlldy5oYnMnKTtcbiAgICAgICAgdGhpcy5yZWdpb25zID0ge1xuICAgICAgICAgICAgZmllbGRzUmVnaW9uOiAnLkZvcm1WaWV3X19maWVsZHNSZWdpb24nLFxuICAgICAgICAgICAgYnV0dG9uc1JlZ2lvbjogJy5Gb3JtVmlld19fYnV0dG9uc1JlZ2lvbidcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wYXJzZUljb25Qcm9wZXJ0aWVzKG9wdGlvbnMuc2NoZW1hKTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdGb3JtU3RhY2tlZCcpO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IG5ldyBCYWNrYm9uZUZvcm1zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNIb2xkZXIgPSBuZXcgQ2hpbGRIb2xkZXJWaWV3LkdlbmVyaWNDaGlsZEhvbGRlclZpZXcoKTtcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwub2ZmKCk7XG4gICAgICAgIHRoaXMuZmllbGRzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBudWxsO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnNldExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwub24oJ3N1Ym1pdCcsIHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maWVsZHNSZWdpb24uc2hvdyh0aGlzLmZpZWxkcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uc1JlZ2lvbi5zaG93KHRoaXMuYnV0dG9uc0hvbGRlcik7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUucGFyc2VJY29uUHJvcGVydGllcyA9IGZ1bmN0aW9uIChzY2hlbWEpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYSwgZnVuY3Rpb24gKHNjaGVtYUl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWFJdGVtLmljb24pIHtcbiAgICAgICAgICAgICAgICBzY2hlbWFJdGVtLnRpdGxlID0gJzxpIGNsYXNzPVwiZmEgZmEtJyArIHNjaGVtYUl0ZW0uaWNvbiArICdcIj48L2k+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUub25Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEZPUk1WSUVXX0VWRU5UUy5zdWJtaXR0ZWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLmRpc2FibGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcyhGb3JtVmlldy5ESVNBQkxFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBGb3JtVmlldy5wcm90b3R5cGUuZW5hYmxlRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMudmFsaWRhdGUoKTtcbiAgICB9O1xuICAgIEZvcm1WaWV3LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuZ2V0VmFsdWUocHJvcGVydHkpO1xuICAgIH07XG4gICAgRm9ybVZpZXcucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRzLnNldFZhbHVlKHByb3BlcnRpZXMpO1xuICAgIH07XG4gICAgRm9ybVZpZXcuRElTQUJMRURfQ0xBU1MgPSAnRm9ybVZpZXctLWRpc2FibGVkJztcbiAgICByZXR1cm4gRm9ybVZpZXc7XG59KShMYXlvdXQuTGF5b3V0KTtcbmV4cG9ydHMuRm9ybVZpZXcgPSBGb3JtVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1WaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy9Gb3JtVmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFja2JvbmUtZm9ybXNcIlxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxuLyoqXG4gKiBJbmNsdWRlIHRoaXMgdGVtcGxhdGUgZmlsZSBhZnRlciBiYWNrYm9uZS1mb3Jtcy5hbWQuanMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGVtcGxhdGVzXG4gKlxuICogJ2RhdGEtKicgYXR0cmlidXRlcyBjb250cm9sIHdoZXJlIGVsZW1lbnRzIGFyZSBwbGFjZWRcbiAqL1xudmFyIEZvcm0gPSByZXF1aXJlKCdiYWNrYm9uZS1mb3JtcycpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIEZvcm0udGVtcGxhdGUgPSBfLnRlbXBsYXRlKCc8ZGl2IGRhdGEtZmllbGRzZXRzPjwvZGl2PicpO1xuICAgIEZvcm0uRmllbGRzZXQudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICA8ZmllbGRzZXQgZGF0YS1maWVsZHM+XFxcbiAgICA8JSBpZiAobGVnZW5kKSB7ICU+XFxcbiAgICAgIDxsZWdlbmQ+PCU9IGxlZ2VuZCAlPjwvbGVnZW5kPlxcXG4gICAgPCUgfSAlPlxcXG4gIDwvZmllbGRzZXQ+XFxcbicpO1xuICAgIEZvcm0uRmllbGQudGVtcGxhdGUgPSByZXF1aXJlKCcuL0Zvcm1GaWVsZC5oYnMnKTtcbiAgICBGb3JtLk5lc3RlZEZpZWxkLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgnXFxcbiAgPGRpdiBjbGFzcz1cImZpZWxkLTwlPSBrZXkgJT5cIj5cXFxuICAgIDxkaXYgdGl0bGU9XCI8JT0gdGl0bGUgJT5cIiBjbGFzcz1cImlucHV0LXhsYXJnZVwiPlxcXG4gICAgICA8c3BhbiBkYXRhLWVkaXRvcj48L3NwYW4+XFxcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWlubGluZVwiIGRhdGEtZXJyb3I+PC9kaXY+XFxcbiAgICA8L2Rpdj5cXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCI+PCU9IGhlbHAgJT48L2Rpdj5cXFxuICA8L2Rpdj5cXFxuJyk7XG4gICAgRm9ybS5GaWVsZC5lcnJvckNsYXNzTmFtZSA9ICdGb3JtR3JvdXAtLWhhc0Vycm9yJztcbiAgICBpZiAoRm9ybS5lZGl0b3JzLkxpc3QpIHtcbiAgICAgICAgRm9ybS5lZGl0b3JzLkxpc3QudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCdcXFxuICAgIDxkaXYgY2xhc3M9XCJiYmYtbGlzdFwiPlxcXG4gICAgICA8dWwgY2xhc3M9XCJ1bnN0eWxlZCBjbGVhcmZpeFwiIGRhdGEtaXRlbXM+PC91bD5cXFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmJmLWFkZFwiIGRhdGEtYWN0aW9uPVwiYWRkXCI+QWRkPC9idXR0b24+XFxcbiAgICA8L2Rpdj5cXFxuICAnKTtcbiAgICAgICAgRm9ybS5lZGl0b3JzLkxpc3QuSXRlbS50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gICAgPGxpIGNsYXNzPVwiY2xlYXJmaXhcIj5cXFxuICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiIGRhdGEtZWRpdG9yPjwvZGl2PlxcXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBiYmYtZGVsXCIgZGF0YS1hY3Rpb249XCJyZW1vdmVcIj4mdGltZXM7PC9idXR0b24+XFxcbiAgICA8L2xpPlxcXG4gICcpO1xuICAgICAgICBGb3JtLmVkaXRvcnMuTGlzdC5PYmplY3QudGVtcGxhdGUgPSBGb3JtLmVkaXRvcnMuTGlzdC5OZXN0ZWRNb2RlbC50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJ1xcXG4gICAgPGRpdiBjbGFzcz1cImJiZi1saXN0LW1vZGFsXCI+PCU9IHN1bW1hcnkgJT48L2Rpdj5cXFxuICAnKTtcbiAgICB9XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGVzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb3JtVmlldy90ZW1wbGF0ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyO1xuXG4gIHJldHVybiBcIiAgICA8cCBjbGFzcz1cXFwiRm9ybUdyb3VwX19oZWxwTWVzc2FnZVxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5oZWxwIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oZWxwIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJoZWxwXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3A+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiO1xuXG4gIHJldHVybiBcIjxkaXZcXG4gIGNsYXNzPVxcXCJGb3JtR3JvdXAgRm9ybUdyb3VwLS1cIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMua2V5IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXkgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImtleVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcbiAgPGxhYmVsIGNsYXNzPVxcXCJGb3JtR3JvdXBfX2xhYmVsXFxcIiBmb3I9XFxcIlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuZWRpdG9ySWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmVkaXRvcklkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJlZGl0b3JJZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvbGFiZWw+XFxuICA8c3BhbiBjbGFzcz1cXFwiRm9ybUdyb3VwX19jb250cm9sXFxcIiBkYXRhLWVkaXRvcj48L3NwYW4+XFxuICA8cCBjbGFzcz1cXFwiRm9ybUdyb3VwX19lcnJvck1lc3NhZ2VcXFwiIGRhdGEtZXJyb3I+PC9wPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlbHAgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybUZpZWxkLmhic1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLkNoaWxkSG9sZGVyVmlldyA9IHJlcXVpcmUoJy4vQ2hpbGRIb2xkZXJWaWV3Jyk7XG5leHBvcnRzLlZpZXcgPSByZXF1aXJlKCcuL1ZpZXcnKTtcbmV4cG9ydHMuSXRlbVZpZXcgPSByZXF1aXJlKCcuL0l0ZW1WaWV3Jyk7XG5leHBvcnRzLkxheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG5leHBvcnRzLkxpc3QgPSByZXF1aXJlKCcuL0xpc3QnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgVmlldyA9IHJlcXVpcmUoJy4vVmlldycpO1xudmFyIENoaWxkSG9sZGVyVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoaWxkSG9sZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGlsZEhvbGRlclZpZXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IEJhY2tib25lLkNoaWxkVmlld0NvbnRhaW5lcigpO1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQ2hpbGRIb2xkZXJWaWV3LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmlldywgaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdiZWZvcmU6YWRkOmNoaWxkJywgdmlldyk7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBjaGlsZCB2aWV3IGl0c2VsZiBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAgICAgLy8gcmVtb3ZlIGFuZC9vciBkZXN0cm95IGl0IGxhdGVyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uYWRkKHZpZXcpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHZpZXcsICdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudmlld0Rlc3Ryb3llZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRWaWV3KHZpZXcsIGluZGV4KTtcbiAgICAgICAgTWFyaW9uZXR0ZS50cmlnZ2VyTWV0aG9kLmNhbGwodmlldywgJ3Nob3cnKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdhZGQ6Y2hpbGQnLCB2aWV3KTtcbiAgICB9O1xuICAgIC8vIHJlbmRlciB0aGUgY2hpbGQgdmlld1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUucmVuZGVyQ2hpbGRWaWV3ID0gZnVuY3Rpb24gKHZpZXcsIGluZGV4KSB7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoSHRtbCh2aWV3LCBpbmRleCk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLnZpZXdEZXN0cm95ZWQgPSBmdW5jdGlvbiAodmlldykge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZSh2aWV3KTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUuYXR0YWNoSHRtbCA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodmlldy5lbCk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5jYWxsKCdyZW5kZXInKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmNhbGwoJ2Rlc3Ryb3knKTtcbiAgICB9O1xuICAgIENoaWxkSG9sZGVyVmlldy5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgfTtcbiAgICBDaGlsZEhvbGRlclZpZXcucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hpbGRIb2xkZXJWaWV3O1xufSkoVmlldy5WaWV3KTtcbmV4cG9ydHMuQ2hpbGRIb2xkZXJWaWV3ID0gQ2hpbGRIb2xkZXJWaWV3O1xudmFyIEdlbmVyaWNDaGlsZEhvbGRlclZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHZW5lcmljQ2hpbGRIb2xkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdlbmVyaWNDaGlsZEhvbGRlclZpZXcoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gR2VuZXJpY0NoaWxkSG9sZGVyVmlldztcbn0pKENoaWxkSG9sZGVyVmlldyk7XG5leHBvcnRzLkdlbmVyaWNDaGlsZEhvbGRlclZpZXcgPSBHZW5lcmljQ2hpbGRIb2xkZXJWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hpbGRIb2xkZXJWaWV3LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvQ2hpbGRIb2xkZXJWaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCdiYWNrYm9uZS5tYXJpb25ldHRlJyk7XG52YXIgTGF5b3V0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGF5b3V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExheW91dChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMgfHwge307XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzWydNb2RpZmllcnMnXSA9IHt9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExheW91dC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMYXlvdXQucHJvdG90eXBlLmhpZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0hpZGRlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB9O1xuICAgIExheW91dC5wcm90b3R5cGUuc2hvd1ZpZXcgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICBpZiAoc2hvdyA9PT0gdm9pZCAwKSB7IHNob3cgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGlkZGVuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExheW91dDtcbn0pKE1hcmlvbmV0dGUuTGF5b3V0Vmlldyk7XG5leHBvcnRzLkxheW91dCA9IExheW91dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxheW91dC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0xheW91dC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIExpc3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpc3Qob3B0aW9ucykge1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8IHt9O1xuICAgICAgICB0aGlzLmJlaGF2aW9yc1snTW9kaWZpZXJzJ10gPSB7fTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXN0LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIExpc3QucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5oaWRlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuJGVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgIGlmIChzaG93ID09PSB2b2lkIDApIHsgc2hvdyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4kZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGlzdDtcbn0pKE1hcmlvbmV0dGUuQ29tcG9zaXRlVmlldyk7XG5leHBvcnRzLkxpc3QgPSBMaXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGlzdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL0xpc3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL2RhdmV0YXlscy9wcm9qZWN0cy9kYXZldGF5bHMvbWFyaW9uZXR0ZV9saWIvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIlxcbjxkaXYgY2xhc3M9XFxcIkZvcm1WaWV3X19maWVsZHNSZWdpb25cXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIkZvcm1WaWV3X19idXR0b25zUmVnaW9uXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJGb3JtVmlld19fZGlzYWJsZVxcXCI+PC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybVZpZXcvRm9ybVZpZXcuaGJzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBJdGVtVmlldyA9IHJlcXVpcmUoJy4uLy4uL3ZpZXdzL0l0ZW1WaWV3Jyk7XG52YXIgU3Bpbm5lclZpZXcgPSByZXF1aXJlKCcuLi9TcGlubmVyVmlldy9TcGlubmVyVmlldycpO1xudmFyIE5vdGljZVZpZXdNb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdGljZVZpZXdNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RpY2VWaWV3TW9kZWwoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZGVyOiAnJyxcbiAgICAgICAgICAgIGJvZHk6ICcnLFxuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBjYW5EaXNtaXNzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJoZWFkZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdoZWFkZXInKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ2hlYWRlcicsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGljZVZpZXdNb2RlbC5wcm90b3R5cGUsIFwiYm9keVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5nZXQoJ2JvZHknKTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5zZXQoJ2JvZHknLCB2YWx1ZSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImJ1dHRvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdidXR0b25zJyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RpY2VWaWV3TW9kZWwucHJvdG90eXBlLCBcImNhbkRpc21pc3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZ2V0KCdjYW5EaXNtaXNzJyk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMuc2V0KCdjYW5EaXNtaXNzJywgdmFsdWUpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90aWNlVmlld01vZGVsLnByb3RvdHlwZSwgXCJsb2FkaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmdldCgnbG9hZGluZycpOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLnNldCgnbG9hZGluZycsIHZhbHVlKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE5vdGljZVZpZXdNb2RlbDtcbn0pKEJhY2tib25lLk1vZGVsKTtcbmV4cG9ydHMuTm90aWNlVmlld01vZGVsID0gTm90aWNlVmlld01vZGVsO1xudmFyIE5vdGljZVZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RpY2VWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdGljZVZpZXcob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSAnTm90aWNlVmlldyc7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXF1aXJlKCcuL25vdGljZS5oYnMnKTtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gJ3NlY3Rpb24nO1xuICAgICAgICB0aGlzLnVpID0ge1xuICAgICAgICAgICAgYnV0dG9uczogJy5Ob3RpY2VWaWV3X19idG5zJ1xuICAgICAgICB9O1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMubW9kZWwgfHwgbmV3IE5vdGljZVZpZXdNb2RlbCgpO1xuICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuaGVhZGVyID0gb3B0aW9ucy5oZWFkZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5ib2R5ID0gb3B0aW9ucy5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYnV0dG9ucyA9IG9wdGlvbnMuYnV0dG9ucztcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4ob3B0aW9ucy5sb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5sb2FkaW5nID0gb3B0aW9ucy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzQm9vbGVhbihvcHRpb25zLmNhbkRpc21pc3MpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNhbkRpc21pc3MgPSBvcHRpb25zLmNhbkRpc21pc3M7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlJywgdGhpcy5yZW5kZXIpO1xuICAgIH1cbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9sb2FkaW5nVmlldykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ1ZpZXcgPSBuZXcgU3Bpbm5lclZpZXcuU3Bpbm5lclZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy5fbG9hZGluZ1ZpZXcuZWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ1ZpZXcuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdWaWV3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpLmJ1dHRvbnMuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5nZXQoJ2J1dHRvbnMnKS5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICAgIGJ0bi5yZW5kZXIoKTtcbiAgICAgICAgICAgIF90aGlzLmxpc3RlblRvKGJ0biwgJ2NsaWNrJywgX3RoaXMub25CdXR0b25DbGlja2VkKTtcbiAgICAgICAgICAgIF90aGlzLnVpLmJ1dHRvbnMuYXBwZW5kKGJ0bi5lbCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuY2FuRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0KCdjYW5EaXNtaXNzJyk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nVmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdWaWV3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnNob3coKTtcbiAgICB9O1xuICAgIE5vdGljZVZpZXcucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KHByb3BlcnRpZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93KCk7XG4gICAgfTtcbiAgICBOb3RpY2VWaWV3LnByb3RvdHlwZS5kZXN0cm95QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5idXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgYnRuLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWwuYnV0dG9ucy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgTm90aWNlVmlldy5wcm90b3R5cGUub25CdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKCdidXR0b246Y2xpY2tlZCcpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vdGljZVZpZXc7XG59KShJdGVtVmlldy5JdGVtVmlldyk7XG5leHBvcnRzLk5vdGljZVZpZXcgPSBOb3RpY2VWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWNlVmlldy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTm90aWNlVmlldy9Ob3RpY2VWaWV3LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9kYXZldGF5bHMvcHJvamVjdHMvZGF2ZXRheWxzL21hcmlvbmV0dGVfbGliL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMj1cImZ1bmN0aW9uXCI7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiaGVhZGluZyBoZWFkaW5nLS1ub3RpY2UgYW5pbWF0ZWQgYm91bmNlSW5cXFwiPlxcbiAgICA8aDE+XCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmhlYWRlciB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVhZGVyIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJoZWFkZXJcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMT5cXG4gICAgPHA+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5ib2R5IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ib2R5IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJib2R5XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3A+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiTm90aWNlVmlld19fYnRuc1xcXCI+PC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTm90aWNlVmlldy9ub3RpY2UuaGJzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIEV4Y2VwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXhjZXB0aW9uKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgY29uc29sZS53YXJuKCdFWENFUFRJT04nLCB0aGlzKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwibWVzc2FnZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwic3RhY2tcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yLnN0YWNrO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgJzogJyArIHRoaXMubWVzc2FnZTtcbiAgICB9O1xuICAgIHJldHVybiBFeGNlcHRpb247XG59KSgpO1xuZXhwb3J0cy5FeGNlcHRpb24gPSBFeGNlcHRpb247XG52YXIgRG9jdW1lbnRFeGlzdHNFeGNlcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBEb2N1bWVudEV4aXN0c0V4Y2VwdGlvbjtcbn0pKEV4Y2VwdGlvbik7XG5leHBvcnRzLkRvY3VtZW50RXhpc3RzRXhjZXB0aW9uID0gRG9jdW1lbnRFeGlzdHNFeGNlcHRpb247XG52YXIgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbjtcbn0pKEV4Y2VwdGlvbik7XG5leHBvcnRzLk5vdEltcGxlbWVudGVkRXhjZXB0aW9uID0gTm90SW1wbGVtZW50ZWRFeGNlcHRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FeGNlcHRpb25zLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvRXhjZXB0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcmZhY2VzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW50ZXJmYWNlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZScpO1xudmFyIEFwaUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcGlDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwaUNvbnRyb2xsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gQXBpQ29udHJvbGxlcjtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuQXBpQ29udHJvbGxlciA9IEFwaUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcGkuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb250cm9sbGVycy9BcGkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQXBwJyk7XG52YXIgQ29tcG9uZW50Q29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbXBvbmVudENvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50Q29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIENvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodmlldywgb3B0aW9ucykge1xuICAgICAgICBpZiAoIShvcHRpb25zLnJlZ2lvbiAmJiB0aGlzLl9tYWluVmlldykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHNob3VsZCBub3QgQHNob3cgdGhlIG1haW4gdmlldywgdXNlIEBzZXRNYWluVmlldyB3aXRoIGNvbXBvbmVudHMgYW5kIEBzaG93IGZyb20gdGhlIGFwcHMgY29udHJvbGxlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNob3cuY2FsbCh0aGlzLCB2aWV3LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbXBvbmVudENvbnRyb2xsZXI7XG59KShBcHBDb250cm9sbGVyLkFwcENvbnRyb2xsZXIpO1xuZXhwb3J0cy5Db21wb25lbnRDb250cm9sbGVyID0gQ29tcG9uZW50Q29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbXBvbmVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL0NvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlJyk7XG52YXIgUm91dGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJvdXRlckNvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUm91dGVyQ29udHJvbGxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5hY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR1cEFjdGlvbnMob3B0aW9ucy5hY3Rpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuYXV0aG9yaXplQW5BY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRBY3Rpb25Qb2xpY3koYWN0aW9uQ29uZmlnKS5pc0F1dGhvcml6ZWQoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKTtcbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGlvblVuYXV0aG9yaXplZCA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIlwiICsgYWN0aW9uTmFtZSArIFwiIHdhcyB1bmF1dGhvcml6ZWRcIik7XG4gICAgICAgIGVyci5uYW1lID0gJ0FjdGlvblVuYXV0aG9yaXplZCc7XG4gICAgICAgIGVyci5hY3Rpb25OYW1lID0gYWN0aW9uTmFtZTtcbiAgICAgICAgZXJyLmFjdGlvbkNvbmZpZyA9IGFjdGlvbkNvbmZpZztcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuY2FsbEFjdGlvblVuYXV0aG9yaXplZCA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcudW5hdXRob3JpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZy51bmF1dGhvcml6ZWQuY2FsbCh0aGlzLCBhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9uKCdhY3Rpb25VbmF1dGhvcml6ZWQnKS5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlckNvbnRyb2xsZXIucHJvdG90eXBlLmRlZmF1bHRQb2xpY3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQWN0aW9uUG9saWN5KCk7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fc2V0dXBBY3Rpb25zID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgXy5lYWNoKGFjdGlvbnMsIGZ1bmN0aW9uIChjb25maWcsIGtleSkge1xuICAgICAgICAgICAgX3RoaXMuYWRkQWN0aW9uKGtleSwgY29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uQ29uZmlnID0gZnVuY3Rpb24gKGFjdGlvbkNvbmZpZykge1xuICAgICAgICBpZiAoYWN0aW9uQ29uZmlnID09IG51bGwpIHtcbiAgICAgICAgICAgIGFjdGlvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkgeyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFjdGlvbkNvbmZpZ0Zyb21GbihhY3Rpb25Db25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvbkNvbmZpZ0Zyb21GbiA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm46IGZuXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBSb3V0ZXJDb250cm9sbGVyLnByb3RvdHlwZS5fZ2V0QWN0aW9uRnVuY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oYWN0aW9uQ29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnLmZuO1xuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuX2dldEFjdGlvblBvbGljeSA9IGZ1bmN0aW9uIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhY3Rpb25Db25maWcpIHx8ICFhY3Rpb25Db25maWcucG9saWN5KSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvbGljeSA9IHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0UG9saWN5Jyk7XG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGRlZmF1bHRQb2xpY3kpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRQb2xpY3kuY2FsbCh0aGlzLCBhY3Rpb25Db25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRQb2xpY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnLnBvbGljeTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZykge1xuICAgICAgICB2YXIgYXR0YWNoZXIgPSB0aGlzO1xuICAgICAgICBhY3Rpb25Db25maWcgPSB0aGlzLl9nZXRBY3Rpb25Db25maWcoYWN0aW9uQ29uZmlnKTtcbiAgICAgICAgdmFyIF9mbiA9IHRoaXMuX2dldEFjdGlvbkZ1bmN0aW9uKGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oX2ZuKSkge1xuICAgICAgICAgICAgYXR0YWNoZXJbYWN0aW9uTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9uKCdhdXRob3JpemVBbkFjdGlvbicpLmNhbGwodGhpcywgYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdBY3Rpb25VbmF1dGhvcml6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uQ29uZmlnLmludGVybmFsQWN0aW9uRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsQWN0aW9uVW5hdXRob3JpemVkKGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbEFjdGlvblVuYXV0aG9yaXplZChhY3Rpb25OYW1lLCBhY3Rpb25Db25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJveHlpbmcgdGhyb3VnaCBhbiBhdXRob3JpemUgbWV0aG9kIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJvdXRlckNvbnRyb2xsZXI7XG59KShCYXNlQ29udHJvbGxlci5CYXNlQ29udHJvbGxlcik7XG5leHBvcnRzLlJvdXRlckNvbnRyb2xsZXIgPSBSb3V0ZXJDb250cm9sbGVyO1xudmFyIEFjdGlvblBvbGljeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvblBvbGljeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb25Qb2xpY3kob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgQWN0aW9uUG9saWN5LnByb3RvdHlwZS5pc0F1dGhvcml6ZWQgPSBmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNBdXRob3JpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzQXV0aG9yaXplZC5jYWxsKHRoaXMsIGFjdGlvbk5hbWUsIGFjdGlvbkNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvblBvbGljeTtcbn0pKEJhc2VDb250cm9sbGVyLkJhc2VDb250cm9sbGVyKTtcbmV4cG9ydHMuQWN0aW9uUG9saWN5ID0gQWN0aW9uUG9saWN5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGVyQ29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRyb2xsZXJzL1JvdXRlckNvbnRyb2xsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgU3RhdGljQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhdGljQ29udHJvbGxlcihvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdzZWN0aW9uJztcbiAgICAgICAgdGhpcy5jbG9uZUNvbnRleHQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB9XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuYXR0cmlidXRlcyA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLmNvbnRleHRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRlbXBsYXRlRm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RlbXBsYXRlIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5jbGFzc05hbWUgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICBpZiAoaGFzaCA9PT0gdm9pZCAwKSB7IGhhc2ggPSB7fTsgfVxuICAgICAgICB2YXIgY2xhc3NlcztcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IG11c3Qgc3BlY2lmeSBhIG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzaFtcImNsYXNzXCJdKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gaGFzaFtcImNsYXNzXCJdLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBfLnJlc3VsdCh0aGlzLCAnYXR0cmlidXRlcycpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzW1wiY2xhc3NcIl0pIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfLnVuaW9uKGNsYXNzZXMsIGF0dHJpYnV0ZXNbXCJjbGFzc1wiXS5zcGxpdCgnICcpKTtcbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbG9uZUNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gXy5jbG9uZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9jb21wb25lbnROYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuX3JlZ2lvbnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGV4dC5fcmVnaW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLm1peGluSGFzaCA9IGZ1bmN0aW9uIChjb250ZXh0LCBoYXNoKSB7XG4gICAgICAgIGlmIChoYXNoID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhc2ggPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGV4dFByb3BzID0gXy5yZXN1bHQodGhpcywgJ2NvbnRleHRQcm9wZXJ0aWVzJyk7XG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGNvbnRleHRQcm9wcykpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eUtleXMgPSBfLmtleXMoY29udGV4dFByb3BzKTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gXy5waWNrKGhhc2gsIHByb3BlcnR5S2V5cyk7XG4gICAgICAgICAgICByZXR1cm4gXy5leHRlbmQoY29udGV4dCwgY29udGV4dFByb3BzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50VGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIHRlbXBsYXRlIG9uIHRoaXMgc3RhdGljIGNvbnRyb2xsZXInKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzKGhhc2gpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IF8ub21pdChhdHRyaWJ1dGVzLCAnY2xhc3MnKTtcbiAgICAgICAgICAgIHZhciBhdHRyID0gXy5tYXAoYXR0cmlidXRlcyB8fCB7fSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcoaGFzaFtrZXldIHx8IF8uaXNGaW5pdGUoaGFzaFtrZXldKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyBoYXNoW2tleV0gKyBcIlxcXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXy5pc1N0cmluZyh2YWwgfHwgXy5pc0Zpbml0ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGtleSArIFwiPVxcXCJcIiArIHZhbCArIFwiXFxcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGF0dHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgJyArIGF0dHIuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbm5lckJvZHkgPSBmdW5jdGlvbiAoY29udGV4dCwgZm4pIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmbihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGljQ29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMubWl4aW5IYXNoKHRoaXMuY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5fX2JvZHlfXyA9IHRoaXMuZ2V0SW5uZXJCb2R5KHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCksIG9wdGlvbnMuZm4pO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXR0cmlidXRlcyA9IHRoaXMuZ2V0QXR0cmlidXRlcyhvcHRpb25zLmhhc2gpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJPdXRlckh0bWwodGhpcy5jb250ZXh0LCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29udGV4dC5jbGFzc05hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0aGlzLmNvbnRleHQuYXR0cmlidXRlc1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN0YXRpY0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlck91dGVySHRtbCA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXM7XG4gICAgICAgIHZhciB0YWdOYW1lID0gXy5yZXN1bHQodGhpcywgJ3RhZ05hbWUnKTtcbiAgICAgICAgcmV0dXJuIFtcIjxcIiArIHRhZ05hbWUsIGF0dHJpYnV0ZXMsIFwiIGNsYXNzPVxcXCJcIiArIGNsYXNzTmFtZSArIFwiXFxcIlwiLCBcIj5cXG5cIiwgdGhpcy5yZW5kZXJDb250ZW50VGVtcGxhdGUoY29udGV4dCksIFwiPC9cIiArIHRhZ05hbWUgKyBcIj5cIl0uam9pbignJyk7XG4gICAgfTtcbiAgICBTdGF0aWNDb250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXJDb250ZW50VGVtcGxhdGUgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICB2YXIgdG1wbCA9IHRoaXMuZ2V0Q29tcG9uZW50VGVtcGxhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRtcGwoY29udGV4dCk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhdGljQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLlN0YXRpY0NvbnRyb2xsZXIgPSBTdGF0aWNDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RhdGljLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29udHJvbGxlcnMvU3RhdGljLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuY29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xuZXhwb3J0cy5pMThuZXh0ID0gcmVxdWlyZSgnLi9pMThuZXh0Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hhbmRsZWJhcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NsaWVudCcpO1xuZnVuY3Rpb24gaW5pdENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICAgIGlmICghY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyByZXF1aXJlcyBoYW5kbGViYXJzIHRvIGhhdmUgYmVlbiBwYXNzZWQgaW4gdG8gY29uZmlndXJlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudENvbnRyb2xsZXIobmFtZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgQ29udHJvbGxlciA9IGNvbXBvbmVudHNbbmFtZV07XG4gICAgICAgIGlmIChDb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xsZXIoe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBjb250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIFwiICsgbmFtZSArIFwiIGNvbXBvbmVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgPT09IHZvaWQgMCkgeyBhdHRyaWJ1dGVzID0ge307IH1cbiAgICAgICAgdmFyIGF0dHIgPSBfLm1hcChhdHRyaWJ1dGVzIHx8IHt9LCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcgJyArIGF0dHIuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsYXNzTmFtZShuYW1lLCBoYXNoKSB7XG4gICAgICAgIHZhciBjbGFzc2VzO1xuICAgICAgICBpZiAoaGFzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYXNoID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsYXNzTmFtZSBtdXN0IHNwZWNpZnkgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2hbXCJjbGFzc1wiXSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGhhc2hbXCJjbGFzc1wiXS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMudW5zaGlmdChuYW1lKTtcbiAgICAgICAgcmV0dXJuIGhhc2hbXCJjbGFzc1wiXSA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2MnLCBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IGdldENvbXBvbmVudENvbnRyb2xsZXIobmFtZSwgdGhpcyk7XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLnJlbmRlcihvcHRpb25zKTtcbiAgICB9KTtcbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2luX3JlZ2lvbicsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgZm46IG9wdGlvbnMuZm5cbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25maWcuY29uZmlnLmhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ3JlZ2lvbicsIGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRQYXRoID0gXCJcIiArIHRoaXMuX2NvbXBvbmVudE5hbWUgKyBcIl9fXCIgKyBuYW1lO1xuICAgICAgICB2YXIgaW5fcmVnaW9uID0gdGhpcy5fcmVnaW9uc1tuYW1lXTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBpbl9yZWdpb24gPyBpbl9yZWdpb24uZm4odGhpcykgOiAnJztcbiAgICAgICAgdmFyIGhhc2ggPSBvcHRpb25zLmhhc2ggfHwge307XG4gICAgICAgIGNsYXNzTmFtZShcIlwiICsgY29tcG9uZW50UGF0aCArIFwiLXJlZ2lvblwiLCBoYXNoKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBnZXRBdHRyaWJ1dGVzKGhhc2gpO1xuICAgICAgICByZXR1cm4gWyc8ZGl2JywgYXR0cmlidXRlcywgJz4nLCBjb250ZW50LCBcIjwvZGl2PlwiXS5qb2luKCcnKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaW5pdENvbXBvbmVudHMgPSBpbml0Q29tcG9uZW50cztcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudHMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oYW5kbGViYXJzL2NvbXBvbmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIGkxOG5leHQgPSByZXF1aXJlKCdpMThuZXh0Jyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY2xpZW50Jyk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBoYW5kbGViYXJzID0gY29uZmlnLmNvbmZpZy5oYW5kbGViYXJzO1xuICAgIC8qKlxuICAgICAqIEdldCB0cmFuc2xhdGlvbiBmb3IgYSBnaXZlbiBrZXksIHBhc3NpbmcgdGhlIG9wdGlvbnMgaGFzaCB0byBpMThuZXh0XG4gICAgICogdG8gYWxsb3cgZm9yIHZhcmlhYmxlIHJlcGxhY2VtZW50XG4gICAgICoge3trIGhlYWRlciBteVZhcj1cImhlbGxvXCJ9fVxuICAgICAqL1xuICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJ0XCIsIGZ1bmN0aW9uIChpMThuX2tleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIHdyYXBXaXRoS2V5OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIF8uZXh0ZW5kKG9wdHMsIG9wdGlvbnMuaGFzaCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBpMThuZXh0LnQoaTE4bl9rZXksIG9wdHMpO1xuICAgICAgICB2YXIgYXR0cnMgPSBbXCJkYXRhLXQ9XFxcIlwiICsgaTE4bl9rZXkgKyBcIlxcXCJcIl07XG4gICAgICAgIF8uZWFjaChvcHRzLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCB8fCBfLmlzRmluaXRlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJzLnB1c2goXCJkYXRhLVwiICsga2V5ICsgXCI9XFxcIlwiICsgdmFsICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdHNbJ3dyYXBXaXRoS2V5J10pIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIFwiICsgKGF0dHJzLmpvaW4oJyAnKSkgKyBcIj5cIiArIChuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKHJlc3VsdCkpICsgXCI8L3NwYW4+XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRpb24gaW4gYSBibG9jayBjb250ZXh0XG4gICAgICovXG4gICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcInRyXCIsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0gaTE4bmV4dC5mdW5jdGlvbnMuZXh0ZW5kKG9wdGlvbnMuaGFzaCwgY29udGV4dCk7XG4gICAgICAgIGlmIChvcHRpb25zLmZuKSB7XG4gICAgICAgICAgICBvcHRzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZm4oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IGkxOG5leHQudChvcHRzLmtleSwgb3B0cyk7XG4gICAgICAgIHJldHVybiBuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKHJlc3VsdCk7XG4gICAgfSk7XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aTE4bmV4dC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hhbmRsZWJhcnMvaTE4bmV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaTE4bmV4dFwiXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuQXBwID0gcmVxdWlyZSgnLi9BcHAnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm91dGVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnYmFja2JvbmUubWFyaW9uZXR0ZScpO1xudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xudmFyIEFQUF9ST1VURVJfRVZFTlRTID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQVBQX1JPVVRFUl9FVkVOVFMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQVBQX1JPVVRFUl9FVkVOVFMoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBUFBfUk9VVEVSX0VWRU5UUy5maXJzdFJvdXRlID0gbmV3IEFQUF9ST1VURVJfRVZFTlRTKCdmaXJzdFJvdXRlJyk7XG4gICAgcmV0dXJuIEFQUF9ST1VURVJfRVZFTlRTO1xufSkoY29uc3RhbnRzLlN0cmluZ0NvbnN0YW50KTtcbmV4cG9ydHMuQVBQX1JPVVRFUl9FVkVOVFMgPSBBUFBfUk9VVEVSX0VWRU5UUztcbnZhciBBcHBSb3V0ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcHBSb3V0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwUm91dGVyKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBSb3V0ZXIgJyArIG9wdGlvbnMubmFtZSArICcgY3JlYXRlZCcsIG9wdGlvbnMuYXBwUm91dGVzKTtcbiAgICB9XG4gICAgQXBwUm91dGVyLnByb3RvdHlwZS5vblJvdXRlID0gZnVuY3Rpb24gKHJvdXRlTmFtZSwgcm91dGVQYXRoLCByb3V0ZUFyZ3MpIHtcbiAgICAgICAgaWYgKEFwcFJvdXRlci5fZmlyc3RSb3V0ZVRyaWdnZXJlZCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEFQUF9ST1VURVJfRVZFTlRTLmZpcnN0Um91dGUudmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEFwcFJvdXRlci5fZmlyc3RSb3V0ZVRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBcHBSb3V0ZXI7XG59KShNYXJpb25ldHRlLkFwcFJvdXRlcik7XG5leHBvcnRzLkFwcFJvdXRlciA9IEFwcFJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwcC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcnMvQXBwLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMubWRvd24gPSByZXF1aXJlKCcuL21kb3duJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0aWNraXQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIFNob3dkb3duID0gcmVxdWlyZSgnc2hvd2Rvd24nKTtcbnZhciBtZG93biA9IG5ldyBTaG93ZG93bi5Db252ZXJ0ZXIoKTtcbmV4cG9ydHMuc2VsZWN0b3IgPSAnW2RhdGEtbWRvd25dJztcbmV4cG9ydHMudXBkYXRlTWV0aG9kID0gJ2h0bWwnO1xuZnVuY3Rpb24gb25HZXQodmFsKSB7XG4gICAgcmV0dXJuIG1kb3duLm1ha2VIdG1sKHZhbCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZG93bi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0aWNraXQvbWRvd24uanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU3X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNob3dkb3duXCJcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5leHBvcnRzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMnKTtcbmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vRGlzcGF0Y2hlcicpO1xuZXhwb3J0cy5TdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgQWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY3Rpb24odHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uO1xufSkoKTtcbmV4cG9ydHMuQWN0aW9uID0gQWN0aW9uO1xudmFyIEFjdGlvbkNyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFjdGlvbkNyZWF0b3IoZGlzcGF0Y2hlcikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uQ3JlYXRvcjtcbn0pKCk7XG5leHBvcnRzLkFjdGlvbkNyZWF0b3IgPSBBY3Rpb25DcmVhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWN0aW9ucy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZsdXgvYWN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcmZhY2VzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9pbnRlcmZhY2VzLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xudmFyIGZsdXggPSByZXF1aXJlKCdmbHV4Jyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG52YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BhdGNoZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXlsb2FkUXVldWUgPSBbXTtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnJlZ2lzdGVyU3RvcmUgPSBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgdGhpcy5zdG9yZXMucHVzaChzdG9yZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUpKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoUGF5bG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB0aGlzLnBheWxvYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzcGF0Y2hpbmc6JywgcGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlTdG9yZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFBheWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUubm90aWZ5U3RvcmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5ub3RpZnlJZlN0YXRlQ2hhbmdlZCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVBheWxvYWQgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB0aGlzLnBheWxvYWRRdWV1ZS5wdXNoKHBheWxvYWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnRGlzcGF0Y2hlcjogSGFuZGxpbmcnLCBwYXlsb2FkKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc3BhdGNoaW5nKVxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFBheWxvYWQoKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmhhbmRsZVNlcnZlckFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGNvbnN0YW50cy5BQ1RJT05fU09VUkNFUy5TZXJ2ZXJBY3Rpb24sXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBheWxvYWQocGF5bG9hZCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVEZXZpY2VBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb25zdGFudHMuQUNUSU9OX1NPVVJDRVMuRGV2aWNlQWN0aW9uLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlVmlld0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGNvbnN0YW50cy5BQ1RJT05fU09VUkNFUy5WaWV3QWN0aW9uLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXlsb2FkKHBheWxvYWQpO1xuICAgIH07XG4gICAgcmV0dXJuIERpc3BhdGNoZXI7XG59KShmbHV4LkRpc3BhdGNoZXIpO1xuZXhwb3J0cy5EaXNwYXRjaGVyID0gRGlzcGF0Y2hlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpc3BhdGNoZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mbHV4L0Rpc3BhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzYyX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZsdXhcIlxuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbnZhciBFdmVudGVkQ2xhc3MgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvRXZlbnRlZENsYXNzJyk7XG52YXIgU3RvcmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdG9yZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdG9yZShkaXNwYXRjaGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoVG9rZW4gPSBkaXNwYXRjaGVyLnJlZ2lzdGVyU3RvcmUodGhpcyk7XG4gICAgfVxuICAgIFN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7IH07XG4gICAgU3RvcmUucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLm5vdGlmeUlmU3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZUhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVIYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoY29uc3RhbnRzLkVWRU5UX1RZUEVTLkNoYW5nZS52YWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUuYWRkQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihjb25zdGFudHMuRVZFTlRfVFlQRVMuQ2hhbmdlLnZhbCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgU3RvcmUucHJvdG90eXBlLnJlbW92ZUNoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2ZmKGNvbnN0YW50cy5FVkVOVF9UWVBFUy5DaGFuZ2UudmFsLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmU7XG59KShFdmVudGVkQ2xhc3MuRXZlbnRlZENsYXNzKTtcbmV4cG9ydHMuU3RvcmUgPSBTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0b3JlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZmx1eC9TdG9yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgRXZlbnRlZENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudGVkQ2xhc3MoKSB7XG4gICAgfVxuICAgIHJldHVybiBFdmVudGVkQ2xhc3M7XG59KSgpO1xuZXhwb3J0cy5FdmVudGVkQ2xhc3MgPSBFdmVudGVkQ2xhc3M7XG5fLmV4dGVuZChFdmVudGVkQ2xhc3MucHJvdG90eXBlLCBCYWNrYm9uZS5FdmVudHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnRlZENsYXNzLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL0V2ZW50ZWRDbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBFeGNlcHRpb25zID0gcmVxdWlyZSgnLi4vRXhjZXB0aW9ucycpO1xudmFyIERlYm91bmNlZERvY0NvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VkRG9jQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICAgICAgdGhpcy5kb2NUaW1lVG9MaXZlID0gMTAwMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2NzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5jbGVhckV4cGlyZWREb2NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5jbGVhckFsbERvY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9jcy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHV0cyBhIGRvY3VtZW50IGluIHRvIHRoZSBhcnJheSBpZiBpdCBpcyBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIGlmICghdGhpcy5ieUlkKGRvYy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICAgIGRvYzogZG9jLFxuICAgICAgICAgICAgICAgIGV4cGlyZXM6IHRoaXMuZG9jVGltZVRvTGl2ZSA/IERhdGUubm93KCkgKyB0aGlzLmRvY1RpbWVUb0xpdmUgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb25zLkRvY3VtZW50RXhpc3RzRXhjZXB0aW9uKG5ldyBFcnJvcignRG9jdW1lbnQgJyArIGRvYy5pZCArICcgYWxyZWFkeSBleGlzdHMnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW50cnkgd2l0aCBkZXRhaWxzIGFib3V0IHRoZSBkb2Mgd2l0aCBhbiBpZFxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUuZW50cnlCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gXy5maW5kV2hlcmUodGhpcy5kb2NzLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgaWYgKGl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbGwgdGhlIGRvY3NcbiAgICAgKiBAcmV0dXJucyB7SURlYm91bmNlZERvY0l0ZW08VD5bXX1cbiAgICAgKi9cbiAgICBEZWJvdW5jZWREb2NDb250YWluZXIucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZG9jO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2F2ZWQgZG9jdW1lbnQgYnkgaXRzIGlkXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5ieUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpdGVtID0gXy5maW5kV2hlcmUodGhpcy5kb2NzLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmRvYztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgZG9jIGluIHRvIHRoZSBzdG9yZSwgaWYgaXQgZXhpc3RzXG4gICAgICogb3RoZXJ3aXNlIGFkZHMgaXRcbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZURvYyA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFkb2MuaWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21lcmdlRG9jIGRvY3VtZW50IG11c3QgaGF2ZSBhIHZhbGlkIGlkJyk7XG4gICAgICAgIHZhciBrZXlzID0gXy5rZXlzKGRvYyk7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuZW50cnlCeUlkKGRvYy5pZCk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nRG9jID0gZW50cnkuZG9jO1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICBfLmVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5tZXJnZURvY0tleShrZXksIGV4aXN0aW5nRG9jLCBkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lcmdlZDogY2hhbmdlZFByb3BlcnRpZXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllczogY2hhbmdlZFByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgZG9jOiBleGlzdGluZ0RvY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHV0KGRvYyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lcmdlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IGtleXMsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlZERvY0NvbnRhaW5lci5wcm90b3R5cGUubWVyZ2VEb2NLZXkgPSBmdW5jdGlvbiAoa2V5LCBleGlzdGluZ0RvYywgZG9jKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRvY1trZXldO1xuICAgICAgICBpZiAoIV8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0RvY1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nRG9jW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVib3VuY2VkRG9jQ29udGFpbmVyLnByb3RvdHlwZS5tZXJnZU11bHRpcGxlID0gZnVuY3Rpb24gKGRvY3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1lcmdlcyA9IGRvY3MubWFwKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tZXJnZURvYyhkb2MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlcztcbiAgICB9O1xuICAgIHJldHVybiBEZWJvdW5jZWREb2NDb250YWluZXI7XG59KSgpO1xuZXhwb3J0cy5EZWJvdW5jZWREb2NDb250YWluZXIgPSBEZWJvdW5jZWREb2NDb250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWJvdW5jZWREb2NDb250YWluZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlsaXRpZXMvRGVib3VuY2VkRG9jQ29udGFpbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBOYXZpZ2F0aW9uQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvbkNvbnRyb2xsZXInKTtcbnZhciBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyLk5hdmlnYXRpb25Db250cm9sbGVyKCk7XG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZpZ2F0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJ2JhY2tib25lLm1hcmlvbmV0dGUnKTtcbnZhciBOYXZpZ2F0aW9uQ29udHJvbGxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5hdmlnYXRpb25Db250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5hdmlnYXRpb25Db250cm9sbGVyKCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5SXNTdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIE5hdmlnYXRpb25Db250cm9sbGVyLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChyb3V0ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHJvdXRlLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCduYXZpZ2F0ZWQnLCByb3V0ZSk7XG4gICAgfTtcbiAgICBOYXZpZ2F0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q3VycmVudFJvdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZnJhZyA9IEJhY2tib25lLmhpc3RvcnkuZ2V0RnJhZ21lbnQoKTtcbiAgICAgICAgaWYgKF8uaXNFbXB0eShmcmFnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZztcbiAgICAgICAgfVxuICAgIH07XG4gICAgTmF2aWdhdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLnN0YXJ0SGlzdG9yeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChCYWNrYm9uZS5oaXN0b3J5KSB7XG4gICAgICAgICAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5SXNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5hdmlnYXRpb25Db250cm9sbGVyO1xufSkoTWFyaW9uZXR0ZS5Db250cm9sbGVyKTtcbmV4cG9ydHMuTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBOYXZpZ2F0aW9uQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRpb25Db250cm9sbGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL05hdmlnYXRpb25Db250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uL3R5cGluZ3MvdHNkLmQudHMnIC8+XG4ndXNlIHN0cmljdCc7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbi8qKlxuICogRXh0cmFjdCBhIHF1ZXJ5IHN0cmluZyB2YWx1ZVxuICogQHBhcmFtIHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIGtleVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGdldFF1ZXJ5KHNlYXJjaFN0cmluZywga2V5KSB7XG4gICAgdmFyIHZhbHVlcyA9IHNlYXJjaFN0cmluZy5zcGxpdChcIiZcIik7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZnQgPSB2YWx1ZXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICBpZiAoZnRbMF0gPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ0WzFdO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLmdldFF1ZXJ5ID0gZ2V0UXVlcnk7XG4vKipcbiAqIEV4dHJhY3QgdGhlIHNlYXJjaFN0cmluZyBxdWVyeSBzdHJpbmcgdmFsdWVzIGZyb20gYSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNlYXJjaFN0cmluZyh1cmwpIHtcbiAgICBpZiAoL1xcIy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuICAgIH1cbiAgICBpZiAoL1xcPy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLnNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZztcbi8qKlxuICogR2V0IHRoZSBjb3JyZWN0IHNlcGFyYXRvciBmb3IgYSB1cmwgYW5kIGEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZXBhcmF0b3IodXJsKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgICBpZiAoL1xcPy8udGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICc/JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuLyoqXG4gKiBKb2lucyB1cmwgcXVlcnkgc3RyaW5nIHZhbHVlc1xuICogQHBhcmFtIHVybHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW4oKSB7XG4gICAgdmFyIHVybHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB1cmxzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX21lcmdlID0gZnVuY3Rpb24gKG1lbW8sIHZhbCkge1xuICAgICAgICByZXR1cm4gbWVtbyArIChzZXBhcmF0b3IobWVtbykpICsgdmFsO1xuICAgIH07XG4gICAgcmV0dXJuIF8ucmVkdWNlKHVybHMsIF9tZXJnZSk7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuLyoqXG4gKiBKb2luIHVybCBwYXRoc1xuICogQHBhcmFtIHVybHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5QYXRocygpIHtcbiAgICB2YXIgdXJscyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHVybHNbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBfbWVyZ2UgPSBmdW5jdGlvbiAobWVtbywgdmFsKSB7XG4gICAgICAgIHJldHVybiBtZW1vICsgJy8nICsgdmFsO1xuICAgIH07XG4gICAgcmV0dXJuIF8ucmVkdWNlKHVybHMsIF9tZXJnZSk7XG59XG5leHBvcnRzLmpvaW5QYXRocyA9IGpvaW5QYXRocztcbmZ1bmN0aW9uIHBhcmFtKG9iaiwgc2VwYXJhdG9yLCBqb2luZXIpIHtcbiAgICBpZiAoc2VwYXJhdG9yID09PSB2b2lkIDApIHsgc2VwYXJhdG9yID0gJyYnOyB9XG4gICAgaWYgKGpvaW5lciA9PT0gdm9pZCAwKSB7IGpvaW5lciA9ICc9JzsgfVxuICAgIGZ1bmN0aW9uIF9wYXJhbShtZW1vLCB2YWwsIGtleSkge1xuICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmUgPSBtZW1vID8gbWVtbyArIHNlcGFyYXRvciA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIHByZSArIGtleSArIGpvaW5lciArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXy5yZWR1Y2Uob2JqLCBfcGFyYW0sICcnKTtcbn1cbmV4cG9ydHMucGFyYW0gPSBwYXJhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxpdGllcy91cmwuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gcHJldmVudEdsb2JhbGx5KCkge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgICBzdHlsZS53ZWJraXRUb3VjaENhbGxvdXQgPSBcIm5vbmVcIjtcbiAgICBzdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJub25lXCI7XG59XG5leHBvcnRzLnByZXZlbnRHbG9iYWxseSA9IHByZXZlbnRHbG9iYWxseTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbGl0aWVzL3ByZXZlbnRTZWxlY3Rpb25DYWxsb3V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=