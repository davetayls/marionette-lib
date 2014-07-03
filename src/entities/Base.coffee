
Backbone = require 'backbone'
require 'backbone.dualstorage'
window.Store::sep = '__'

class Entity extends Backbone.Model

class EntityCollection extends Backbone.Collection

Entity.Collection = EntityCollection
module.exports = Entity

