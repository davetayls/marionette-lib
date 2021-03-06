'use strict';
var Backbone, Marionette, _, _close, _getEl, _getName, _show;

_ = require('underscore');

Backbone = require('backbone');

Marionette = require('backbone.marionette');


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
