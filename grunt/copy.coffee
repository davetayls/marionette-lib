
module.exports =
  dist:
    expand: true
    cwd: 'src'
    dest: 'amd'
    src: [
      '**/*.hbs'
      '**/*.styl'
    ]
