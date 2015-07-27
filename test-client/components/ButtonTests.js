///<reference path="../../typings/tsd.d.ts"/>
exports.behaviors = require('../../src/behaviors/behaviorsLookup');
var components = require('../../src/components/index');
var Button = components.Button;
describe('Button', function () {
    it('can create a new instance', function () {
        var btn = new Button.Button({
            name: 'btn',
            text: 'Button'
        });
        expect(btn).instanceOf(Button.Button);
    });
});
//# sourceMappingURL=ButtonTests.js.map