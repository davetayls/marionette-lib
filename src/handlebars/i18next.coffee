
i18n = require 'i18n'
Handlebars = require 'handlebars'

Handlebars.registerHelper "t", (i18n_key) ->
  result = i18n.t(i18n_key)
  new Handlebars.SafeString(result)

Handlebars.registerHelper "tr", (context, options) ->
  opts = i18n.functions.extend(options.hash, context)
  opts.defaultValue = options.fn(context)  if options.fn
  result = i18n.t(opts.key, opts)
  new Handlebars.SafeString(result)
