const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10)||3000;

module.exports = {
    port,
    server:dev?`http://localhost:${port}`:''
}