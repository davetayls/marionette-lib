
module.exports =
  dist:
    expand: true
    cwd: 'src'
    dest: 'amd'
    src: [
      'modernizr/**/*.js'
    ]
