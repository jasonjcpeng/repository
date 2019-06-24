const Router = require('koa-router')();
const fs = require('fs');

module.exports = function (dirname) {
    fs.readdirSync(dirname).filter((value) => {
        return value !== 'index.js';//过滤自身
    }).forEach(value => {
        modifyRequest(require(`${dirname}/${value}`));
    });

    return Router.routes();
}

function modifyRequest(reqObj) {
    if (typeof {} !== 'object') {
        console.error('[Api Router] Api file must export a Object');
        return;
    }
    for (let i in reqObj) {
        switch (reqObj[i].method.toUpperCase()) {
            case 'POST':
                Router.post(reqObj[i].url, reqObj[i].do);
                break;
            case 'PUT':
                Router.put(reqObj[i].url, reqObj[i].do);
                break;
            case 'DEL':
                Router.del(reqObj[i].url, reqObj[i].do);
                break;
            case 'ALL':
                Router.all(reqObj[i].url, reqObj[i].do);
                break;
            case 'GET':
            default:
                Router.get(reqObj[i].url, reqObj[i].do);
                break;
        }
    }
}