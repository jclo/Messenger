# Messenger

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->
[![NPM install][npm-install-image]][npm-install-url]


`Messenger` is a tiny Javascript library to handle messages that carry a payload. It is designed to be embedded in another library. `Messenger` run on both Node.js and ECMAScript 2015 (ES6) compliant browsers.


## Quick Startup

```js

// Listens for an event:
mess.subscribe('mycustomevent', function(payload) {
  console.log('fired mycustomevent: ' + payload);
});

// Fires an event:
mess.publish('mycustomevent', 'this is the payload for mycustomevent');
```


## API

## Static methods

Messenger provides a set of static methods. You can use by typing:

```javascript
Messenger.noConflict();
```

| Static Methods       | Description |
|:---------------------|:------------|
| noConflict           | returns the Messenger variable to its previous owner, |



## Create a Messenger object:

| Constructor | Description |
|:------------|:------------|
| Messenger() | creates the Messenger object that handles messages, |


## Methods

| Methods  | Description |
|:--------------------|:------------|
| subscribe           | adds an event listener, |
| subscribeOnce       | adds an event listener that is fired once, |
| unsubscribe         | removes an event listener, |
| publish             | fires an event/message, |


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/messenger.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/@mobilabs/messenger.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/messenger.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/messenger.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/messenger/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/messenger/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/messenger/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/messenger.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/messenger
[npm-install-url]: https://nodei.co/npm/@mobilabs/messenger
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/messenger
[travis-url]: https://travis-ci.org/jclo/messenger
[coveralls-url]: https://coveralls.io/github/jclo/messenger?branch=master
[dependencies-url]: https://david-dm.org/jclo/messenger
[devdependencies-url]: https://david-dm.org/jclo/messenger?type=dev
[license-url]: http://opensource.org/licenses/MIT
