
const Crypto = require('../lib/CryptoJS');

module.exports = function () {
  return async function (ctx, next) {
    await next();
    const config = ctx.config;
    const Cryptor = Crypto(config);
    if (ctx.request.url.match('/api/')) {
      const data = { request: { body: ctx.request.body, pass: ctx.request }, response: { body: ctx.body.cryptodata ? Cryptor.Decrypt(ctx.body.cryptodata) : ctx.body, pass: ctx.response } }
      if (ctx.response.status > 299) {
        ctx.log.errorLog.error(JSON.stringify(data));
      } else {
        ctx.log.responseLog.info(JSON.stringify(data));
      }
    }
  }
} 