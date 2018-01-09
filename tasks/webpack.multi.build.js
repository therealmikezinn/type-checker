const through2 = require('through2');

const gutil = require('gulp-util');

const webpack = require('webpack');

const async = require('async');

module.exports = function(){
    return through2.obj(function (file, enc, cb) {
        const self = this;

        let webpackConfig = require(file.path);

        if (!Array.isArray(webpackConfig)) {
            webpackConfig = Object.keys(webpackConfig).map((configKey) => {
                return webpackConfig[configKey];
            });
        }

        function process(config, callback) {
            webpack(config, (err, stats) => {
                if (err) {
                    return callback(err);
                }

                return callback();
            });
        }

        function handleError(err) {
            if (err) {
                // One of the iterations produced an error.
                // All processing will now stop.
                self.emit('error', new gutil.PluginError('webpack-multi-build', 'error'));
            } else {
                console.log('All files have been processed successfully');
            }
        }

        async.eachSeries(webpackConfig, process, handleError);
    });
};