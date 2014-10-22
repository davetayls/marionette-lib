
module.exports = (grunt) ->

  require('load-grunt-config')(grunt)

  grunt.registerTask 'default', ['build']
  grunt.registerTask 'build', ['clean', 'coffee', 'amdwrap', 'copy']

