
module.exports =
  options:
    reporter: 'spec'
    require: [
      './test/_helpers'
    ]

  test:
    src: ['test/**/*-spec.js']
