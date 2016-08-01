var async = require('async');

async.series([
    function(callback) { callback(null, 'resultA'); },
    function(callback) { callback(null, 'resultB'); },
    function(callback) { callback(null, 'resultC'); }
], function(err, results) {
    console.log(results);
});
