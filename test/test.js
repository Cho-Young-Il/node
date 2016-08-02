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
