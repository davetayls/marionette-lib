
AppController = require './App'

class ComponentController extends AppController
  # We don't show components directly as this
  # will be handled by the apps controller
  # this component will be placed inside
  show: (view, { region }) ->
    unless region and @_mainView
      throw new Error('You should not @show the main view, use @setMainView with components and @show from the apps controller.')
    else
      super

module.exports = ComponentController
