///<reference path="../../typings/tsd.d.ts"/>
var Dispatcher_1 = require("../../src/flux/Dispatcher");
var actions_1 = require("../../src/flux/actions");
describe('Dispatcher', function () {
    it('can handle view action', function () {
        var d = new Dispatcher_1.Dispatcher();
        var action = new actions_1.Action();
        d.handleViewAction(action);
    });
});
//# sourceMappingURL=Dispatcher-spec.js.map