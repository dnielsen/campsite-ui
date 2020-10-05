# Stage 1
FROM node:12.16.2-alpine AS builder

RUN apk update

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public

RUN yarn build:dev

# Stage 2
FROM node:12.16.2-alpine

WORKDIR /usr/src/app

RUN yarn init -y && \
  yarn add serve && \
  yarn cache clean

COPY --from=builder /usr/src/app/build ./build

EXPOSE 3000

CMD ["yarn", "serve", "-s", "build", "-l", "3000"]
