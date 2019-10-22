const logger = require('koa-logger')

module.exports = function () {
  return logger((str, args) => {
    console.log(str);
  });
  // return async function (ctx, next) {
  //   await next();
  //   if (ctx.request.url.match('/api/')) {
  //     if (ctx.response.status > 299) {
  //       ctx.log.errorLog.error(JSON.stringify({ request: ctx.request, response: ctx.response }));
  //     } else {
  //       ctx.log.responseLog.info(JSON.stringify({ request: ctx.request, response: ctx.response }));
  //     }
  //   }
  // }
} 