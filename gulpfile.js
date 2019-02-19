const gulp = require('gulp');
const exec = require('gulp-exec');
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
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');
const browserSync = require('browser-sync');
const BASE_URL = 'https://pawsforacause.com';
const PREVIEW_QUERY = '?preview_theme_id=44007161954';

const paths = {
  src: "./src",
  dist: "./dist",
  assets: "./src/assets",
  scripts: ["./src/scripts/**/*.js", "!./src/scripts/index.js"],
  theme: ["./src/**/*", "!./src/{scripts,styles,templates,vue}/**/*"],
  templates: ["./src/templates/**/*"],
  webpack: ["./src/scripts/index.js"],
  browserFiles: ["./dist/**/*"]
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
  return gulp.watch(paths.theme, gulp.series('build:js'))
})

gulp.task('clean:webpack', () => {
  return gulp.src(`${paths.assets}/index.js`, { allowEmpty: true })
    .pipe(print())
    .pipe(vinylPaths(del))
})
gulp.task('build:webpack', () => {
  return gulp.src(`${paths.webpack}`)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(`${paths.dist}/assets`))
})
gulp.task('watch:webpack', () => {
  return gulp.watch(paths.webpack, gulp.series('build:webpack'))
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
    .pipe(print(filepath => `copied: ${filepath}`))
    .pipe(gulp.dest(paths.dist))
  const templates = gulp.src(paths.templates)
    .pipe(flatten({ includeParents: 1 }))
    .pipe(changed(`${paths.dist}/templates`))
    .pipe(print(filepath => `copied: ${filepath}`))
    .pipe(gulp.dest(`${paths.dist}/templates`))
  return merge(theme, templates);
})
gulp.task('watch:theme', () => {
  return gulp.watch(paths.theme, gulp.series('copy:theme'))
})

gulp.task('build:themekit', () => {
  return exec('theme deploy -d dist')
})
gulp.task('watch:themekit', () => {
  return exec('theme watch -d dist')
})

gulp.task('browserSync', () => {
  return browserSync.init({
    proxy: `${BASE_URL}${PREVIEW_QUERY}`,
    files: paths.browserFiles,
  })
})

gulp.task('clean', gulp.series('clean:js', 'clean:webpack', 'clean:theme'))
gulp.task('build', gulp.series('build:js', 'build:webpack', 'copy:theme', 'build:themekit'))
gulp.task('watch', gulp.parallel('watch:js', 'watch:webpack', 'watch:theme', 'watch:themekit', 'browserSync'))
gulp.task('dev', gulp.series('clean', 'build', 'watch'))