#!/bin/bash

# 當發生錯誤時中止腳本
set -e

# 建立 production 版本的專案
npm run build

# 進入 build 資料夾
cd dist

# 如果有自訂網域的話，取消註解並設定
# echo 'www.example.com' > CNAME

# 初始化 git 並提交
git init
git add -A
git commit -m 'deploy'

# 如果你是部署到 https://<USERNAME>.github.io，使用以下指令
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你是部署到 https://<USERNAME>.github.io/<REPO>，使用以下指令
git push -f https://github.com/Maio-Co/hash-bingo.git master:gh-pages

cd -
