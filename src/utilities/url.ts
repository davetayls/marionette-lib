/// <reference path='../../typings/tsd.d.ts' />
'use strict';

import _ = require('underscore');

/**
 * Extract a query string value
 * @param searchString
 * @param key
 * @returns {*}
 */
export function getQuery(searchString: string, key: string): string {
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

/**
 * Extract the searchString query string values from a url
 * @param url
 * @returns {string}
 */
export function searchString(url: string): string {
  if (/\#/.test(url)) {
    url = url.split('#')[0];
  }
  if (/\?/.test(url)) {
    return url.split('?')[1];
  } else {
    return '';
  }
}

/**
 * Get the correct separator for a url and a query string
 * @param url
 * @returns {string}
 */
export function separator(url: string): string {
  if (url) {
    if (/\?/.test(url)) {
      return '&';
    } else {
      return '?';
    }
  } else {
    return '';
  }
}

/**
 * Joins url query string values
 * @param urls
 * @returns {string}
 */
export function join(...urls:string[]): string {
  var _merge = function(memo:string, val:string) {
    return memo + (separator(memo)) + val;
  };
  return _.reduce(urls, _merge);
}

/**
 * Join url paths
 * @param urls
 * @returns {string}
 */
export function joinPaths(...urls:string[]): string {
  var _merge = function(memo:string, val:string) {
    return memo + '/' + val;
  };
  return _.reduce(urls, _merge);
}

export function param(obj: Object, separator: string = '&', joiner: string = '=') {
  function _param(memo:string, val:string, key:string) {
    if (_.isUndefined(val)) {
      return memo;
    } else {
      var pre = memo ? memo + separator : '';
      return pre + key + joiner + val;
    }
  }
  return _.reduce<string, string>(obj, _param, '');
}

