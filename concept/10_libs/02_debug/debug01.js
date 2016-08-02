const debug = require('debug')('http')
    , http = require('http')
    , name = 'My App';

debug('booting %s', name);

http.createServer((req, res) => {
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
}).listen(3000, () => {
    debug('listening');
});

require('./debugWorker');