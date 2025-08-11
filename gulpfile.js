const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// function images() {
//     return gulp.src('./src/images/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/images'));
// }

exports.default = gulp.parallel(styles);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
