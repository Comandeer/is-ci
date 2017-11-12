import isCI from 'is-ci';
import emitExitCode from './emitExitCode.js';

function isCICLI() {
	emitExitCode( isCI );
}

export default isCICLI;
