/*
    파일의 정보를 확인
 */
const fs = require('fs');

fs.stat('./demo.txt', (err, stats) => {
    if(err) { throw err; }
    console.log(stats);
    console.log('isFile : ' + stats.isFile());
});
