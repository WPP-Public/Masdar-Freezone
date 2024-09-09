const gulp = require("gulp");

const { series, parallel, dest } = require("gulp");

const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
//const less = require("gulp-less");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const kit = require("gulp-kit");
//const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const del = require("del");
const plumber = require("gulp-plumber");
const notifier = require("gulp-notifier");

notifier.defaults({
  messages: {
    sass: "CSS was successfully compiled!",
    js: "Javascript is ready!",
    kit: "HTML was delivered!",
    favicon: "Favicon was delivered!",
    pages: "Pages was delivered!",
    documents: "Documents was delivered!",
    videos: "Videos was delivered",
    views: "Views was delivered",
    fonts: "Fonts was delivered!",
    css: "CSS was moved successfully!",
  },
  prefix: "=====",
});

const filesPath = {
  sass: "./app/assets/css/**/*.scss",
  js: "./app/assets/js/*.js",
  images: "./app/assets/images/**/*.+(png|jpg|gif|svg)",
  html: "./app/**/*.kit",
  fonts: "./app/assets/fonts/*.*",
  views: "./app/views/**/*.*",
  videos: "./app/assets/videos/**/*.*",
  documents: "./app/assets/documents/**/*.*",
  pages: "./app/**/*.*",
  favicon: "./app/favicon/*.*",
  css: "./app/assets/css/**/*.css",
};




// move font
function movepages() {
  return gulp.src(filesPath.pages) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html"))
  .pipe(notifier.success("pages"));
    done();
}
function movefavicon() {
  return gulp.src(filesPath.favicon) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/favicon"))
    .pipe(notifier.success("favicon"));
    done();
}
function movefonts() {
  return gulp.src(filesPath.fonts) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/assets/fonts"))
  .pipe(notifier.success("fonts"));
    done();
}

function movejs() {
  return gulp.src(filesPath.js) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/assets/js"))
  .pipe(notifier.success("js"));
    done();
}

function movecss() {
  return gulp.src(filesPath.css) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/assets/css"))
  .pipe(notifier.success("css"));
    done();
}

function moveviews() {
  return gulp.src(filesPath.views) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/views"))
  .pipe(notifier.success("views"));
    done();
}

// move images
function moveimages() {
  return gulp.src('app/assets/images/**/**/*.*') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("html/assets/images"))

}
// move videos
function movevideos() {
  return gulp.src(filesPath.videos) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/assets/videos"))
  .pipe(notifier.success("videos"));
    done();
}
// move arabic html
function movearabic() {
  return gulp.src('app/ar/**/*.*') // Gets all files ending with .scss in app/scss and children dirs
         .pipe(dest("./html/ar"))
}

// move English html
function movehtml() {
  return src('app/en/**/*.*') // Gets all files ending with .scss in app/scss and children dirs
         .pipe(dest("./html/en"))
}


// move Docs
function movedoc() {
  return gulp.src(filesPath.documents) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(dest("./html/assets/documents"))
  .pipe(notifier.success("documents"));
    done();
}

// Sass

function sassTask(done) {
  gulp
    .src([filesPath.sass, "!./src/sass/widget.scss"])
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(
      rename(function (path) {
        if (!path.extname.endsWith(".map")) {
          path.basename += ".min";
        }
      })
    )
    .pipe(dest("./html/assets/css"))
    .pipe(notifier.success("sass"));
  done();
}

// Less

/*function lessTask(done) {
  gulp
    .src(filesPath.less)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(rename("./styles.min.css"))
    .pipe(dest("./dist/css"));
  done();
}*/

// Javascript
// alternative src example as an array for order of concatination
//.src["./src/js/project.js","./src/js/alert.js"]
function jsTask(done) {
  gulp
    .src(filesPath.js)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    //.pipe(concat("main.js"))
    //.pipe(uglify())
    //.pipe(
    //  rename({
    //    suffix: ".min",
    //  })
    //)
    .pipe(gulp.dest("./html/assets/js"))
    .pipe(notifier.success("js"));
  done();
}

// Images optimization
function imagesTask(done) {
  gulp.src(filesPath.images).pipe(cache(imagemin())).pipe(dest("./html/assets/images/"));
  done();
}

// HTML kit templating
function kitTask(done) {
  gulp
    .src(filesPath.html)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(kit())
    /*.pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )*/
    .pipe(dest("./html"))
    .pipe(notifier.success("kit"));
  done();
}

// Watch task with BrowserSync
function watch() {
  browserSync.init({
    server: {
      baseDir: "./html",
    },
    browser: "chrome",
  });
  gulp
    .watch(
      [
        filesPath.sass,
        filesPath.html,
        /* filesPath.less, */
        filesPath.js,
        filesPath.css,
        filesPath.images,
        filesPath.fonts,
        filesPath.views,
        filesPath.pages,
        filesPath.favicon,
      ],
      parallel([sassTask, jsTask, imagesTask, kitTask,movefonts,moveviews,movefavicon,movecss, movepages])
    )
    .on("change", browserSync.reload);
}

function clearCache(done) {
  return cache.clearAll(done);
}

// zip project
function zipTask(done) {
  gulp
    .src(["./**/*", "!./node_modules/**/*"])
    .pipe(zip("project.zip"))
    .pipe(dest("./"));
  done();
}

// Clean Dist
function clean(done) {
  del(["./html/**/*"]);
  done();
}

// Gulp individual tasks

exports.sassTask = sassTask;
//exports.lessTask = lessTask;
exports.jsTask = jsTask;
exports.imagesTask = imagesTask;
exports.kitTask = kitTask;
exports.watch = watch;
exports.clearCache = clearCache;
exports.zipTask = zipTask;
exports.clean = clean;

// Gulp serve

exports.build = gulp.series(clean,[sassTask, jsTask, imagesTask, kitTask,movefonts,movevideos,moveviews, movedoc, movefavicon,movejs,movecss,moveimages]);
exports.compile = gulp.parallel([sassTask, jsTask, imagesTask, kitTask]);
// Gulp default command

exports.default = gulp.series(exports.build,watch);
