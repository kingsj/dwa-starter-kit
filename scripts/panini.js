var src = require('vinyl-fs').src;
var dest = require('vinyl-fs').dest;
var panini = require("panini");

panini.refresh();

src('src/pages/**/*.html')
  .pipe(panini({
    root: 'src/pages',
    layouts: 'src/layouts/',
    partials: 'src/partials/'
  }))
  .pipe(dest('./app'));
