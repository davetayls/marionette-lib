
module.exports =
  dist:
    files: [
      'src/**/*.coffee'
      'test/**/*.coffee'
    ]
    spawn: true
    tasks: ['default', 'mochaTest']
