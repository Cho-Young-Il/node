/*
    fs : 파일을 읽거나 쓰려고 할 때 사용

    파일 읽기
    readFile(file, encoding, callback) : 비동기식 파일읽기
    var result = readFileSync(file, encoding) : 동기식 파일 읽기
 */

var fs = require('fs');

//비동기 읽기
fs.readFile('readTest.txt', 'utf8', (err, data) => {
    console.log('비동기 읽기 콜백함수');
    console.log(data);
});

//동기 읽기
var data = fs.readFileSync('readTest.txt', 'utf8');
console.log('동기 읽기');
console.log(data);
