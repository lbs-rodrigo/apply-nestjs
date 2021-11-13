FROM node:alpine

RUN mkdir -p /usr/src/node-api
WORKDIR /usr/src/node-api

RUN apk update && apk upgrade
RUN apk add python3 g++ make

COPY . /usr/src/node-api/
RUN npm install

EXPOSE 3000

# start the app
CMD [ "npm","run", "start:dev" ]