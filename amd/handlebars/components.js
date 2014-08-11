define(function (require, exports, module) {var Handlebars, className, components, getAttributes, getComponentController, _;

Handlebars = require('handlebars');

_ = require('underscore');

components = require('components');

getComponentController = function(name, context) {
  var Controller;
  Controller = components[name];
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

hbs.registerHelper('c', function(name, options) {
  var controller;
  controller = getComponentController(name, this);
  return controller.render(options);
});

hbs.registerHelper('in_region', function(name, options) {
  return this._regions[name] = {
    fn: options.fn
  };
});

hbs.registerHelper('region', function(name, options) {
  var attributes, componentPath, content, hash, in_region;
  componentPath = "" + this._componentName + "__" + name;
  in_region = this._regions[name];
  content = in_region ? in_region.fn(this) : '';
  hash = options.hash || {};
  className("" + componentPath + "-region", hash);
  attributes = getAttributes(hash);
  return ['<div', attributes, '>', content, "</div>"].join('');
});

});
