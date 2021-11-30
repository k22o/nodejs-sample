const http = require("http");
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const hostname = "127.0.0.1";
const port = 3030;
const indexPage = fs.readFileSync('./views/index.html','utf-8');


/*
req: http.IncomingMessage Object
-> headers, method, statusCode, url などの値を持つ
res: http.serverResponse Object
*/
const server = http.createServer();
server.on("request", (req, res) => {

  if(req.method == 'GET') {
    const getPath = url.parse(req.url,true);
    console.log(getPath);
    console.log('name = ' + getPath.query.name);
    console.log('age = ' + getPath.query.age);
  }
  else if (req.method == 'post') {
    let body = '';

    // on-event: データを受け取ると開始する
    req.on('data', (data)=> {
        body += data;
    })
    
    // データを受け取り終わったら開始する
    req.on('end',() => {
        var params = qs.parse(body);
        console.log('name = ' + params.name);
        console.log('age = ' + params.age);
    });
  } 
  res. writeHead(200, {'Content-Type': 'text/html'});
  res. write(indexPage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});