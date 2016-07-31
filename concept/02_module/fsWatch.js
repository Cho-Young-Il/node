/*
    파일의 변경사항을 감시
 */
const fs = require('fs');

fs.watchFile('./example.txt'
    , { persistent : true, interval : 0 }
    , (curr, prev) => {
        console.log('현재 파일의 수정시간 : ' + curr.mtime);
        console.log('이전 파일의 수정시간 : ' + prev.mtime);
    });
