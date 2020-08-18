// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(Messenger, libname, version) {
  describe('Test Messenger Library:', () => {
    describe('Test Messenger.NAME and Messenger.VERSION:', () => {
      it(`Expects Messenger.NAME to return the string "${libname}".`, () => {
        expect(Messenger.NAME).to.be.a('string').that.is.equal(libname);
      });

      it('Expects Messenger.VERSION to return a string.', () => {
        expect(Messenger.VERSION).to.be.a('string').that.is.equal(version);
      });
    });

    describe('Test Messenger private static methods:', () => {
      it('Expects Messenger._setTestMode to be a function.', () => {
        expect(Messenger).own.property('_setTestMode').that.is.a('function');
      });

      it('Expects Messenger._setTestMode() to return an empty array.', () => {
        expect(Messenger._setTestMode()).to.be.an('array').that.has.lengthOf(0);
      });
    });

    describe('Test Messenger public static methods::', () => {
      it('Expects Messenger.noConflict to be a function.', () => {
        expect(Messenger).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects Messenger.noConflict() to return a function.', () => {
        expect(Messenger.noConflict()).to.be.a('function');
      });
    });

    describe('Test Messenger constructor and generic public methods:', () => {
      const o = Messenger();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects Messenger() to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects this object to own 2 properties.', () => {
        expect(op).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this object to inherit 5 properties.', () => {
        expect(io).to.be.an('array').that.has.lengthOf(5);
      });

      it('Expects this object to inherit the property "whoami" that is a function.', () => {
        expect(o).to.have.property('whoami').that.is.a('function');
      });

      it('Expects Messenger.whoami() to return an object.', () => {
        expect(o.whoami()).to.be.an('object');
      });

      it('Expects this object to own two properties.', () => {
        expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this object to own the property "name".', () => {
        expect(o.whoami()).to.own.property('name').that.is.equal(libname);
      });

      it('Expects this object to own the property "version".', () => {
        expect(o.whoami()).to.own.property('version').that.is.equal(version);
      });
    });

    describe('Test Messenger specific public methods:', () => {
      const o = Messenger();

      it('Expects this object to inherit the property "subscribe" that is a function.', () => {
        expect(o).to.have.property('subscribe').that.is.a('function');
      });

      it('Expects this object to inherit the property "subscribeOnce" that is a function.', () => {
        expect(o).to.have.property('subscribeOnce').that.is.a('function');
      });

      it('Expects this object to inherit the property "unsubscribe" that is a function.', () => {
        expect(o).to.have.property('unsubscribe').that.is.a('function');
      });

      it('Expects this object to inherit the property "publish" that is a function.', () => {
        expect(o).to.have.property('publish').that.is.a('function');
      });
    });
  });
};
