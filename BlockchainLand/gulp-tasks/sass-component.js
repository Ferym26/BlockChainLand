module.exports = function(gulp, options, plugins) {

	return function (cb) {

		gulp.src(['src/components/**/*.{scss,sass}'], { base: 'src/components/' })
			.pipe(plugins.plumber()) 
			//.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				outputStyle: 'expanded',
				errLogToConsole: true,
				importer: [plugins.globOnce()]
			}))
			.on('error', plugins.notify.onError({
				title: 'SASS error',
				message: '<%= error.message %>'
			}))
			.pipe(plugins.autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'ie 11'
				],
				cascade: false
			}))
			.pipe(plugins.mergeMediaQueries({
				log: false
			}))
			.pipe(plugins.cleanCss({
				compatibility: 'ie11'
			}))
			//.pipe(plugins.sourcemaps.write())
			// .pipe(plugins.rename({
			// 	basename: 'styles',
			// 	suffix: '.min'
			// }))
			/*.pipe(plugins.header(options.banner, {
			 package: options.package
			 }))*/
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest('./local/templates/html/css/'))
			.pipe(plugins.browserSync.reload({stream: true}));

		cb();
	}

};
