
module.exports =
  dist:
    expand: true
    cwd: 'src'
    src: [
      '**/*.js'
      '!modernizr/**/*'
    ]
    dest: 'amd'
