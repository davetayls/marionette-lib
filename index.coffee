
require './server/config/static'

exports.controllers =
  Static: require './src/controllers/Static'

exports.middleware =
  hbs: require './server/middleware/hbs'
