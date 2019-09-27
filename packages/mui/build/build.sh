#!/bin/bash

echo "------ Build启动 ------"
echo "node: $(node -v)"
echo "npm: v$(npm -v)"

rm -r ./lib
rm -r ./components.json

echo "------ Build: components.json ------"
node ./build/build-json.js

echo "------ Build: umd ------"
npm run build:umd

echo "------ Build: component ------"
npm run build:component

echo "------ Build: success!! ------"