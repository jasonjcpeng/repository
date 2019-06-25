const NODE_ENV = process.env.NODE_ENV;
const globalConfig = require('./config/config');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    // assetPrefix: NODE_ENV==='production' ? 'https://cdn.mydomain.com' : '',\
    useFileSystemPublicRoutes: false,
    distDir: 'dist',
    serverRuntimeConfig: {

    },
    publicRuntimeConfig: {
        ...globalConfig
    },
    // useFileSystemPublicRoutes: false,
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // console.log(defaultLoaders);
        addPostCss(config.module.rules)
        return config
    },
})

function addPostCss(rules) {
    rules.push({
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader',
                options: { syntax: 'sugarss' }
            }
        ]
    })
}