define(function (require, exports, module) {var Marionette, _;

_ = require('underscore');

Marionette = require('backbone.marionette');

_.extend(Marionette.View.prototype, {
  tagName: 'section',
  className: function() {
    return this.name;
  },
  templateHelpers: function() {
    return {
      modelName: this.model ? this.model.name : ''
    };
  }
});

//# sourceMappingURL=View.js.map

});
