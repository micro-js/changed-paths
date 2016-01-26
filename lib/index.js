/**
 * Modules
 */

var changedKeys = require('@f/changed-keys')
var forEach = require('@f/foreach-array')
var isObject = require('@f/is-object')
var isArray = require('@f/is-array')

/**
 * Expose changedPaths
 */

module.exports = changedPaths

/**
 * changedPaths
 */

function changedPaths (next, prev) {
  return recurse(next, prev, '', [])
}

function recurse (next, prev, path, changed) {
  var keys = changedKeys(next, prev)

  forEach(key => {
    var nval = next[key]
    var pval = prev[key]
    var subpath = createPath(path, key)

    changed.push(subpath)

    if (hasKeys(nval) || hasKeys(pval)) {
      recurse(nval, pval, subpath, changed)
    }
  }, keys)

  return changed
}

function createPath (p1, p2) {
  return p1
    ? p1 + '.' + p2
    : p2
}

function hasKeys (val) {
  return isObject(val) || isArray(val)
}
