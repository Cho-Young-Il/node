/*
    uncaughtException
    예상하지 못한 예회를 처리할 수 있다.
 */
process.on('uncaughtException', (err) => {
    console.log('예외 : ' + err);
});

setTimeout(() => {
   console.log('이 코드는 실행됩니다.');
}, 500);

//존재하지 않는 함수 실행
nonExsitentFunc();

console.log('이 코드는 실행되지 않습니다');
