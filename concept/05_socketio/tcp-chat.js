var net = require('net')
    , sockets = []; //sockets 방을 만듬

var server = net.createServer((socket) => {
    sockets.push(socket); //방에 넣어줌

    //data를 입력, 전송할때마다 나 자신을 제외하고 데이터 전송
    socket.on('data', (data) => {
        var sockLen = sockets.length;
        for(var i = 0; i < sockLen; i++) {
            if(sockets[i] !== socket) {
                sockets[i].write(socket.remoteAddress + '님의 말 : ' + data);
            }
        }
    }).on('end', () => { //접속 종료했을때 해당 소켓을 배열에서 삭제
        var i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });

}).listen(10001, () => {
    console.log('tcp 채팅 서버가 시작되었습니다.');
});
