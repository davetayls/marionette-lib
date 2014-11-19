
module.exports = (grunt) ->

  require('load-grunt-config')(grunt)

  grunt.registerTask 'default', ['build']
  grunt.registerTask 'build', ['clean', 'coffee', 'amdwrap', 'copy']
  grunt.registerTask 'test', ['default', 'mochaTest']
  grunt.registerTask 'release', [
    'test'
    'bump:patch'
  ]

