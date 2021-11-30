/**
 * cookieとsession
 */

const hostname = "127.0.0.1";
const port = 3030;

const express = require('express');
// const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.set("view engine", "ejs");

// cookieParser: cookieを扱うミドルウェア
app.use(cookieParser());

// express-session: セッション管理を行うミドルウェア
// session()内で、複数のパラメタを設定する
app.use(session({
    secret: 'sample-secret', // cookieへ保存する際のキー
    resave: true, // サーバー情報をこうしんするかどうか
    saveUninitialized: true, // 初期化されていない新規セッションを保存するかどうか
}));

app.get('/', (req, res) => {
    let cookieCnt = parseInt(req.cookies.cnt || 0);
    res.cookie('cnt', cookieCnt + 1);
    let sessionCnt = parseInt(req.session.cnt || 0);
    req.session.cnt = sessionCnt + 1;
    res.render('cookieAndSession.ejs', {
        cookieCnt: cookieCnt,
        sessionCnt: sessionCnt
    });
});

const server = app.listen(port, hostname, ()=>{
console.log(`Server running at http://${hostname}:${port}/`);
});