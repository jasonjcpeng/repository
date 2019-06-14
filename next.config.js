const env = process.env.NODE_ENV;
const withSass = require('@zeit/next-sass');

console.log(env);

module.exports = withSass({
    // assetPrefix: env==='production' ? 'https://cdn.mydomain.com' : '',
    distDir: 'dist',
})