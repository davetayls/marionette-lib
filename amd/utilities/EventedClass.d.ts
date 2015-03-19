/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
export declare class EventedClass implements Backbone.Events {
    on: (eventName: string, callback?: Function, context?: any) => any;
    off: (eventName?: string, callback?: Function, context?: any) => any;
    trigger: (eventName: string, ...args: any[]) => any;
    bind: (eventName: string, callback: Function, context?: any) => any;
    unbind: (eventName?: string, callback?: Function, context?: any) => any;
    once: (events: string, callback: Function, context?: any) => any;
    listenTo: (object: any, events: string, callback: Function) => any;
    listenToOnce: (object: any, events: string, callback: Function) => any;
    stopListening: (object?: any, events?: string, callback?: Function) => any;
}
