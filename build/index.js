/* global require module */
let gulp = require('gulp'),
    fs = require('fs');

module.exports = {
  register(config) {
    fs.readdirSync('./build/tasks/').forEach((task) => {
      require('./tasks/' + task).default(config);
    });

    gulp.task('verify', gulp.series('karma'));
    gulp.task('build', gulp.parallel('webpack', 'html'));
    // gulp.task('docs', '');

    gulp.task('default', gulp.series('clean', 'verify', 'build'));
  }
};
