const Router = require('koa-router');
const Api = require('./middleware/api-router');
const path = require('path');

module.exports = function (app) {
    const handle = app.getRequestHandler();
    const router = new Router();

    router.get('/', async (ctx,next) => {
        await ctx.renderSSR('/index');
    })

    router.get('/about', async (ctx) => {
        await ctx.renderSSR('/about');
    })

    router.get('/home', async (ctx) => {
        await ctx.renderSSR('/home');
    })
    
    router.use('/api',Api(path.resolve(__dirname,'./api')));

    router.get('*', async (ctx) => {
        await handle(ctx.req, ctx.res)
    })

    return router.routes();
}