/// <reference path="../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
export interface IModifiedOptions {
    remove?: boolean;
    toggle?: boolean;
}
export declare class ModifiersBehavior extends Marionette.Behavior {
    addModifier(modifier: string): boolean;
    removeModifier(modifier: string): boolean;
    toggleModifier(modifier: string): boolean;
    onModified(modifier: string, options?: IModifiedOptions): void;
}
