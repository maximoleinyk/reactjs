import gulp from 'gulp';
import del from 'del';

export default (config) => {
  gulp.task('clean', () => {
    return del(config.paths.dist);
  });
}
