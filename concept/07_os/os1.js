/*
    hostname() : 호스트 이름 리턴
    type() : 이름 리턴
    platform() : 플랫폼 리턴
    arch() : 아키텍쳐 리턴
    release() : 버젼 리턴
    uptime() : 실행된 시간 리턴
    loadavg() : 로드 에버리지 정보 배열 리턴
    totalmem() : 총 메모리 리턴
    freemem() : 사용 가능한 메모리 리턴
    cpus() : cpu정보 객체 리턴
    networkInterfaces() : 네트워크 인터페이스의 정보 배열 리턴
 */

const os = require('os');

console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
