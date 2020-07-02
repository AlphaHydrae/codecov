require 'simplecov'
SimpleCov.start

require 'codecov'
SimpleCov.formatter = if ENV['CI'] == 'true'
  SimpleCov::Formatter::Codecov
else
  SimpleCov::Formatter::HTMLFormatter
end

require 'example'
