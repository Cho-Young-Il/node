const fs = require('fs');
const querystring = require('querystring');
const formidable = require('formidable');

const start = (res, req) => {
    console.log('Request handler \'start\' was called');
    fs.readFile('./upload.html', 'utf8', (err, data) => {
        if(err) { throw err; }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        res.end();
    });
};

const upload = (res, req) => {
    console.log('Request handler \'upload\' was called');

    let form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, (err, fields, files) => {
        console.log('parsing done');
        fs.renameSync(files.upload.path, './tmp/test.png');
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('received image:<br/>');
        res.write('<img src=\'/show\'');
        res.end();
    });
};

const show = (res, req) => {
    console.log('Request handler \'show\' was called');
    fs.readFile('./tmp/test.png', 'binary', (err, file) => {
        if(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.write(error + '\n');
            res.end();
        } else {
            res.writeHead(200, {'content-type': 'image/png'});
            res.write(file, 'binary');
            res.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
