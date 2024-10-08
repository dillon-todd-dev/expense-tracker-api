FROM node:22.7.0-slim

WORKDIR /app

COPY prisma .

COPY package*.json .

RUN apt-get update -y && apt-get install -y openssl

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:migrate:prod" ]