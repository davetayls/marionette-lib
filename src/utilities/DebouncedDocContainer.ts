/// <reference path="../../typings/tsd.d.ts" />
import _ = require('underscore');

export interface IDebouncedDocItem<T extends IDocContainerItem> {
  id:any;
  doc: T;
  expires?:number;
}

export interface IDocContainerItem {
  id:any;
}

export class DebouncedDocContainer<T extends IDocContainerItem> {

  constructor() {
    this.docs = [];
    this.docTimeToLive = 1000;
  }

  docs:IDebouncedDocItem<T>[];
  docTimeToLive:number;

  clearExpiredDocs():void {
    throw new Error('Not implemented');
  }

  /**
   * Puts a document in to the array if it is not there
   * @param doc
   */
  put(doc:T):void {
    if (!this.byId(doc.id)) {
      this.docs.push({
        id: doc.id,
        doc: doc,
        expires: Date.now() + this.docTimeToLive
      });
    }
  }

  /**
   * Return the entry with details about the doc with an id
   * @param id
   */
  entryById(id:any):IDebouncedDocItem<T> {
    var item:IDebouncedDocItem<T> = _.findWhere(this.docs, { id: id });
    if (item) return item;
  }

  /**
   * Return the saved document by its id
   * @param id
   * @returns {T}
   */
  byId(id:any):T {
    var item:IDebouncedDocItem<T> = _.findWhere(this.docs, { id: id });
    if (item) {
      return item.doc;
    }
  }
}

