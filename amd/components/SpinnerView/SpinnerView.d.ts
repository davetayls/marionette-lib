/// <reference path="../../../typings/tsd.d.ts" />
import View = require('../../views/View');
import Spin = require('spin');
export declare class SpinnerView extends View.View<Backbone.Model> {
    constructor(options?: Backbone.ViewOptions<Backbone.Model>);
    loadingDelay: number;
    loadingClass: string;
    loadingTimeout: number;
    loadingSpinner: Spin;
    static spinOptions: {
        lines: number;
        length: number;
        width: number;
        radius: number;
        corners: number;
        rotate: number;
        direction: number;
        color: string;
        speed: number;
        trail: number;
        shadow: boolean;
        hwaccel: boolean;
        className: string;
        zIndex: number;
        top: string;
        left: string;
    };
    start(): void;
    stop(): JQuery;
}
