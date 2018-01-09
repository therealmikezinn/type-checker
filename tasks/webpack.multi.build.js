const through2 = require('through2');

const gutil = require('gulp-util');

const webpack = require('webpack');

const async = require('async');

module.exports = function(){
    return through2.obj(function (file, enc, cb) {
        const self = this;

        const webPackConfig = require(file.path);

        const keys = Object.keys(webPackConfig);

        async.eachSeries(keys, function(key, callback) {
            const config = webPackConfig[key];

            webpack(config, (err, stats) => {
                if(err){
                    return callback(err);
                }

                return callback();
            });
        }, function(err) {
            // if any of the file processing produced an error, err would equal that error
            if(err) {
                // One of the iterations produced an error.
                // All processing will now stop.
                self.emit('error', new gutil.PluginError('webpack-multi-build', 'error'));
            } else {
                console.log('All files have been processed successfully');
            }
        });
    });
};