/// <reference path="../../typings/tsd.d.ts" />
var components = require('../../amd/components/index');
var Button = components.Button;
describe('Button component', function () {
    it('can create a new instance', function () {
        var btn = new Button.Button();
        expect(btn).instanceOf(Button.Button);
    });
});
//# sourceMappingURL=Button-spec.js.map