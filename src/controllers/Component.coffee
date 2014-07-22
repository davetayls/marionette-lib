
AppController = require './App'

class ComponentController extends AppController
  # We don't show components directly as this
  # will be handled by the apps controller
  # this component will be placed inside
  show: ->
    throw new Error('You should not @show directly, use @setMainView with components and @show from the apps controller.')

module.exports = ComponentController
