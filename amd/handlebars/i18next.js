define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var i18next = require('i18next');
var _ = require('underscore');
var config = require('../config/client');
function init() {
    config.config.handlebars.registerHelper("t", function (i18n_key, options) {
        var attrs, opts, result;
        opts = {};
        _.extend(opts, options.hash);
        result = i18next.t(i18n_key, opts);
        attrs = ["data-t=\"" + i18n_key + "\""];
        _.each(opts, function (val, key) {
            if (_.isString(val || _.isFinite(val))) {
                return attrs.push("data-" + key + "=\"" + val + "\"");
            }
        });
        return "<span " + (attrs.join(' ')) + ">" + (new Handlebars.SafeString(result)) + "</span>";
    });
    config.config.handlebars.registerHelper("tr", function (context, options) {
        var opts, result;
        opts = i18next.functions.extend(options.hash, context);
        if (options.fn) {
            opts.defaultValue = options.fn(context);
        }
        result = i18next.t(opts.key, opts);
        return new Handlebars.SafeString(result);
    });
}
exports.init = init;
//# sourceMappingURL=i18next.js.map
});
