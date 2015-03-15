/// <reference path="../../typings/tsd.d.ts" />
var _ = require('underscore');
var DebouncedDocContainer = (function () {
    function DebouncedDocContainer() {
        this.docs = [];
        this.docTimeToLive = 1000;
    }
    DebouncedDocContainer.prototype.clearExpiredDocs = function () {
        throw new Error('Not implemented');
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
                expires: Date.now() + this.docTimeToLive
            });
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
    return DebouncedDocContainer;
})();
exports.DebouncedDocContainer = DebouncedDocContainer;
//# sourceMappingURL=DebouncedDocContainer.js.map