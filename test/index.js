/**
 * Imports
 */

var changedPaths = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(changedPaths({a: {b: 1}}, {a: {b: 2, c: 3}}), ['a', 'a.b', 'a.c'])
  t.deepEqual(changedPaths({a: [1, 2, 3]}, {a: [1, 3, 4]}), ['a', 'a.1', 'a.2'])
  t.end()
})
