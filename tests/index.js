const chai = require( 'chai' );
const isCI = require( '../src/index' ).default;
const expect = chai.expect;

describe( 'isCI', () => {
	it( 'is a function', () => {
		expect( isCI ).to.be.a( 'function' );
	} );
} );
