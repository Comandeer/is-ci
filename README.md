# @comandeer/is-ci

![Build Status](https://github.com/Comandeer/is-ci/workflows/CI/badge.svg) [![Dependency Status](https://david-dm.org/Comandeer/is-ci.svg)](https://david-dm.org/Comandeer/is-ci) [![devDependencies Status](https://david-dm.org/Comandeer/is-ci/dev-status.svg)](https://david-dm.org/Comandeer/is-ci?type=dev) [![codecov](https://codecov.io/gh/Comandeer/is-ci/branch/master/graph/badge.svg)](https://codecov.io/gh/Comandeer/is-ci) [![Greenkeeper badge](https://badges.greenkeeper.io/Comandeer/is-ci.svg)](https://greenkeeper.io/)

Simple CLI wrapper around [`is-ci` package](https://www.npmjs.com/package/is-ci).

## Installation

```bash
npm install @comandeer/is-ci [--save-dev]
```

## Usage

Inside npm script:

```json
"commitmsg": "is-ci && commitplease .git/COMMIT_EDITMSG || exit 0"
```

## License

See [LICENSE](./LICENSE) file for details.
