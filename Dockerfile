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

EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /community-client/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

FROM nginx

EXPOSE 80

# Nginx 설정 파일을 동적으로 선택하기 위해 ENV 사용
ARG NGINX_CONFIG
ENV NGINX_CONFIG=${NGINX_CONFIG}

# 기본적으로 default.conf를 사용하고, ARG에 따라 변경 가능
COPY ./nginx/${NGINX_CONFIG} /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]