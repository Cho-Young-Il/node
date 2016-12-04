const fs = require('fs');

// stream 1
// const infile = fs.createReadStream('./output.txt', { flags: 'r' });
// const outfile = fs.createWriteStream('./output2.txt', { flags: 'w' });

// infile.on('data', (data) => {
// 	console.log('읽은 데이터', data);
// 	outfile.write(data);
// });

// infile.on('end', () => {
// 	console.log('파일 읽기 종료');
// 	outfile.end(() => {
// 		console.log('파일 쓰기 종료');
// 	});
// });


// stream 2
const inname = './output.txt';
const outname = './output2.txt';

fs.exists(outname, (exists) => {
	if (exists) {
		fs.unlink(outname, (err) => {
			if (err) throw err;
			console.log(`기존파일 [${outname}] 삭제함`);
		});
	}

	const infile = fs.createReadStream(inname, { flags: 'r' });
	const outfile = fs.createWriteStream(outname, { flags: 'w' });

	infile.pipe(outfile);
	console.log(`파일 복사 [${inname}] -> [${outname}]`);
});
