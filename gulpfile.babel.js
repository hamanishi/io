const gulp = require("gulp");
const haml = require("gulp-ruby-haml");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const browser = require("browser-sync");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const open = require("gulp-open");

gulp.task("server", () => {
    browser({
        server: {
            baseDir: "./"
        },
        browser: "google chrome"
    });
});

gulp.task("haml", () => {
    gulp.src("haml/**/*haml")
        .pipe(haml())
        .pipe(gulp.dest("./"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("sass", () => {
    gulp.src("sass/**/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("default", ["server"], () => {
    gulp.watch(["sass/**/*.scss"],["sass"]);
    gulp.watch(["haml/**/*.haml"],["haml"]);
});

