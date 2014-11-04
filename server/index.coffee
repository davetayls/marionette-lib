
require './config/static'

exports.config = require './config'
exports.configure = (options) -> exports.config.configure(options)

exports.controllers =
  Static: require './../src/controllers/Static'

exports.middleware =
  hbs: require './middleware/hbs/index'
