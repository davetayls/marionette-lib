
_ = require 'underscore'
Backbone = require 'backbone'

class StaticController
  constructor: (options = {}) ->
    @options = options
    @model = options.model

  attributes: [] # attributes which get rendered
  contextProperties: []
  tagName: 'section'
  cloneContext: true

  className: (hash = {}) ->
    unless @name
      throw new Error('Component must specify a name')

    if hash.class
      classes = hash.class.split(' ')
    else classes = []

    attributes = _.result @, 'attributes'
    if attributes and attributes.class
      classes = _.union classes, attributes.class.split(' ')

    classes.push(@name)
    classes.join(' ')

  getContext: ->
    if @model
      if @cloneContext
        context = _.clone(@model)
        context._componentName = @name
      else
        context = @model
    else
      context = {}
    context._regions ?= []
    return context

  getChildContext: -> @model

  mixinHash: (context, hash = {}) ->
    contextProps = _.result(@, 'contextProperties')
    if _.isObject(contextProps)
      propertyKeys = _.keys(contextProps)
      properties = _.pick hash, propertyKeys
      _.extend(context, contextProps, properties)

  getComponentTemplate: ->
    if _.isFunction @template
      @template()
    else
      throw new Error('There is no template on this static controller')

  getAttributes: (hash) ->
    attributes = _.result @, 'attributes'
    if attributes
      attributes = _.omit attributes, 'class'
      attr = _.map(attributes or {}, (val, key) ->
        if _.isString hash[key] or _.isFinite hash[key]
          "#{key}=\"#{hash[key]}\""
        else if _.isString val or _.isFinite val
          "#{key}=\"#{val}\""
        else ''
      )
      if attr.length
        ' ' + attr.join(' ')
      else ''
    else ''

  getInnerBody: (context, fn) ->
    if _.isFunction fn
      fn(context)

  render: (options = {}) ->
    @context = @getContext()
    @context.className = @className(options.hash)
    @context.attributes = @getAttributes(options.hash)
    @context.__body__ = @getInnerBody(@getChildContext(), options.fn)
    @mixinHash(@context, options.hash)
    @renderOuterHtml @context,
      className: @context.className
      attributes: @context.attributes

  renderOuterHtml: (context, { className, attributes } = {}) ->
    tagName = _.result(@, 'tagName')
    [
      "<#{tagName}"
      attributes
      " class=\"#{className}\""
      ">\n"
      @renderContentTemplate(context)
      "</#{tagName}>"
    ].join('')

  renderContentTemplate: (context) ->
    tmpl = @getComponentTemplate()
    tmpl(context)

# Add support for events
_.extend(StaticController::, Backbone.Events)

module.exports = StaticController
