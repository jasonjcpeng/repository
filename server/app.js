const Koa = require('koa');
const next = require('next');
const compression = require('compression');
const koaConnect = require('koa-connect');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');

const renderSSR = require('./middleware/render-ssr');
const mergeConfig = require('./middleware/merge-config');
const mergeUtil = require('./middleware/merge-util');
const loger = require('./middleware/log');
const appLoger = require('./middleware/appLog');
const Router = require('./router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


app.prepare().then(() => {
  const config = require('next/config').default().publicRuntimeConfig; // 获取next的公共配置文件
  const server = new Koa();
  server
    .use(mergeUtil())
    .use(loger())
    .use(appLoger())
    .use(renderSSR(app))
    .use(koaConnect(compression())) //gzip压缩
    .use(mergeConfig(config)) // 合并配置文件到ctx
    .use(static('static/'))  // 静态目录
    .use(bodyParser({ jsonLimit: false }))
    .use(Router(app))  // 启用路由中间件
    .listen(config.port, () => {
      console.log(`> Ready on http://localhost:${config.port}`)
    });

})
