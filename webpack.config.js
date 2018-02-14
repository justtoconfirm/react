const path = require('path');

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};