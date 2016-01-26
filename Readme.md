
# changed-paths

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compute the deep paths that have changed between two, presumed immutable, objects

## Installation

    $ npm install @f/changed-paths

## Usage

```js
var changedPaths = require('@f/changed-paths')

changedPaths({a: {b: 1}}, {a: {b: 2, c: 3}}) // -> ['a', 'a.b', 'a.c']
changedPaths({a: [1, 2, 3]}, {a: [1, 3, 4]}) // -> ['a', 'a.1', 'a.2']
```

Note that this library assumes that your objects are immutable. That is, it will not descend into a subtree if they are reference equal to each other. This makes this diff asymptotically more performant than other, similar deep diffs.

## API

### changedPaths(next, prev)

- `next` - The new value
- `prev` - The old value

**Returns:** An array containing the unique list of paths that are different between the two.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/changed-paths.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/changed-paths
[git-image]: https://img.shields.io/github/tag/micro-js/changed-paths.svg
[git-url]: https://github.com/micro-js/changed-paths
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/changed-paths.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/changed-paths
