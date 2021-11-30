# 内容
- expressIntro.js : expressの利用の基本
- expressRouting1.js : express + ejs + routing
- expressRouting2.js : 上記のうち、一部をrouterに外部化
    - routerディレクトリ    
- views : テンプレートを格納する (ルール)
- public : 静的ファイルを格納する (ルール)

# ライブラリのインストール
- express
    - expressは高速で柔軟性の高い、webフレームワーク
    - application,route,request,responseなど
- ejs
    - テンプレートエンジンの1つ。jsで処理したデータからweb面を作成することができる。

以下を実行して作成
-　initによって、package.jsonが作成される (今回は、すべてenterでOK)
- *--save*によって、package.jsonに保存される

```
$npm init
$npm install express --save
$npm install ejs --save
$npm install body-parser --save
$npm install cookie-parser --save
$npm install express-session --save
```

実際は、package.jsonがあるので、以下で十分。

```
$npm install
```

# 注意
- ejsを利用する場合は、.htmlではなく、.ejsとする。
- public下のファイルを読み込むには、以下のミドルウェアの設定が必要です
```
app.use(express.static(__dirname + 'public'));
```

# expressの仕様
- Requestオブジェクト
    - リクエストパラメタの場合：req.params.[プレースホルダ名]
    - リクエストボディの場合：req.body.[変数名]
- Responseオブジェクト
    - res.status(ステータスコード).json(送信するjsonデータ)
- ミドルウェア
    - 任意の処理を行う関数
    - AOP的な側面を有する？？
    - 以下で、ミドルウェアにアクセスできる
        - app.use((res,req,next) => {});
    - 自作のjs等を適用する場合などは、
        - app.use(require("hoge.js"))
    - 特に、エラー処理用の場合は、以下
        - app.use((err,res,req,next) => {});

# EJSの基本
- <%  %> で囲まれた部分がjavascriptとして解釈される
- <%= の場合は、その値を、エスケープ処理ありでhtmlに出力する
- <%- の場合は、その値を、エスケープ処理なしでhtmlに出力する
- includeを使うことでソースコードを外部化できる (-> thymeleafのth:fragment)
- ejs等の読み込みは、viewsディレクトリからの相対パスで読み込むことができる