FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN yarn install

COPY index.js .

CMD ["yarn", "start"]
