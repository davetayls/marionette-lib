var Backbone, Entity, EntityCollection,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Backbone = require('backbone');

require('backbone.dualstorage');

window.Store.prototype.sep = '__';

Entity = (function(_super) {
  __extends(Entity, _super);

  function Entity() {
    return Entity.__super__.constructor.apply(this, arguments);
  }

  return Entity;

})(Backbone.Model);

EntityCollection = (function(_super) {
  __extends(EntityCollection, _super);

  function EntityCollection() {
    return EntityCollection.__super__.constructor.apply(this, arguments);
  }

  return EntityCollection;

})(Backbone.Collection);

Entity.Collection = EntityCollection;

module.exports = Entity;
