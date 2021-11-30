/**
 * Expressの使い方の基本
 */

const hostname = "127.0.0.1";
const port = 3030;
 
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send('hello express');
});

const server = app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

