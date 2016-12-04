var gulp = require("gulp");
var haml = require("gulp-ruby-haml");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var babel = require("gulp-babel");
var open = require("gulp-open");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        },
        browser: "google chrome"
    });
});

gulp.task("haml", function() {
    gulp.src("haml/**/*haml")
        .pipe(haml())
        .pipe(gulp.dest("./"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("default", ["server"], function() {
    gulp.watch(["sass/**/*.scss"],["sass"]);
    gulp.watch(["haml/**/*.haml"],["haml"]);
});

