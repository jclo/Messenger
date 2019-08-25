// Based on ES6.lib template v0.0.2
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable no-param-reassign */
    if (root.Messenger === null) root.Messenger = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.Messenger = factory(root);
  }
}({{lib:parent}}, (root) => {
  'use strict';

  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  // const TM
  /* eslint-disable one-var, semi-style */
  let Messenger
    , extend
    ;
  /* eslint-enable one-var, semi-style */

  /* ***************************************************************************
   *
   * Tree is an internal object that links all the internal modules.
   *
   * tree.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   *
   * @namespace Messenger
   * @exports   -
   * @author    -
   * @since     0.0.0
   * @version   -
   * ************************************************************************ */
  /* - */

  const TM = {
    Util: {
      Public: {},
    },
  };
  /* - */


  /* ***************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom.
   *
   * extend.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    /**
     * Extends the passed-in object with new methods.
     *
     * Nota: this function mutates object.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the object to extend,
     * @param {Object}        an object containing a set of methods,
     * @returns {}            -,
     * @since 0.0.0
     */
    extend = function(object, methods) {
      const keys = Object.keys(methods);

      for (let i = 0; i < keys.length; i++) {
        /* eslint-disable-next-line no-param-reassign */
        object[keys[i]] = methods[keys[i]];
      }
    };
  }());
  /* - */


  /* ***************************************************************************
   *
   * Implements the Messenger's methods.
   *
   * jm.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . schema                      returns the event db schema,
   *  . streamSchema                returns the streamed event db schema,
   *  . add                         adds a new event into the db,
   *  . addStream                   adds a new streamed event into the db,
   *
   *
   * Public Static Methods:
   *  . addEvents                   adds events to the db,
   *  . addStreamEvents             adds streamed events to the db,
   *  . fire                        fires an event,
   *  . addEventListener            adds an event listener,
   *  . addOneTimeEventListener     adds an event listener fired once,
   *  . removeEventListener         removes an event listener,
   *  . fireQ                       fires a streamed queue,
   *  . fireQL                      fires a streamed queue,
   *  . addEventStreamListener      adds a streamed event listener,
   *  . addEventStreamListenerLast  adds a streamed event listener,
   *
   *
   *
   * @namespace    TM.Util.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TM.Util.Public;


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns the event db schema.
     *
     * @function ()
     * @private
     * @returns {Object}      returns the schema,
     * @since 0.0.0
     */
    function schema() {
      return {
        listeners: [],
        listenersOnce: [],
      };
    }

    /**
     * Returns the streamed event db schema.
     *
     * @function ()
     * @private
     * @returns {Object}      returns the schema,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    function streamSchema() {
      return {
        stream: {
          firing: false,
          listeners: [],
        },
      };
    }

    /**
     * Adds a new event into the db.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @returns {}            -,
     * @since 0.0.0
     */
    function add(db, e) {
      if (!Object.prototype.hasOwnProperty.call(db, e)) {
        /* eslint-disable-next-line no-param-reassign */
        db[e] = schema();
      }
    }

    /**
     * Adds a new streamed event into the db.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @returns {}            -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    function addStream(db, e) {
      if (!Object.prototype.hasOwnProperty.call(db, e)) {
        /* eslint-disable-next-line no-param-reassign */
        db[e] = streamSchema();
      }
    }


    // -- Public Static Methods ------------------------------------------------

    extend(Root, {

      /**
       * Adds events to the db.
       *
       * @function (arg1, arg2)
       * @private
       * @param {Object}        the event db,
       * @param {String/Array}  the event,
       * @returns {}            -,
       * @since 0.0.0
       */
      addEvents(db, e) {
        if (typeof e === 'string') {
          add(db, e);
        } else if (Array.isArray(e)) {
          for (let i = 0; i < e.length; i++) {
            if (typeof e[i] === 'string') {
              add(db, e[i]);
            }
          }
        }
      },

      /**
       * Adds streamed events to the db.
       *
       * @function (arg1, arg2)
       * @private
       * @param {Object}        the event db,
       * @param {String/Array}  the event,
       * @returns {}            -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      addStreamEvents(db, e) {
        if (typeof e === 'string') {
          addStream(db, e);
        } else if (Array.isArray(e)) {
          for (let i = 0; i < e.length; i++) {
            if (typeof e[i] === 'string') {
              addStream(db, e[i]);
            }
          }
        }
      },

      /**
       * Fires an event.
       *
       * @function (arg1, arg2, arg3)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Object}      the payload,
       * @returns {}          -,
       * @since 0.0.0
       */
      fire(db, event, payload) {
        if (typeof event === 'string' && Object.prototype.hasOwnProperty.call(db, event)) {
          // Fires all the 'classic' listeners:
          for (let i = 0; i < db[event].listeners.length; i++) {
            db[event].listeners[i](payload);
          }
          // Fires all the listeners for once:
          for (let i = 0; i < db[event].listenersOnce.length; i++) {
            db[event].listenersOnce[i](payload);
          }
          // Remove all the event listeners for listener once:
          db[event].listenersOnce.splice(0, db[event].listenersOnce.length);
        }
      },

      /**
       * Adds an event listener.
       *
       * @function (arg1, arg2, arg3, arg4)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the listener,
       * @param {Boolean}     listens for any events if true, registered otherwise,
       * @returns {}          -,
       * @since 0.0.0
       */
      addEventListener(db, event, listener, open) {
        if (open) {
          this.addEvents(db, event);
        }
        if (typeof event === 'string'
            && typeof listener === 'function'
            && Object.prototype.hasOwnProperty.call(db, event)) {
          db[event].listeners.push(listener);
        }
      },

      /**
       * Adds an event listener that is fired once.
       *
       * @function (arg1, arg2, arg3, arg4)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the listener,
       * @param {Boolean}     listens for any events if true, registered otherwise,
       * @returns {}          -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      addOneTimeEventListener(db, event, listener, open) {
        if (open) {
          this.addEvents(db, event);
        }
        if (typeof event === 'string'
            && typeof listener === 'function'
            && Object.prototype.hasOwnProperty.call(db, event)) {
          db[event].listenersOnce.push(listener);
        }
      },

      /**
       * Removes an event listener.
       *
       * @function (arg1, arg2, arg3)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the listener,
       * @returns {}          -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      removeEventListener(db, event, listener) {
        let index;

        if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
          index = db[event].listeners.indexOf(listener);
          if (index >= 0) {
            db[event].listeners.splice(index, 1);
          }
          index = db[event].listenersOnce.indexOf(listener);
          if (index >= 0) {
            db[event].listenersOnce.splice(index, 1);
          }
        }
      },

      /**
       * Fires a streamed queue.
       *
       * @function (arg1, arg2, arg3)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Object}      the scope,
       * @returns {}          -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      fireQ(db, event, scope) {
        const { stream } = db[event]
            , funcs      = stream.listeners
            ;

        // Execute the functions one after one until the queue is empty:
        stream.firing = true;
        (function next() {
          if (funcs.length > 0) {
            funcs.shift()
              /* eslint-disable-next-line prefer-rest-params */
              .apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
          } else {
            stream.firing = false;
          }
        }());
      },

      /**
       * Fires a streamed queue.
       *
       * @function (arg1, arg2, arg3)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Object}      the scope,
       * @returns {}          -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      fireQL(db, event, scope) {
        const { stream } = db[event]
            , funcs      = stream.listeners
            ;

        // Execute the functions one after one until the queue is empty:
        stream.firing = true;
        (function next() {
          if (funcs.length > 0) {
            while (funcs.length > 1) { funcs.shift(); }
            funcs.shift()
              /* eslint-disable-next-line prefer-rest-params */
              .apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
          } else {
            stream.firing = false;
          }
        }());
      },

      /**
       * Adds a streamed event listener.
       *
       * @function (arg1, arg2, arg3)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the listener,
       * @returns {}          -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      addEventStreamListener(db, event, listener) {
        if (typeof event === 'string'
            && typeof listener === 'function'
            && Object.prototype.hasOwnProperty.call(db, event)) {
          db[event].stream.listeners.push(listener);

          // Fire the event stream if fireQ is not running:
          if (!db[event].stream.firing) {
            this.fireQ(db, event);
          }
        }
      },

      /**
       * Adds a streamed event listener.
       *
       * @function (arg1, arg2, arg3)
       * @private
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the listener,
       * @returns {}          -,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      addEventStreamListenerLast(db, event, listener) {
        if (typeof event === 'string'
            && typeof listener === 'function'
            && Object.prototype.hasOwnProperty.call(db, event)) {
          db[event].stream.listeners.push(listener);

          // Fire the event stream if fireQ is not running:
          if (!db[event].stream.firing) {
            this.fireQL(db, event);
          }
        }
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


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


  // Returns the library name:
  return Messenger;
}));
