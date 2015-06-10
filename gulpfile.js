var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src([
			'styles/*.scss'
		])
		.pipe(sass())
		.pipe(gulp.dest('styles'));
});

gulp.task('watch', ['sass'], function() {
	gulp.watch(['styles/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);