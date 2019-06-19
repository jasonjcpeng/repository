module.exports = function ({ app, KoaRouter }) {
    const handle = app.getRequestHandler()

    KoaRouter.get('/', async (ctx) => {
        await ctx.renderSSR('/index');
    })

    KoaRouter.get('/about', async (ctx) => {
        await ctx.renderSSR('/about');
    })

    KoaRouter.get('/home', async (ctx) => {
        await ctx.renderSSR('/home');
    })

    KoaRouter.get('*', async (ctx) => {
        await handle(ctx.req, ctx.res)
    })
}