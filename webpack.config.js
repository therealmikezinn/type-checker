var webpack = require('webpack');
var config = {};

const { join } = require('path');

function generateConfig(name) {
    var uglify = name.indexOf('min') > -1;
    var config = {
        entry: './index.js',
        output: {
            path: __dirname + '/dist/',
            filename: name + '.js',
            sourceMapFilename: name + '.map',
            library: 'type',
            libraryTarget: 'umd'
        },
        node: {
            process: false
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules|bower_components)/,
                    include: join(__dirname, 'index.js'),

                }
            ]
        }
    };

    config.plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ];

    if (uglify) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
        );
    }

    return config;
}

['type-checker', 'type-checker.min'].forEach(function (key) {
    config[key] = generateConfig(key);
});

module.exports = config;

