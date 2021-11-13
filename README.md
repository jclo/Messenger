# Messenger

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)
<!-- [![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url] -->


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

[npm-image]: https://img.shields.io/npm/v/@mobilabs/messenger.svg?logo=npm&logoColor=fff&label=NPM+package
[release-image]: https://img.shields.io/github/release/jclo/messenger.svg?include_prereleases
[commit-image]: https://img.shields.io/github/last-commit/jclo/messenger.svg?logo=github
[travis-image]: https://img.shields.io/travis/com/jclo/messenger.svg?logo=travis-ci&logoColor=fff
[coveralls-image]: https://img.shields.io/coveralls/jclo/messenger/master.svg?&logo=coveralls
[dependencies-image]: https://david-dm.org/jclo/messenger/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/messenger/dev-status.svg?theme=shields.io
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/messenger.svg
[license-image]: https://img.shields.io/npm/l/@mobilabs/messenger.svg

[npm-url]: https://www.npmjs.com/package/@mobilabs/messenger
[release-url]: https://github.com/jclo/messenger/tags
[commit-url]: https://github.com/jclo/messenger/commits/master
[travis-url]: https://app.travis-ci.com/jclo/messenger?branch=main
[coveralls-url]: https://coveralls.io/github/jclo/messenger?branch=master
[dependencies-url]: https://david-dm.org/jclo/messenger
[devdependencies-url]: https://david-dm.org/jclo/messenger?type=dev
[license-url]: http://opensource.org/licenses/MIT
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/messenger
