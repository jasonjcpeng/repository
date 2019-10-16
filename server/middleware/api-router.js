const Router = require('koa-router')();
const fs = require('fs');

module.exports = function (dirname) {
  fs.readdirSync(dirname).filter((value) => {
    return value !== 'index.js';//过滤自身
  }).forEach(value => {
    modifyRequest(require(`${dirname}/${value}`), value);
  });

  return Router.routes();
}

function modifyRequest(req, value) {
  if (!(req instanceof Array)) {
    console.error('[Api Router] Api file must export a Array');
    return;
  }
  const rootDir = value.toLowerCase().replace('.js', '');
  req.forEach(element => {
    const url = `/${rootDir}${element.url}`
    switch (element.method.toUpperCase()) {
      case 'POST':
        Router.post(url, catchRouterDo(element.do));
        break;
      case 'PUT':
        Router.put(url, catchRouterDo(element.do));
        break;
      case 'DEL':
        Router.del(url, catchRouterDo(element.do));
        break;
      case 'ALL':
        Router.all(url, catchRouterDo(element.do));
        break;
      case 'GET':
      default:
        Router.get(url, catchRouterDo(element.do));
        break;
    }
  });
}

const catchRouterDo = (toDo) => {
  return async function (ctx, next) {
    toDo(ctx);
    next();
  }
}