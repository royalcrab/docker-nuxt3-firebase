# Docker for Nuxt3 + Bootstrap5 + Firebase 

プロジェクトを作成したいフォルダ以下に、下記ファイルを置く。

```
.
├─Dockerfile
├─docker-compose.yml
└─files
   ├─nuxt-create.sh
   ├─firebase.json
   └─nuxt.config.ts
```

## Build

```
$ docker compose build
```

## Create New Nuxt3 Project

```
$ docker compose run --rm create
```

これで、./work 以下にプロジェクトが作成される。 work 以下はだいたい下記のようになっているはず。

```
.
└─work
    ├─.nuxt
    ├─.output
    │  └─public
    ├─node_modules
    ├─.gitignore
    ├─ui-debug.log
    ├─app.vue
    ├─firebase.json
    ├─firestore.indexes.json
    ├─firestore.rules
    ├─nuxt.config.ts
    ├─package.json
    ├─README.md
    ├─storage.rules
    ├─tsconfig.json
    └─yarn.lock
```

## Test Project

```
$ docker compose up dev
```

http://localhsot:3000 を開いて Nuxt3 のページが表示されたらOK

## firebase init

最初に１回だけ必要。

```
$ docker compose up sh -d
$ docker compose exec sh firebase login --no-localhost

...

2. Visit the URL below on any device and follow the instructions to get your code:

https://auth.firebase.tools/login?code_challenge=xxxxxxxxxxxxxxxxxx

3. Paste or enter the authorization code below once you have it:

? Enter authorization code:
```

2 のところにURLが表示されるので、それをブラウザで開く。
そして、google アカウントでログインすると、認証コードが表示されるので、それを 3 の
Enter authorization code: の後ろにコピペする。

## firebase init

```
$ docker compose exec sh firebase init
```

## start firebase emulators

firebase.json のエミュレータの各項目に "host":"0.0.0.0" を追加する。すでに追加されている場合は、しなくていい。

```firebase.json
  "emulators": {
    "auth": {
      "host": "0.0.0.0",
      "port": 9099
    },
    "firestore": {
      "host": "0.0.0.0",
      "port": 8080
    },
    "hosting": {
      "host": "0.0.0.0",
      "port": 5000
    },
    "storage": {
      "host": "0.0.0.0",
      "port": 9199
    },
    "ui": {
      "host": "0.0.0.0",
      "enabled": true
    }
  }
  ```

  この状態で、下記を実行する。

  ```
  $ docker compose up emu
  ```

  ## 何かおかしくなったら

  ```
  $ docker compose down
  $ docker compose up sh -d
  ```

  とやると、たぶん直る（はず）。

