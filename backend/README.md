## todo
- テスト
- nodeで、jar的なのってある？
- ロガー
- エラーハンドリング
- transaction処理
    - https://www.pospome.work/entry/20150308/1425823666


## 実装方針
- app.jsが大元
- routesで振り分け
- 振り分け先は、repositoryを呼び出す
- repositoryが、dbをたたく
- commonVariablesに、変数を格納


## 起動方法
- port: で起動する
- `npm start`で起動

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
