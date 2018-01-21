const gulp = require('gulp')
const less = require('gulp-less')

gulp.task('less', () => {
  gulp.src('./public/pre-less/*less')
    .pipe(less())
    .pipe(gulp.dest('./public/less'))
})
