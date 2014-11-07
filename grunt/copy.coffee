
module.exports =
  dist:
    expand: true
    cwd: 'src'
    dest: 'amd'
    src: [
      '**/*.map'
      '**/*.hbs'
      '**/*.styl'
    ]
