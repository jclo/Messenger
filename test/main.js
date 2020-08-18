// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules
const Messenger = require('../index')
    , pack   = require('../package.json')
    , testlib = require('./int/lib')
    , testsubandfire = require('./int/subandfire')
    ;


// -- Local Constants
const libname = 'Messenger';


// -- Local Variables


// -- Main
describe('Test Messenger:', () => {
  testlib(Messenger, libname, pack.version);
  testsubandfire(Messenger);
});
