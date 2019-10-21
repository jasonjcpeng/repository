const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  port, // 本地服务端口
  server: dev ? `http://localhost:${port}` : '', //本地服务host
  cryptoKey: 'AAAAAAAAAAAAAAAA', // 请求加密Key,12位字符以上
  MSG: {

  }
}