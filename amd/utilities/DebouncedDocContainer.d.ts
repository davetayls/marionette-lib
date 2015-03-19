/// <reference path="../../typings/tsd.d.ts" />
export interface IMergeDocResult<TDoc extends IDocContainerItem> {
    added: boolean;
    merged: boolean;
    changedProperties: string[];
    doc: TDoc;
}
export interface IDebouncedDocItem<T extends IDocContainerItem> {
    id: any;
    doc: T;
    expires?: number;
}
export interface IDocContainerItem {
    id: any;
}
export declare class DebouncedDocContainer<T extends IDocContainerItem> {
    constructor();
    docs: IDebouncedDocItem<T>[];
    docTimeToLive: number;
    length: number;
    clearExpiredDocs(): void;
    clearAllDocs(): void;
    /**
     * Puts a document in to the array if it is not there
     * @param doc
     */
    put(doc: T): void;
    /**
     * Return the entry with details about the doc with an id
     * @param id
     */
    entryById(id: any): IDebouncedDocItem<T>;
    /**
     * Return all the docs
     * @returns {IDebouncedDocItem<T>[]}
     */
    all(): T[];
    /**
     * Return the saved document by its id
     * @param id
     * @returns {T}
     */
    byId(id: any): T;
    /**
     * Merges a doc in to the store, if it exists
     * otherwise adds it
     * @param doc
     */
    mergeDoc(doc: T): IMergeDocResult<T>;
    mergeMultiple(docs: T[]): IMergeDocResult<T>[];
}
