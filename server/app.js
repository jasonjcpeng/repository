const Koa = require('koa');
const next = require('next');

const renderSSR = require('./middleware/render-ssr');
const Router = require('./router');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


app.prepare().then(() => {
  const server = new Koa();

  server.use(renderSSR(app))
    .use(Router(app))
    .listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    });

})
