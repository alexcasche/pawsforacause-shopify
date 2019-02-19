const gulp = require('gulp');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const flatten = require('gulp-flatten');
const merge = require('merge-stream');
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
  scripts: ["./src/scripts/**/*.js", "!./src/scripts/index.js"],
  theme: ["./src/**/*", "!./src/{scripts,styles,templates,vue}/**/*"],
  templates: ["./src/templates/**/*"],
}

gulp.task('clean:js', () => {
  return gulp.src([`${paths.assets}/*.js`, `!${paths.assets}/index.js`])
    .pipe(print())
    .pipe(vinylPaths(del))
})
gulp.task('build:js', () => {
  return gulp.src(paths.scripts)
    .pipe(flatten())
    .pipe(babel())
    .pipe(uglify())
    .pipe(changed(paths.assets))
    .pipe(print(filepath => `built: ${filepath}`))
    .pipe(gulp.dest(paths.assets))
})
gulp.task('watch:js', () => {
  gulp.watch(paths.scripts, gulp.series('build:js'))
})

gulp.task('clean:theme', () => {
  return gulp.src(paths.dist, { allowEmpty: true })
    .pipe(print())
    .pipe(vinylPaths(del))
})
gulp.task('copy:theme', () => {
  const theme = gulp.src(paths.theme)
    .pipe(flatten({ includeParents: 1 }))
    .pipe(changed(paths.dist))
    .pipe(print(filepath => `built: ${filepath}`))
    .pipe(gulp.dest(paths.dist))
  const templates = gulp.src(paths.templates)
    .pipe(flatten({ includeParents: 1 }))
    .pipe(changed(paths.dist))
    .pipe(print(filepath => `built: ${filepath}`))
    .pipe(gulp.dest(`${paths.dist}/templates`))
  return merge(theme, templates);
})
gulp.task('watch:theme', () => {
  gulp.watch(paths.theme, gulp.series('copy:theme'))
})


gulp.task('js', gulp.series('clean:js', 'build:js', 'watch:js'))
gulp.task('theme', gulp.series('clean:theme', 'copy:theme', 'watch:theme'))