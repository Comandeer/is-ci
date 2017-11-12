const chai = require( 'chai' );
const sinon = require( 'sinon' );
const sinonChai = require( 'sinon-chai' );
const emitExitCode = require( '../src/emitExitCode' ).default;
const expect = chai.expect;
let stub;

chai.use( sinonChai );

describe( 'emitExitCode', () => {
	beforeEach( () => {
		stub = sinon.stub( process, 'exit' );
	} );

	afterEach( () => {
		stub.restore();
	} );

	it( 'is a function', () => {
		expect( emitExitCode ).to.be.a( 'function' );
	} );

	it( 'exits process with code 0 if passed argument evaluates to true', () => {
		emitExitCode( true );

		expect( stub ).to.have.been.calledWith( 0 );
	} );

	it( 'exits process with code 1 if passed argument evaluates to false', () => {
		emitExitCode( false );

		expect( stub ).to.have.been.calledWith( 1 );
	} );
} );
