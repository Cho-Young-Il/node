const fs = require('fs'),
    querystring = require('querystring'),
    formidable = require('formidable');

function start (res, req) {
    console.log('Request handler \'start\' was called');

    fs.readFile('./upload.html', 'utf-8', function(err, data) {
        if(err) { throw err; }
        res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
        res.write(data);
        res.end();
    });
}

function upload (res, req) {
    console.log('Request handler \'upload\' was called');

    var form = new formidable.IncomingForm();
    console.log('about to parse');

    form.parse(req, function(err, fields, files) {
        if(err) { throw err; }
        fs.renameSync(files.upload.path, './tmp/test.png');
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('received image:<br/>');
        res.write('<img src=\'/show\'/>');
        res.end();
    });

}

function show (res, req) {
    console.log('Request handler \'show\' was called');

    fs.readFile('./tmp/test.png', 'binary', function(err, file) {
        if(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.write(err + '\n');
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
