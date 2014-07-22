define(function (require, exports, module) {var Showdown, mdown;

Showdown = require('showdown');

mdown = new Showdown.converter();

module.exports = {
  selector: '[data-mdown]',
  updateMethod: 'html',
  onGet: function(val) {
    return mdown.makeHtml(val);
  }
};

});
