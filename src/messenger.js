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
 *  . addEvents                   enables a list of events,
 *  . addStreamEvents             enables a list of streamed events,
 *  . fire                        fires an event,
 *  . trigger                     fires an event (alias),
 *  . addEventListener            adds an event listener,
 *  . addOneTimeEventListener     adds an event listener fired once,
 *  . removeEventListener         removes an event listener,
 *  . on                          adds an event listener (alias),
 *  . one                         adds an event listener fired once (alias),
 *  . off                         removes an event listener (alias),
 *  . fireQActive                 returns the status of a streamed queue,
 *  . fireQ                       fires a streamed queue,
 *  . fireQL                      fires a streamed queue,
 *  . addEventStreamListener      adds a streamed event,
 *  . addEventStreamListenerLast  adds a stremed event,
 *  . q                           adds a streamed event (alias),
 *  . ql                          adds a streamed event (alias),
 *  . setOpen                     authorizes any events messages,
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
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules
  const M = TM.Util.Public;


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
   * @param {String/Array}  the list of events to enable,
   * @returns {Object}      returns the Messenger object,
   * @since 0.0.0
   */
  Messenger = function(events) {
    const obj = Object.create(methods);
    // Initializes the message database to empty:
    obj.db = {};
    // Adds event messages:
    obj.addEvents(events);
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
     * Enables a list of events.
     *
     * @method (arg1)
     * @public
     * @param {String/Array}  the list of events to enable,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addEvents(events) {
      M.addEvents(this.db, events);
      return this;
    },

    /**
     * Enables a list of streamed events.
     *
     * @method (arg1)
     * @public
     * @param {String/Array}  the list of events to enable,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    addStreamEvents(events) {
      M.addStreamEvents(this.db, events);
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
    fire(event, payload) {
      M.fire(this.db, event, payload);
      return this;
    },

    /**
     * Fires an event (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Object}      the payload,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    trigger(event, payload) {
      return this.fire(event, payload);
    },

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
    addEventListener(event, listener) {
      M.addEventListener(this.db, event, listener, this.open);
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
    /* istanbul ignore next */
    addOneTimeEventListener(event, listener) {
      M.addOneTimeEventListener(this.db, event, listener, this.open);
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
    /* istanbul ignore next */
    removeEventListener(event, listener) {
      M.removeEventListener(this.db, event, listener);
      return this;
    },

    /**
     * Adds an event listener (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    on(event, listener) {
      return this.addEventListener(event, listener);
    },

    /**
     * Adds an event listener that is fired once (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    one(event, listener) {
      return this.addOneTimeEventListener(event, listener);
    },

    /**
     * Removes an event listener (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    off(event, listener) {
      return this.removeEventListener(event, listener);
    },

    /**
     * Returns the status of a streamed queue.
     *
     * Nota:
     * it returns true if the 'firer' is running (processing the queue).
     *
     * @method (arg1)
     * @public
     * @param {String}      the event,
     * @returns {Boolean}   returns the queue status,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    fireQActive(event) {
      return this.db[event].stream.firing;
    },

    /**
     * Fires the events in the queue.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Object}      the scope,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    fireQ(event, scope) {
      M.fireQ(this.db, event, scope);
      return this;
    },

    /**
     * Fires the events in the queue.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Object}      the scope,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    fireQL(event, scope) {
      M.fireQL(this.db, event, scope);
      return this;
    },

    /**
     * Adds a streamed event.
     *
     * Nota:
     * The streamed events are stored in a special queue. As soon as the queue
     * contains an event hanlder, this handler is fired. But, instead of a payload,
     * the event handler gets a function it must execute at completion. This
     * function fires the next event hanlder in the queue, and so on.
     *
     * Thus, this mode allows to execute sequentially the event handlers sharing
     * the same event.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    addEventStreamListener(event, listener) {
      M.addEventStreamListener(this.db, event, listener);
      return this;
    },

    /**
     * Adds a streamed event.
     *
     * Nota:
     * This function has quite the same behaviour as the previous one. But,
     * instead of firing the event handlers sequentially, the 'firer' fires the
     * last event handler in the queue and it scratch out the intermediate ones.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    addEventStreamListenerLast(event, listener) {
      M.addEventStreamListenerLast(this.db, event, listener);
      return this;
    },

    /**
     * Adds a streamed event (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    q(event, listener) {
      return this.addEventStreamListener(event, listener);
    },

    /**
     * Adds a streamed event (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    ql(event, listener) {
      return this.addEventStreamListenerLast(event, listener);
    },

    /**
     * Authorizes any event messages.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    setOpen() {
      this.open = true;
      return this;
    },
  };
}());
