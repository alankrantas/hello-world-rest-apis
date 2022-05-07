FROM node:16.15.0-alpine3.15

RUN mkdir -p /usr/src/js_api
WORKDIR /usr/src/js_api

COPY ./ /usr/src/js_api

RUN npm install
RUN npm prune

EXPOSE 3000

CMD node app.js
