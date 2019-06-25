module.exports = function (app) {
    return async function (ctx, next) {
        ctx.renderSSR = async function (url) {
            ctx.status = 200;
            await app.render(ctx.req, ctx.res, url, ctx.query);
        }
        await next();
    };
} 