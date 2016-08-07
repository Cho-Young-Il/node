const http = require('http');
const url = require('url');

const start = (route, handler) => {
    const onRequest = (req, res) => {
        let pathname = url.parse(req.url).pathname;
        console.log('Request for' + pathname + ' received.');
        route(handler, pathname, res, req);
    };

    http.createServer(onRequest)
        .listen(8080, () => {
            console.log('server has started on 8080');
        });
};

exports.start = start;
