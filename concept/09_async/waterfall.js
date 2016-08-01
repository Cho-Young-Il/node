var async = require('async');

async.waterfall([
    function(callback) {
        console.log('exe func1');
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        console.log('exe func2');
        console.log('arg1 : ' + arg1);
        console.log('arg2 : ' + arg2);
        callback(null, 'three');
    },
    function(arg1, callback) {
        console.log('exe func3');
        console.log('arg3 : ' + arg3);
        callback(null, 'done');
    }
], function(err, result) {
    if(err) { throw err; }
    console.log('result : ' + result);
});
