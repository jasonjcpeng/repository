const Koa = require('koa');
const koaRouter = require('koa-router');
const Router = require('./router');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare()
  .then(() => {
    const server = new Koa();
    const KoaRouter = new koaRouter();
    
    Router({app,KoaRouter});

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(KoaRouter.routes());

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })