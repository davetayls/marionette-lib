
app = require 'app'
Marionette = require 'backbone.marionette'

class BaseController extends Marionette.Controller
  constructor: ->
    @_instance_id = _.uniqueId('controller')
    app.execute 'register:instance', @, @_instance_id
    super

  destroy: ->
    console.log "destroying", @
    app.execute 'unregister:instance', @, @_instance_id
    super

module.exports = BaseController
