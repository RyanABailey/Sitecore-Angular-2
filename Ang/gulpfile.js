const gulp = require('gulp');
const jshint = require('gulp-jshint');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

// clean the contents of the dest directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// Copy Angular 2 dependencies
gulp.task('copy:libs', ['copy:assets'], function () {
    return gulp.src([
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
    ])
        .pipe(gulp.dest('dist/lib'))
});

// Copy static assets
gulp.task('copy:assets', ['clean'], function () {
    return gulp.src(['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'], { base: './' })
        .pipe(gulp.dest('dist'))
});
   
// TypeScript compile and copy
gulp.task('compile', ['copy:libs'], function () {
    return gulp
      .src(['node_modules/angular2/typings/browser.d.ts','src/app/**/*.ts'])
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulp.dest('dist/app'))
      .pipe(jshint.reporter("default"))
      .pipe(jshint.reporter("fail"));
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);