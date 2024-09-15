FROM node:18-alpine as builder

ARG REACT_APP_KAKAO_REDIRECT_URI
ARG REACT_APP_KAKAO_RESTFUL_API_KEY
ARG REACT_APP_BASE_PROFILE_IMG

RUN mkdir /community-client
WORKDIR /community-client
COPY ./package.json ./

RUN yarn install

COPY . .

RUN REACT_APP_KAKAO_REDIRECT_URI=$REACT_APP_KAKAO_REDIRECT_URI \
    REACT_APP_KAKAO_RESTFUL_API_KEY=$REACT_APP_KAKAO_RESTFUL_API_KEY \
    REACT_APP_BASE_PROFILE_IMG=$REACT_APP_BASE_PROFILE_IMG \
    yarn build

FROM nginx

ARG NGINX_CONF=production.conf

EXPOSE 80

COPY ./nginx/${NGINX_CONF} /etc/nginx/conf.d/default.conf
COPY --from=builder /community-client/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]