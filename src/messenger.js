/* ***************************************************************************
 *
 * Defines the Messenger library.
 *
 * messenger.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . Messenger                   creates and returns the Messenger object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this Messenger object,
 *
 *
 * Public Methods:
 *  . subscribe                   adds an event listener,
 *  . subscribeOnce               adds an event listener that is fired once,
 *  . unsubscribe                 removes an event listener,
 *  . publish                     fires an event,
 *
 *
 *
 * @namespace    Messenger
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // START OF IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants
  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  const previousMessenger = root.Messenger
      ;


  // -- Local variables
  let methods
    ;


  // -- Public ---------------------------------------------------------------

  /**
   * Returns the Messenger object.
   * (Prototypal Instantiation Pattern)
   *
   * @constructor (arg1)
   * @public
   * @param {}              -,
   * @returns {Object}      returns the Messenger object,
   * @since 0.0.0
   */
  Messenger = function() {
    const obj = Object.create(methods);
    // Initializes the message database to empty:
    obj._db = {};
    return obj;
  };

  // Attaches a constant to ESLib that provides the version of the lib.
  Messenger.VERSION = '{{lib:version}}';


  // -- Public Static Methods ------------------------------------------------

  /**
   * Returns a reference to this Messenger object.
   *
   * Nota:
   * Running Messenger in noConflic mode, returns the Messenger variable to its
   _ previous owner.
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {String}      returns the Messenger object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  Messenger.noConflict = function() {
    /* eslint-disable-next-line no-param-reassign */
    root.Messenger = previousMessenger;
    return this;
  };


  // -- Public Methods -------------------------------------------------------

  methods = {

    /**
    * Adds an event listener.
    *
    * @method (arg1, arg2)
    * @public
    * @param {String}      the event,
    * @param {Function}    the event handler,
    * @returns {Object}    returns this,
    * @since 0.0.0
    */
    subscribe(event, listener) {
      TM.subscribe(this._db, event, listener);
      return this;
    },

    /**
     * Adds an event listener that is fired once.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    subscribeOnce(event, listener) {
      TM.subscribeOnce(this._db, event, listener);
      return this;
    },

    /**
     * Removes an event listener.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    unsubscribe(event, listener) {
      TM.unsubscribe(this._db, event, listener);
      return this;
    },

    /**
     * Fires an event.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Object}      the payload,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    publish(event, payload) {
      TM.publish(this._db, event, payload);
      return this;
    },
  };

  // END OF IIFE
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
