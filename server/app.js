const Koa = require('koa');
const next = require('next');

const renderSSR = require('./middleware/render-ssr');
const Router = require('./router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const config = require('next/config').default().publicRuntimeConfig;
  const server = new Koa();

  server.use(renderSSR(app))
    .use(Router(app))
    .listen(config.port, () => {
      console.log(`> Ready on http://localhost:${config.port}`)
    });

})
