
$ = require 'jquery'
BaseController = require './Base'

class ApiController extends BaseController
  all: (options = {}, cb) ->
    cb = cb or _.reduceRight(arguments, (m, arg) -> m or arg)
    all = new @Entity.Collection()
    all.fetch
      success: => cb.call @, all
      error: (model, err) => cb.call @, err

  byId: (id, cb) ->
    properties = {}
    properties[@Entity::idAttribute] = id
    entity = new @Entity properties
    entity.fetch
      success: (model) -> cb.call(@, null, model)
      error: (model, err) -> cb.call(@, err, model)
    entity

module.exports = ApiController
