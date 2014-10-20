marionette_lib
==============

A lightweight reusable library for Marionette apps.

 - [Behaviors](#behaviors)
 - [Components](#components)
 - [Config](#config)
 - [Controllers](#controllers)
 - [Entities](#entities)
 - [Utilities](#utilities)
 - [Views](#views)

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

## Components

## Config

## Controllers

### Base Controller

### App Controller

### Component Controller

### Static Controller

## Entities

## Handlebars

## Routers

## Utilities

### Navigation

This encapsulates navigation helpers on the `marionette_lib.navigation` 
namespace.

 - `.getCurrentRoute()` return the current url fragment
 - `.startHistory(options)` start backbone history and set a flag to say it 
 has started
 - `.to(route, options)` set the url fragment without triggering navigation 
 unless specified in the options
 
### Registry

Keep a registry of all controllers instantiated within the app so you can see
if any are not being cleaned up.

```coffeescript
class MyThing
  constructor: ->
    @_instance_id = _.uniqueId('thing')
    marionette_lib.registry.register(@, @_instance_id)
    super
  destroy: ->
    marionette_lib.registry.unregister(@, @_instance_id)
```

## Views
