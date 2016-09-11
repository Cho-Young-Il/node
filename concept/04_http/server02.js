/*
    http 모듈 사용 : 내장 모듈
 */
// var http = require('http');

// //서버생성
// //createServer(callbackFN) 사용자의 요청처리
// var server = http.createServer((req, res) => {
// //    사용자 브라우져에 응답하기
//     res.writeHead(200, {'content-Type' : 'text/html; charset=UTF-8'});
// //    브라우져로 내용응답하기
//     res.write('<h1>Node 응답 테스트</h1>');
//     res.write('<h1>응답 성공함</h1>');
//     res.end('<h1>끝..</h1>');
// }).listen(10001, () => {
//    console.log('http://localhost:10001/ 구동중');
// });

var sys = require('sys'),
url = require('url'),
http = require('http'),
qs = require('querystring');

var server = http.createServer(

    function (request, response) {

        if (request.method == 'POST') {
                var body = '';
                request.on('data', function (data) {
                    body += data;
                });
                request.on('end',function() {

                    var POST =  qs.parse(body);
                    //console.log(POST);
                    response.writeHead( 200 );
                    response.write( JSON.stringify( POST ) );
                    response.end();
                });
        }
        else if(request.method == 'GET') {

            var url_parts = url.parse(request.url,true);
            //console.log(url_parts);
            console.log(url_parts.query);
            response.writeHead( 200 );
            response.write( JSON.stringify( url_parts.query ) );
            response.end();
        }
    }
);

server.listen(9080);
