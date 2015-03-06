/// <reference path="../../typings/tsd.d.ts" />

import flux = require('flux');
import fluxInterfaces = require('./interfaces');
import constants = require('../constants');

export class Dispatcher extends flux.Dispatcher<fluxInterfaces.IPayload> {

  handleServerAction(action:any){
    this.dispatch({
      source: constants.ACTION_SOURCES.ServerAction,
      action: action
    });
  }

  handleViewAction(action:any){
    this.dispatch({
      source: constants.ACTION_SOURCES.ViewAction,
      action: action
    });
  }

}
