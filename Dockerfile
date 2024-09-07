FROM node:18-alpine as builder

RUN mkdir /community-client
WORKDIR /community-client
COPY ./package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

EXPOSE 80

# Nginx 설정 파일을 직접 복사
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# 빌드한 프론트엔드 파일을 복사
COPY --from=builder /community-client/build /usr/share/nginx/html

# 기본 Nginx 실행 명령어
CMD ["nginx", "-g", "daemon off;"]