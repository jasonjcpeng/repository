const env = process.env.NODE_ENV;

console.log(env);

module.exports = {
    // assetPrefix: env==='production' ? 'https://cdn.mydomain.com' : '',
    distDir: 'dist',
}