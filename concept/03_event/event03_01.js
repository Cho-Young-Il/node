var rint = require('./event03');

rint.timer.on('tick', (code) => {
    console.log('이벤트 실행');
});
