const env = process.env.NODE_ENV;
const path = require('path');
const rmdir = require('rmdir');

module.exports = function () {
    if (env !== 'production') return;
    rmdir(path.join(__dirname, '../dist'), function (err, dirs, files) {
        console.log(`[${path.join(__dirname, '../dist')}] all files are removed`);
    });
}