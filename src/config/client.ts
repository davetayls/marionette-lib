/// <reference path="../../typings/tsd.d.ts" />

import sync = require('./backbone/sync');
import Marionette = require('backbone.marionette');
import handlebars = require('handlebars');
import AnimatedRegion = require('../components/AnimatedRegion/AnimatedRegion');
require('./marionette/LayoutView');
require('./marionette/Region');
require('./marionette/View');

export interface IConfigureOptions {
  app?:Marionette.Application;
  handlebars:HandlebarsStatic;
  defaultRegion:AnimatedRegion.AnimatedRegion;
  componentsPath:string;
}

export class MarionetteLibConfiguration {

  app:Marionette.Application;
  handlebars:HandlebarsStatic;
  defaultRegion:AnimatedRegion.AnimatedRegion;
  componentsPath:string;

  configure(options:IConfigureOptions) {
    this.app = options.app;
    this.handlebars = options.handlebars;
    this.defaultRegion = options.defaultRegion;
    this.componentsPath = options.componentsPath;
    if (this.app) {
      sync.configureBackboneSync(this.app);
    }
  }

}

export var config = new MarionetteLibConfiguration();
