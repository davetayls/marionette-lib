
module.exports =
  client:
    expand: true
    cwd: '<%= cfg.www %>/client'
    src: [
      "**/*.js"
      "!config.js"
    ]
    dest: '<%= cfg.www %>/client'

