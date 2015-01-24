
/// <reference path="backbone/backbone.d.ts" />
/// <reference path="backbone.dualstorage/backbone.dualstorage.d.ts" />
/// <reference path="underscore/underscore.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="fastclick/fastclick.d.ts" />
/// <reference path="marionette/marionette.d.ts" />
/// <reference path="i18next/i18next.d.ts" />
/// <reference path="handlebars/handlebars.d.ts" />
/// <reference path="modernizr/modernizr.d.ts" />
/// <reference path="showdown/showdown.d.ts" />
/// <reference path="q/Q.d.ts" />

declare var require;

declare module 'spin' {
  class Spin {
    constructor(options?:any);
    stop():void;
    spin(el:any):void;
  }
  export = Spin;
}
