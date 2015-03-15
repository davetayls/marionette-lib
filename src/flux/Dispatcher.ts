/// <reference path="../../typings/tsd.d.ts" />

import flux = require('flux');
import constants = require('../constants');
import fluxInterfaces = require('./interfaces');
import actions = require('./actions');

export class Dispatcher extends flux.Dispatcher<fluxInterfaces.IPayload> {

  handleServerAction(action:actions.Action){
    var payload = {
      source: constants.ACTION_SOURCES.ServerAction,
      action: action
    };
    if (action.async) {
      setTimeout(() => { this.dispatch(payload); }, 0);
    } else {
      this.dispatch(payload);
    }
  }

  handleDeviceAction(action:actions.Action){
    var payload = {
      source: constants.ACTION_SOURCES.DeviceAction,
      action: action
    };
    if (action.async) {
      setTimeout(() => { this.dispatch(payload); }, 0);
    } else {
      this.dispatch(payload);
    }
  }

  handleViewAction(action:actions.Action){
    var payload = {
      source: constants.ACTION_SOURCES.ViewAction,
      action: action
    };
    if (action.async) {
      setTimeout(() => { this.dispatch(payload); }, 0);
    } else {
      this.dispatch(payload);
    }
  }

}
