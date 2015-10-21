array-duplicate
===============

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Utility method to find duplicated items from two arrays. If you want to compute the difference between two arrays, use [array-difference](https://github.com/jugglinmike/array-difference).

## Installation

```
$ npm install array-duplicate
```

## Usage

```JavaScript
var array1 = [1, 2, 3]
var array2 = [2, 3, 4]
duplicated(array1, array2) // yeilds [2, 3]
```

## License

Copyright (c) 2015 [Fraser Xu](https://github.com/fraserxu)
Licensed under the MIT Expat license.

[npm-image]: https://img.shields.io/npm/v/array-duplicate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/array-duplicate
[travis-image]: https://img.shields.io/travis/fraserxu/array-duplicate/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/fraserxu/array-duplicate
[downloads-image]: http://img.shields.io/npm/dm/array-duplicate.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/array-duplicate
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
