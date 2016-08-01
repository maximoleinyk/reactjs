const gulp = require('gulp');

require('./build/clean');
require('./build/validate');
require('./build/scripts');
require('./build/sass');
require('./build/html');

gulp.task('default', gulp.series('clean', 'validate', gulp.parallel('scripts', 'styles')));
