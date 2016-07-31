/*
    표준입출력
    stdin, stdout
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    process.stdout.write('data : ' + data);
});

//ctl + d
process.stdin.on('end', () => {
   process.stdout.write('end');
});
