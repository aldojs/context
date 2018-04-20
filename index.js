
'use strict'

class Factory {
  /**
   * Create a new context factory
   * 
   * @constructor
   */
  constructor () {
    this._store = Object.create(null)
  }

  /**
   * Extend the context store by adding shared properties
   * 
   * @param {String} prop
   * @param {Any} value
   */
  set (prop, value) {
    Reflect.defineProperty(this._store, prop, {
      configurable: true,
      enumerable: true,
      writable: true,
      value
    })
  }

  /**
   * Extend the context store by adding per instance property
   * 
   * @param {String} prop
   * @param {Function} fn
   */
  bind (prop, fn) {
    var field = `_${prop}`

    Reflect.defineProperty(this._store, prop, {
      configurable: true,
      enumerable: true,
      get () {
        if (this[field] === undefined) {
          // private property
          Reflect.defineProperty(this, field, {
            value: fn(this)
          })
        }

        return tthis[field]
      }
    })
  }

  /**
   * Get a value from the context store
   * 
   * @param {String} prop
   * @returns {Any}
   */
  get (prop) {
    return this._store[prop]
  }

  /**
   * Check if the prop is defined in the context store
   * 
   * @param {String} prop
   * @returns {Boolean}
   */
  has (prop) {
    return prop in this._store
  }

  /**
   * Create a new context store
   * 
   * @returns {Object}
   */
  create () {
    return Object.create(this._store)
  }
}

// exports
exports.ContextFactory = Factory
