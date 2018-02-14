const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./app/js/index.js', './app/scss/main.scss'],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles/style.css'}),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/main.js'
    }
};