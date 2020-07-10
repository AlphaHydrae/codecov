# Codecov

[Codecov.io](https://codecov.io) integration in various languages.

[![Codecov](https://codecov.io/gh/AlphaHydrae/codecov/branch/master/graph/badge.svg)](https://codecov.io/gh/AlphaHydrae/codecov)
[![Build Status](https://travis-ci.org/AlphaHydrae/codecov.svg?branch=master)](https://travis-ci.org/AlphaHydrae/codecov)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

This project contains sample test suites for the following languages and test
libraries:

* [Elixir](./elixir) - ([ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html),
  [ExCoveralls](https://github.com/parroty/excoveralls#readme))
* [JavaScript](./javascript) - ([Karma](https://karma-runner.github.io),
  [Mocha](https://mochajs.org), [Webpack](https://webpack.js.org/))
* [Node.js](./node) - ([Mocha](https://mochajs.org),
  [Chai](https://www.chaijs.com), [nyc](https://github.com/istanbuljs/nyc))
* [PHP](./php) - ([PHPUnit](https://phpunit.de))
* [Ruby](./ruby) - ([RSpec](https://rspec.info),
  [SimpleCov](https://github.com/colszowka/simplecov))

These test suites are run concurrently on [Travis
CI](https://travis-ci.org/github/AlphaHydrae/codecov) using a [build
matrix](https://docs.travis-ci.com/user/build-matrix/). This is configured in
[`.travis.yml`](./.travis.yml).

Coverage statistics for each test suite are uploaded to
[Codecov](https://codecov.io) where they are merged into a single [**combined
coverage report**](https://codecov.io/gh/AlphaHydrae/codecov) for the entire
project.
