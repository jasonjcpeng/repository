const Router = require('koa-router');

module.exports = function (app) {
    const handle = app.getRequestHandler();
    const router = new Router();

    router.get('/', async (ctx) => {
        await ctx.renderSSR('/index');
    })

    router.get('/about', async (ctx) => {
        await ctx.renderSSR('/about');
    })

    router.get('/home', async (ctx) => {
        await ctx.renderSSR('/home');
    })

    router.get('*', async (ctx,next) => {
        await handle(ctx.req, ctx.res)
    })
    return router.routes();
}