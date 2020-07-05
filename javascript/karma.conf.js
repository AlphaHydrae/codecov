const puppeteer = require('puppeteer');

const webpackConfig = require('./webpack.config');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = config => {
  config.set({
    browsers: [ 'ChromeHeadless' ],
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: 'lcov' }
      ]
    },
    files: [
      'src/**/*.js'
    ],
    frameworks: [ 'mocha', 'source-map-support' ],
    preprocessors: {
      'src/**/*.js': [ 'webpack', 'coverage' ]
    },
    reporters: [ 'spec', 'coverage' ],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
