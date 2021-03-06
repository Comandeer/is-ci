const chai = require( 'chai' );
const { exec } = require( 'child_process' );
const expect = chai.expect;

function assertExitCode( expectedCode, env = {} ) {
	return new Promise( ( resolve ) => {
		const childProcess = exec( 'node bin/is-ci', { env } );

		childProcess.on( 'exit', ( code ) => {
			resolve( code );
		} );
	} ).then( ( code ) => {
		expect( code ).to.equal( expectedCode );
	} );
}

describe( 'is-ci executable', () => {
	it( 'exits with code 1 when not CI env variable is set', () => {
		return assertExitCode( 1 );
	} );

	it( 'exits with code 0 when CI env variable is set', () => {
		return assertExitCode( 0, {
			CI: 1
		} );
	} );
} );
