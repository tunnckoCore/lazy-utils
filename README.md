# [lazy-utils][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Most used utils, almost everywhere - [lazy-cache][]d. Including simple arrayify, [isobject][], [isarray][], [is-buffer][], [is-extendable][] and [extend-shallow][].

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i lazy-utils --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const lazyUtils = require('lazy-utils')
```

### [.extend](index.js#L45)

> Extend object `a` with the properties of object `b`.
See [extend-shallow][] for more.

**Params**

* `a` **{Mixed}**    
* `b` **{Mixed}**    
* `returns` **{Object}**  

### [.isExtendable](index.js#L56)

> See [is-extendable][] for more.

**Params**

* `val` **{Mixed}**    
* `returns` **{Boolean}**  

### [.isArray](index.js#L67)

> See [lazy-arrayify][] or [isarray][] for more.

**Params**

* `val` **{Mixed}**    
* `returns` **{Boolean}**  

### [.isObject](index.js#L79)

> Returns true if the value is an object and not an array or null.
See [isobject][] for more.

**Params**

* `val` **{Mixed}**    
* `returns` **{Boolean}**  

### [.isBuffer](index.js#L91)

> Returns true if the value is a buffer.
See [is-buffer][] for more.

**Params**

* `val` **{Mixed}**    
* `returns` **{Boolean}**  

### [.arrayify](index.js#L103)

> Arrayify. Returns empty array on **falsey** values.
See [lazy-arrayify][] for more.

**Params**

* `val` **{Mixed}**    
* `returns` **{Array}**  

## Related
* [ansi-colors](https://www.npmjs.com/package/ansi-colors): Collection of ansi colors and styles. | [homepage](https://github.com/doowb/ansi-colors)
* [extend-shallow](https://www.npmjs.com/package/extend-shallow): Extend an object with the properties of additional objects. node.js/javascript util. | [homepage](https://github.com/jonschlinkert/extend-shallow)
* [is-extendable](https://www.npmjs.com/package/is-extendable): Returns true if a value is any of the object types: array,… [more](https://www.npmjs.com/package/is-extendable) | [homepage](https://github.com/jonschlinkert/is-extendable)
* [isarray](https://www.npmjs.com/package/isarray): Array#isArray for older browsers | [homepage](https://github.com/juliangruber/isarray)
* [isobject](https://www.npmjs.com/package/isobject): Returns true if the value is an object and not an array… [more](https://www.npmjs.com/package/isobject) | [homepage](https://github.com/jonschlinkert/isobject)
* [lazy-arrayify](https://www.npmjs.com/package/lazy-arrayify): We are lazy, also [lazy-cache][]d and [browserify][]-ready - just arrayify, falsey values… [more](https://www.npmjs.com/package/lazy-arrayify) | [homepage](https://github.com/tunnckocore/lazy-arrayify)
* [lazy-chalk](https://www.npmjs.com/package/lazy-chalk): Lazily load chalk, since it takes so long to load. | [homepage](https://github.com/jonschlinkert/lazy-chalk)
* [lazy-globby](https://www.npmjs.com/package/lazy-globby): Lazily require globby, since it takes so long to load (because of… [more](https://www.npmjs.com/package/lazy-globby) | [homepage](https://github.com/jonschlinkert/lazy-globby)
* [limon-prev-next](https://www.npmjs.com/package/limon-prev-next): Plugin for [limon][] pluggable lexer that adds `prev` and `next` methods. | [homepage](https://github.com/limonjs/limon-prev-next)
* [limon](https://www.npmjs.com/package/limon): The pluggable JavaScript lexer on per character basis. | [homepage](https://github.com/limonjs/limon)
* [postjson](https://www.npmjs.com/package/postjson): Transforming JSON with plugins. | [homepage](https://github.com/postjson/postjson)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/lazy-utils/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[browserify]: https://github.com/substack/node-browserify
[extend-shallow]: https://github.com/jonschlinkert/extend-shallow
[is-buffer]: https://github.com/feross/is-buffer
[is-extendable]: https://github.com/jonschlinkert/is-extendable
[isarray]: https://github.com/juliangruber/isarray
[isobject]: https://github.com/jonschlinkert/isobject
[lazy-arrayify]: https://github.com/tunnckocore/lazy-arrayify
[lazy-cache]: https://github.com/jonschlinkert/lazy-cache
[limon]: https://github.com/limonjs/limon

[npmjs-url]: https://www.npmjs.com/package/lazy-utils
[npmjs-img]: https://img.shields.io/npm/v/lazy-utils.svg?label=lazy-utils

[license-url]: https://github.com/tunnckoCore/lazy-utils/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/lazy-utils.svg

[downloads-url]: https://www.npmjs.com/package/lazy-utils
[downloads-img]: https://img.shields.io/npm/dm/lazy-utils.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/lazy-utils
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/lazy-utils.svg

[travis-url]: https://travis-ci.org/tunnckoCore/lazy-utils
[travis-img]: https://img.shields.io/travis/tunnckoCore/lazy-utils/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/lazy-utils
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/lazy-utils.svg

[david-url]: https://david-dm.org/tunnckoCore/lazy-utils
[david-img]: https://img.shields.io/david/tunnckoCore/lazy-utils.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg