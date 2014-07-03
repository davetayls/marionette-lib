
module.exports = (grunt) ->

  require('load-grunt-config') grunt,
    config:
      clean: ['amd']

      amdwrap:
        dist:
          expand: true
          cwd: 'amd'
          src: [
            '**/*.js'
            '!modernizr/**/*'
          ]
          dest: 'amd'

      coffee:
        options:
          bare: true

        dist:
          files: [
            expand: true
            cwd: 'src'
            src: '**/*.coffee'
            dest: 'amd'
            ext: '.js'
          ]

      copy:
        dist:
          expand: true
          cwd: 'src'
          dest: 'amd'
          src: [
            '**/*.hbs'
            '**/*.styl'
          ]

      watch:
        dist:
          files: ['src/**/*.coffee']
          spawn: true
          tasks: ['default']

  grunt.registerTask 'default', ['build']
  grunt.registerTask 'build', ['clean', 'coffee', 'amdwrap', 'copy']

