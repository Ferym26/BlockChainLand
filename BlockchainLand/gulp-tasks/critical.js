module.exports = function(gulp, options, plugins) {

	/*   return function () {


	 options.critical.generate({
	 inline: false,
	 base: options.path.build.html,
	 src: 'index.html',
	 css: [options.path.build.html + 'styles.css', options.path.build.css + 'styles.min.css'],
	 width: 1920,
	 height: 1080,
	 dest: options.path.build.css + 'critical.css',
	 minify: true,
	 ignoreOptions: {}
	 });


	 }*/

	return function(){
		gulp.src([options.path.build.html + 'styles.css', options.path.build.css + 'styles.min.css'])
			.pipe(plugins.penthouse({
				out: 'critical.css',
				url: 'http://localhost:2222/etalon.html',
				//width: 1920,
				height: 1024,
				strict: true,
				userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
			}))
			.pipe(plugins.concat('all.js'))
			.pipe(plugins.rename({
				basename: 'critical',
				extname: '.css'
			}))
			.pipe(gulp.dest(options.path.build.css))
	}
};
