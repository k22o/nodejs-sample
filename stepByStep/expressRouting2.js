/**
 express routing
 */

const hostname = "127.0.0.1";
const port = 3030;
 
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.engine('ejs', ejs.renderFile);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/public", express.static(__dirname + "/public"));

// routerにルーティングを外部化
app.use("/next/", require("./routes/next.js"))

// 最初のアクセス時
app.get('/', (req, res) =>{
    res.render('index.ejs',{});
});

app.post('/', (req, res) => {
    console.log('name=' + req.body.name);
    console.log('age=' + req.body.age);
    res.render('index.ejs', {});
});

var server = app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
