const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

const handler = {};
handler['/'] = requestHandlers.start;
handler['/start'] = requestHandlers.start;
handler['/upload'] = requestHandlers.upload;
handler['/show'] = requestHandlers.show;

server.start(router.route, handler);
