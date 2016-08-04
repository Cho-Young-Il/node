const http = require('http'),
    url = require('url');

function start (route, handler) {
    function onRequest (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received');
        route(handler, pathname, res, req);
    }

    http.createServer(onRequest)
        .listen(8080, function () {
            console.log('server has started');
        });
}

exports.start = start;