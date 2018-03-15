const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/js/index.js', 
        './src/scss/main.scss'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader: 'css-loader', 
                            options: {
                                minimize: true
                            } 
                        },
                        {
                            loader: 'sass-loader'
                        } 
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles/style.css'})
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/main.js'
    }
};