
module.exports =
  options:
    bare: true

  client:
    files: [
      expand: true
      cwd: '<%= cfg.src %>/client'
      src: '**/*.coffee'
      dest: '<%= cfg.www %>/client'
      ext: '.js'
    ]

  test:
    files: [
      expand: true
      cwd: '<%= cfg.www %>/test/coffee'
      src: '**/*.coffee'
      dest: '<%= cfg.www %>/test/spec'
      ext: '.js'
    ]

