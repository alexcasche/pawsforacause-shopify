const gulp = require('gulp');
const print = require('gulp-print').default;
const gutil = require("gulp-util");
const del = require('del');
const vinylPaths = require('vinyl-paths');
const webpack_stream = require('webpack-stream')
const webpack_config = require('./webpack.config.js');

const paths = {
  src: "./src",
  dist: "./dist"
}

gulp.task('clean', () => {
  return gulp.src(`${paths.dist}*`)
    .pipe(print())
    .pipe(vinylPaths(del))
})

// gulp.task('webpack', () => {
//   return webpack_stream(webpack_config)
//     .pipe(gulp.dest(`${sad}`))
// })