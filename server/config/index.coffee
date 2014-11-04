
hbs = require './middleware/hbs'

class MarionetteLibConfiguration

  handlebars: null
  componentsPath: null

  configure: (options = {}) ->
    @handlebars = options.handlebars
    @componentsPath = options.componentsPath

    if @componentsPath and @handlebars
      hbs.components(@componentsPath, @handlebars)

module.exports = new MarionetteLibConfiguration()
