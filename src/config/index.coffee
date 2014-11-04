
sync = require './backbone/sync'
require './marionette/LayoutView'
require './marionette/Region'
require './marionette/View'

class MarionetteLibConfiguration
  app: null
  configure: (options = {}) ->
    @app = options.app
    @handlebars = options.handlebars
    @components_dir = options.components_dir

    sync(app) if app

module.exports = new MarionetteLibConfiguration()
