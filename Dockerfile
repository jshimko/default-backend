FROM node:8-alpine

WORKDIR /app

COPY . .

RUN npm i --production

EXPOSE 8080

CMD ["node", "server.js"]
