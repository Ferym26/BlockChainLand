module.exports = function (gulp, options, plugins) {

	return function (cb) {

		if (options.componentsCss == true) {
			gulp.watch([options.path.watch.sass, '!src/assets/css/critical/critical.scss'], gulp.series('sass-styles', 'sass-wysywig', 'sass-component'))
			gulp.watch(['./src/components/**/*.{scss,sass}'], gulp.series('sass-component', 'sass-styles'))
		}
		else {
			gulp.watch([options.path.watch.sass], gulp.series('sass-styles', 'sass-wysywig'))
		}
		
		gulp.watch('./src/**/critical.{scss,sass}', gulp.series('sass-crit', 'pug'))

		global.watch = true;
		gulp.watch([options.path.watch.pug], gulp.series('pug-watch'))
			.on('all', function (event, filepath) {
				global.emittyChangedFile = filepath;
			});

		gulp.watch('./src/**/*.js', gulp.series('scripts')).on("change", plugins.browserSync.reload);
		gulp.watch('./src/assets/js/vendor/**/*.js', gulp.series('scripts-libs')).on('change', plugins.browserSync.reload);

		gulp.watch(options.path.build.html + '*.html').on('change', plugins.browserSync.reload);

		gulp.watch(['./src/images/*.{png,jpg,jpeg,gif,ico,svg,webp}'], gulp.series('imagemin'));
		gulp.watch([options.path.src.sprites + '**/*.svg'], gulp.series('svg'));

		cb();
	};

};
