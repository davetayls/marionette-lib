/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import flux = require('flux');
import Q = require('q');
import constants = require('../constants');
import EventedClass = require('../utilities/EventedClass');
import fluxInterfaces = require('./interfaces');
import Dispatcher = require('./Dispatcher');

export class Store extends EventedClass.EventedClass {

  constructor(dispatcher:Dispatcher.Dispatcher) {
    super();
    this.dispatcher = dispatcher;
    this.dispatchToken = dispatcher.register(this.dispatch.bind(this));
    this.initStoreReadyDeferred();
  }

  protected storeReadyDeferred:Q.Deferred<any>;
  storeReady:Q.Promise<any>;
  protected dispatcher:Dispatcher.Dispatcher;
  dispatchToken:string;

  dispatch(payload:fluxInterfaces.IPayload):void {}

  initStoreReadyDeferred():void {
    this.storeReadyDeferred = Q.defer<any>();
    this.storeReady = this.storeReadyDeferred.promise;
  }

  emitChange():void {
    this.trigger(constants.EVENT_TYPES.Change.val);
  }

  addChangeListener(callback: ()=>void) {
    this.on(constants.EVENT_TYPES.Change.val, callback);
  }

  removeChangeListener(callback: ()=>void) {
    this.off(constants.EVENT_TYPES.Change.val, callback);
  }

}
