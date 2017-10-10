Javascript Build System/Test Framework
======================================

## Build System

Right now, the most popular and widely used JavaScript transpiler is [Babel](https://babeljs.io/).  It transforms brand new ES6 and ES7 syntax into ES5, runnable by all modern browsers and node.js versions.  There's almost zero setup to get started with Babel:  Simply adding running `babel-cli` will run your files through the conversion process.

### How I used Babel

* `babel-cli`
  * A development dependancy.
  * Added as the `build` script to the `package.json` file.
  * [Further reading](https://babeljs.io/docs/usage/cli/).
* `babel-runtime` and `babel-plugin-transform-runtime`
  * `babel-plugin-transform-runtime` is a development dependancy.
  * `babel-runtime` is a runtime dependancy.
  * `transform-runtime` added as a plugin under the Babel configuration in `package.json`.
  * [Further reading](https://babeljs.io/docs/plugins/transform-runtime/).
* `babel-preset-env`
  * A development dependancy.
  * Tells Babel which environment to transpile to.
  * Added as a preset under the Babel configuration in `package.json`.
  * [Further reading](https://github.com/babel/babel/tree/master/experimental/babel-preset-env).
* `babel-register`
  * A development dependancy.
  * Automatically transpiles `require()`'d modules without the need of additional setup.
  * Can be used as a runtime dependancy, but transpiling ahead of time is faster.
  * Mainly used in this project to help [facilitate testing](https://github.com/avajs/ava#transpiling-imported-modules).
  * [Further reading](https://babeljs.io/docs/usage/babel-register/).

## Test Framework

I looked at a few different testing frameworks for JavaScript, but I ended up settling on [AVA](https://github.com/avajs/ava).  It's fast, easy to write tests for, easy to configure, and produces great output.  AVA makes writing tests painless, and like any good test framework, eases the burden on developers by reducing the amount of work it takes to write good tests.

### How I used AVA

* Configuration
  * AVA is configured in the `package.json` file.  Specifically, [`babel-register` is used](https://github.com/avajs/ava#transpiling-imported-modules) in order to `import` the files being tested.  Additionally, AVA is configured to inherit the Babel configuration for itself.
  * [Further reading](https://github.com/avajs/ava#configuration).
* Writing tests
  * As configured, AVA will look for tests in the `test` directory.
  * Using the `test` variable will [create a specific test](https://github.com/avajs/ava#testtitle-implementation).  Using the `t` variable will perform [assertions](https://github.com/avajs/ava#assertions) for that test.
  * [Further reading](https://github.com/avajs/ava#creating-tests).
* Running tests
  * AVA is added as the `test` and `test:watch` scripts in `package.json`.
  * Tests can be ran once (by calling `npm run test` or `yarn test`).
  * Tests can also be run continuously (by calling `npm run test:watch` or `yarn test:watch`).
  * [Further reading](https://github.com/avajs/ava#cli).
