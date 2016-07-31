//전역 객체
//현재 작업 디렉토리명
console.log('dirname : ' + __dirname);

//현재 작업 파일명
console.log('filename : ' + __filename);

var msg = 'Hello Node.js';
var person = {
    'name' : '홍길동',
    'age' : 24,
    'addr' : '서울특별시 강남구'
};

console.log('$s!!!', msg);
console.log('%j', person);
console.log('age : %d', person.age);
