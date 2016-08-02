const debug = require('debug')('debugWorker.js');

setInterval(() => {
    debug('doing some work');
}, 1000);
