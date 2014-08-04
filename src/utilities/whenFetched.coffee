
Q = require 'q'
app = require 'app'
$ = require 'jquery'
_ = require 'underscore'

module.exports = (entities, callback) ->
  promises = _.chain([entities]).flatten().pluck("_fetch").compact().value()
  if promises.length
    Q.all(promises).done (results) ->
      console.log 'whenFetched', results
      errors = results.filter (result) -> result.failed
      callback errors
  else
    console.log 'whenFetched', entities
    throw new Error('Nothing is being fetched')

