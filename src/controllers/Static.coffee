
_ = require 'underscore'
Backbone = require 'backbone'

class StaticController
  constructor: (options = {}) ->
    @options = options
    @model = options.model

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
    context

  mixinHash: (context, hash = {}) ->
    _.defaults context, hash

  getComponentTemplate: ->
    if _.isFunction @template
      @template()
    else
      throw new Error('There is no template on this static controller')

  getAttributes: ->
    attributes = _.result @, 'attributes'
    if attributes
      attributes = _.omit attributes, 'class'
      attr = _.map(attributes or {}, (val, key) ->
        if _.isString val or _.isFinite val
          "#{key}=\"#{val}\""
        else ''
      )
      if attr.length
        ' ' + attr.join(' ')
      else ''
    else ''

  getInnerBody: (context, fn) ->
    if _.isFunction fn
      context.__body__ = fn(context)
    else
      delete context.__body__

  render: (options = {}) ->
    @context = @getContext()
    @mixinHash(@context, options.hash)
    @getInnerBody(@context, options.fn)
    @renderOuterHtml @context,
      className: @className(options.hash)

  renderOuterHtml: (context, { className } = {}) ->
    [
      "<#{_.result(@, 'tagName')}"
      @getAttributes()
      " class=\"#{className}\""
      ">\n"
      @renderContentTemplate(context)
      "</#{@tagName}>"
    ].join('')

  renderContentTemplate: (context) ->
    tmpl = @getComponentTemplate()
    tmpl(context)

# Add support for events
_.extend(StaticController::, Backbone.Events)

module.exports = StaticController
