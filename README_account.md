# Creww Account


## Setup


* Manual

```shell
$ yarn install
$ yarn dev
```

* Docker

```shell
$ docker-compose up
```

### Development

* Add hosts

```
127.0.0.1 creww.test account.creww.test api.creww.test localhost.creww.me
```

* Add `.env` file

```sh
CREWW_API="https://api.creww.test:3990/graphql"
CREWW_WEBSOCKET_API="wss://api.creww.test:3990/websocket"
```

with SSR

* (non SSL) http://account.creww.test:3401
* (SSL) https://account.creww.test:4401

only client side

* https://account.creww.test:9401

## Testing

```shell
$ yarn test
```

### Linting

* js

```shell
$ yarn lint:js
```

* css

```shell
$ yarn lint:css
```

* js + css

```shell
$ yarn lint
```


## Deployment

* Staging ( https://account-dev.creww.me )

```shell
$ yarn dev:deploy
```

* Production ( https://account.creww.me )

masterブランチをreleaseブランチにマージすると自動で反映
