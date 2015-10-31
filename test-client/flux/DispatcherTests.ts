///<reference path="../../typings/tsd.d.ts"/>

import {Dispatcher} from "../../src/flux/Dispatcher";
import {Action} from "../../src/flux/actions";

describe('Dispatcher', function() {

  it('can handle view action', function() {
    var d = new Dispatcher();
    var action = new Action();
    d.handleViewAction(action);
  })
});
