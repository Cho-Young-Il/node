/*
    qs.parse(string, [option]);
    qs.stringify(object, [options]);
 */
const qs = require('qs');
const assert = require('assert');

////////////////////////////////////////////////////////////
//parse
var obj = qs.parse('a=c'); // {a: 'c'}
assert.deepEqual(obj, {a: 'c'});

var str = qs.stringify(obj);
assert.equal(str, 'a=c');

//qs depth
var deep = qs.parse('a[b][c][d][e][f][g][h][i]=j', {depth: 1});
assert.deepEqual(deep, { a: { b: { '[c][d][e][f][g][h][i]': 'j' } } });

//param limited
var limited = qs.parse('a=b&c=d', {parameterLimit: 1});
assert.deepEqual(limited, { a: 'b' });

//delimiter
var delimited = qs.parse('a=b; c=d', {delimiter: '; '});
assert.deepEqual(delimited, { a: 'b', c: 'd' });

var withDots = qs.parse('a.b=c', { allowDots: true });
assert.deepEqual(withDots, { a: { b: 'c' } });
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//stringify
assert.equal(qs.stringify({ a: 'b' }), 'a=b');
assert.equal(qs.stringify({ a: { b: 'c' } }), 'a%5Bb%5D=c');

var unencoded = qs.stringify({ a: { b: 'c' } }, { encode: false });
assert.equal(unencoded, 'a[b]=c');

////////////////////////////////////////////////////////////