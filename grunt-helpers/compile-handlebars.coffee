
_ = require 'underscore'

module.exports = (templateData) ->
  index_dev:
    template: '<%= cfg.src %>/index.hbs'
    templateData: _.defaults {
      development: true
      platform: 'www'
    }, templateData
    output: '<%= yeoman.www %>/index.html'

  index_ios:
    template: '<%= yeoman.src %>/index.hbs'
    templateData: _.defaults {
      development: false
      platform: 'ios'
    }, templateData
    output: '<%= yeoman.app %>/merges/ios/index.html'

  index_android:
    template: '<%= yeoman.src %>/index.hbs'
    templateData: _.defaults {
      development: false
      platform: 'android'
    }, templateData
    output: '<%= yeoman.app %>/merges/android/index.html'
