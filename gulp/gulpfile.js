const { series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


/**
 * tutorial用関数
 */

function firstCall(done) {
    console.log("start!");
    done();
}

function lastCall(done) {
    console.log("finish");
    done();
}


/**
 * Sassの変換と圧縮
 */
// .scss -> .css
function cssCompile() {
    return src('./css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
    .pipe(sourcemaps.write('./map'))
    .pipe(dest("./css"));
}


// .scss -> .min.css
function cssMinify() {
    return src('./css/*.scss')
    .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(dest("./css"));
}

function cssProcess(done) {
    cssCompile();
    cssMinify();
    done();
}

/**
 * javascriptのBabelと圧縮
 */
function jsProcess() {
    return src('js/*.js')
    .pipe(babel())
    .pipe(dest('js/output/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('js/output/'));
}



exports.jsProcess = jsProcess;
exports.cssProcess = cssProcess;

exports.default = series(
    firstCall,
    parallel(cssProcess, jsProcess),
    lastCall
);