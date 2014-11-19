var Handlebars, fs, hbs, join, path, _;

_ = require('underscore');

fs = require('fs');

path = require('path');

join = path.join;

hbs = require('hbs');

Handlebars = hbs.handlebars;

module.exports = function(COMPONENT_DIR) {
  var className, getAttributes, getComponentController;
  getComponentController = function(name, context) {
    var Controller, controllerPath;
    controllerPath = join(COMPONENT_DIR, name, 'StaticController');
    Controller = require(controllerPath);
    return new Controller({
      model: context
    });
  };
  getAttributes = function(attributes) {
    var attr;
    if (attributes == null) {
      attributes = {};
    }
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
  };
  className = function(name, hash) {
    var classes;
    if (hash == null) {
      hash = {};
    }
    if (!name) {
      throw new Error('className must specify a name');
    }
    if (hash["class"]) {
      classes = hash["class"].split(' ');
    } else {
      classes = [];
    }
    classes.unshift(name);
    return hash["class"] = classes.join(' ');
  };
  Handlebars.registerHelper('c', function(name, options) {
    var controller;
    controller = getComponentController(name, this);
    return controller.render(options);
  });
  Handlebars.registerHelper('in_region', function(name, options) {
    return this._regions[name] = {
      fn: options.fn
    };
  });
  Handlebars.registerHelper('region', function(name, options) {
    var attributes, componentPath, content, hash, in_region;
    componentPath = "" + this._componentName + "__" + name;
    in_region = this._regions[name];
    content = in_region ? in_region.fn(this) : '';
    hash = options.hash || {};
    className("" + componentPath + "-region", hash);
    attributes = getAttributes(hash);
    return ['<div', attributes, '>', content, "</div>"].join('');
  });
};
