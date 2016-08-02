import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

export default (config) => {
  gulp.task('html', () => {
    return gulp.src(config.files.indexHtml)
      .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true
      }))
      .pipe(gulp.dest(config.paths.dist))
  });
}
