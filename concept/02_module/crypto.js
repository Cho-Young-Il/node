/*
    crypto : 해시 생성 및 암호화 처리
 */
var crypto = require('crypto');

//해쉬 객체 인스턴스 : 특정 단방향성 해쉬된 문자열
//해쉬 알고리즘 : sha1, md5, sha256, sha512
var sha1 = crypto.createHash('sha1');
var pass = 'my password';

//sha1 객체에 해쉬 대상 문자열 등록
sha1.update(pass);

//문자열 해쉬 처리
var output = sha1.digest('hex'); //hex, binary, base64

//결과 출력
console.log('원본 문자열 : %s', pass);
console.log('해쉬 문자열 : %s', output);
