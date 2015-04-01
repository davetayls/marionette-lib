
module.exports = (grunt) ->

  require('load-grunt-config')(grunt)

  grunt.registerTask 'default', ['build']
  grunt.registerTask 'build', [
    'clean:amd'
    'coffee'
    'typescript'
    'amdwrap'
    'less'
    'autoprefixer'
    'copy'
    'dts_bundle'
  ]
  grunt.registerTask 'test', ['mochaTest', 'karma']

  grunt.registerTask 'release', (release = 'patch') ->
    grunt.task.run [
      "bump-only:#{release}"
      'build'
      'test'
      "bump-commit"
    ]

