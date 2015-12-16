/// <reference path="../../typings/tsd.d.ts" />
import constants = require('../constants');
import Dispatcher = require('./Dispatcher');

export class Action {
  constructor(type?:any) {
    this.type = type;
  }

  type:any;

  is(ActionClass:typeof Action):boolean {
    return this instanceof ActionClass;
  }
}

export class ActionCreator {

  constructor(dispatcher:Dispatcher.Dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatcher:Dispatcher.Dispatcher;

}
