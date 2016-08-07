/*
    이벤트 강제 발생
    emit(eventname, [arg1], [arg2], [...])
 */

//프로세스 객체에 exit 이벤트 등록
process.on('exit', (code) => {
    console.log('good bye');
});

//이벤트 강제 발생
process.emit('exit');
process.emit('exit');
process.emit('exit');

process.emit('exit');

console.log('프로그램 실행중');