'use strict';
var Button, HomeButton, ItemView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ItemView = require('../../views/ItemView');

Button = (function(_super) {
  __extends(Button, _super);

  function Button() {
    return Button.__super__.constructor.apply(this, arguments);
  }

  Button.prototype.initialize = function() {
    Button.__super__.initialize.apply(this, arguments);
    return this.on('click', this.navigate);
  };

  Button.prototype.name = 'base-button';

  Button.prototype.tagName = 'a';

  Button.prototype.defaults = {
    icon: '',
    text: ''
  };

  Button.prototype.triggers = {
    'click': 'click'
  };

  Button.prototype.className = function() {
    return 'btn btn-block btn--' + this.name;
  };

  Button.prototype.navigate = function() {
    return null;
  };

  return Button;

})(ItemView);

HomeButton = (function(_super) {
  __extends(HomeButton, _super);

  function HomeButton() {
    return HomeButton.__super__.constructor.apply(this, arguments);
  }

  HomeButton.prototype.name = 'home';

  HomeButton.prototype.defaults = {
    icon: 'img/start.svg',
    text: 'Home'
  };

  HomeButton.prototype.navigate = function() {
    return app.execute('show:home');
  };

  return HomeButton;

})(Button);

module.exports = Button;

Button.Home = HomeButton;
