/// <reference path="../../typings/tsd.d.ts" />
var Showdown = require('showdown');
var mdown = new Showdown.converter();
exports.selector = '[data-mdown]';
exports.updateMethod = 'html';
function onGet(val) {
    return mdown.makeHtml(val);
}
//# sourceMappingURL=mdown.js.map