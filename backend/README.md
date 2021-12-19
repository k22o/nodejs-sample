## todo
- エラーハンドリング
- transaction処理
    - https://www.pospome.work/entry/20150308/1425823666


## ディレクトリ構成
- app.js: 実行の大元
- bin/www: インターネットへの接続設定
- middleware: ミドルウェア
    - logger: logger
    - repository: DBにアクセスする
- views: ビュー
- routes: パスの振り分け。所謂、controller
- config: configuration
    - connectionConfig: DBの接続情報
    - loggerConfig: logの設定情報
- test: テスト。今回はjestを利用

## 起動方法
- `port:3031` で起動する
- `npm start` で起動
- `npm test` でテスト実行

## 参考：構築方法
express-generatorで実装。以下のコマンドを順次実行した。
githubからcloneした場合は、通常通り、installのみでよい。

```
$ npm init
$ npm install express --save
$ npm install express-generator -g
$ express --view=ejs
$ npm install

$ npm install mysql --save
$ npm install supertest jest --save-dev
```
