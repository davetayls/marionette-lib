/// <reference path="../../typings/tsd.d.ts" />

import Showdown = require('showdown');
var mdown = new Showdown.Converter();

export var selector = '[data-mdown]';
export var updateMethod = 'html';
function onGet(val:string):string {
  return mdown.makeHtml(val);
}
