require 'simplecov'
SimpleCov.start

require 'codecov'

class SimpleCov::Formatter::Codecov
  def shortened_filename(file)
    "ruby/#{super(file)}"
  end
end

SimpleCov.formatter = if ENV['CI'] == 'true'
  SimpleCov::Formatter::Codecov
else
  SimpleCov::Formatter::HTMLFormatter
end

require 'example'
