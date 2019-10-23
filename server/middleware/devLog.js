const logger = require('koa-logger')
const dev = process.env.NODE_ENV !== 'production';

module.exports = function (isOn) {
  if (!isOn || !dev) return async function (ctx, next) {
    await next();
  }
  return logger((str, args) => {
    console.log(str);
  });
} 