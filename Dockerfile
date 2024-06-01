FROM node:18-alpine

# 앱 디렉토리 생성 및 작업 디렉토리 설정
RUN mkdir -p /ITs-community-client
WORKDIR /ITs-community-client

# 현재 디렉토리의 모든 파일을 앱 디렉토리로 복사
ADD . /ITs-community-client/

# 불필요한 lock 파일 제거
RUN rm yarn.lock || true
RUN rm package-lock.json || true
RUN rm /packages/client/yarn.lock || true
RUN rm /packages/client/package-lock.json || true
RUN rm /packages/shared/yarn.lock || true
RUN rm /packages/shared/package-lock.json || true

# 앱 및 각 패키지에 대한 종속성 설치
RUN yarn

RUN yarn add serve -W

# concurrently 패키지 전역 설치
RUN yarn global add concurrently

# 환경 변수 설정 및 포트 노출
ENV HOST 0.0.0.0
ENV REACT_APP_API_URL=http://its_community_server:8000
EXPOSE 3000

# 앱 실행
CMD yarn client serve
