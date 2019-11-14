const log4js = require('log4js');
const path = require("path");
const fs = require("fs");
const basePath = path.resolve(__dirname, "../../logs");

const errorPath = basePath + "/errors/";
const resPath = basePath + "/responses/";

const errorFilename = errorPath + "/error";
const resFilename = resPath + "/response";

const confirmPath = function (pathStr) {
  if (!fs.existsSync(pathStr)) {
    fs.mkdirSync(pathStr);
  }
};

log4js.configure({
  appenders: {
    errorLog: {
      type: "dateFile", //日志类型
      filename: errorFilename, //日志输出位置
      alwaysIncludePattern: true, //是否总是有后缀名
      pattern: "yyyy-MM-dd.log" //后缀，每小时创建一个新的日志文件
    },
    responseLog: {
      type: "dateFile",
      filename: resFilename,
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log"
    }
  },
  categories: {
    errorLog: { appenders: ['errorLog'], level: 'error' },
    responseLog: { appenders: ["responseLog"], level: "info" },
    default: { appenders: ['responseLog', 'errorLog',], level: 'trace' }
  },
  pm2: true,
  disableClustering: true,
  pm2InstanceVar: 'INSTANCE_ID',
});

if (basePath) {
  confirmPath(basePath);
  confirmPath(errorPath);
  confirmPath(resPath);
}

module.exports = function () {
  return async function (ctx, next) {
    log4js.responseLog = log4js.getLogger('responseLog');
    log4js.errorLog = log4js.getLogger('errorLog');
    ctx.log = log4js;
    await next();
  }
} 