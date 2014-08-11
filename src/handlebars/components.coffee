
# Components
# ==========
#
# Reusable components across the site
Handlebars = require 'handlebars'
_ = require 'underscore'

module.exports = (components) ->
  getComponentController = (name, context) ->
    Controller = components[name]
    if Controller
      new Controller model: context
    else
      throw new Error("Cannot find #{name} component")

  getAttributes = (attributes = {}) ->
    attr = _.map attributes or {}, (val, key) ->
      if _.isString val or _.isFinite val
        "#{key}=\"#{val}\""
      else ''
    if attr.length
      ' ' + attr.join(' ')
    else ''

  className = (name, hash = {}) ->
    unless name
      throw new Error('className must specify a name')
    if hash.class
      classes = hash.class.split(' ')
    else classes = []
    classes.unshift(name)
    hash.class = classes.join(' ')

  # Insert a component in to a page
  # {{#c 'component_name'}}{{/c}}
  Handlebars.registerHelper 'c', (name, options) ->
    controller = getComponentController(name, @)
    controller.render(options)

  Handlebars.registerHelper 'in_region', (name, options) ->
    @_regions[name] = fn: options.fn

  Handlebars.registerHelper 'region', (name, options) ->
    componentPath = "#{@_componentName}__#{name}"
    in_region = @_regions[name]
    content = if in_region then in_region.fn(@) else ''
    hash = options.hash or {}
    className("#{componentPath}-region", hash)
    attributes = getAttributes(hash)
    [
      '<div'
      attributes
      '>'
      content
      "</div>"
    ].join('')

