function series(callbacks, last) {
    var results = [];

    function next() {

        var callback = callbacks.shift();
        if(callback) {
            callback(function() {
                results.push(Array.prototype.slice.call(arguments));
                next();
            });
        } else {
            last(results);
        }
    }
    next();
}

function async(arg, callback) {
    var delay = Math.floor(Math.random() * 5 + 1) * 100 //random ms
    console.log('async with \'' + arg + '\', return in ' + delay + 'ms');
    setTimeout(function() { callback(arg * 2); }, delay);
}
function final(results) { console.log('Done', results); }

series([
    function(next) { async(1, next); },
    function(next) { async(2, next); },
    function(next) { async(3, next); },
    function(next) { async(4, next); },
    function(next) { async(5, next); },
    function(next) { async(6, next); }
], final);
