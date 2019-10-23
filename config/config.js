const env = process.env.NODE_ENV;
const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  devLogSwitch: true,
  NODE_ENV: process.env.NODE_ENV,
  port, // 本地服务端口
  server: env !== 'production' ? `http://localhost:${port}` : '0.0.0.0', //本地服务host
  ck: 'AAAAAAAAAAAAAAAA', // 请求加密Key,12位字符以上
  MSG: {

  }
}