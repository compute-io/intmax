intmax
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns the maximum value of a specified integer type.


## Installation

``` bash
$ npm install compute-intmax
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var intmax = require( 'compute-intmax' );
```

#### intmax( [type] )

Returns the maximum value of a specified `integer` type.

``` javascript
var max = intmax( 'int8' );
// returns 127
```

The following `integer` types are supported:

* 	__int8__: signed 8-bit integer
*	__uint8__: unsigned 8-bit integer
*	__int16__: signed 16-bit integer
*	__uint16__: unsigned 16-bit integer
*	__int32__: signed 32-bit integer
*	__uint32__: unsigned 32-bit integer

If not provided an integer `type`, the function returns the maximum signed 32-bit integer.

``` javascript
intmax() === intmax( 'int32' );
// returns true
```


## Examples

``` javascript
var intmax = require( 'compute-intmax' ),
	max;

// int32 (default):
max = intmax();
// returns 2147483647

// int8:
max = intmax( 'int8' );
// returns 127

// int16:
max = intmax( 'int16' );
// returns 32767

// int32:
max = intmax( 'int32' );
// returns 2147483647

// uint8:
max = intmax( 'uint8' );
// returns 255

// uint16:
max = intmax( 'uint16' );
// returns 65535

// uint32:
max = intmax( 'uint32' );
// returns 4294967295
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-intmax.svg
[npm-url]: https://npmjs.org/package/compute-intmax

[travis-image]: http://img.shields.io/travis/compute-io/intmax/master.svg
[travis-url]: https://travis-ci.org/compute-io/intmax

[coveralls-image]: https://img.shields.io/coveralls/compute-io/intmax/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/intmax?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/intmax.svg
[dependencies-url]: https://david-dm.org/compute-io/intmax

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/intmax.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/intmax

[github-issues-image]: http://img.shields.io/github/issues/compute-io/intmax.svg
[github-issues-url]: https://github.com/compute-io/intmax/issues
