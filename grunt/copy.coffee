
module.exports =
  dist:
    expand: true
    cwd: 'src'
    dest: 'amd'
    src: [
      '**/*.d.ts'
      '**/*.js.map'
      '**/*.hbs'
      '**/*.styl'
    ]
