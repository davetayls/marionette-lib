define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var Q = require('q');
var _ = require('underscore');
function whenFetched(entities, callback) {
    var promises = _.chain([entities]).flatten().pluck("_fetch").compact().value();
    if (promises.length) {
        return Q.all(promises).done(function (results) {
            console.log('whenFetched', results);
            var errors = results.filter(function (result) {
                return result.failed;
            });
            return callback(errors);
        });
    }
    else {
        console.log('whenFetched', entities);
        throw new Error('Nothing is being fetched');
    }
}
exports.whenFetched = whenFetched;
;
//# sourceMappingURL=whenFetched.js.map
});
