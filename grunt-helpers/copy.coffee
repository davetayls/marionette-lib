
_ = require 'underscore'


KNOWN_LIBS = [
  'animate.css/*.css'
  'async/lib/async.js'

  'backbone/backbone.js'
  'backbone-pageable/lib/backbone-pageable.js'
  'backbone.paginator/lib/backbone.paginator.js'
  'backbone.babysitter/lib/backbone.babysitter.js'
  'backbone.dualstorage/backbone.dualstorage.amd.js'
  'backbone.marionette/lib/core/backbone.marionette.js'
  'backbone.stickit/backbone.stickit.js'
  'backbone.validation/dist/backbone-validation-amd.js'
  'backbone.wreqr/lib/backbone.wreqr.js'
  'backgrid/lib/backgrid.css'
  'backgrid/lib/backgrid.js'
  'backgrid-filter/backgrid-filter.css'
  'backgrid-filter/backgrid-filter.js'
  'backgrid-paginator/backgrid-paginator.css'
  'backgrid-paginator/backgrid-paginator.js'

  'bootstrap/dist/css/bootstrap.css'
  'bootstrap/dist/fonts/*.*'
  'bootstrap/dist/js/bootstrap.js'
  'bootstrap-datepicker/css/datepicker.css'
  'bootstrap-datepicker/less/datepicker.less'
  'bootstrap-datepicker/js/**/*.js'

  'bootstrap-timepicker/css/*.css'
  'bootstrap-timepicker/js/*.css'
  'bootstrap-timepicker/less/*.css'

  'codemirror/lib/*.*'
  'codemirror/mode/**/*.*'
  'codemirror/theme/*.css'

  'cordova_proxies/amd/**/*'

  'd3/d3.js'

  'dropzone/**/*'

  'fastclick/lib/*.js'

  'gmaps/gmaps.js'

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
]

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
      src: _.union(KNOWN_LIBS, libs)
    ]

module.exports.knownLibs = KNOWN_LIBS
