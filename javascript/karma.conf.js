const puppeteer = require('puppeteer');

const webpackConfig = require('./webpack.config');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = config => {
  config.set({
    browsers: [ 'ChromeHeadless' ],
    coverageIstanbulReporter: {
      dir: 'coverage',
      reports: [ 'html', 'lcovonly' ]
    },
    files: [
      'src/**/*.js'
    ],
    frameworks: [ 'mocha', 'source-map-support' ],
    preprocessors: {
      'src/**/*.js': [ 'webpack' ]
    },
    reporters: [ 'spec', 'coverage-istanbul' ],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
