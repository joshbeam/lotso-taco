var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sync = require('browser-sync'),
	shell = require('gulp-shell');

gulp.task('sass', function() {
	gulp.src([
			'styles/*.scss'
		])
		.pipe(sass())
		.pipe(gulp.dest('styles'));
});

gulp.task('rebuild', shell.task(['npm run build']));

gulp.task('watch', ['sass'], function() {
	sync({
		server: {
			baseDir: '.'
		}
	})
	gulp.watch(['styles/*.scss'], ['sass']);
	gulp.watch([
			'./main.js',
			'./components/*.js',
			'./stores/*.js'
		], ['rebuild']);
});

gulp.task('default', ['watch']);