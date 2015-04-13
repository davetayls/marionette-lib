/// <reference path="../../typings/tsd.d.ts" />

import components = require('../../amd/components/index');
import Button = components.Button;

describe('Button component', function() {

  it('can create a new instance', function() {
    var btn = new Button.Button();
    expect(btn).instanceOf(Button.Button);
  });

});
