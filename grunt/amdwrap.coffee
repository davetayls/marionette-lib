
module.exports =
  dist:
    expand: true
    cwd: 'amd'
    src: [
      '**/*.js'
      '!modernizr/**/*'
    ]
    dest: 'amd'
