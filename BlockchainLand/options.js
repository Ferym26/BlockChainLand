module.exports = {
	componentsCss: false,
	path: {
		build: {
			html: './app/',
			js: './app/js/',
			css: './app/css/',
			images: './app/images/',
			fonts: './app/fonts/'
		},

		src: {
			pug: './src/pages/**/*.pug',
			styles: [
				'./src/assets/css/'
			],
			js: './src/assets/js/',
			svg: './src/**/*.svg',
			images: './src/**/*.{png,jpg,jpeg,gif,svg,webp}',
			assets: './src/assets/',
			fonts: './src/assets/fonts/**/*',
			sprites: './src/assets/sprites/'
		},

		watch: {
			pug: './src/**/*.pug',
			sass: './src/**/*.{scss,sass}',
			js: './src/**/*.js',
			svg: './src/**/*.svg',
			images: './src/**/*.{png,jpg,jpeg,gif,ico,svg,webp}'
		}
	},

	serverConfig: {
		server: {
			baseDir: './app/'
		},
		startPath: "index.html",
		// tunnel: true,
		host: 'localhost',
		port: '1705',
		reloadDelay: 100,
		timestamps: false
		// logPrefix: 'frontend'
	},

	package: require('./package.json'),

	tinypngKeys: {
		key: 'DCWVGlyYewzP4jGI9aWhETqtoVkFpi1c',
		// key: 'cnCFvNA9iXZzylFV1NvIMBOK_B-lfQ8j'
	}
};