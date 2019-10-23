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
const devlog = require('./middleware/devLog')
const ApiRouter = require('./middleware/api-router-interface');
const Router = require('./router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


app.prepare().then(() => {
  const config = require('next/config').default().publicRuntimeConfig; // 获取next的公共配置文件
  const server = new Koa();
  server
    .use(mergeConfig(config)) // 合并配置文件到ctx
    .use(mergeUtil()) // 合并util工具
    .use(devlog(config.devLogSwitch)) // 开发环境日志打印
    .use(loger()) // 文件日志中间件
    .use(appLoger()) // 输出接口业务日志
    .use(bodyParser({ jsonLimit: false })) //请求入参modify中间件
    .use(ApiRouter(app))  // ApiRouter路由中间件
    .use(renderSSR(app)) // SSR渲染中间件
    .use(koaConnect(compression())) //gzip压缩
    .use(static('static/'))  // 静态目录
    .use(Router(app))  // 路由中间件
    .listen(config.port, () => {
      console.log(`> Ready on ${config.server}`)
    });
})
