#!/bin/bash
rm dist/config/config.js
cp dist/config/$ENV_NAME/config.js dist/config/
node app.js