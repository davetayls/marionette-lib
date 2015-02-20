/// <reference path="../../typings/tsd.d.ts" />

import i18next = require('i18next');
import _ = require('underscore');
import config = require('../config/client');

export function init(){

  /**
   * Get translation for a given key, passing the options hash to i18next
   * to allow for variable replacement
   * {{k header myVar="hello"}}
   */
  config.config.handlebars.registerHelper("t", function(i18n_key, options) {
    var opts:{[key:string]:any} = {};
    _.extend(opts, options.hash);
    var result = i18next.t(i18n_key, opts);
    var attrs = ["data-t=\"" + i18n_key + "\""];
    _.each(opts, function(val, key) {
      if (_.isString(val || _.isFinite(val))) {
        return attrs.push("data-" + key + "=\"" + val + "\"");
      }
    });
    return "<span " + (attrs.join(' ')) + ">" + (new Handlebars.SafeString(result)) + "</span>";
  });

  /**
   * Translation in a block context
   */
  config.config.handlebars.registerHelper("tr", function(context, options) {
    var opts, result;
    opts = i18next.functions.extend(options.hash, context);
    if (options.fn) {
      opts.defaultValue = options.fn(context);
    }
    result = i18next.t(opts.key, opts);
    return new Handlebars.SafeString(result);
  });

}

