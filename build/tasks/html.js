import fs from 'fs';
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-html-replace';

let getStartFileName = (config) => {
		return fs.readdirSync(config.paths.distJs).filter((name) => {
			return name.split('.')[0] === config.mainScriptName;
		})[0];
};

export default (config) => {
	const webpackConfig = require(config.files.webpackConfig);

  gulp.task('html', () => {
		const json = fs.readFileSync(`${config.paths.distJs}/${webpackConfig.manifest.filename}`);
		const startJs = getStartFileName(config);

    return gulp.src(config.files.indexHtml)
			.pipe(replace({
					js: `
						<script>
							window.${webpackConfig.manifest.manifestVariable} = ${json};
						</script>
						<script src="${webpackConfig.output.publicPath}${startJs}"></script>
					`
			}))
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
