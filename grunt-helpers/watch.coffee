
module.exports =
  livereloadCSS:
    options:
      livereload: '<%= connect.options.livereload %>'
    files: [ '<%= cfg.www %>/styles/*.css' ]

  livereloadAssets:
    options:
      livereload: '<%= connect.options.livereload %>'
    files: [
      '<%= cfg.www %>/client/*.js'
      '<%= cfg.www %>/client/*.hbs'
    ]

  coffee:
    files: ['<%= cfg.src %>/client/**/*.coffee']
    spawn: true
    tasks: ['newer:copy:assets', 'newer:coffee:client', 'newer:amdwrap:client']

#  coffeeTest:
#    files: ['<%= yeoman.www %>/test/coffee/*.coffee']
#    spawn: true
#    tasks: ['newer:coffee:test']

  stylus:
    files: [
      '<%= cfg.src %>/styles/**/*.styl'
      '<%= cfg.src %>/client/**/*.styl'
    ]
    spawn: true
    tasks: ['stylus']

  assets:
    files: [
      '<%= cfg.src %>/client/**/*.hbs'
    ]
    tasks: ['newer:copy:assets']

