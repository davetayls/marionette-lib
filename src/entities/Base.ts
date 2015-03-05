/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
require('backbone.dualstorage');

window.Store.prototype.sep = '__';

export class Entity extends Backbone.Model {}

export class EntityCollection<T extends Backbone.Model> extends Backbone.Collection<T> {}


