const EventEmitter = require('events');
class CustomEmitter extends EventEmitter {}
const customEmitter = new CustomEmitter();
const fs = require('fs');
const http = require('http');
const options 	= {
    host: 'www.naver.com',
    port: '80',
    path: '/'
};

const resHandler = (res) => {
    let data = '';
    res.on('data', (chunk) => {
            data += chunk;
        })
        .on('end', (err) => {
            if (err) { throw err; }
            customEmitter.emit('htmlMaker', data);
        });
};

const htmlMaker = (data) => {
    fs.writeFile('./naver.html', data, (err) => {
        if (err) { throw err; }
    });
};

customEmitter.on('resHandler', resHandler);
customEmitter.on('htmlMaker', htmlMaker);

http.request(options, (res) => {
    customEmitter.emit('resHandler', res);
}).end();
