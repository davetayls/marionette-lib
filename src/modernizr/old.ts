/// <reference path="../../typings/modernizr/modernizr.d.ts" />

function getAndroidVersion(ua?:string):string {
  ua = ua || navigator.userAgent;
  var match = ua.match(/Android\s([0-9\.]*)/);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};

Modernizr.addTest("old", function() {
  var v;
  v = getAndroidVersion();
  if (v) {
    v = parseFloat(v);
    return v < 4.3;
  } else {
    return false;
  }
});
