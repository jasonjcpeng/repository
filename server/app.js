const Koa = require('koa');
const next = require('next');
const compression = require('compression');
const koaConnect = require('koa-connect');

const renderSSR = require('./middleware/render-ssr');
const mergeConfig = require('./middleware/merge-config');
const Router = require('./router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const config = require('next/config').default().publicRuntimeConfig;
  const server = new Koa();

  server.use(renderSSR(app))
    .use(koaConnect(compression()))
    .use(mergeConfig(config))
    .use(Router(app))
    .listen(config.port, () => {
      console.log(`> Ready on http://localhost:${config.port}`)
    });

})
