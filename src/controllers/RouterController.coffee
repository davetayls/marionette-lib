
_ = require 'underscore'
BaseController = require './Base'

class RouterController extends BaseController
  initialize: ({ actions }) ->
    if actions then @_setupActions(actions)

  authorizeAnAction: (actionName, actionConfig) ->
    @_getActionPolicy(actionConfig).isAuthorized(actionName, actionConfig)

  actionUnauthorized: (actionName, actionConfig) ->
    err = new Error("#{actionName} was unauthorized")
    err.name = 'ActionUnauthorized'
    err.actionName = actionName
    err.actionConfig = actionConfig
    throw err

  callActionUnauthorized: (actionName, actionConfig) ->
    if _.isFunction(actionConfig.unauthorized)
      actionConfig.unauthorized.call(@, actionName, actionConfig);
    else
      @getOption('actionUnauthorized').call(@, actionName, actionConfig)

  defaultPolicy: -> new ActionPolicy()

  _setupActions: (actions) ->
    _.each actions, (config, key) =>
      @addAction(key, config)

  _getActionConfig: (actionConfig = {}) ->
    if _.isFunction(actionConfig)
      return { fn: actionConfig }
    else
      return actionConfig

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
    actionConfig = @_getActionConfig(actionConfig)
    _fn = @_getActionFunction(actionConfig)
    if _.isFunction(_fn)
      @[actionName] = =>
        if @getOption('authorizeAnAction').call(@, actionName, actionConfig)
          try
            return _fn.apply(@, arguments)
          catch error
            if error.name is 'ActionUnauthorized'
              actionConfig.internalActionError = error
              @callActionUnauthorized(actionName, actionConfig)
            else throw error
        else
          @callActionUnauthorized(actionName, actionConfig)
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
