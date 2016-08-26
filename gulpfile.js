/*
gulpfile.js for aceunion-html-package 1.2.0
*/

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var htmlhint     = require("gulp-htmlhint");
var jshint       = require('gulp-jshint');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var stylish      = require('jshint-stylish');


gulp.task('cssdev', function() {
  return gulp.src('project/resources/sass/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'ie 9']
    }))
    .pipe(gulp.dest('project'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('jslint', function() {
  return gulp.src('project/js/setting.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('htmlhint', function() {
  return gulp.src('project/*.html')
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'project',
      index: 'index.html'
    },
    notify: true
  });
});


gulp.task('bs-reload', function() {
  browserSync.reload();
});


gulp.task('watch', function() {
  gulp.watch('project/resources/sass/*.scss', ['cssdev', 'bs-reload']);
  gulp.watch('project/js/setting.js', ['jsdev', 'bs-reload']);
  gulp.watch('project/*.+(jpg|jpeg|png|gif|svg)', ['bs-reload']);
  gulp.watch('project/*.html', ['htmlhint', 'bs-reload']);
});



gulp.task('dev', ['cssdev', 'jslint']);
gulp.task('default', ['browser-sync', 'htmlhint', 'dev', 'watch']);
