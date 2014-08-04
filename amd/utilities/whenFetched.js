define(function (require, exports, module) {var $, Q, app, _;

Q = require('q');

app = require('app');

$ = require('jquery');

_ = require('underscore');

module.exports = function(entities, callback) {
  var promises;
  promises = _.chain([entities]).flatten().pluck("_fetch").compact().value();
  if (promises.length) {
    return Q.all(promises).done(function(results) {
      var errors;
      console.log('whenFetched', results);
      errors = results.filter(function(result) {
        return result.failed;
      });
      return callback(errors);
    });
  } else {
    console.log('whenFetched', entities);
    throw new Error('Nothing is being fetched');
  }
};

});
