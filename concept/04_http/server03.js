/*
    http 모듈 사용 : 내장 모듈

    여러개의 서버를 동시에 구동
    단, 각각의 서버를 구분하기 위해 포트번호를 다르게 생성

    10001 - html
    10002 - image
    10003 - audio
 */
const http = require('http');
const fs = require('fs');

//10001번 구동
http.createServer((req, res) => {
//    data/test.html 파일을 읽기
    fs.readFile('data/test.html', (err, data) => {
        if(err) { throw err; }
    //    읽은 데이터를 사용자에게 응답
        res.writeHead(200, {'content-Type' : 'text/html; charset=UTF-8'});
        res.end(data);
    });
}).listen(10001, () => {
    console.log('http://localhost:10001/ 구동중');
});

http.createServer((req, res) => {
    fs.readFile('data/test.jpg', (err, data) => {
        if(err) { throw err; }
        res.writeHead(200, {'content-Type' : 'image/jpeg'});
        res.end(data);
    });
}).listen(10002, () => {
    console.log('http://localhost:10002/ 구동중');
});

http.createServer((req, res) => {
    fs.readFile('data/test.mp3', (err, data) => {
        if(err) { throw err; }
        res.writeHead(200, {'content-Type' : 'audio/mp3'});
        res.end(data);
    });
}).listen(10003, () => {
    console.log('http://localhost:10003/ 구동중');
});