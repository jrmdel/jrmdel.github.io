#!/usr/bin/env sh

# abort on errors
set -e

# build

npm run build

cd dist

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:jrmdel/jrmdel.github.io.git main:gh-pages

cd -