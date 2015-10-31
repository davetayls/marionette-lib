/// <reference path="../../typings/tsd.d.ts" />

import flux = require('flux');
import constants = require('../constants');
import fluxInterfaces = require('./interfaces');
import IPayload = fluxInterfaces.IPayload;
import actions = require('./actions');
import Store = require('./Store');

var log = console.log.bind ? console.log.bind(console) : console.log;

export class Dispatcher extends flux.Dispatcher<IPayload> {

  constructor() {
    this.stores = [];
    this.payloadQueue = [];
    super();
  }

  stores:Store.Store[];
  payloadQueue:IPayload[];
  dispatching:boolean;

  registerStore(store:Store.Store):string {
    this.stores.push(store);
    return this.register(store.dispatch.bind(store));
  }

  dispatchPayload():void {
    var payload = this.payloadQueue.shift();
    if (payload) {
      this.dispatching = true;
      log('Dispatching:', payload);
      this.dispatch(payload);
      this.notifyStoreListeners();
      this.dispatching = false;
      this.dispatchPayload();
    }
  }

  notifyStoreListeners():void {
    this.stores.forEach((store) => {
      store.notifyIfStateChanged();
    });
  }

  handlePayload(payload:IPayload):void {
    this.payloadQueue.push(payload);
    log('Dispatcher: handle', payload);
    if (!this.dispatching) this.dispatchPayload();
  }

  handleServerAction(action:actions.Action){
    var payload = {
      source: constants.ACTION_SOURCES.ServerAction,
      action: action,
      caller: arguments.callee.caller
    };
    this.handlePayload(payload);
  }

  handleDeviceAction(action:actions.Action){
    var payload = {
      source: constants.ACTION_SOURCES.DeviceAction,
      action: action,
      caller: arguments.callee.caller
    };
    this.handlePayload(payload);
  }

  handleViewAction(action:actions.Action){
    var payload = {
      source: constants.ACTION_SOURCES.ViewAction,
      action: action,
      caller: arguments.callee.caller
    };
    this.handlePayload(payload);
  }

}
