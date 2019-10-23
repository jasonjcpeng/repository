const Router = require('koa-router');
const Api = require('./api-router');
const path = require('path');

module.exports = function (app) {
  const router = new Router();

  router.use('/api', Api(path.resolve(__dirname, '../api'), app));

  return router.routes();
}