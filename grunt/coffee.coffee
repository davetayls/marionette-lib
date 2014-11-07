
module.exports =
  options:
    sourceMap: true
    bare: true

  server:
    files: [
      expand: true
      cwd: 'server'
      src: '**/*.coffee'
      dest: 'server'
      ext: '.js'
    ]

  src:
    files: [
      expand: true
      cwd: 'src'
      src: '**/*.coffee'
      dest: 'src'
      ext: '.js'
    ]
