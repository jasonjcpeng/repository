module.exports = function (app) {
    return async function (ctx, next) {
        ctx.renderSSR = async function (url) {
            await app.render(ctx.req, ctx.res, url, ctx.query);
        }
        await next();
    };
} 