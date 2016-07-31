/*
    socket.io 단독 서버 구성
    클라이언트용 화면(html)은 웹서버를 활용
 */
const io = require('socket.io')();
io.on('connection', (socket) => {
    console.log('Client Request');
});
io.listen(10001);
