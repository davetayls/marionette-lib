/// <reference path="../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
import AnimatedRegion = require('../components/AnimatedRegion/AnimatedRegion');
export interface IConfigureOptions {
    app?: Marionette.Application;
    handlebars: HandlebarsStatic;
    defaultRegion: AnimatedRegion.AnimatedRegion;
    componentsPath: string;
}
export declare class MarionetteLibConfiguration {
    app: Marionette.Application;
    handlebars: HandlebarsStatic;
    defaultRegion: AnimatedRegion.AnimatedRegion;
    componentsPath: string;
    configure(options: IConfigureOptions): void;
}
export declare var config: MarionetteLibConfiguration;
