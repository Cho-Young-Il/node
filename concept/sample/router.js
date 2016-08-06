function route (handler, pathname, res, req) {
    console.log('About to route a request for ' + pathname);
    if(typeof handler[pathname] === 'function') {
        handler[pathname](res, req);
    } else {
        console.log('No request handler found for ' + pathname);
        res.writeHead(404, {'content-type': 'text/plain; charset=utf-8'});
        res.write('404 NOT FOUND');
        res.end();
    }
}

exports.route = route;