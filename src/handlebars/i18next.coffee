
i18n = require 'i18n'
_ = require 'underscore'
Handlebars = require 'handlebars'

Handlebars.registerHelper "t", (i18n_key, options) ->
  opts = {}
  _.extend opts, options.hash
  result = i18n.t(i18n_key, opts)
  attrs = [ "data-t=\"#{i18n_key}\"" ]
  _.each opts, (val, key) ->
    if _.isString val or _.isFinite val
      attrs.push "data-#{key}=\"#{val}\""
  "<span #{attrs.join(' ')}>#{new Handlebars.SafeString(result)}</span>"

Handlebars.registerHelper "tr", (context, options) ->
  opts = i18n.functions.extend(options.hash, context)
  opts.defaultValue = options.fn(context)  if options.fn
  result = i18n.t(opts.key, opts)
  new Handlebars.SafeString(result)
