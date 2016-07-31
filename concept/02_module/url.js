/*
    url : 정보를 분석
 */
var url = require('url');
console.log(url);

var oUrl = url.parse("http://localhost:10001/list.do?id=hong");

console.log(oUrl);
console.log(oUrl.pathname);
console.log(oUrl.query);
