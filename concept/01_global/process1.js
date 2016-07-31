/*
    process객체 : REPL node process
    exit이벤트 리스너를 등록하면
    프로세스가 종료되는 시점을 알 수 있다.
 */
process.on('exit', () => {
    console.log('Good Bye');
});
