const NODE_ENV = process.env.NODE_ENV;
const childProcess = require('child_process');
const globalConfig = require('./config/config');
const withSass = require('@zeit/next-sass');
const path = require("path");

module.exports = withSass({
  // assetPrefix: NODE_ENV==='production' ? 'https://cdn.mydomain.com' : '',\
  useFileSystemPublicRoutes: false,
  distDir: 'dist',
  cssModules: true,
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return await new Promise((res, rej) => {
      childProcess.exec('git rev-parse HEAD', function (err, stdout) {
        if (err) {
          rej(err)
        }
        res(stdout);
      });
    })
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  serverRuntimeConfig: {

  },
  publicRuntimeConfig: {
    ...globalConfig
  },
  // useFileSystemPublicRoutes: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    addPostCss(config.module.rules)
    addResolve(config);
    return config
  },
})

const addResolve = function (config) {
  config.resolve = {
    alias: {
      ...config.resolve.alias,
      "@common": path.resolve(__dirname, "pages/_common"),
      "@components": path.resolve(__dirname, "pages/_common/components"),
    },
    extensions: [".js", ".jsx", ".ejs", ".html", ".scss", ".png"],
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "pages/_common/lib")
    ]
  }
}

const addPostCss = function (rules) {
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
