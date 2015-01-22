/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import Marionette = require('backbone.marionette');

export interface IRegistryDestroyable {
  destroy():any;
}

export interface IRegistryItem {
  region:IRegistryDestroyable;
}

export var _registry:{[index:string]:IRegistryItem} = {};

export function register(instance:IRegistryItem, id:string):void {
  _registry[id] = instance;
}

export function unregister(instance:IRegistryItem, id:string) {
  delete _registry[id];
}

export interface IRegistryState {
  count:number;
  previous:number;
  msg:string;
}

export function resetRegistry():IRegistryState {
  var oldCount = getRegistrySize();
  var controller:IRegistryItem;
  for (var key in _registry) {
    controller = _registry[key];
    controller.region.destroy();
  }
  var ret:IRegistryState = {
    count: getRegistrySize(),
    previous: oldCount,
    msg: "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize())
  };
  console.info('Registry reset', ret);
  return ret;
}

export function getRegistrySize():number {
  return _.size(_registry);
}

