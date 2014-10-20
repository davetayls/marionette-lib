marionette_lib
==============

A reusable library for Marionette apps.

## Behaviors

### Modifiers

This is a simple behavior baked in to all views and layouts which allows you 
work with BEM style modifiers. It will also trigger events on the view when 
modifiers are turned on and off.

```coffeescript
class MyView extends marionette_lib.views.ItemView
  name: 'my'
  initialize: ->
    @on 'modified:shown', (state) ->
      console.log('are we in the shown state?', state.on)
  
  showSomething: ->
    @triggerMethod 'modified', 'shown'
    
  toggleSomething: ->
    @triggerMethod 'modified', 'shown', { toggle: true }
    
  removeSomething: ->
    @triggerMethod 'modified', 'shown', { remove: true }
  
```

I the example above you will get the `my--shown` class added, 
toggled and then removed from the view's element.

You will also get the `modified:[modifier]` event triggered on the view. 
Which you can subscribe to like:

```coffeescript
@on 'modified:shown`, (state) ->
  console.log(state.on) # true/false
```

You can also use the Marionette method form:

```coffeescript
onModifiedShown: (state) ->
  console.log(state.on) # true/false
```
