/*
    Creating a server
 */
'use strict';

const Hapi = require('hapi');
const Good = require('good'); //logger
const Joi = require('joi'); // input validate

const server = new Hapi.Server();
server.connection({ port: 3000 });

/*
    Adding routes
 */
server.route({
    method: 'GET',
    path: '/',
    handler: (req, rep) => {
        rep('hello world');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (req, rep) => {
        rep('hello, ' + encodeURIComponent(req.params.name) + '!');
    }
});

/*
    Creating static pages and content
    require npm install inert --save
 */
server.register(require('inert'), (e) => {
    if(e) { throw e; }
    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req, rep) => {
            rep.file('./public/hello.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/picture.jpg',
        handler: function (req, rep) {
            rep.file('./public/Tulips.jpg');
        }
    });
});

/*
    Input validation
    Joi Object
 */
server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: (req, rep) => {
        rep('Hello ' + req.params.name + '!');
    },
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }
});

/*
    Logging
    npm install --save good         => logging
    npm install --save good-console => reporter
    npm install --save good-squeeze => filtering
 */
server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (e) => {
    if(e) { throw e; }
    server.start((e) => {
        if(e) { throw e; }
        console.log('Server running at : ', server.info.uri);
    });
});



