/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import registry = require('../utilities/registry');
import Marionette = require('backbone.marionette');
import AnimatedRegion = require('../components/AnimatedRegion/AnimatedRegion');

export class BaseController extends Marionette.Controller {

  constructor(options?:any) {
    this._instance_id = _.uniqueId('controller');
    registry.register(this, this._instance_id);
    super(options);
  }

  _instance_id:string;
  region:AnimatedRegion.AnimatedRegion;

  destroy() {
    console.log("destroying", this);
    registry.unregister(this, this._instance_id);
    super.destroy();
  }

  proxyEvents(instance:any, prefix?:string) {
    var _t = this;
    this.listenTo(instance, "all", function() {
      var args = Array.prototype.slice.call(arguments);
      var rootEvent = args[0];
      if (prefix) {
        args[0] = prefix + ":" + rootEvent;
      }
      args.push(instance);
      Marionette.triggerMethod.apply(_t, args);
    })
  }

}

