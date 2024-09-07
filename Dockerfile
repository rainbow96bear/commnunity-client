FROM node:18-alpine as builder

RUN mkdir /community-client
WORKDIR /community-client
COPY ./package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

EXPOSE 80

# envsubst 설치 (환경 변수 치환용)
RUN apt-get update && apt-get install -y gettext-base

# Nginx 설정 파일을 템플릿으로 복사
COPY ./nginx/default.conf /etc/nginx/templates/default.conf.template

# 빌드한 프론트엔드 파일을 복사
COPY --from=builder /community-client/build /usr/share/nginx/html

# 컨테이너 실행 시 환경 변수를 Nginx 설정에 반영
CMD envsubst '${BACKEND_URL}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
