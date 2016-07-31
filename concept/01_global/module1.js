/*
    exports : 사용자 모듈 만들때 사용
    1. 만들고자 하는 모듈을 파일로 작성
    2. exports 객체의 속성이나 메서드로 정의
    3. 생성된 모듈을 전역한수 require()를 이용하여 추출
 */
function add(i, j) {
    return i + j;
}

function sub(i, j) {
    return i - j;
}

function mul(i, j) {
    return i * j;
}

function div(i, j) {
    return i / j;
}

//사용자 정의 함수 또는 객체를 모듈에 등록
module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;