const util = require('../lib/util');

module.exports = function () {
  return async function (ctx, next) {
    ctx.util = util;
    await next();
  }
} 