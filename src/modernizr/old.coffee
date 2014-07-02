
getAndroidVersion = (ua) ->
  ua = ua or navigator.userAgent
  match = ua.match(/Android\s([0-9\.]*)/)
  if match
    match[1]
  else false

Modernizr.addTest "old", ->
  v = getAndroidVersion()
  if v
    v = parseFloat(v)
    v < 4.3
  else false
