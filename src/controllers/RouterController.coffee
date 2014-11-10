
_ = require 'underscore'
BaseController = require './Base'

class RouterController extends BaseController
  initialize: ({ actions }) ->
    if actions then @_setupActions(actions)

  authorizeAnAction: (actionName, actionConfig) ->
    @_getActionPolicy(actionConfig).isAuthorized(actionName, actionConfig)

  actionUnauthorized: (actionName, actionConfig) ->
    err = new Error("#{actionName} was unauthorized")
    err.actionName = actionName
    err.actionConfig = actionConfig
    throw err

  defaultPolicy: -> new ActionPolicy()

  _setupActions: (actions) ->
    _.each actions, (config, key) =>
      @addAction(key, config)

  _getActionFunction: (actionConfig = {}) ->
    return actionConfig if _.isFunction(actionConfig)
    return actionConfig.fn

  _getActionPolicy: (actionConfig = {}) ->
    if _.isFunction(actionConfig) or !actionConfig.policy
      defaultPolicy = @getOption('defaultPolicy')
      if _.isFunction(defaultPolicy)
        return defaultPolicy.call(@, actionConfig)
      else
        return defaultPolicy
    else
      return actionConfig.policy

  addAction: (actionName, actionConfig) ->
    _fn = @_getActionFunction(actionConfig)
    if _.isFunction(_fn)
      @[actionName] = =>
        if @getOption('authorizeAnAction').call(@, actionName, actionConfig)
          return _fn.apply(@, arguments)
        else
          @getOption('actionUnauthorized').call(@, actionName, actionConfig)
    else
      throw new Error('Proxying through an authorize method requires a function')

class ActionPolicy extends BaseController
  isAuthorized: ->
    if @options.isAuthorized
      @options.isAuthorized.apply(@, arguments)
    else
      true

RouterController.ActionPolicy = ActionPolicy
module.exports = RouterController
