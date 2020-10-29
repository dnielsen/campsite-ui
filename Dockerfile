# Stage 1
#FROM node:12.16.2-alpine AS builder
FROM node:12.16.2

#ENV ENV=dev

#RUN apk update
#RUN apk add --update --no-cache dnsutils
RUN apt update

RUN apt-get install -y dnsutils

RUN dig +short myip.opendns.com @resolver1.opendns.com

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public

#RUN yarn build:${ENV}

# Stage 2
#FROM node:12.16.2-alpine
#
#WORKDIR /usr/src/app
#
#RUN yarn init -y && \
#  yarn add serve && \
#  yarn cache clean

#COPY --from=builder /usr/src/app/build ./build

#EXPOSE 3000
EXPOSE 80

#CMD ["yarn", "serve", "-s", "build", "-l", "3000"]
CMD ["yarn", "start"]
