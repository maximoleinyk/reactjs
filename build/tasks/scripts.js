import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

gulp.task('scripts', () => {
	return browserify('src/js/config.js', {
      entries: ['./src/js/config.js'],
			debug: true,
      paths: ['./src/js', './bower_components/react']
	})
	.transform(babelify.configure({
		presets: ['es2015', 'react'],
		ignore: 'bower_compoenets/'
	}))
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('src'));
});
