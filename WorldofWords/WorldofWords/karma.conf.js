// Karma configuration
// Generated on Mon Jun 16 2014 15:04:49 GMT+1000 (AUS Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'Scripts/angular/angular.js',
      'Scripts/angular/angular-*.js',
      'Scripts/jquery/jquery-2.1.4.js',
      'Scripts/libs/bootstrap.js',
      'Scripts/app/*.js',
      'Scripts/app/Services/*.js',
      'Scripts/app/Controllers/*.js',
      'Scripts/app/Directives/*.js',
      'TestScripts/*.js'
    ],


    // list of files to exclude
    exclude: [
       'Scripts/*.min.js',
       'Scripts/angular-kendo*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'xml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
