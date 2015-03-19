/// <reference path="../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
import AnimatedRegion = require('../components/AnimatedRegion/AnimatedRegion');
export declare class BaseController extends Marionette.Controller {
    constructor(options?: any);
    _instance_id: string;
    region: AnimatedRegion.AnimatedRegion;
    destroy(): void;
    proxyEvents(instance: any, prefix?: string): void;
}
