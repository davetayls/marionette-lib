
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

      watch:
        dist:
          files: ['src/**/*.coffee']
          spawn: true
          tasks: ['default']

  grunt.registerTask 'default', ['clean', 'coffee', 'amdwrap']
