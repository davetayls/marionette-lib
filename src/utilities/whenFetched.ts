/// <reference path="../../typings/tsd.d.ts" />

import Q = require('q');
import $ = require('jquery');
import _ = require('underscore');
import Backbone = require('backbone');

export interface IWhenFetchedEntity {
  _fetch:Q.Promise<IFetchResolution>;
}

export interface IFetchResolution {
  response:any;
  options:any;
  status:number;
  failed:boolean;
}

export function whenFetched(entities:IWhenFetchedEntity[], callback:(errors?:any[]) => any) {
  var promises = <Q.Promise<IFetchResolution>[]>_.chain([entities]).flatten().pluck("_fetch").compact().value();
  if (promises.length) {
    return Q.all<IFetchResolution>(promises).done(function(results:IFetchResolution[]) {
      console.log('whenFetched', results);
      var errors = results.filter(function(result) {
        return result.failed;
      });
      return callback(errors);
    });
  } else {
    console.log('whenFetched', entities);
    throw new Error('Nothing is being fetched');
  }
};
