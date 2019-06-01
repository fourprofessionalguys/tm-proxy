FROM node:10.15.1

RUN mkdir -p /src/app

WORKDIR /src/app/

COPY package.json /src/app

RUN npm install

COPY . /src/app

EXPOSE 3333

CMD ["node", "app.js"]
