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
  describe('Messenger introspection:', () => {
    describe('Test the nature of Messenger:', () => {
      it('Expects Messenger to be a function.', () => {
        expect(Messenger).to.be.a('function');
      });

      it('Expects Messenger to own 4 custom properties.', () => {
        expect(Object.keys(Messenger)).to.be.an('array').that.has.lengthOf(4);
      });

      describe('Check the owned generic custom properties:', () => {
        it(`Expects Messenger to own the property "NAME" whose value is "${libname}".`, () => {
          expect(Messenger).to.own.property('NAME').that.is.equal(libname);
        });

        it(`Expects Messenger to own the property "VERSION" whose value is "${version}".`, () => {
          expect(Messenger).to.own.property('VERSION');
        });

        it('Expects Messenger to own the property "_setTestMode" that is a function.', () => {
          expect(Messenger).to.own.property('_setTestMode').that.is.a('function');
        });

        it('Expects Messenger to own the property "noConflict" that is a function.', () => {
          expect(Messenger).to.own.property('noConflict').that.is.a('function');
        });

        describe('Test the owned generic custom properties:', () => {
          it('Expects the property "_setTestMode" to return an array with 0 item.', () => {
            expect(Messenger._setTestMode()).to.be.an('array').that.has.lengthOf(0);
          });

          it('Expects the property "noConflict" to return a function.', () => {
            expect(Messenger.noConflict()).to.be.a('function');
          });
        });
      });
    });

    describe('Test Messenger constructor:', () => {
      const o = Messenger();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects the function Messenger to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects Messenger object to own 2 properties.', () => {
        expect(op).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects Messenger object to inherit 5 properties.', () => {
        expect(io).to.be.an('array').that.has.lengthOf(5);
      });

      describe('Check the owned generic properties:', () => {
        it('Expects Messenger object to own the property "_library" that is an object.', () => {
          expect(o).to.own.property('_library').that.is.an('object');
        });

        describe('Test the owned generic properties:', () => {
          it('Expects the property "_library" to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });

      describe('Check the inherited generic properties:', () => {
        it('Expects Messenger object to inherit the property "whoami" that is a function.', () => {
          expect(o).to.have.property('whoami').that.is.a('function');
        });

        describe('Test the inherited generic properties:', () => {
          it('Expects the property "whoami" to return an object.', () => {
            expect(o.whoami()).to.be.an('object');
          });
          it('Expects this object to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });

      describe('Check the owned specific properties:', () => {
        it('Expects Messenger object to own the property "_db" that is an object.', () => {
          expect(o).to.own.property('_db').that.is.an('object');
        });

        describe('Test the owned specific properties:', () => {
          // none,
        });
      });

      describe('Check the inherited specific properties:', () => {
        it('Expects Messenger object to inherit the property "subscribe" that is a function.', () => {
          expect(o).to.have.property('subscribe').that.is.a('function');
        });

        it('Expects Messenger object to inherit the property "subscribeOnce" that is a function.', () => {
          expect(o).to.have.property('subscribeOnce').that.is.a('function');
        });

        it('Expects Messenger object to inherit the property "unsubscribe" that is a function.', () => {
          expect(o).to.have.property('unsubscribe').that.is.a('function');
        });

        it('Expects Messenger object to inherit the property "publish" that is a function.', () => {
          expect(o).to.have.property('publish').that.is.a('function');
        });

        describe('Test the inherited specific properties:', () => {
          // it('Expects the property "getString" to return the string "I am a string!".', () => {
          //   expect(o.getString()).to.be.a('string').that.is.equal('I am a string!');
          // });
        });
      });
    });
  });
};
