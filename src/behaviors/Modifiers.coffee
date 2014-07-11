
Marionette = require 'backbone.marionette'

class ModifiersBehavior extends Marionette.Behavior

  addModifier: (modifier) ->
    @$el.addClass "#{@view.name}--#{modifier}"
    true

  removeModifier: (modifier) ->
    @$el.removeClass "#{@view.name}--#{modifier}"
    false

  toggleModifier: (modifier) ->
    if @$el.hasClass "#{@view.name}--#{modifier}"
      @removeModifier(modifier)
    else
      @addModifier(modifier)

  onModified: (modifier, { remove, toggle } = {}) ->
    unless @view.name then throw new Error('A name is required on this View');

    if remove
      state = @removeModifier(modifier)

    else if toggle
      state = @toggleModifier(modifier)

    else
      state = @addModifier(modifier)

    @view.triggerMethod "modified:#{modifier}", on: state

module.exports = ModifiersBehavior
