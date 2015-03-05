/// <reference path="../../typings/modernizr/modernizr.d.ts" />


Modernizr.addTest("old", function() {
  var v = function(ua:string) {
    var match = ua.match(/Android\s([0-9\.]*)/);
    if (match) {
      return match[1];
    } else {
      return '';
    }
  }(navigator.userAgent);
  if (v) {
    return parseFloat(v) < 4.3;
  } else {
    return false;
  }
});
