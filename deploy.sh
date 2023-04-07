#!/bin/bash

npm run build

npx vite build --base /coin-app/

cd dist

git init

git add .

git commit -m "배포 : 깃허브페이지"

git push --force "git@github.com:brother1-4752/coin-app.git" master:gh-pages
