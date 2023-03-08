FROM node:latest

WORKDIR /app

ENV PORT=3000

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node","./test.js"]