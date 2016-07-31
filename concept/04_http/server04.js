/*
    http 모듈 사용 : 내장 모듈

    url 서비스 분기
    /html
    /image
    /audio
 */
const http = require('http');
var fs = require('fs');

//10001번 구동
http.createServer((req, res) => {
//    사용자의 요청 uri 에 따라서 읽어오는 파일을 다르게 처리한다
    console.log('사용자 요청 url : ' + req.url);

    var fileName ='';
    var contentType = '';
    if(req.url ==='/html') {
        fileName = 'data/test.html';
        contentType = 'text/html; charset=UTF-8';
    } else if(req.url === '/image') {
        fileName = 'data/test.jpg';
        contentType = 'image/jpeg';
    } else if(req.url === '/audio') {
        fileName = 'data/test.mp3';
        contentType = 'audio/mp3';
    }

    fs.readFile(fileName, (err, data) => {
        res.writeHead(200, {'content-Type' : contentType});
        res.end(data);
    });
}).listen(10001, () => {
    console.log('http://localhost:10001/ 구동중');
});