/// <reference path="../../typings/tsd.d.ts" />
import constants = require('../constants');

export class Action {
  constructor(type:constants.StringConstant) {
    this.type = type;
  }
  
  type:constants.StringConstant;
}

export class ActionCreator {

}
