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

// 最初のアクセス時
app.get('/', (req, res) =>{
    res.render('index.ejs', {});
});

// パスパラメータの受け取り方
app.get('/next/path/:id', (req, res) =>{
    let id = req.params.id;
    res.render('next.ejs', {
        paramsString: id
    });
});

// クエリパラメータの受け取り方
app.get('/next/query', (req, res) =>{
    let str = 'name=' + req.query.name + ' age=' + req.query.age;
    res.render('next.ejs', {
        paramsString: str
    });
});

app.post('/', (req, res) => {
    console.log('name=' + req.body.name);
    console.log('age=' + req.body.age);
    res.render('index.ejs', {});
});

var server = app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

