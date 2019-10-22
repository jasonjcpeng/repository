const Router = require('koa-router')();
const fs = require('fs');
const Crypto = require('../lib/CryptoJS');


module.exports = function (dirname, app) {
  const catchRouterCrypto = (toDo) => {
    const config = app.nextConfig.publicRuntimeConfig;
    const Cryptor = Crypto(config);

    return async function (ctx, next) {
      if (ctx.request.body.CryptoData) {
        ctx.request.body = Cryptor.Decrypt(ctx.request.body.CryptoData);
      }
      toDo(ctx);
      if (typeof ctx.body !== 'object') {
        const errorMsg = '[api-router]ctx.body response must be a Object';
        console.error(errorMsg);
        ctx.status = 500;
        ctx.body = errorMsg;
      } else {
        ctx.body = { CryptoData: Cryptor.Encrypt(ctx.body) };
      }
      ctx.response.body = ctx.body;
    }
  }

  const modifyRequest = function (req, value) {
    if (!(req instanceof Array)) {
      console.error('[Api Router] Api file must export a Array');
      return;
    }
    const rootDir = value.toLowerCase().replace('.js', '');
    req.forEach(element => {
      const url = `/${rootDir}${element.url}`
      switch (element.method.toUpperCase()) {
        case 'POST':
          Router.post(url, catchRouterCrypto(element.do));
          break;
        case 'PUT':
          Router.put(url, catchRouterCrypto(element.do));
          break;
        case 'DEL':
          Router.del(url, catchRouterCrypto(element.do));
          break;
        case 'ALL':
          Router.all(url, catchRouterCrypto(element.do));
          break;
        case 'GET':
        default:
          Router.get(url, catchRouterCrypto(element.do));
          break;
      }
    });
  }

  fs.readdirSync(dirname).filter((value) => {
    return value !== 'index.js';//过滤自身
  }).forEach(value => {
    modifyRequest(require(`${dirname}/${value}`), value);
  });

  return Router.routes();
}
