define(function (require, exports, module) {/// <reference path='../../typings/tsd.d.ts' />
'use strict';
var _ = require('underscore');
/**
 * Extract a query string value
 * @param searchString
 * @param key
 * @returns {*}
 */
function getQuery(searchString, key) {
    var values = searchString.split("&");
    var i = 0;
    while (i < values.length) {
        var ft = values[i].split("=");
        if (ft[0] === key) {
            return ft[1];
        }
        i += 1;
    }
    return null;
}
exports.getQuery = getQuery;
/**
 * Extract the searchString query string values from a url
 * @param url
 * @returns {string}
 */
function searchString(url) {
    if (/\#/.test(url)) {
        url = url.split('#')[0];
    }
    if (/\?/.test(url)) {
        return url.split('?')[1];
    }
    else {
        return '';
    }
}
exports.searchString = searchString;
/**
 * Get the correct separator for a url and a query string
 * @param url
 * @returns {string}
 */
function separator(url) {
    if (url) {
        if (/\?/.test(url)) {
            return '&';
        }
        else {
            return '?';
        }
    }
    else {
        return '';
    }
}
exports.separator = separator;
/**
 * Joins url query string values
 * @param urls
 * @returns {string}
 */
function join() {
    var urls = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        urls[_i - 0] = arguments[_i];
    }
    var _merge = function (memo, val) {
        return memo + (separator(memo)) + val;
    };
    return _.reduce(urls, _merge);
}
exports.join = join;
/**
 * Join url paths
 * @param urls
 * @returns {string}
 */
function joinPaths() {
    var urls = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        urls[_i - 0] = arguments[_i];
    }
    var _merge = function (memo, val) {
        return memo + '/' + val;
    };
    return _.reduce(urls, _merge);
}
exports.joinPaths = joinPaths;
function param(obj, separator, joiner) {
    if (separator === void 0) { separator = '&'; }
    if (joiner === void 0) { joiner = '='; }
    function _param(memo, val, key) {
        if (_.isUndefined(val)) {
            return memo;
        }
        else {
            var pre = memo ? memo + separator : '';
            return pre + key + joiner + val;
        }
    }
    return _.reduce(obj, _param, '');
}
exports.param = param;
//# sourceMappingURL=url.js.map
});
