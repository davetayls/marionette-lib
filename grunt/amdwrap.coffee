
module.exports =
  dist:
    expand: true
    cwd: 'src'
    src: [
      '**/*.js'
      '!modernizr/**/*'
    ]
    dest: 'amd'
  test:
    expand: true
    cwd: 'test-client'
    src: [
      '**/*.js'
    ]
    dest: 'test-client'
