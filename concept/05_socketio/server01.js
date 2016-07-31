/*
    서버 + 실시간 통신
    이벤트 방식 적용
    on, emit
 */
const http = require('http');
const fs = require('fs');
const io = require('socket.io');

const server = http.createServer((req, res) => {
    fs.readFile('data/test.html', (err, data) => {
        res.writeHead(200, {'content-Type' : 'text/html; charset=UTF-8'});
        res.end(data);
    });
}).listen(10001, () => {
    console.log('서버 구동중');
});

const socketIO = io.listen(server);
socketIO.sockets.on('connection', (socket) => {
   console.log('소켓 서버 접속함');
});
