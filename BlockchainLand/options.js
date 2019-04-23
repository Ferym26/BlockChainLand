module.exports = {
	componentsCss: true,
	path: {
		build: {
			html: './local/templates/html/',
			js: './local/templates/html/js/',
			css: './local/templates/html/css/',
			images: './local/templates/html/images/',
			fonts: './local/templates/html/fonts/'
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
			baseDir: './'
		},
		startPath: "/local/templates/html/index.html",
		// tunnel: true,
		host: 'localhost',
		port: '2500',
		reloadDelay: 100,
		timestamps: false
		// logPrefix: 'frontend'
	},

	package: require('./package.json'),
	banner: ['/*!\n' +
	' * <%= package.name %> v<%= package.version %>\n' + // переменные берутся с package.json
	' * <%= new Date().getFullYear() %> <%= package.author %> (<%= package.homepage %>)\n' +
	' * Based on Bootstrap <%= package.bootstrap %>\n' +
	' */ \n'],

	tinypngKeys: {
		key: 'VqZ7lRcqB1Cksgqdgw7083J60d431MW3',
		// key: 'cnCFvNA9iXZzylFV1NvIMBOK_B-lfQ8j'
	}
};