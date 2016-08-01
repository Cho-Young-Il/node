/*
    series
    하나의 오퍼레이션을 순차적으로 실행
    한번에 오직 하나의 어싱크 오퍼레이션만 시작
    순차적으로 어싱크 함수들을 완료
    (결과를 취합해서 맨 마지막 callback에 results배열로 넘긴다.)
 */

//async task
function async(arg, callback) {
    console.log('do something with \'' + arg + '\', return 1 sec later');
    setTimeout(function() {
        callback( arg * 2 );
    }, 1000);
}

//final task
function final() { console.log('Done', results); }

//a simple async series
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
function series(item) {
    if(item) {
        async(item, function(result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final();
    }
}
series(items.shift());