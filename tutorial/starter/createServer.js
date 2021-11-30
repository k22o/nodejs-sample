const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3030;
const indexPage = fs.readFileSync('./views/index.html','utf-8');
const nextPage = fs.readFileSync('./views/next.html','utf-8');

/*
server.onで、サーバーの設定を行う
*/
const server = http.createServer();
server.on("request", (req, res) => {

    let contents = '';
    switch(req.url) {
        case '':
        case '/index':
            contents = indexPage;
            break;
        case '/next':
            contents = nextPage;
            break;
        default:
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.end('bad request');
            return;
    }

    res. writeHead(200, {'Content-Type': 'text/html'});
    res. write(contents);
    res. end(); 

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
