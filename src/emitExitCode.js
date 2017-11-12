function emitExitCode( assertion ) {
	const exitCode = assertion === true ? 0 : 1;

	process.exit( exitCode );
}

export default emitExitCode;
