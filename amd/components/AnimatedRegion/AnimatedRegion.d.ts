/// <reference path="../../../typings/tsd.d.ts" />
import Marionette = require('backbone.marionette');
export interface IAnimatableView extends Marionette.View<Backbone.Model> {
    animateOut(cb: () => void): void;
}
export declare class AnimatedRegion extends Marionette.Region {
    currentView: IAnimatableView;
    _nextView: IAnimatableView;
    animateOut(cb: () => void): void;
    animateEmpty(cb: () => void): void;
}
