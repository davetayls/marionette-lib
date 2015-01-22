/// <reference path="../../typings/tsd.d.ts" />

import AppController = require('./App');

export class ComponentController extends AppController.AppController {

  show(view:Backbone.View<Backbone.Model>, options) {
    if (!(options.region && this._mainView)) {
      throw new Error('You should not @show the main view, use @setMainView with components and @show from the apps controller.');
    } else {
      return super.show(view, options);
    }
  }

}

