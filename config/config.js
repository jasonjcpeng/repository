const devLogSwitch = true;
const NODE_ENV = process.env.NODE_ENV;
const port = parseInt(process.env.PORT, 10) || 3000;
const server = NODE_ENV === 'development' ? `http://localhost:${port}` : `http://127.0.0.1:${port}`;
const testHost = `http://127.0.0.1:${port}`;
const prodHost = `http://localhost:${port}`;
const ck = 'AAAAAAAAAAAAAAAA';// 请求加密Key,12位字符以上;
const MSG = {};

const host = (() => {
  switch (NODE_ENV) {
    case 'production':
      return prodHost;
    case 'test':
      return testHost;
    default:
      return server;
  }
})();


module.exports = {
  devLogSwitch,
  NODE_ENV,
  port, // 本地服务端口
  server, //本地服务host
  testHost,
  prodHost,
  host,
  ck,
  MSG,
}