FROM node:alpine as builder

WORKDIR /tmp

COPY ./package.json /tmp/package.json

## Install build toolchain, install node deps and compile native add-ons
RUN apk add build-base
RUN apk add alpine-sdk
RUN apk add --no-cache python3 make g++
RUN npm --registry https://registry.npm.taobao.org install

FROM node:alpine as app

WORKDIR /code
RUN mkdir -p /code/src

## Copy built node modules and binaries without including the toolchain
COPY --from=builder /tmp/node_modules /code/node_modules

COPY ./tsconfig.json /code/tsconfig.json
COPY ./copy_files.sh /code/copy_files.sh
COPY ./package.json /code/package.json

EXPOSE 40053

COPY ./src /code/src

CMD ["npm", "run", "start"]