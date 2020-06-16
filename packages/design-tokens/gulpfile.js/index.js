const gulp = require('gulp');
const gulpTheo = require('gulp-theo');
const theo = require('theo');
const browserSync = require('browser-sync').create();
const deepMap = require('../formats/deepMap.scss');
const map = require('../formats/map.scss');
const metaJs = require('../formats/meta.js');
const commonJs = require('../formats/common.js');

// Custom formats
theo.registerFormat('deep-map.scss', deepMap);
theo.registerFormat('map.scss', map);
theo.registerFormat('meta.js', metaJs);
theo.registerFormat('common.js', commonJs);

theo.registerTransform('docs', ['color/hex']);
theo.registerTransform('web', ['color/hex']);

// Format sources
const deepMapSources = [{ src: 'tokens/color.yml', prefix: 'color' }];

const scssMapSources = [
  { src: 'tokens/border-radius.yml' },
  { src: 'tokens/border-width.yml' },
  { src: 'tokens/box-shadow.yml' },
  { src: 'tokens/media-query.yml' },
  { src: 'tokens/motion-duration.yml' },
  { src: 'tokens/motion-ease.yml' },
  { src: 'tokens/font-family.yml' },
  { src: 'tokens/font-size.yml' },
  { src: 'tokens/font-weight.yml' },
  { src: 'tokens/line-height.yml' },
  { src: 'tokens/sizing.yml' },
  { src: 'tokens/spacing.yml' },
  { src: 'tokens/z-index.yml' },
];

const indexFormats = ['common.js', 'custom-properties.css', 'meta.js'];

gulp.task('deep-map', done => {
  deepMapSources.map(({ src, ...options }) => {
    gulp
      .src(src)
      .pipe(
        gulpTheo({
          transform: { type: 'web', includeMeta: true },
          format: { type: 'deep-map.scss', options },
        }),
      )
      .on('error', err => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist'));
  });
  done();
});

gulp.task('map', done => {
  scssMapSources.map(({ src }) => {
    gulp
      .src(src)
      .pipe(
        gulpTheo({
          transform: { type: 'web' },
          format: { type: 'map.scss' },
        }),
      )
      .on('error', err => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist'));
  });
  done();
});

gulp.task('index', done => {
  indexFormats.map(type => {
    gulp
      .src('tokens/index.yml')
      .pipe(
        gulpTheo({
          transform: { type: 'web' },
          format: { type },
        }),
      )
      .pipe(gulp.dest('dist'));
  });
  done();
});

gulp.task('docs', () =>
  gulp
    .src('tokens/index.yml')
    .pipe(
      gulpTheo({
        transform: { type: 'docs' },
        format: {
          type: 'html',
          options: { transformPropName: a => a },
        },
      }),
    )
    .pipe(gulp.dest('docs')),
);

gulp.task('serve', () => {
  browserSync.init({ server: { baseDir: 'docs' } });
  gulp.watch('tokens/*.yml', gulp.task('docs')).on('change', browserSync.reload);
});

exports.default = gulp.series('deep-map', 'map', 'index', 'docs');
