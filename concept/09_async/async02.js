/*
    series  차례대로 코드를 실행함
    series(tasks, [callback])
 */
const async = require('async');

async.series([
    (callback) => {
        console.log('First function');
        callback(null, 1);
    },
    (callback) => {
        console.log('Second function');
        callback(null, 2);
    },
    (callback) => {
        console.log('Third function');
        callback(null, 3);
    }
], (err, result) => {
    console.log('Last function: ', result);
});

async.series({
    first: (callback) => {
        console.log('First function');
        callback(null, 1);
    },
    second: (callback) => {
        console.log('Second function');
        callback(null, 2);
    },
    third: (callback) => {
        console.log('Third function');
        callback(null, 3);
    }
}, (err, result) => {
    console.log('Last function: ', result);
});
