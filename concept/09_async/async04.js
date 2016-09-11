/**
 * series
 * async.series([task1, task2 ,,,], function(err, results) {
 *      // 마무리 동작
 * });
 */
const async = require('async');
async.series([
    function task1(callback) {
        callback(null, 'result1');
    },
    function task2(callback) {
        callback(null, 'result2');
    },
    function task3(callback) {
        callback(null, 'result3');
    }
], function (err, results) {
    if (err) { throw err; }
    console.log(results);
});


/**
 * waterfall
 */
async.waterfall([
    function task1(callback) {
        callback(null, 'value');
    },
    function task2(arg, callback) {
        callback(null, arg);
    },
    function task3(arg, callback) {
        callback(null, arg);
    }
], function (err, results) {
    console.log(results);
});

/**
 * parallel
 */
async.parallel([
    function(callback) {
        callback(null, 'task1');
    },
    function(callback) {
        callback(null, 'task2');
    },
    function(callback) {
        callback(null, 'task3');
    }
], function (err, results) {
    console.log(results);
});
