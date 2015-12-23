FROM node:0.10.38

RUN mkdir /web

WORKDIR /web

RUN npm install nodemon -g
ADD nodemon.json nodemon.json

ADD package.json package.json
RUN npm install

RUN npm install bower -g
ADD bower.json bower.json
RUN bower install --allow-root

RUN npm install gulp -g
ADD gulpfile.js gulpfile.js
ADD gulp gulp
ADD config config
