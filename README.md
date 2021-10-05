# README

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea7d842a-aa5e-4f6b-97a3-971ab084ae5c/deploy-status)](https://app.netlify.com/sites/v2lrefresh/deploys)

## First run

`docker run -it --rm -v ${pwd}:/code  -p 8080:8080 -p 3001:3001 mrsleeth/v2l-dev yarn install`

This drops a `yarn.lock` file into the file system and installs dependencies into `node_modules`

---

## Subsequent runs

Provided the `node_modules` folder and `yarn.lock` file are present in your working directory, running the following command will create the dev environment:

`docker run -it --rm -v ${pwd}:/code  -p 8080:8080 -p 3001:3001 mrsleeth/v2l-dev`

The compiled output will be available at http://localhost:8080

## New Docker Notes

### Staging Build
docker run --rm -v $(pwd):/code -v v2l-node_modules:/code/node_modules mrsleeth/v2l:node10

### For Dev
docker run --rm -v $(pwd):/code -v v2l-node_modules:/code/node_modules -p 8080:8080 -p 3001:3001 mrsleeth/v2l:node10 dev
