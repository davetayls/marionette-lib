/// <reference path="../../typings/tsd.d.ts" />
import AppController = require('./App');
export declare class ComponentController extends AppController.AppController {
    show(view: Marionette.View<Backbone.Model>, options: AppController.IShowOptions): AppController.IShowOutcome;
}
