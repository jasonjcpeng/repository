const env = process.env.NODE_ENV;
const withSass = require('@zeit/next-sass');
const build_clear = require('./build/clear.build');

build_clear();

module.exports = withSass({
    // assetPrefix: env==='production' ? 'https://cdn.mydomain.com' : '',
    distDir: 'dist',
})