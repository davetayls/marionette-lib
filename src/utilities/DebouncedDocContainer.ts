/// <reference path="../../typings/tsd.d.ts" />
import _ = require('underscore');
import Exceptions = require('../Exceptions');

export interface IMergeDocResult<TDoc extends IDocContainerItem> {
  added:boolean;
  merged:boolean;
  changedProperties:string[];
  doc:TDoc;
}

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

  get length():number {
    return this.docs.length;
  }

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
        expires: this.docTimeToLive ? Date.now() + this.docTimeToLive : null
      });
    } else {
      throw new Exceptions.DocumentExistsException(
        new Error('Document ' + doc.id + ' already exists')
      );
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

  /**
   * Merges a doc in to the store, if it exists
   * otherwise adds it
   * @param doc
   */
  mergeDoc(doc:T):IMergeDocResult<T> {
    if (!doc.id) throw new Error('mergeDoc document must have a valid id');
    var keys = _.keys(doc);
    var entry = this.entryById(doc.id);
    if (entry) {
      var existingDoc = entry.doc;
      var changedProperties = [];
      _.each(keys, (key) => {
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
      }
    } else {
      this.put(doc);
      return {
        added: true,
        merged: false,
        changedProperties: keys,
        doc: doc
      };
    }
  }

  mergeMultiple(docs:T[]):IMergeDocResult<T>[] {
    var merges = docs.map((doc) => {
      return this.mergeDoc(doc);
    });
    return merges;
  }
}

