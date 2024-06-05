FROM node:18-alpine as builder

RUN mkdir /community-client
WORKDIR /community-client
COPY ./package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /community-client/build /usr/share/nginx/html

