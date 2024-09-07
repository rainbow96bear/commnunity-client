FROM node:18-alpine as builder

# ARG로 환경 변수를 받음
ARG REACT_APP_KAKAO_RESTFUL_API_KEY
ARG REACT_APP_KAKAO_REDIRECT_URI
ARG REACT_APP_BASE_PROFILE_IMG

# 환경 변수를 설정
ENV REACT_APP_KAKAO_RESTFUL_API_KEY=$REACT_APP_KAKAO_RESTFUL_API_KEY
ENV REACT_APP_KAKAO_REDIRECT_URI=$REACT_APP_KAKAO_REDIRECT_URI
ENV REACT_APP_BASE_PROFILE_IMG=$REACT_APP_BASE_PROFILE_IMG

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
