/**
 express ejs
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
app.get('/', (req, res) => {
    let data = {
        items:[
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    }

    res.render('ejs.ejs', data);
});

var server = app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

