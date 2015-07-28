var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/client',
  output: {
    path: path.join(__dirname, 'amd'),
    filename: 'client.js',
    library: 'marionette_lib',
    libraryTarget: 'amd',
    sourceMapFilename: '[file].js.map'
  },

  module: {
    loaders: [
      {test: /\.hbs$/, loader: 'handlebars-loader'}
    ]
  },

  devtool: '#inline-source-map',

  externals: [
    {
      handlebars: 'amd handlebars',
      'backbone.marionette': 'amd backbone.marionette'
    },
    /^[a-z\-0-9]+$/,
    function(context, request, callback) {
      var ExtRegex = /bower_components|node_modules/;
      var isExternal = ExtRegex.test(context) || ExtRegex.test(request);
      if (/handlebars\/runtime/.test(request)) {
        callback(null, 'umd handlebars');
      } else {
        callback(null, isExternal);
      }
    }
  ],

  node: {
    fs: 'empty'
  }

};
