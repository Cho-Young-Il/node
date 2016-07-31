const util = require('util');
console.log(util.format('%s의 최신버전은 %d이다', 'node', 6));

console.log(util.isArray([]));
console.log(util.isArray({}));
console.log(util.isRegExp(/정규식/));
console.log(util.isDate(new Date()));
console.log(util.isDate('2011.11.01'));
console.log(util.isError(new Error()));
