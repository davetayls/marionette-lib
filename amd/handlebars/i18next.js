define(function (require, exports, module) {var Handlebars, i18n;

i18n = require('i18n');

Handlebars = require('handlebars');

Handlebars.registerHelper("t", function(i18n_key) {
  var result;
  result = i18n.t(i18n_key);
  return new Handlebars.SafeString(result);
});

Handlebars.registerHelper("tr", function(context, options) {
  var opts, result;
  opts = i18n.functions.extend(options.hash, context);
  if (options.fn) {
    opts.defaultValue = options.fn(context);
  }
  result = i18n.t(opts.key, opts);
  return new Handlebars.SafeString(result);
});

});
