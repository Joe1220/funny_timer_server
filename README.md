# FUNNY TIMER WEB APP

graphql, typescript를 timer입니다.

- [Client code github 주소](https://github.com/Joe1220/funny_timer.git)

---

## Getting Install

Install it using [yarn](https://yarnpkg.com/lang/en/)

```
yarn
yarn dev
```

open http://localhost:4000/

---

## Skill Stack:

#### 1 ) graphql-yoga 기반

#### 2) Language: Graphql, Typescript, Javascript

#### 3) utils: node-mailer

#### 4) deploy: heroku

## Getting Start

- install

```
yarn
yarn dev
```

- set env

1. root에 .env 파일생성
2. https://blog.eunsatio.io/develop/nodemailer%EC%99%80-gmail%EB%A1%9C-%EB%A9%94%EC%9D%BC-%EB%B0%9C%EC%86%A1%ED%95%98%EA%B8%B0-%E3%85%A1-OAuth2 참조후

```
OAUTH_ACCESS_TOKEN(Access token)
OAUTH_CLIENT_ID(OAuth Client ID)
OAUTH_CLIENT_PASS(OAuth Client secret)
OAUTH_REFRESH_TOKEN(Refresh Token)
OAUTH_USER(원하는 email 주소)
관련 변수 설정

*** PORT는 4000으로 하였습니다. ***
```

## main files:

#### 1) src -> bin -> www.ts [start point],

#### 2) src -> lib -> server.ts [set middlewares and server]

#### 3) src -> lib -> schema.ts [모든 gql, resolver파일 통합]
