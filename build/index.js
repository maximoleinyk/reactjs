import fs from 'fs';
import path from 'path';
import gulp from 'gulp';

module.exports = {
  register() {
    fs.readdirSync('./build/tasks/').forEach(function(task) {
      require('./tasks/' + task);
    });

    gulp.task('default', gulp.series('clean', 'validate', gulp.parallel('scripts', 'styles')));
  }
};
