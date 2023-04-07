#!/bin/bash

npm run build

npx vite build --base /coin-app/

cd dist

git init

git add .

commitMessage=$(git log -1 --pretty=%B)
# 기존의 커밋 메시지를 가져옴

if [[ $commitMessage =~ ^deploy\ :\ v([0-9]+)$ ]]; then
  # 만약 기존의 커밋 메시지가 "deploy : vX" 형식이라면,
  versionNumber="${BASH_REMATCH[1]}"
  # 배포한 버전 정보(vX)를 추출
  newVersionMessage="deploy : v$((versionNumber + 1))"
  # 새로운 커밋 메시지를 만듦
else
  newVersionMessage="deploy : v1"
  # 만약 이전에 배포한 적이 없다면 새로운 커밋 메시지를 만듦
fi

git commit -m "$newVersionMessage"

git push --force "git@github.com:brother1-4752/coin-app.git" master:gh-pages
