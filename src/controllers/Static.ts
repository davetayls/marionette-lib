/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');

export interface IStaticControllerOptions {
  model?:any;
  templateFn?:(data:any) => string;
}

export class StaticController {

  constructor(options:IStaticControllerOptions = {}) {
    this.options = options;
    this.model = options.model;
  }

  name:string;
  options:IStaticControllerOptions;
  model:any;
  tagName = 'section';
  cloneContext = true;
  context:any;

  attributes(hash:any):{[index:string]:string} {
    return {};
  }

  contextProperties():{[index:string]:any} {
    return {};
  }

  template():Function {
    if (this.options.templateFn) {
      return this.options.templateFn
    } else {
      throw new Error('template not implemented');
    }
  }

  className(hash:any = {}) {
    var classes:string[];
    if (!this.name) {
      throw new Error('Component must specify a name');
    }
    if (hash["class"]) {
      classes = hash["class"].split(' ');
    } else {
      classes = [];
    }
    var attributes = _.result(this, 'attributes');
    if (attributes && attributes["class"]) {
      classes = _.union(classes, attributes["class"].split(' '));
    }
    classes.push(this.name);
    return classes.join(' ');
  }

  getContext() {
    var context:any;
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
  }

  getChildContext() {
    return this.model;
  }

  mixinHash(context, hash) {
    var contextProps, properties, propertyKeys;
    if (hash == null) {
      hash = {};
    }
    contextProps = _.result(this, 'contextProperties');
    if (_.isObject(contextProps)) {
      propertyKeys = _.keys(contextProps);
      properties = _.pick(hash, propertyKeys);
      return _.extend(context, contextProps, properties);
    }
  }

  getComponentTemplate() {
    if (_.isFunction(this.template)) {
      return this.template();
    } else {
      throw new Error('There is no template on this static controller');
    }
  }

  getAttributes(hash) {
    var attributes = this.attributes(hash);
    if (attributes) {
      attributes = _.omit(attributes, 'class');
      var attr = _.map(attributes || {}, function(val, key) {
        if (_.isString(hash[key] || _.isFinite(hash[key]))) {
          return "" + key + "=\"" + hash[key] + "\"";
        } else if (_.isString(val || _.isFinite(val))) {
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
  }

  getInnerBody(context, fn) {
    if (_.isFunction(fn)) {
      return fn(context);
    }
  }

  render(options) {
    if (options == null) {
      options = {};
    }
    this.context = this.getContext();
    this.mixinHash(this.context, options.hash);
    this.context.className = this.className(options.hash);
    this.context.__body__ = this.getInnerBody(this.getChildContext(), options.fn);
    this.context.attributes = this.getAttributes(options.hash);
    return this.renderOuterHtml(this.context, {
      className: this.context.className,
      attributes: this.context.attributes
    });
  }

  renderOuterHtml(context, _arg) {
    var attributes, className, tagName, _ref;
    _ref = _arg != null ? _arg : {}, className = _ref.className, attributes = _ref.attributes;
    tagName = _.result(this, 'tagName');
    return ["<" + tagName, attributes, " class=\"" + className + "\"", ">\n", this.renderContentTemplate(context), "</" + tagName + ">"].join('');
  }

  renderContentTemplate(context) {
    var tmpl;
    tmpl = this.getComponentTemplate();
    return tmpl(context);
  }

}


