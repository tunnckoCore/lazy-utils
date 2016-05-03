/*!
 * lazy-utils <https://github.com/tunnckoCore/lazy-utils>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Module dependencies
 */

var utils = require('lazy-cache')(require)

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */

var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign

/**
 * Lazily required module dependencies
 */

/**
 * > Extend object `a` with the properties of object `b`.
 * See [extend-shallow][] for more.
 *
 * @name .extend
 * @param {Mixed} `a`
 * @param {Mixed} `b`
 * @return {Object}
 * @api public
 */

require('extend-shallow', 'extend')

/**
 * > See [is-extendable][] for more.
 *
 * @name .isExtendable
 * @param {Mixed} `val`
 * @return {Boolean}
 * @api public
 */

require('is-extendable')

/**
 * > See [lazy-arrayify][] or [isarray][] for more.
 *
 * @name .isArray
 * @param {Mixed} `val`
 * @return {Boolean}
 * @api public
 */

require('isarray', 'isArray')

/**
 * > Returns true if the value is an object and not an array or null.
 * See [isobject][] for more.
 *
 * @name .isObject
 * @param {Mixed} `val`
 * @return {Boolean}
 * @api public
 */

require('isobject', 'isObject')

/**
 * > Returns true if the value is a buffer.
 * See [is-buffer][] for more.
 *
 * @name .isBuffer
 * @param {Mixed} `val`
 * @return {Boolean}
 * @api public
 */

require('is-buffer')

/**
 * > Arrayify. Returns empty array on **falsey** values.
 * See [lazy-arrayify][] for more.
 *
 * @name .arrayify
 * @param {Mixed} `val`
 * @return {Array}
 * @api public
 */

require('lazy-arrayify/arrayify', 'arrayify')

/**
 * Restore `require`
 */

require = fn // eslint-disable-line no-undef, no-native-reassign

/**
 * Expose `utils` modules
 */

module.exports = utils
