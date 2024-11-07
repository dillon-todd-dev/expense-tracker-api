FROM node:23.1.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]