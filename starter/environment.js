// os情報の取得
var os = require("os");
console.log(os.platform());

// パスの取得
var path = require("path");
var filePath = process.argv[1];
console.log(filePath);
console.log(path.dirname(filePath));
console.log(__dirname);
console.log(process.cwd());

// 環境変数の取得
for (let key in process.env) {
    console.log(key + ":" + process.env[key]);
}

// コマンドライン入力の取得
// execute, e.g. node environment.js hoge
for (let i = 0; i < process.argv.length; i++) {
    console.log(`${i}: ${process.argv[i]}`);
}

  

