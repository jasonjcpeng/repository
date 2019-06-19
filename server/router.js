module.exports = function ({ app, KoaRouter }) {
    const handle = app.getRequestHandler()

    KoaRouter.get('/', async ctx => {
        await app.render(ctx.req, ctx.res, '/index', ctx.query)
        ctx.respond = false;
    })

    KoaRouter.get('/about', async ctx => {
        await app.render(ctx.req, ctx.res, '/about', ctx.query)
        ctx.respond = false;
    })

    KoaRouter.get('/home', async ctx => {
        await app.render(ctx.req, ctx.res, '/home/index', ctx.query)
        ctx.respond = false;
    })

    KoaRouter.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false;
    })
}