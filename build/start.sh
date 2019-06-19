#!/bin/bash

#Step.1 清除旧版dist内容
basepath=$(cd `dirname $0`; pwd)
rm -rf ${basepath}/../dist

#Step.2 检查依赖是否需要更新
packageTmp=${basepath}/../package-tmp.json
package=${basepath}/../package.json

diff -wE $packageTmp $package

if [ $? == 0 ]; then
    echo "package.json same as last time"
else
    echo "package.json different as last time"
    npm i
    npm audit fix
    cp -f ${package} ${packageTmp}
fi

#Step.3 开始打包
npm run build


#Step.4 启动或重启服务
isOnline=$(npx pm2 list | grep "online")
if [[ $isOnline != "" ]]
then
    npm run reload
else
    npm run start
fi

