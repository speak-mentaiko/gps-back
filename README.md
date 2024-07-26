# bb

ブログサイトっぽいの<br>
[フロントエンド](https://github.com/speak-mentaiko/bf)

---

実行方法

- パッケージのインストール

```shell
pnpm install
```

- envを以下のように修正

```
DATABASE_URL="mysql://ユーザネーム:パスワード@localhost:3306/blog?schema=public"
```

- データベースの作成

```shell
npx prisma migrate dev --name init
```

- サーバーの起動

```shell
pnpm start
```
