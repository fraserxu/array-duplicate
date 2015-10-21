var duplicated = require('../')
var isEqual = require('lodash.isequal')
var test = require('tape')

test('duplicate', function (t) {
  var result = duplicated([1, 2, 4, 3], [4, 5, 7, 3])
  t.ok(isEqual(result.sort(), [3, 4].sort()))
  t.end()
})
