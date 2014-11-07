var $, Backbone, _, _sync;

$ = require('jquery');

Backbone = require('backbone');

_ = require('underscore');

_sync = Backbone.sync;

module.exports = function(app) {
  var addFetchPromise, beforeSend, complete;
  Backbone.sync = function(method, entity, options) {
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      beforeSend: _.bind(beforeSend, entity),
      complete: _.bind(complete, entity)
    });
    if (!entity._fetch && method === "read") {
      addFetchPromise(entity, options);
    }
    return _sync(method, entity, options);
  };
  beforeSend = function() {
    return this.trigger("sync:start", this);
  };
  complete = function() {
    return this.trigger("sync:stop", this);
  };
  return addFetchPromise = function(entity, options) {
    var d, _error, _success;
    d = $.Deferred();
    entity._fetch = d.promise();
    _success = options.success;
    _error = options.error;
    options.success = function(resp, status, xhr) {
      _success.apply(this, arguments);
      return d.resolve({
        response: resp,
        options: options,
        status: xhr ? xhr.status : 0,
        failed: false
      });
    };
    return options.error = function(resp, status) {
      if (resp.status === 0) {
        entity.trigger('error:offline');
        app.vent.trigger('fetch:offline', entity);
      } else if (_.contains([401, 403], resp.status)) {
        entity.trigger('unauthorised');
        app.vent.trigger('fetch:unauthorised', entity);
      } else if (Math.floor(resp.status / 100) === 5) {
        entity.trigger('error:server');
        app.vent.trigger('fetch:error:server');
      }
      _error.apply(this, arguments);
      return d.resolve({
        response: resp,
        options: options,
        status: resp.status,
        failed: true
      });
    };
  };
};

//# sourceMappingURL=sync.js.map