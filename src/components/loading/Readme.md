
Loading Component
===

This component will monitor entities for their ready state and show a loading
 view in the meantime. When the entities fetch resolves it will swap out the
 loading view for the actual view passed in.

```javascript
new components.Loading({
  region: myMarionetteRegion,
  view: myOriginalView
  config: {
    loadingType: 'notice' // or a view
    debug: false
  }
});
```
