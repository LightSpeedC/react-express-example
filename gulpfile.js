// gulpfile.js
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');
const uglify     = require('gulp-uglify');
const browserify = require('browserify');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');
//const reactify   = require('reactify');
const literalify = require('literalify');

// トランスパイル
// browserify
gulp.task('browserify', () =>
	browserify('./src/jsx/app.jsx', {debug: true})
		//.transform(reactify)
		.transform(babelify, {presets: ['es2015', 'react']})
		//.transform(babelify, {presets: ['react']})
		//.transform(babelify.configure({
		//	presets: ['es2015', 'react']
		//}))
		//.transform(literalify.configure({
		//	'react': 'window.React',
		//	'react-dom': 'window.ReactDOM',
		//	'react-router': 'window.ReactRouter'
		//}))
		.bundle()
		.pipe(plumber())
		//.on('error', function (err) { console.log('Error : ' + err.message); })
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./public/js/'))
/*
		.on('end', function () {
			gulp.src(['./public/js/bundle.js'])
				.pipe(plumber())
				.pipe(uglify({mangle: false}))
				.pipe(gulp.dest('./public/js/min'))
		})
*/
);

// copy-min-js
gulp.task('copy-min-js', () =>
	gulp.src(['./node_modules/react/dist/*.min.js',
			'./node_modules/react-dom/dist/*.min.js',
			'./node_modules/react-router/umd/*.min.js'])
		.pipe(gulp.dest('./public/js/min')));

// watch 
gulp.task('watch', () =>
	gulp.watch('./src/jsx/*.jsx', ['browserify']));

// default
gulp.task('default', ['browserify', 'watch'], () =>
	// start main app
	setTimeout(require, 10, './app'));
