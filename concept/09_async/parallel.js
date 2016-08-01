/*
    full parallel
    병렬로 여러 오퍼레이션을 싱행
    모든 어싱크 오퍼레이션을 병렬로 실행
    실행순서 보장없음, 오직 모든 오퍼레이션이 완료되는지만 확인 가능

    여러개의 task를 병렬로 동시에 수행하는 개념
 */

function async(arg, callback) {
    console.log('do something with \'' + arg + '\', return 1 sec later');
    setTimeout(function() {
        callback(arg * 2);
    }, 1000);
}

function final() {
    console.log('Done', results);
}

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

items.forEach(function(item) {
    async(item, function(result) {
        results.push(result);
        if(results.length == items.length) {
            final();
        }
    });
});