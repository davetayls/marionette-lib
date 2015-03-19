/// <reference path="../../typings/tsd.d.ts" />
import Backbone = require('backbone');
export declare class Entity extends Backbone.Model {
}
export declare class EntityCollection<T extends Backbone.Model> extends Backbone.Collection<T> {
}
