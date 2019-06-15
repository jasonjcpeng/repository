const NODE_ENV = process.env.NODE_ENV;
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    // assetPrefix: NODE_ENV==='production' ? 'https://cdn.mydomain.com' : '',
    distDir: 'dist',
})