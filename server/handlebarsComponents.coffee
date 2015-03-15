
# Components
# ==========
#
# Reusable components across the site
_ = require 'underscore'
fs = require 'fs'
path = require 'path'
join = path.join

exports.register = (COMPONENT_DIR, Handlebars) ->

  getComponentController = (name, context) ->
    controllerPath = join(COMPONENT_DIR, name, 'StaticController')
    Controller = require(controllerPath)
    new Controller model: context

  getAttributes = (attributes = {}) ->
    attr = _.map attributes or {}, (val, key) ->
      if _.isString val or _.isFinite val
        "#{key}=\"#{val}\""
      else
        ''
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

  return
