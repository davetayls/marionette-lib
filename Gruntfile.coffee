
module.exports = (grunt) ->

  require('load-grunt-config') grunt,
    config:
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

  grunt.registerTask 'default', ['coffee', 'amdwrap']
