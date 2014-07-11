
Marionette = require 'backbone.marionette'

class ModifiersBehavior extends Marionette.Behavior
  onModified: (modifier, add = true) ->
    unless @view.name then throw new Error('A name is required on this View');
    if add
      @$el.addClass "#{@view.name}--#{modifier}"
    else
      @$el.removeClass "#{@view.name}--#{modifier}"

module.exports = ModifiersBehavior
