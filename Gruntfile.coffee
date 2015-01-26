
module.exports = (grunt) ->

  require('load-grunt-config')(grunt)

  grunt.registerTask 'default', ['build']
  grunt.registerTask 'build', [
    'clean:amd'
    'coffee'
    'typescript'
    'amdwrap'
    'copy'
    'dts_bundle'
  ]
  grunt.registerTask 'test', ['default', 'mochaTest']
  grunt.registerTask 'release', [
    'test'
    'bump:patch'
  ]

