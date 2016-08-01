var async = require('async');

async.parallel([
    function(callback) { callback(null, 'resultA'); },
    function(callback) { callback(null, 'resultB'); },
    function(callback) { callback(null, 'resultC'); }
], function(err, results) {
    if(err) { throw err; }
    console.log(results);
});
