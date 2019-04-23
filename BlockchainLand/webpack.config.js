module.exports = {
	
	output: {
		filename: 'app.js',
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['env']
			}
		}]
	},
	externals: {
		jquery: 'jQuery'
	}
}