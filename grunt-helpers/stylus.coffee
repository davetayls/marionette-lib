
module.exports =
  client:
    options:
      linenos: true
      paths: [
        '<%= cfg.src %>/lib'
        '<%= cfg.src %>/client/apps'
        '<%= cfg.src %>/client/components'
      ]
      use: []

    files:
      '<%= cfg.www %>/styles/index.css': '<%= cfg.src %>/styles/index.styl'
      '<%= cfg.www %>/styles/index-old.css': '<%= cfg.src %>/styles/index-old.styl'
