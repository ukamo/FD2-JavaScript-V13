var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }

};
