///<reference path="../../typings/tsd.d.ts"/>

export import behaviors = require('../../src/behaviors/behaviorsLookup');
import components = require('../../src/components/index');
import Button = components.Button;

describe('Button', function() {

  it('can create a new instance', function() {
    var btn = new Button.Button({
      name: 'btn',
      text: 'Button'
    });
    expect(btn).instanceOf(Button.Button);
  });

});
