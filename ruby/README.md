# Ruby Codecov Integration

* [Ruby](https://www.ruby-lang.org) 2.7
* [RSpec](https://rspec.info) BDD test framework
* [SimpleCov](https://github.com/colszowka/simplecov) code coverage analysis
  tool

## Requirements

* The correct version of Ruby is installed locally.
* You have a Ruby application with a working RSpec test suite.
* This application is in a [GitHub](https://github.com) repository.
* You have registered an account on [Travis CI](https://travis-ci.org) and
  [Codecov](https://codecov.io) and have added your repository to both.

## How-to

1. Add `codecov` and `simplecov` to your Gemfile:

   ```ruby
   source 'https://rubygems.org'

   # ...

   group :test do
     gem 'codecov', '~> 0.1.17'
     gem 'simplecov', '~> 0.18.5'
   end
   ```
1. Run `bundle install` to install the new gems.
1. Enable SimpleCov **at the top of your `test_helper.rb` or `spec_helper.rb`
   file**. Also configure SimpleCov to use the Codecov formatter when running
   on Travis CI:

   ```ruby
   require 'simplecov'
   SimpleCov.start
   require 'codecov'

   SimpleCov.formatter = if ENV['CI'] == 'true'
     # Upload test coverage data to Codecov in CI environments.
     SimpleCov::Formatter::Codecov
   else
     # Generate an HTML test coverage report locally.
     SimpleCov::Formatter::HTMLFormatter
   end
   ```

   > If SimpleCov starts after your application code is already loaded (via
   > `require`), it won't be able to track your files and their coverage! The
   > `SimpleCov.start` **must** be issued **before any of your application code
   > is required!**
1. *(Optionally)* override the Codecov formatter if your Ruby application is not
   at the root of your repository. This lets Codecov know where your code is:

   ```ruby
   class CustomCodecovFormatter < SimpleCov::Formatter::Codecov
     def shortened_filename(file)
       "ruby/#{super(file)}"
     end
   end
   ```

   If you do this, make sure to use your new custom formatter instead of
   `SimpleCov::Formatter::Codecov` from the previous step:

   ```ruby
   SimpleCov.formatter = if ENV['CI'] == 'true'
     # Upload test coverage data to Codecov in CI environments.
     CustomCodecovFormatter
   else
     # Generate an HTML test coverage report locally.
     SimpleCov::Formatter::HTMLFormatter
   end
   ```
1. Run `rake` (or whatever your test command is) to see the generated HTML
   coverage report in `coverage/index.html`.
1. Create a `.travis.yml` configuration file for Travis CI:

   ```yml
   - language: ruby
     ruby:
       - 2.7.1
     # If your Ruby application is not at the root of your repository, move
     # into the correct sub-directory before the test suite is executed.
     before_install:
       - cd ruby
   ```

   > See [`../travis.yml`](../travis.yml) for an example of a Travis
   > configuration that produces a merged Codecov report with multiple
   > applications in various languages in the same project.
1. Add the `coverage` directory to your `.gitignore` file.
1. Commit and push. See the magic happen on Travis CI and Codecov.
