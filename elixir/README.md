# Elixir Codecov Integration

* [Elixir](https://elixir-lang.org) 1.10
* [Erlang/OTP](https://erlang.org/doc/) 23
* [ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html) test framework
* [ExCoveralls](https://github.com/parroty/excoveralls#readme) to report test
  coverage statistics

## Requirements

* The correct version of Elixir and Erlang/OTP are installed locally.
* You have an Elixir application with a working test suite. You can generate one
  with `mix new example`.
* This application is in a [GitHub](https://github.com) repository.
* You have registered an account on [Travis CI](https://travis-ci.org) and
  [Codecov](https://codecov.io) and have added your repository to both.

## How-to

1. Add ExCoveralls to your `mix.exs` file:

   ```elixir
   defmodule Example.MixProject do
     use Mix.Project

     def project do
       [
         # Use ExCoveralls for coverage reporting.
         test_coverage: [tool: ExCoveralls],
         deps: deps()
         # ...
       ]
     end

     defp deps do
       [
         # Install ExCoveralls for coverage reporting.
         {:excoveralls, "~> 0.13.0", only: :test}
         # ...
       ]
     end

     # ...
   end
   ```
1. Run `mix deps.get` to install the new dependency.
1. Run `mix coveralls.html` to make sure the test suite runs locally and to
   generate an HTML coverage report in `cover/excoveralls.html`.
1. Create a Travis CI configuration:

   ```yml
   language: elixir
     elixir:
       - 1.10.3
     otp_release:
       - 23.0.2
     env:
       - MIX_ENV=test
     # If your Elixir application is in a sub-directory, move there before the
     # test suite is executed.
     before_install:
       - cd elixir
     # Generate a JSON coverage report with ExCoveralls.
     script:
       - mix do compile --warnings-as-errors, coveralls.json
     # Upload the coverage data to Codecov with the bash uploader.
     after_success:
       - bash <(curl -s https://codecov.io/bash)
   ```

   > See [`../travis.yml`](../.travis.yml) for an example of a Travis
   > configuration that produces a merged Codecov report with multiple
   > applications in various languages in the same project.
1. Add the `cover` directory to your `.gitignore` file. It should already be
   there if your application was generated with `mix new`.
1. Commit and push. See the magic happen on Travis CI and Codecov.
