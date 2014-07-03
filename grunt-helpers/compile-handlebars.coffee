
_ = require 'underscore'
path = require 'path'

module.exports = (templateData) ->
  index_dev:
    template: '<%= cfg.src %>/index.hbs'
    templateData: _.defaults {
      development: true
      platform: 'www'
    }, templateData
    output: '<%= cfg.www %>/index.html'

  index_ios:
    template: '<%= cfg.src %>/index.hbs'
    templateData: _.defaults {
      development: false
      platform: 'ios'
    }, templateData
    output: 'merges/ios/index.html'

  index_android:
    template: '<%= cfg.src %>/index.hbs'
    templateData: _.defaults {
      development: false
      platform: 'android'
    }, templateData
    output: 'merges/android/index.html'
