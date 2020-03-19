// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const Messenger  = require('../index.js')
    , constructor = require('./int/constructor.js')
    , methods     = require('./int/methods.js')
    , addandfire  = require('./int/addandfire.js')
    ;


// -- Local Constants


// -- Local Variables

// -- Main
describe('Test Messenger:', () => {
  constructor(Messenger);
  methods(Messenger);
  addandfire(Messenger);
});
