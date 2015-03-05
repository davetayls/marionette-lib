/// <reference path="../typings/tsd.d.ts" />

export interface IFetchResolution {
  response:any;
  status:number;
  failed:boolean;
}

export interface IFetchModelResolution extends IFetchResolution {
  options:Backbone.ModelFetchOptions;
}

export interface IFetchCollectionResolution extends IFetchResolution {
  options:Backbone.CollectionFetchOptions;
}

export interface IFetchableModel {
  _fetch:Q.Promise<IFetchModelResolution>;
}

export interface IFetchableCollection {
  _fetch:Q.Promise<IFetchCollectionResolution>;
}
