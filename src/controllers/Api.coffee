
$ = require 'jquery'
BaseController = require './Base'

class ApiController extends BaseController
  byId: (id, cb) ->
    properties = {}
    properties[@Entity::idAttribute] = id
    entity = new @Entity properties
    entity.fetch
      success: (model) -> cb.call(@, null, model)
      error: (model, err) -> cb.call(@, err, model)
    entity

module.exports = ApiController
