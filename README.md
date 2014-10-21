marionette_lib
==============

An opinionated structure for building Marionette apps highly based on the 
excellent [Backbone Rails Series](http://backbonerails.com/).

 - [Project Structure](#project-structure)
 - [Behaviors](#behaviors)
 - [Components](#components)
 - [Config](#config)
 - [Controllers](#controllers)
 - [Entities](#entities)
 - [Utilities](#utilities)
 - [Views](#views)
 
## Project Structure

This is the usual project structure for apps that use this library.

    - /apps
      |- /section_name
         |- /edit
            |- Edit.coffee
            |- EditController.coffee
         |- /list
            |- List.coffee -- if needed
            |- item.hbs -- if needed
            |- list.hbs -- if needed
            |- ListController.coffee
         |- /show
            |- view.hbs -- template if needed
            |- View.coffee
            |- ShowController.coffee
         |- app.coffee
         |- index.styl
    - /behaviors
    - /components
    - /config
    - /entities
    - app.coffee
    - main.coffee
    - main_config.coffee

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

The base controller makes sure that all controllers register themselves in 
the app registry so we can keep track of what has or hasn't been cleaned up 
properly.

### App Controller

The app controller is used for managing portions of the app like a listing or
 showing an item.
 
#### ListController

Here is a simple example of how you might write a `ListController.coffee`.

```coffeescript
List = require './List'

class PeopleListController extends marionette_lib.controllers.App
  initialize: ->
    @people = new Person.Collection()
    @list = new List(collection: @people)
    @people.fetch()
    @show @list,
      loading: true
```

If you needed a layout with regions then the controller would manage what 
goes in to the regions.

```coffeescript
Layout = require './Layout'
List = require './List'
Stats = require('components').Stats

class PeopleListController extends marionette_lib.controllers.App
  initialize: ->
    @people = new Person.Collection()
    @layout = new Layout()
    @list = new List(collection: @people)
    
    # an example component controller
    @peopleStats = new Stats(collection: @people)
    
    # once the layout is shown we want to show the sub views
    @layout.on 'show', =>
      @show @list, 
        region: @layout.listRegion
        loading: true
      @show @peopleStats, 
        region: @layout.statsRegion
        loading: true
    
    # fetch the data
    @people.fetch()
    
    # show the layout
    @show @layout
```

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
