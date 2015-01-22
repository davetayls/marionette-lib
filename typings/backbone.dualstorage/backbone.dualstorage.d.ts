
/// <reference path="../backbone/backbone.d.ts" />

declare module Backbone {
  export var offlineStatusCodes:number[];
}

declare class DualStorageStore {
  constructor(name:string);
  sep:string;
  generateId():string;
  save():void;
  recordsOn(key:string):string[];
  dirty(model:Backbone.Model):Backbone.Model;
  clean(model:Backbone.Model, from:string):Backbone.Model;
  destroyed(model:Backbone.Model):Backbone.Model;
  create(model:Backbone.Model):Backbone.Model;
  update(model:Backbone.Model):Backbone.Model;
  clear():void;
  hasDirtyOrDestroyed():boolean;
  find(model:Backbone.Model):any;
  findAll():any;
  destroy(model:Backbone.Model):Backbone.Model;
  static exists(storeName:string):boolean;
}

interface Window {
  Store:typeof DualStorageStore;
}
