var Handlebars, Static, fs, hbs, _;

_ = require('underscore');

fs = require('fs');

hbs = require('hbs');

Handlebars = hbs.handlebars;

Static = require('../../src/controllers/Static');

Static.getComponentTemplate = function(tmplPath) {
  var tmpl;
  if (!/\.hbs$/.test(tmplPath)) {
    tmplPath += '.hbs';
  }
  tmpl = fs.readFileSync(tmplPath, {
    encoding: 'utf8'
  });
  if (tmpl) {
    return Handlebars.compile(tmpl);
  } else {
    throw new Error("No valid template at " + tmplPath);
  }
};

if (process.env.NODE_ENV === 'production') {
  Static.getComponentTemplate = _.memoize(Static.getComponentTemplate);
}
