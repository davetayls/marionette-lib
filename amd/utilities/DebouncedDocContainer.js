define(function (require, exports, module) {/// <reference path="../../typings/tsd.d.ts" />
var _ = require('underscore');
var Exceptions = require('../Exceptions');
var DebouncedDocContainer = (function () {
    function DebouncedDocContainer() {
        this.docs = [];
        this.docTimeToLive = 1000;
    }
    Object.defineProperty(DebouncedDocContainer.prototype, "length", {
        get: function () {
            return this.docs.length;
        },
        enumerable: true,
        configurable: true
    });
    DebouncedDocContainer.prototype.clearExpiredDocs = function () {
        throw new Error('Not implemented');
    };
    DebouncedDocContainer.prototype.clearAllDocs = function () {
        this.docs.length = 0;
    };
    /**
     * Puts a document in to the array if it is not there
     * @param doc
     */
    DebouncedDocContainer.prototype.put = function (doc) {
        if (!this.byId(doc.id)) {
            this.docs.push({
                id: doc.id,
                doc: doc,
                expires: this.docTimeToLive ? Date.now() + this.docTimeToLive : null
            });
        }
        else {
            throw new Exceptions.DocumentExistsException(new Error('Document ' + doc.id + ' already exists'));
        }
    };
    /**
     * Return the entry with details about the doc with an id
     * @param id
     */
    DebouncedDocContainer.prototype.entryById = function (id) {
        var item = _.findWhere(this.docs, { id: id });
        if (item)
            return item;
    };
    /**
     * Return all the docs
     * @returns {IDebouncedDocItem<T>[]}
     */
    DebouncedDocContainer.prototype.all = function () {
        return this.docs.map(function (entry) {
            return entry.doc;
        });
    };
    /**
     * Return the saved document by its id
     * @param id
     * @returns {T}
     */
    DebouncedDocContainer.prototype.byId = function (id) {
        var item = _.findWhere(this.docs, { id: id });
        if (item) {
            return item.doc;
        }
    };
    /**
     * Merges a doc in to the store, if it exists
     * otherwise adds it
     * @param doc
     */
    DebouncedDocContainer.prototype.mergeDoc = function (doc) {
        if (!doc.id)
            throw new Error('mergeDoc document must have a valid id');
        var keys = _.keys(doc);
        var entry = this.entryById(doc.id);
        if (entry) {
            var existingDoc = entry.doc;
            var changedProperties = [];
            _.each(keys, function (key) {
                var value = doc[key];
                if (!_.isFunction(value)) {
                    if (existingDoc[key] !== value) {
                        existingDoc[key] = value;
                        changedProperties.push(key);
                    }
                }
            });
            return {
                added: false,
                merged: changedProperties.length > 0,
                changedProperties: changedProperties,
                doc: existingDoc
            };
        }
        else {
            this.put(doc);
            return {
                added: true,
                merged: false,
                changedProperties: keys,
                doc: doc
            };
        }
    };
    DebouncedDocContainer.prototype.mergeMultiple = function (docs) {
        var _this = this;
        var merges = docs.map(function (doc) {
            return _this.mergeDoc(doc);
        });
        return merges;
    };
    return DebouncedDocContainer;
})();
exports.DebouncedDocContainer = DebouncedDocContainer;
//# sourceMappingURL=DebouncedDocContainer.js.map
});
