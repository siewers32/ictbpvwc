const {src, dest, series, parallel, watch} = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const origin = 'src';
const destination = 'build';

function html(cb) {
    src(`${origin}/**/*.html`).pipe(dest(destination));
    cb();
}

function css(cb) {
    src(`${origin}/css/**/*.css`).pipe(concat('style.css')).pipe(dest(`${destination}/css`));
    cb();
}

function js(cb) {
    src(`${origin}/js/**/*.js`).pipe(dest(`${destination}/js`));
    cb();
}

async function clean(cb) {
    await del(destination);
    cb();
}

function watcher(cb) {
    watch(`${origin}/**/*.css`).on('change', series(css, browserSync.reload));
    watch(`${origin}/**/*.js`).on('change', series(js, browserSync.reload));
    watch(`${origin}/**/*.html`).on('change', series(html, browserSync.reload));
    cb();
}

function server(cb) {
    browserSync.init({  
        notify: false,
        open: false,
        server: {
            baseDir: destination
        }
    })
    cb();
}


exports.default = series(clean, parallel(html, css, js), server, watcher);