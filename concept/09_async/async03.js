/*
    parallel    동시에 코드를 실행
    parallel(tasks, [callback])
 */

const async = require('async');

async.parallel([
    (callback) => {
        console.log('First function start');
        setTimeout(() => {
            console.log('First function end');
            callback(null, 1);
        }, 2000);
    },
    (callback) => {
        console.log('Second function start');
        setTimeout(() => {
            console.log('Second function end');
            callback(null, 2);
        }, 1000);
    }
], (err, result) => {
    console.log('Last function : ', result);
});
