/*
    생성된 모듈을 전역함수 require()를 이용하여 추출
    module.exports.add = add;
    module.exports.sub = sub;
    module.exports.mul = mul;
    module.exports.div = div;
 */

var calc = require("./module1.js");
console.log('add : ' + calc.add(100, 200));
console.log('sub : ' + calc.sub(100, 200));
console.log('mul : ' + calc.mul(100, 200));
console.log('div : ' + calc.div(100, 200));
