const hostname = "127.0.0.1";
const port = 3030;
  
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const app = express();
 
app.engine('ejs', ejs.renderFile);
app.use("/public", express.static(__dirname + "/public"));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'node_user',
    password: 'password',
    database: 'node_sample_db'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
    } else {
        console.log('success');
    }
});

app.get('/', (req, res) => { 

    model = {
        title: "mysql-loading"
    }

    connection.query(
        'SELECT * FROM members',
        (error, result) => {
            model.result = result;
            res.render('index.ejs', model);        
        }
    );
});
 

var server = app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
}) 
 