const gulp = require('gulp'),
	options = require('./options.js'),
	webpackconfig = require('./webpack.config.js'),
	plugins = require('gulp-load-plugins')();
	

plugins.browserSync = require('browser-sync');
plugins.source = require('vinyl-source-stream');
plugins.paths = require('path');
plugins.del = require('del');
plugins.globOnce = require('node-sass-glob-importer');
plugins.pugIncludeGlob = require('pug-include-glob');
plugins.emitty = require('emitty').setup('src', 'pug', { makeVinylFile: true });
plugins.fs = require('fs'),
plugins.webpack = require('webpack'),
plugins.webpackStream = require('webpack-stream'),
plugins.inlinesource = require('gulp-inline-source');


gulp.task('clean', require('./gulp-tasks/clean')(gulp, options, plugins));
gulp.task('pug', require('./gulp-tasks/pug')(gulp, options, plugins));
gulp.task('pug-watch', require('./gulp-tasks/pug-watch')(gulp, options, plugins));
gulp.task('sass-styles', require('./gulp-tasks/sass-styles')(gulp, options, plugins));
// gulp.task('sass-component', require('./gulp-tasks/sass-component')(gulp, options, plugins));
// gulp.task('sass-wysywig', require('./gulp-tasks/sass-wysywig')(gulp, options, plugins));
gulp.task('sass-crit', require('./gulp-tasks/sass-crit')(gulp, options, plugins));
gulp.task('scripts', require('./gulp-tasks/scripts')(gulp, options, plugins, webpackconfig));
gulp.task('scripts-libs', require('./gulp-tasks/scripts-libs')(gulp, options, plugins));
gulp.task('sync', require('./gulp-tasks/sync')(gulp, options, plugins));
gulp.task('svg', require('./gulp-tasks/svg')(gulp, options, plugins));
gulp.task('svgBg', require('./gulp-tasks/svgBg')(gulp, options, plugins));
gulp.task('imagemin', require('./gulp-tasks/imagemin')(gulp, options, plugins));
gulp.task('critical', require('./gulp-tasks/critical')(gulp, options, plugins));
gulp.task('fonts', require('./gulp-tasks/fonts')(gulp, options, plugins));
gulp.task('favicon', require('./gulp-tasks/favicon')(gulp, options, plugins));
gulp.task('watch', require('./gulp-tasks/watch')(gulp, options, plugins));


// gulp.task('default', gulp.series(gulp.parallel(
// 	'clean',
// 	'pug',
// 	'svg',
// 	'sass-styles',
// 	'sass-wysywig',
// 	'imagemin',
// 	'scripts',
// 	'scripts-libs',
// 	'sync',
// 	'fonts',
// 	'watch'
// )));

gulp.task('default', gulp.series(
	
	// 'clean',
	'sass-styles',
	// 'sass-wysywig',
	// 'sass-crit',
	'scripts',
	'pug',
	'watch',
	'sync',
	
	gulp.parallel(
		// 'svg',
		// 'svgBg',
		'imagemin',
		'fonts',
		'scripts-libs',
		'favicon'
	)
));
