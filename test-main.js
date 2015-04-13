var allTestFiles = [];
var TEST_REGEXP = /^\/base\/test.*(spec|test)\.js$/i;

var pathToModule = function(path) {
  var p =  path.replace(/^\/base\//, '../').replace(/\.js$/, '');
  console.log(path, p);
  return p
};

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/amd',

  paths: {
    'backbone': '../bower_components/backbone/backbone',
    'backbone.marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
    'handlebars': '../bower_components/handlebars/handlebars',
    'jquery': '../bower_components/jquery/dist/jquery',
    'q': '../bower_components/q/q',
    'spin': '../bower_components/spin.js/spin',
    'text': '../bower_components/requirejs-text/text',
    'underscore': '../bower_components/underscore/underscore'
  },

  packages: [
    {
      name: "hbs",
      location: "../bower_components/requirejs-hbs",
      main: "hbs"
    }
  ],

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

Object.keys(window.__karma__.files).forEach(function(file) {
  var okToAdd = TEST_REGEXP.test(file);
  //console.log('file', okToAdd, file);
  if (okToAdd) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});
