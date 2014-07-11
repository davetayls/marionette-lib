
Marionette = require 'marionette'

class ModifiersBehavior extends Marionette.Behavior
  modified: (modifier, add = true) ->
    unless @name then throw new Error('A name is required on this View');
    if add
      @$el.addClass "#{name}--#{modifier}"
    else
      @$el.removeClass "#{name}--#{modifier}"
