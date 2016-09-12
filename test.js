/*!
 * lazy-utils <https://github.com/tunnckoCore/lazy-utils>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('mukla')
var utils = require('./index')

test('should expose 7 methods', function (done) {
  test.strictEqual(typeof utils.isArray, 'function')
  test.strictEqual(typeof utils.isBuffer, 'function')
  test.strictEqual(typeof utils.isObject, 'function')
  test.strictEqual(typeof utils.extend, 'function')
  test.strictEqual(typeof utils.arrayify, 'function')
  test.strictEqual(typeof utils.isExtendable, 'function')
  test.strictEqual(typeof utils.merge, 'function')
  done()
})
