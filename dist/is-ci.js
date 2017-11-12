/*! @comandeer/is-ci v0.0.0 | (c) 2017 Comandeer | MIT license (see LICENSE) */'use strict';function _interopDefault(a){return a&&'object'==typeof a&&'default'in a?a['default']:a}var isCI=_interopDefault(require('is-ci'));function emitExitCode(a){var b=!0===a?0:1;process.exit(b)}function isCICLI(){emitExitCode(isCI)}module.exports=isCICLI;
//# sourceMappingURL=is-ci.js.map
