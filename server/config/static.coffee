
fs = require 'fs'
join = require('path').join
hbs = require 'hbs'
Handlebars = hbs.handlebars

# Set methods for retrieving static templates from file system
Static = require '../../src/controllers/Static'
Static.getComponentTemplate = (tmplPath) ->
  unless /\.hbs$/.test(tmplPath)
    tmplPath += '.hbs'
  tmpl = fs.readFileSync tmplPath, encoding: 'utf8'
  if tmpl then Handlebars.compile(tmpl)
  else throw new Error("No valid template at #{tmplPath}")

if process.env.NODE_ENV is 'production'
  Static.getComponentTemplate = _.memoize Static.getComponentTemplate

Static::getComponentTemplate = ->
  tmplPath = join(__dirname, @name, 'template.hbs')
  Static.getComponentTemplate(tmplPath)
