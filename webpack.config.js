var path = require('path');

var webpack=require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    //  'source-map' or 'inline-source-map'
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'app/main.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader:  'babel',
                include: path.join(__dirname, 'app'),
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // SASS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader',
                    'css-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'//limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;