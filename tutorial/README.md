# CONTENTS
node.js + expressの基本的な枠組み
- starter: node.jsの実装。実務上はexpressの利用を推奨
- express: express利用時のノウハウまとめ
- connection-mysql: mysqlの接続方法

# EXPLANATION
## nodejsの特徴
- javascriptを用いたサーバーサイドを実現
- 実行エンジンはv8
    - OSの上に実行エンジンを作り、そこでアプリケーションを動かす
    - Javaでいうところの、サーブレットコンテナ (tomcatなど) に相当
- シングルスレッドで非同期IOを行う
    - 同期もできるけど、処理が遅くなるので、必要なときだけにする
- 同期をとらないので、SNSなどのリアルタイムで多くの情報を処理する場合に効果的
- 長いループ、重いJSONは苦手。

## express
- webアプリケーション開発用のフレームワーク
- 必要なミドルウェアを組み込んで拡張していく
- JavaでいうところのSpringに相当する

## express-generator

# REFERENCE
- JavascriptエンジニアのためのNode.js入門
- 公式reference
- https://mochajs.org/#installation
- https://qiita.com/tarotaro1129/items/fa1129dc54efc74fba60
- udemy: Node.js + Express で作る Webアプリケーション 実践講座
などなど