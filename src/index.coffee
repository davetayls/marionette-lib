
require './_config/index'

exports.controllers =
  App: require './controllers/App'

exports.routers =
  App: require './routers/App'

exports.whenFetched = require './utilities/whenFetched'
exports.navigation = require './utilities/navigation'
exports.registry = require './utilities/registry'

exports.views =
  ItemView: require './views/ItemView'
  Layout: require './views/Layout'
  List: require './views/List'
