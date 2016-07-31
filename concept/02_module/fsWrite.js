/*
    fs : 파일을 읽거나 쓰려고 할때 사용

    파일 읽기
    writeFile(file, data, encoding, callback) : 비동기식 파일 읽기
    writeFileSync(file, data, encoding) : 동기식 파일 읽기
 */

var fs = require('fs');

var msg = '파일에 저장합니다 \r\n';
//비동기 쓰기
fs.writeFile('writeTest1.txt', msg, 'utf8', (err) => {
    if(err) {
        console.log('쓰기중 오류 발생');
        console.log(err);
        throw err;
    } else {
        console.log('파일 쓰기 성공');
    }
});

//동기 쓰기
//fs.writeFileSync('writeTest2.txt', msg, 'utf8');
fs.appendFileSync('writeTest2.txt', msg, 'utf8');
console.log('동기 쓰기 성공');
