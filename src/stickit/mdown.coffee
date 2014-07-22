
Showdown = require 'showdown'
mdown = new Showdown.converter()

module.exports =
  selector: '[data-mdown]'
  updateMethod: 'html'
  onGet: (val) -> mdown.makeHtml(val)
