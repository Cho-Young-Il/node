/*
    clone : 객체 클론
 */
const clone = require('clone');

var a, b;

a = { foo: { bar: 'baz'} };

b = clone(a);

a.foo.bar = 'foo';

console.log(a);
console.log(b);