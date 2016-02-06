var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	connect = require('gulp-connect'),
	mustache = require('mustache')
	

var jsSources = [
	'components/scripts/*.js' //Or type each in order in case there are issues
];

var sassSources = [
	'components/sass/style.scss' 
];

var htmlSources = [
	'builds/development/*.html'
];

var jsonSources = [
	'builds/development/js/*.json'
];

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
		.pipe(connect.reload())
});

//gulp.task('compass', function(){
//	gulp.src(sassSources)
//		.pipe(compass({
//			sass: 'components/sass',
//			image: 'builds/development/img',
//			style: 'expanded'
//		}))
//		.on('error', gutil.log)
//		.pipe(gulp.dest('builds/development/css'))
//		.pipe(connect.reload())
//});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss',['compass']); 
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
});

gulp.task('connect', function(){
	connect.server({
		root: 'builds/development/',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload())
});

gulp.task('json', function(){
	gulp.src(jsonSources)
		.pipe(connect.reload())
});

gulp.task('default', ['html', 'css', 'js', 'watch', 'connect'])