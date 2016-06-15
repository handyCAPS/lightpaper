module.exports = {
	entry: './dev/jsx/test.jsx',
	output: {
		path: 'dist/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components|backend|dashboard|dist|templates)/,
				loader: 'babel-loader',
				query: {
					presets: 'es2015',
					cacheDirectory: '.webpack-cache'
				}
			}
		]
	}
};
