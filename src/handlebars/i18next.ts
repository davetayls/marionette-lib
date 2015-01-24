/// <reference path="../../typings/tsd.d.ts" />

import i18n = require('i18next');
import _ = require('underscore');
import config = require('../config/client');

export function init(){

  config.config.handlebars.registerHelper("t", function(i18n_key, options) {
    var attrs, opts, result;
    opts = {};
    _.extend(opts, options.hash);
    result = i18n.t(i18n_key, opts);
    attrs = ["data-t=\"" + i18n_key + "\""];
    _.each(opts, function(val, key) {
      if (_.isString(val || _.isFinite(val))) {
        return attrs.push("data-" + key + "=\"" + val + "\"");
      }
    });
    return "<span " + (attrs.join(' ')) + ">" + (new Handlebars.SafeString(result)) + "</span>";
  });

  config.config.handlebars.registerHelper("tr", function(context, options) {
    var opts, result;
    opts = i18n.functions.extend(options.hash, context);
    if (options.fn) {
      opts.defaultValue = options.fn(context);
    }
    result = i18n.t(opts.key, opts);
    return new Handlebars.SafeString(result);
  });

}

