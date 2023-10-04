FROM debian:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt update && apt install -y nodejs npm && rm -rf /var/lib/apt/lists/*
RUN npm install -g yarn

WORKDIR /client

COPY package.json /client/
RUN yarn global add @vue/cli
RUN yarn install

COPY . /client/
WORKDIR /client

EXPOSE 8080

CMD ["yarn", "serve"]
