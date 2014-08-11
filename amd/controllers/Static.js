define(function (require, exports, module) {var Backbone, StaticController, _;

_ = require('underscore');

Backbone = require('backbone');

StaticController = (function() {
  function StaticController(options) {
    if (options == null) {
      options = {};
    }
    this.options = options;
    this.model = options.model;
  }

  StaticController.prototype.tagName = 'section';

  StaticController.prototype.cloneContext = true;

  StaticController.prototype.className = function(hash) {
    var attributes, classes;
    if (hash == null) {
      hash = {};
    }
    if (!this.name) {
      throw new Error('Component must specify a name');
    }
    if (hash["class"]) {
      classes = hash["class"].split(' ');
    } else {
      classes = [];
    }
    attributes = _.result(this, 'attributes');
    if (attributes && attributes["class"]) {
      classes = _.union(classes, attributes["class"].split(' '));
    }
    classes.push(this.name);
    return classes.join(' ');
  };

  StaticController.prototype.getContext = function() {
    var context;
    if (this.model) {
      if (this.cloneContext) {
        context = _.clone(this.model);
        context._componentName = this.name;
      } else {
        context = this.model;
      }
    } else {
      context = {};
    }
    if (context._regions == null) {
      context._regions = [];
    }
    return context;
  };

  StaticController.prototype.mixinHash = function(context, hash) {
    if (hash == null) {
      hash = {};
    }
    return _.defaults(context, hash);
  };

  StaticController.prototype.getComponentTemplate = function() {
    throw new Error('There is no template on this static controller');
  };

  StaticController.prototype.getAttributes = function() {
    var attr, attributes;
    attributes = _.result(this, 'attributes');
    if (attributes) {
      attributes = _.omit(attributes, 'class');
      attr = _.map(attributes || {}, function(val, key) {
        if (_.isString(val || _.isFinite(val))) {
          return "" + key + "=\"" + val + "\"";
        } else {
          return '';
        }
      });
      if (attr.length) {
        return ' ' + attr.join(' ');
      } else {
        return '';
      }
    } else {
      return '';
    }
  };

  StaticController.prototype.getInnerBody = function(context, fn) {
    if (_.isFunction(fn)) {
      return context.__body__ = fn(context);
    } else {
      return delete context.__body__;
    }
  };

  StaticController.prototype.render = function(options) {
    if (options == null) {
      options = {};
    }
    this.context = this.getContext();
    this.mixinHash(this.context, options.hash);
    this.getInnerBody(this.context, options.fn);
    return this.renderOuterHtml(this.context, {
      className: this.className(options.hash)
    });
  };

  StaticController.prototype.renderOuterHtml = function(context, _arg) {
    var className;
    className = (_arg != null ? _arg : {}).className;
    return ["<" + this.tagName, this.getAttributes(), " class=\"" + className + "\"", ">\n", this.renderContentTemplate(context), "</" + this.tagName + ">"].join('');
  };

  StaticController.prototype.renderContentTemplate = function(context) {
    var tmpl;
    tmpl = this.getComponentTemplate();
    return tmpl(context);
  };

  return StaticController;

})();

_.extend(StaticController.prototype, Backbone.Events);

module.exports = StaticController;

});
