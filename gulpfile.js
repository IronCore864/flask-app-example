var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('watch-less',function(){
		gulp.watch(['src/less/*.less'], ['less']);
});

gulp.task('less', function () {
		return gulp.src('src/less/main.less')
				.pipe(less())
				.pipe(gulp.dest('public/'));
});
