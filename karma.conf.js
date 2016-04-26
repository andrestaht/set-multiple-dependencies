// Karma configuration
"use strict";

var webpackConfig = require("./webpack.config.js");

// karma watches for entry points so we clear webpack entry point
webpackConfig.entry = {};

/* global module */
module.exports = function(config) {
    config.set({
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],

        // entry point where we require all tests (and sources for code coverage)
        files: [
            "tests/tests.bundle.js"
        ],

        preprocessors: {
            "tests/tests.bundle.js": ["webpack"]
        },

        webpack: webpackConfig,

        // keeps webpack from spamming the console, shows only warnings and errors
        webpackMiddleware: {
            noInfo: true
        },

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],

        // Avoid failure in Windows where building the tests takes a long time
        captureTimeout: 60000,
        browserNoActivityTimeout: 60000
    });
};
