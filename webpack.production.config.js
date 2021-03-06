var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),


        // 当 React 作为一个 node 模块安装的时候，
        // 我们可以直接指向它，就比如 require('react')
        vendors: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [node_modules_dir],
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader',
                    'css-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;