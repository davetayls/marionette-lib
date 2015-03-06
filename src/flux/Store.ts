/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import constants = require('../constants');
import EventedClass = require('../utilities/EventedClass');
import fluxInterfaces = require('./interfaces');
import flux = require('flux');

export class Store extends EventedClass.EventedClass {

  constructor(dispatcher:flux.Dispatcher<fluxInterfaces.IPayload>) {
    super();
    this.dispatchToken = dispatcher.register(this.dispatch.bind(this));
  }

  dispatchToken:string;

  dispatch(payload:fluxInterfaces.IPayload):void {}

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
