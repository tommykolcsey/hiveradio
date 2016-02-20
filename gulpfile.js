var gulp = require('gulp');
	gutil = require('gulp-util');
	concat = require('gulp-concat');
	browserify = require('gulp-browserify');
	connect = require('gulp-connect');
	mustache = require('mustache');
	sass = require('gulp-sass')
	

var jsSources = [
	'components/scripts/slick.min.js',
	'components/scripts/main.js'
];

var sassSources = [
	'components/sass/style.scss' 
];

var htmlSources = [
	'builds/development/*.html',
	'builds/development/pages/*.html'
];

var jsonSources = [
	'builds/development/js/*.json'
];

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
		.pipe(connect.reload())
});

gulp.task('sass', function(){
	gulp.src(sassSources)
		.pipe(sass({
			sass: 'components/sass',
			style: 'expanded'
		}))
		.on('error', sass.logError)
		.pipe(gulp.dest('builds/development/css'))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']); 
	gulp.watch('components/sass/*.scss',['sass']); 
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

gulp.task('default', ['html', 'sass', 'js', 'json', 'watch', 'connect'])