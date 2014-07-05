
_ = require 'underscore'

module.exports = (libs) ->
  assets:
    expand: true
    cwd: '<%= cfg.src %>/client'
    src: [
      '**/*.hbs'
      '**/*.js'
    ]
    dest: '<%= cfg.www %>/client'

  lib:
    files: [
      expand: true
      dot: true
      cwd: '<%= cfg.bower %>'
      dest: '<%= cfg.www %>/lib'
      src: _.union([
        'animate.css/*.css'
        'async/lib/async.js'

        'backbone/backbone.js'
        'backbone.babysitter/lib/backbone.babysitter.js'
        'backbone.dualstorage/backbone.dualstorage.amd.js'
        'backbone.marionette/lib/core/backbone.marionette.js'
        'backbone.wreqr/lib/backbone.wreqr.js'

        'cordova_proxies/amd/**/*'

        'fastclick/lib/*.js'

        'handlebars/handlebars.js'

        'i18next/i18next.amd.js'

        'jquery/dist/jquery.js'

        'marionette_lib/amd/**/*'
        'modernizr/modernizr.js'

        'owlcarousel/owl-carousel/**'

        'ratchet/dist/**'
        'requirejs/require.js'
        'requirejs-hbs/*.js'
        'requirejs-plugins/src/json.js'
        'requirejs-text/text.js'

        'snapjs/snap.js'
        'snapjs/snap.css'
        'soundmanager/script/soundmanager2.js'
        'soundmanager/swf/**/*'
        'spin.js/spin.js'

        'underscore/underscore.js'
      ], libs)
    ]

