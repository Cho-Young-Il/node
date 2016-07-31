/*
    request.method : get, post 정보를 뽑아냄
 */
//http, fs 모듈을 로딩
const http = require('http');
const fs = require('fs');

//http 모듈을 이용해서 10001번 포트로 서버 구동
http.createServer((req, res) => {
    console.log('request.method : ' + req.method);
    if(req.method === 'GET') {
        res.writeHead(200, {'content-Type' : 'text/html; charset=UTF-8'});
        res.end('<h1>GET 호출 성공</h1>');
    } else if(req.method === 'POST') {
        req.on('data', (data) => {
            res.writeHead(200, {'content-Type' : 'text/html; charset=UTF-8'});
            res.write('<h1> + data + </h1>');
            res.end('<h1>호출 성공</h1>');
        });
    }
}).listen(10001, () => {
    console.log('http://localhost:10001 구동중');
});
