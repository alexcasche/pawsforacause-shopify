const gulp = require('gulp');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const flatten = require('gulp-flatten');
const print = require('gulp-print').default;
const gutil = require("gulp-util");
const del = require('del');
const vinylPaths = require('vinyl-paths');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpack_stream = require('webpack-stream')
const webpack_config = require('./webpack.config.js');

const paths = {
  src: "./src",
  dist: "./dist",
  assets: "./src/assets",
  scripts: "./src/scripts"
}

gulp.task('clean', () => {
  return gulp.src(`${paths.dist}*`)
    .pipe(print())
    .pipe(vinylPaths(del))
})

gulp.task('js', () => {
  const jsPath = [`${paths.scripts}/**/*.js`, `!j${paths.scripts}/index.js`]
  return gulp.src(jsPath)
    .pipe(flatten())
    .pipe(babel())
    .pipe(uglify())
    .pipe(changed(`${paths.assets}`))
    .pipe(print(filepath => `built: ${filepath}`))
    .pipe(gulp.dest(`${paths.assets}`))
})

// gulp.task('webpack', () => {
//   return webpack_stream(webpack_config)
//     .pipe(gulp.dest(`${sad}`))
// })