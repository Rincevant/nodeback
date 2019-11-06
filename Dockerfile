FROM node:10

WORKDIR /app/back

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN apt update

RUN apt install postgresql postgresql-contrib -y