/// <reference path="../../typings/tsd.d.ts" />
/**
 * Extract a query string value
 * @param searchString
 * @param key
 * @returns {*}
 */
export declare function getQuery(searchString: string, key: string): string;
/**
 * Extract the searchString query string values from a url
 * @param url
 * @returns {string}
 */
export declare function searchString(url: string): string;
/**
 * Get the correct separator for a url and a query string
 * @param url
 * @returns {string}
 */
export declare function separator(url: string): string;
/**
 * Joins url query string values
 * @param urls
 * @returns {string}
 */
export declare function join(...urls: string[]): string;
/**
 * Join url paths
 * @param urls
 * @returns {string}
 */
export declare function joinPaths(...urls: string[]): string;
export declare function param(obj: Object, separator?: string, joiner?: string): string;
