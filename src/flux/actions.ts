/// <reference path="../../typings/tsd.d.ts" />
import constants = require('../constants');
import Dispatcher = require('./Dispatcher');

export class Action {
  constructor(type:constants.StringConstant) {
    this.type = type;
  }

  type:constants.StringConstant;
  //async:boolean;
}

export class ActionCreator {

  constructor(dispatcher:Dispatcher.Dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatcher:Dispatcher.Dispatcher;

}
