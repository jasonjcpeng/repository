const devLogSwitch = true;
const NODE_ENV = process.env.NODE_ENV;
const port = parseInt(process.env.PORT, 10) || 3000;
const devServer = `http://127.0.0.1:${port}`;
const testServer = `http://127.0.0.1:${port}`;
const prodServer = `http://127.0.0.1:${port}`;
const SSRHost = `http://127.0.0.1:${port}`; // 该配置无需改动
const ck = 'c2NyZWVuIG1hcIPC';// 请求加密Key,12位字符以上;
const MSG = {};
const host = (() => {
  switch (NODE_ENV) {
    case 'production':
      return prodServer;
    case 'test':
      return testServer;
    default:
      return devServer;
  }
})();



module.exports = {
  devLogSwitch,
  NODE_ENV,
  port, // 本地服务端口
  SSRHost,
  host,
  ck,
  MSG,
}
