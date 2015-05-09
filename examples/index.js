'use strict';

var intmax = require( './../lib' );

// int32 (default):
console.log( 'int32 (default): %d', intmax() );

// int8:
console.log( 'int8: %d', intmax( 'int8' ) );

// int16:
console.log( 'int16: %d', intmax( 'int16' ) );

// int32:
console.log( 'int32: %d', intmax( 'int32' ) );

// uint8:
console.log( 'uint8: %d', intmax( 'uint8' ) );

// uint16:
console.log( 'uint16: %d', intmax( 'uint16' ) );

// uint32:
console.log( 'uint32: %d', intmax( 'uint32' ) );
