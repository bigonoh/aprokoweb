const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss')
const fs = require('fs');
let config = require('rc')('mona')
console.log(config);

const srcPath = 'extend';
const destPath = '../src';
const symlinkPath = '.parent';


async function init () {
    if (!fs.existsSync(symlinkPath)) {
        await fs.symlink('../src', symlinkPath, 'dir', (err) => {
          if (err) throw err;
        });
      }
}
function build(){
    return src('extend/**/*.scss')
    .pipe(sass())
    // .pipe(purgecss({
    //     content: [
    //       '.parent/**/*.jsx',
    //       '.parent/**/*.tsx',
    //       '.parent/**/*.ts',
    //       '.parent/**/*.js',
    //       '.monarc'
    //     ]
    //   }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(destPath))
}

async function  watcher(){
    watch(['extend/**/*.scss', `${destPath}/**/*.js`, '.monarc', `${destPath}/**/*.jsx`, `${destPath}/**/*.ts`, `${destPath}/**/*.tsx`, `${destPath}/**/*.html`, 'extend/**/*js', '*.js', 'core/**/*.scss'], build)
    // console.log('Watcher is actively listening for changes in your css files')
}

// html body 

exports.default = series(init,build, watcher)