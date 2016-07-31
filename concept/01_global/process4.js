/*
    argv : 실행 매개변수
    env : 컴퓨터 환경과 관련된 정보
    version : node.js version
    versions : node.js와 종속된 프로그램 버전
    arch : 프로세서의 아키텍쳐
    platform : 플랫폼

    exit([exitCode = 0]) 프로그램 종료
    memoryUsage() 메모리 사용 정보 객체 리턴
    uptime() 현재 프로그램이 실행된 시간
 */

//process.argv
process.argv.forEach((item, index) => {
    console.log(index + ' : ' + typeof(item) + ' : ', item);

//    실행 매개변수에 --exit가 있을 때
    if(item === '--exit') {
    //    다음 실행 매개변수를 얻는다
        var exitTime = Number(process.argv[index + 1]);

    //    일정 시간 후 프로그램을 종료
        setTimeout(() => {
            process.exit();
        }, exitTime);
    }
});

console.log('- process.env : ', process.env);
console.log('- process.version : ', process.version);
console.log('- process.versions : ', process.versions);
console.log('- process.arch : ', process.arch);
console.log('- process.platform : ', process.platform);
console.log('- process.connected : ', process.connected);
console.log('- process.execArgv : ', process.execArgv);
console.log('- process.exitCode : ', process.exitCode);
console.log('- process.mainModule : ', process.mainModule);
console.log('- process.release : ', process.release);
console.log('- process.memoryUsage() : ', process.memoryUsage());
console.log('- process.uptime() : ', process.uptime());
console.log('- process.uptime() : ', process.uptime());
console.log('- process.uptime() : ', process.uptime());
