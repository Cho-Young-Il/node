/*
    url 모듈
    parse : url문자열을 url 객체로 변환해 리턴
    format : url 객체를 url문자열로 변환후 리턴
    resolve(from, to) : 매개변수를 조합해 완전한 url 문자열을 생성 리턴

    query string
    stringify : 쿼리 객체를 쿼리 문자열로 변환 리턴
    parse : 쿼리 문자열을 쿼리 객체로 변환 리턴
 */
const url = require('url');
const querystring = require('querystring');

var parseObject = url.parse('http://localhost:10001/sss?test=123');
console.log(parseObject);

console.log(querystring.parse(parseObject.query));
console.log(querystring.stringify(querystring.parse(parseObject.query)));