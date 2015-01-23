/// <reference path="../../typings/tsd.d.ts" />

import registry = require('../utilities/registry');
import Marionette = require('backbone.marionette');

export class BaseController extends Marionette.Controller {

  constructor(options?:any) {
    this._instance_id = _.uniqueId('controller');
    registry.register(this, this._instance_id);
    super(options);
  }

  _instance_id:string;
  region:Marionette.Region;

  destroy() {
    console.log("destroying", this);
    registry.unregister(this, this._instance_id);
    super.destroy();
  }

  proxyEvents(instance, prefix) {
    return this.listenTo(instance, "all", () => {
      var args = Array.prototype.slice.call(arguments);
      var rootEvent = args[0];
      if (prefix) {
        args[0] = prefix + ":" + rootEvent;
      }
      args.push(instance);
      Marionette.triggerMethod.apply(this, args);
    })
  }

}

