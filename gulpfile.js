var gulp = require('gulp');
var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");

var b = browserify({
	entries: ["main.js"],
	debug: true,
	plugin: ["watchify"]
}).transform("babelify", {presets: ["es2015", "react"]});

b.on("update", bundle);
gulp.task('default', bundle);

function bundle(){
	return b.bundle()
		.on("error", console.log.bind(console, "error"))
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./"));
}