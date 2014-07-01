define(function (require, exports, module) {var whenFetched;

whenFetched = function(entities, callback) {
  var xhrs;
  xhrs = _.chain([entities]).flatten().pluck("_fetch").value();
  return $.when.apply($, xhrs).done(function() {
    return callback();
  });
};

module.exports = whenFetched;

});
