
module.exports =
  options:
    reporter: 'spec'
    require: [
      'coffee-script/register'
      './test/_helpers'
    ]

  test:
    src: ['test/**/*-spec.coffee']
