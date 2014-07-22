
Marionette = require 'backbone.marionette'

require './config/index'
require './handlebars/index'

exports.behaviors = require './behaviors/index'
Marionette.Behaviors.behaviorsLookup = -> exports.behaviors

exports.components =
  loading:
    LoadingController: require './components/loading/LoadingController'

exports.controllers =
  Api: require './controllers/Api'
  App: require './controllers/App'
  Base: require './controllers/Base'
  Component: require './controllers/Component'

#exports.entities =
#  Base: require './entities/Base'

exports.routers =
  App: require './routers/App'

exports.stickit = require './stickit/index'

exports.whenFetched = require './utilities/whenFetched'
exports.navigation = require './utilities/navigation'
exports.registry = require './utilities/registry'

exports.views =
  ItemView: require './views/ItemView'
  Layout: require './views/Layout'
  List: require './views/List'
