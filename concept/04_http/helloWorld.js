const http = require('http');
const server = http.createServer((req, res) => {

    console.log('Method : ', req.method);
    console.log('url : ', req.url);
    console.log('headers : ', req.headers);

    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('hello world');
    res.end();
}).listen(8080);
