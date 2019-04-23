module.exports = function(gulp, options, plugins) {

	return function (cb) {
		gulp.src([
				'./src/assets/images/**/*.{png,jpg,jpeg}'
			], {allowEmpty: true})
			.pipe(plugins.plumber())
			.pipe(plugins.newer(options.path.build.images))
			.pipe(plugins.tinypng(options.tinypngKeys.key)) 
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.images))
			.pipe(plugins.browserSync.reload({stream: true}));

		// Копирует gif svg webp
		gulp.src('./src/assets/images/*.{gif,svg,webp}')
			.pipe(gulp.dest(options.path.build.images));

		cb();
	}

};
