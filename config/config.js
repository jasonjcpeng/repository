const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10)||3000;

module.exports = {
    port, // 本地服务端口
    server:dev?`http://localhost:${port}`:'', //本地服务host
}