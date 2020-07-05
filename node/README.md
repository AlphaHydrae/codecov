# Node.js Codecov Integration

* [Node.js](https://nodejs.org) 14
* [Mocha](https://mochajs.org) test framework
* [Chai](https://www.chaijs.com) BDD/TDD assertion library
* [nyc](https://github.com/istanbuljs/nyc) command-line interface for the
  [Istanbul](https://istanbul.js.org) JavaScript test coverage tool

## Requirements

* The correct version of Node.js is installed locally.
* You have a Node.js application with a working Mocha test suite.
* This application is in a [GitHub](https://github.com) repository.
* You have registered an account on [Travis CI](https://travis-ci.org) and
  [Codecov](https://codecov.io) and have added your repository to both.

## How-to

1. Install codecov and nyc with `npm install --save-dev codecov nyc`.
1. Update the `test` script in your `package.json` file to run Mocha through
   nyc:

   ```json
   {
     "scripts": {
       "test": "nyc mocha spec/**/*.spec.js",
       "...": "..."
     },
     "...": "..."
   }
   ```
1. *(Optionally)* configure nyc with an `.nycrc.yml` file:

   ```yml
   exclude:
     # Do not report coverage on test files.
     - spec
   reporter:
     - html
     - text-summary
   ```
1. Run `npm test` to see the coverage report on the command-line and the
   generated HTML report in `coverage/index.html`.
1. Add another script to generate an LCOV report and upload it to Codecov:

   ```json
   {
     "scripts": {
       "codecov": "nyc report --reporter=text-lcov > coverage.lcov && codecov",
       "...": "..."
     },
     "...": "..."
   }
   ```
1. *(Optionally)* create a `codecov.yml` configuration file if your Node.js
   application is not at the root of your repository. This lets Codecov know
   where you code is (see https://docs.codecov.io/docs/fixing-paths):

   ```yml
   fixes:
     - "::node/"
   ```
1. Create a `.travis.yml` configuration file for Travis CI:

   ```yml
   - language: node_js
     node_js:
       - 14.4.0
     env:
       - NODE_ENV=test
     # If your Node.js application is not at the root of your repository, move
     # into the correct sub-directory before the test suite is executed.
     before_install:
       - cd node
     # Run the `codecov` script after the test suite is run and the coverage
     # data has been generated.
     after_script:
       - npm run codecov
   ```

   > See [`../travis.yml`](../.travis.yml) for an example of a Travis
   > configuration that produces a merged Codecov report with multiple
   > applications in various languages in the same project.
1. Add the `.nyc_output` and `coverage` directories to your `.gitignore` file.
1. Commit and push. See the magic happen on Travis CI and Codecov.
