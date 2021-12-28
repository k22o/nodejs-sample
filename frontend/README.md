## 起動方法
- `npm start`で起動
- `npm test`でテスト実行


## 参考：構築方法
express-generatorで実装。以下のコマンドを順次実行した。
githubからcloneした場合は、通常通り、installのみでよい。

```
$ npm init
$ npm install express --save
$ npm install express-generator -g
$ express --view=ejs
$ npm install

$ npm install supertest jest --save-dev
$ npm insatall log4js request --save
```
