
module.exports = (portNumber = 9000, livereloadPort = 35730) ->
  options:
    hostname: '0.0.0.0'
    livereload: livereloadPort
    base: [
      '<%= cfg.src %>'
      '<%= cfg.www %>'
    ]

  livereload:
    options:
      port: portNumber

  integration:
    options:
      livereload: false
      port: portNumber + 1

