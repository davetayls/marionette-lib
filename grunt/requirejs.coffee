
# Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
module.exports =
  amd:
    options:
      appDir: 'src'
      baseUrl: './'
      dir: 'amd'
      optimize: 'none'
      generateSourceMaps: false
      inlineText: true
      findNestedDependencies: true
      fileExclusionRegExp: /(\.ts|\.less)$/
      cjsTranslate: true
      shim: {
        'handlebars': {
          exports: 'Handlebars'
        },
        'modernizr': {
          exports: 'Modernizr'
        },
      }
      map: {
        'client': {
          'handlebars/index': '../src/handlebars/index'
          'flux/index': '../src/flux/index'
        }
      }
      paths: {
        'backbone': '../bower_components/backbone/backbone',
        'backbone-forms': '../bower_components/backbone-forms/distribution.amd/backbone-forms',
        'backbone.marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
        'dompurify': '../bower_components/dompurify/purify',
        'flux': '../bower_components/flux/dist/Flux',
        'i18next': '../bower_components/i18next/i18next.amd',
        'jquery': '../bower_components/jquery/dist/jquery',
        'json': '../bower_components/requirejs-plugins/src/json',
        'localforage': '../bower_components/localforage/dist/localforage',
        'lunr': '../bower_components/lunr.js/lunr',
        'markdownConverter': '../bower_components/requirejs-plugins/lib/Markdown.Converter',
        'mdown': '../bower_components/requirejs-plugins/src/mdown',
        'moment': '../bower_components/moment/moment',
        'modernizr': '../bower_components/modernizr/modernizr',
        'q': '../bower_components/q/q',
        'showdown': '../bower_components/showdown/src/showdown',
        'snap': '../bower_components/snapjs/snap',
        'spin': '../bower_components/spin.js/spin',
        'text': '../bower_components/requirejs-text/text',
        'underscore': '../bower_components/underscore/underscore',
        'xss-filters': '../bower_components/xss-filters/dist/xss-filters.min'
      }
      packages: [
        {
          name: "hbs",
          location: "../bower_components/requirejs-hbs",
          main: "hbs"
        },
        {
          name: "handlebars-compiler",
          location: "../bower_components/handlebars",
          main: "handlebars"
        },
        {
          name: "handlebars",
          location: "../bower_components/handlebars",
          main: "handlebars"
        }
      ]
      modules: [
        {
          name: 'client',
          exclude: [
            'handlebars'
          ]
        }
      ]
