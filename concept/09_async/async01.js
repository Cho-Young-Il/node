const fs = require('fs');
const async = require('async');

const files = ['TestFile1.txt', 'TestFile2.txt', 'TestFile3.txt'];

console.log('//////////////forEach/////////////////');
async.forEach(files, (item, index) => {
    console.log(item);
});

console.log('////////////////map////////////////////');
async.map(files, fs.readFile, (err, results) => {
    console.log(results.toString('utf8'));
    console.log(results[0].toString('utf8'));
    console.log(results[1].toString('utf8'));
    console.log(results[2].toString('utf8'));
});

//async.map(files, fs.stat, (err, results) => {
//    console.log(results);
//});