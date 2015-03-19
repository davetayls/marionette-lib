/// <reference path="../../typings/tsd.d.ts" />
import AppController = require('./App');
export declare class ComponentController extends AppController.AppController {
    show(view: Backbone.View<Backbone.Model>, options: any): AppController.IShowOutcome;
}
