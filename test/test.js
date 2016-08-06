//forEach
var testArray = [ 'aaa', 'bbb', 'ccc' ];

testArray.forEach((item, idx, array) => {
    array[idx] = item + "TEST";
});

console.log(testArray);


console.log('-----------------------------------------');


//map
var testArray = [ 'aaa', 'bbb', 'ccc', 'ddd' ];

var newArray = testArray.map((item, idx, array) => {
    return item + 'NEW';
});

console.log(testArray);
console.log(newArray);


console.log('-----------------------------------------');

var returnTest = (aaa) => {
    if(aaa) return true;
    else return false;
}

console.log(returnTest(true));
console.log(returnTest(false));

var returnTest = (aaa) => {
    return aaa && true || false;
}

console.log(returnTest(true));
console.log(returnTest(false));


console.log('-----------------------------------------');
//closure
function outer() {
    var x=0;
    return function() { return ++x; }
}

var x=-1;
var f= outer();

console.log(x); // -1
console.log(f()); //1
console.log(f()); //2
console.log(f()); //3

function outer() {
    var x=0;
    return function(){ return ++x; }
}

var x=-1;
outer(); //function(){ return ++x; }

console.log(x); // -1
console.log(outer()()); //1
console.log(outer()()); //1
console.log(outer()()); //1


console.log('-----------------------------------------');


function process(argv) {
    if(argv.indexOf('help')) {
        console.log('this is the help text.');
    }
}

process(['foo', 'bar', 'help']);

console.log('-----------------------------------------');

var arr = ['1', '2', '3'];
console.log(arr.indexOf(3));
console.log(arr.indexOf('3'));

console.log('-----------------------------------------');

var lookup = { 12: { foo: 'b' }, 13: { foo: 'a' }, 14: { foo: 'c' } };
console.log(Object.keys(lookup).indexOf(12) > -1);
console.log(Object.keys(lookup).indexOf('12') > -1);

console.log('-----------------------------------------');

var names = [ 'a', 'b', 'c' ];
names.forEach(function(value) {
    console.log(value);
});

console.log('-----------------------------------------');

var items = [ { id: 1 }, { id: 2}, { id: 3}, { id: 4 }];
items = items.filter(function(item) {
    return (item.id % 2 == 0);
});

console.log(items);

console.log('-----------------------------------------');

var types = ['type/html', 'text/css', 'text/javascript' ];
var string = 'text/javascript; encoding=utf-8';
if(types.some(function(value) {
    return string.indexOf(value) > -1;
    })) {
    console.log('the string contains one of the content types');
}

console.log('-----------------------------------------');

var a = [ 'a', 'b', 'c' ];
var b = [ 1, 2, 3];
console.log(a.concat(['d', 'e', 'f'], b));
console.log(a.join('! '));
console.log(a.slice(1, 3));
console.log(a.reverse());

var c = a.splice(0, 2);
console.log(a, c);

console.log('-----------------------------------------');

var group = { 'Alice': { a: 'b', b: 'c' }, 'Bob': { a: 'd' }};
var people = Object.keys(group);
people.forEach(function(person) {
    var items = Object.keys(group[person]);
    items.forEach(function(item) {
        var value = group[person][item];
        console.log(person + ': ' + item + ' = ' + value);
    });
});

console.log('-----------------------------------------');

var obj = { x: '1', a: '2', b: '3' };
var items = Object.keys(obj);
items.sort();
items.forEach(function(item) {
    console.log(item + ' = ' + obj[item]);
});

console.log('-----------------------------------------');
function smallest(){
    console.log(arguments);
    return Math.min.apply(Math, arguments);
}
console.log( smallest(999, 899, 99999) );

console.log('-----------------------------------------');

var obj = JSON.parse('{"hello": "world", "data": [ 1, 2, 3 ] }');
console.log(obj);
console.log(obj.data);

console.log('-----------------------------------------');

var obj = { hello: 'world', data: [ 1, 2, 3 ] };
console.log(JSON.stringify(obj));