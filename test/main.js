// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const Messenger      = require('../index')
    , pack           = require('../package.json')
    , testlib        = require('./int/lib')
    , testsubandfire = require('./int/subandfire')
    ;


// -- Local Constants
const libname = 'Messenger';


// -- Local Variables


// -- Main
describe('Test Messenger:', () => {
  testlib(Messenger, libname, pack.version, 'without new');
  testsubandfire(Messenger);
});
