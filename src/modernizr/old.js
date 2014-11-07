var getAndroidVersion;

getAndroidVersion = function(ua) {
  var match;
  ua = ua || navigator.userAgent;
  match = ua.match(/Android\s([0-9\.]*)/);
  if (match) {
    return match[1];
  } else {
    return false;
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

//# sourceMappingURL=old.js.map
