'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// CONSTANTS //

var TYPES = {};

TYPES.int8 = require( 'compute-const-max-int8' );
TYPES.int16 = require( 'compute-const-max-int16' );
TYPES.int32 = require( 'compute-const-max-int32' );
TYPES.uint8 = require( 'compute-const-max-uint8' );
TYPES.uint16 = require( 'compute-const-max-uint16' );
TYPES.uint32 = require( 'compute-const-max-uint32' );


// INTMAX //

/**
* FUNCTION: intmax( [type] )
*	Returns the maximum value of a specified integer type.
*
* @param {String} [type="int32"] - integer type
* @returns {Number} maximum integer value
*/
function intmax( type ) {
	if ( !arguments.length ) {
		return TYPES.int32;
	}
	if ( !isString( type ) ) {
		throw new TypeError( 'intmax()::invalid input argument. Must provide an input string primitive. Value: `' + type + '`.' );
	}
	if ( !TYPES.hasOwnProperty( type ) ) {
		throw new Error( 'intmax()::invalid input argument. Unrecognized integer type. Must be one of the following: \"' + Object.keys( TYPES ).join( '\", \"' ) + '\". Value: `' + type + '`.' );
	}
	return TYPES[ type ];
} // end FUNCTION intmax()


// EXPORTS //

module.exports = intmax;
