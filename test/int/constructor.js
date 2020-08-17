// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(Messenger) {
  describe('Test Messenger constructor:', () => {
    it('Expects Messenger to be a function.', () => {
      expect(Messenger).to.be.a('function');
    });

    it('Expects Messenger.NAME to return the string "Messenger".', () => {
      expect(Messenger.NAME).to.be.a('string').that.is.equal('Messenger');
    });

    it('Expects Messenger.VERSION to return a string.', () => {
      expect(Messenger.VERSION).to.be.a('string');
    });

    it('Expects Messenger.noConflict to return a function.', () => {
      expect(Messenger.noConflict).to.be.a('function');
    });

    it('Expects Messenger() to return an object.', () => {
      expect(Messenger()).to.be.an('object');
    });
  });
};
