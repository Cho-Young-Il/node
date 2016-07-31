/*
    자바의 url 클래스가 하던 일을 쉽게 처리함

    외부모듈을 사용할 경우 모듈을 인스톨 하는 과정이 필요
    npm install 모듈명
    npm install request
 */

var request = require('request');
request("http://www.daum.net", (err, res, body) => {
    if(!err && res.statusCode == 200) {
        console.log(body);
    }
});
