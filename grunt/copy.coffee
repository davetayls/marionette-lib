
module.exports =
  dist:
    expand: true
    cwd: 'src'
    dest: 'amd'
    src: [
      '**/*.js.map'
      '**/*.hbs'
      'modernizr/**/*.js'
    ]
